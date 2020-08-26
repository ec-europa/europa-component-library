#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console,
no-param-reassign, no-restricted-syntax, no-await-in-loop, import/no-dynamic-require */

const fs = require('fs');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const he = require('he');
const yargsInteractive = require('yargs-interactive');
const { HtmlDiffer } = require('html-differ');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
const system = args[1] ? args[1] : 'ec';

const eclVersions = execSync(`npm view @ecl/${system}-component-link versions`)
  .toString()
  .replace(/([\s'[\]|])/g, '')
  .split(',')
  .reverse()
  .slice(0, 15);

const diffOptions = {
  ignoreAttributes: ['href'],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

const htmlDiffer = new HtmlDiffer(diffOptions);
let packages = require(`@ecl-twig/${system}-storybook/.storybook/packages.js`)
  .list;

const domain = 'https://ec.europa.eu';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
const getBase = (element) => {
  [, element] = element.split(`ec-component-`);
  return element;
};

// We build a list of components by their root name.
packages = packages.map((item) => getBase(item));
packages.pop();

// The questions we need an answer for.
const options = {
  interactive: { default: true },
  component: {
    type: 'list',
    choices: packages,
    describe: 'The component you want to diff',
  },
  variant: {
    type: 'input',
    default: '',
    describe: 'The name of the twig variant (what is after the -- Ex: audio) ',
  },
  language: {
    type: 'list',
    describe: 'Choose whether to use the file rendered via js or php',
    default: 'php',
    prompt: 'always',
    choices: ['php', 'js'],
  },
  eclVersion: {
    type: 'list',
    describe: 'The version of the component you want to make a diff against',
    choices: eclVersions,
    prompt: 'always',
    default: eclVersions[0],
  },
  eclSection: {
    type: 'list',
    describe: 'The group the component is associated with in ECL',
    choices: ['components', 'page-structure', 'deprecated'],
  },
  eclSubSection: {
    type: 'list',
    describe: 'Is the component nested into a sub-section?',
    default: 'none',
    prompt: 'always',
    choices: [
      'none',
      'forms',
      'navigation',
      'banners',
      'page-headers',
      'site-headers',
      'footers',
    ],
  },
  eclStory: {
    type: 'input',
    default: 'default',
    prompt: 'always',
    describe:
      'The name of the story in the ECL storybook (what is after the -- Ex: default)',
  },
  confirm: {
    type: 'confirm',
    describe: `Do you confirm the choices you've made?`,
  },
};

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then((result) => {
    (async () => {
      try {
        const {
          component,
          eclStory,
          variant,
          eclSection,
          eclSubSection,
          eclVersion,
          confirm,
          language,
        } = result;
        const extension = language === 'php' ? '.php.html' : '.js.html';
        const getVariant = (element) => {
          if (element.includes('--')) {
            element = element.split('--')[1].replace(extension, '');
          } else {
            element = '';
          }

          return element;
        };

        if (!confirm) {
          console.error('Please run again yarn ecl-diff, then.');
          process.exit(1);
        }
        // We try to use the variant as it comes from the user, if we don't find it
        // we return the available variants in ecl-twig.
        let fileName = '';
        if (variant) {
          fileName = `${component}--${variant}${extension}`;
        } else {
          fileName = component + extension;
        }

        const version = `v${eclVersion}`;
        const twigFullPath =
          language === 'php'
            ? `${systemFolder}/${component}`
            : `${systemFolder}/${component}/js`;

        if (!fs.existsSync(twigFullPath)) {
          console.error(
            `It seems that "${component}" has not been rendered yet, please run yarn check:component ${system} ${component}`
          );
          process.exit(1);
        } else if (!fs.existsSync(`${twigFullPath}/${fileName}`)) {
          let files = fs.readdirSync(twigFullPath);

          files = files.filter((file) => {
            return file.split('.').slice(1).join('.') === extension.slice(1);
          });

          files = files.map((file) => getVariant(file));
          // We might have empty items in the array now.
          files = files.filter((item) => item);

          if (files.length > 0) {
            if (variant !== '') {
              console.error(
                `The "${variant}" variant for the "${component}" component has not been found in ecl-twig, but we've found these alternatives: ${files.join(
                  ', '
                )}`
              );
            } else {
              console.error(
                `You did not select any variant for the "${component}" component, these are the available ones: ${files.join(
                  ', '
                )}`
              );
            }
          } else {
            console.error(
              `Most likely the "${component}" component doesn't have any variant on the twig side and you tried to pass one.`
            );
          }

          process.exit(1);
        }
        // The markup from the html file rendered via php or javascript.
        const eclTwigMarkup = fs
          .readFileSync(`${twigFullPath}/${fileName}`, 'utf-8')
          .toString()
          // Masks, to avoid repeating patterns in the diff (@see htmldiffer).
          // Icons.
          .replace(
            /xlink:href="\/?icons(-social)?\.svg#/g,
            'xlink:href="{{.*icons.*.svg#}}'
          )
          // Booleans.
          .replace(/(data-ecl[\dA-Za-z-]+)(?=[\s/>])/g, '$1="{{true|false}}"') // eslint-disable-line unicorn/regex-shorthand
          // aria-hidden
          .replace(/(aria-hidden)(=".+")/g, '$1="{{true|false}}"')
          // Logo
          .replace(
            /\/logo--(en|fr|mute).svg/g,
            '{{(.*?)logo--(en|fr|mute).*.svg}}'
          );
        // Now we process the story in ECL, we try to retrieve all the stories available
        // and see if any of them matches the requested one, if none does we return the
        // list of stories available for a component, if we found them.
        const eclComponents = (el) => {
          if (el === 'text-input') {
            el = 'text-field';
          } else if (el === 'text-area') {
            el = 'textarea';
          } else if (el === 'unordered-list' || el === 'description-list') {
            el = 'list';
          } else if (el === 'message') {
            el = 'messages';
          } else if (el === 'search-form') {
            el = 'searchform';
          } else if (el === 'media-container') {
            el = 'mediacontainer';
          } else if (el === 'social-media-follow') {
            el = 'socialmediafollow';
          } else if (el === 'social-media-share') {
            el = 'socialmediashare';
          } else if (el === 'footer-harmonised') {
            el = 'harmonised';
          } else if (el === 'footer-core') {
            el = 'core';
          } else if (el === 'footer-standardised') {
            el = 'standardised';
          } else if (el === 'site-header-standardised') {
            el = 'standardised';
          } else if (el === 'site-header-harmonised') {
            el = 'harmonised';
          } else if (el === 'site-header-core') {
            el = 'core';
          } else if (el === 'page-header-core') {
            el = 'core';
          } else if (el === 'page-header-harmonised') {
            el = 'harmonised';
          } else if (el === 'page-header-standardised') {
            el = 'standardised';
          } else if (el === 'expandable') {
            el = 'expandables';
          } else if (el === 'inpage-navigation') {
            el = 'in-page-navigation';
          } else if (el === 'language-list') {
            el = 'languagelist';
          } else if (el === 'ordered-list' || el === 'unordered-list') {
            el = 'list';
          } else if (el === 'page-header') {
            el = 'pageheader';
          }
          if (eclVersion > '2.21.0') {
            if (el === 'footer') {
              el = 'footer-ecl-2-12-0';
            }
            if (el === 'accordion') {
              el = 'accordion-ecl-2-6-0';
            }
            if (el === 'site-header') {
              el = 'site-header-ecl-2-12-0';
            }
            if (el === 'pageheader') {
              el = 'page-header-ecl-2-14-0';
            }
          }
          if (el === 'accordion2') {
            el = 'accordion';
          }

          return el;
        };

        const eclComponent = eclComponents(component);
        let eclGluePath = eclSection;
        if (eclSubSection !== 'none') {
          eclGluePath = `${eclSection}-${eclSubSection}`;
        }
        const eclPath = `${domain}/component-library/${version}/playground/${system}/?path=/story/${eclGluePath}-`;
        const eclFinalUrl = `${eclPath + eclComponent}--${eclStory}`;
        // Puppeteer will try to reach the requested component variant page.
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(eclFinalUrl, { waitUntil: 'domcontentloaded' });
        await page.setViewport({ width: 1900, height: 1600 });
        // We might be redirected if the url doesn't exist.
        await page.waitFor(5000);
        // If we have been redirected we try to look for the available variants.
        if (page.url() !== eclFinalUrl) {
          // Grouping link.
          if (eclSubSection !== 'none') {
            const groupLink = await page.waitFor(`#explorer${eclGluePath}`, {
              visible: true,
            });
            if (groupLink) {
              page.$eval(`#explorer${eclGluePath}`, (elem) => elem.click());
            }
          }
          // Menu link, if it's there click on it.
          const menuLink = await page.waitFor(
            `a#explorer${eclGluePath}-${eclComponent}`,
            { visible: true }
          );
          if (menuLink) {
            page.$eval(`a#explorer${eclGluePath}-${eclComponent}`, (elem) =>
              elem.click()
            );
            await page.waitForSelector(
              `#explorer${eclGluePath}-${eclComponent} + div a`
            );
            // All the links to the stories.
            const stories = await page.$$(
              `#explorer${eclGluePath}-${eclComponent} + div a`
            );
            if (stories) {
              let hrefs = [];
              for (const story of stories) {
                const href = await page.evaluate(
                  (el) => el.getAttribute('href'),
                  story
                );
                // Try to match the urls found with the one built in this script.
                if (eclFinalUrl === `${domain}${href}`) {
                  hrefs = false;
                  break;
                }

                const eclVariant = href.split('--')[1];
                hrefs.push(eclVariant);
              }
              // We offer alternatives in case we cannot find the requested one.
              if (hrefs.length > 0) {
                console.error(
                  `We couldn't find the requested story for the "${component}" component in the ECL website, but we've found these alternatives: ${hrefs.join(
                    ', '
                  )}`
                );
                process.exit(1);
              }
            }
          }
        }

        // We are ready to get the html, hopefully of the right story, otherwise we'll tell you.
        if (await page.waitForSelector('button[title="Show HTML"]')) {
          // This will reveal the markup container.
          await page.click('button[title="Show HTML"]');

          if (await page.waitForSelector('code')) {
            let eclMarkup = await page.evaluate(
              (el) => el.innerHTML,
              await page.$('code')
            );

            // The html we get is enriched by a syntax highlighter.
            eclMarkup = he.decode(eclMarkup.replace(/<\/?[^>]+(>|$)/g, ''));
            if (component === 'dropdown-legacy') {
              eclMarkup = eclMarkup
                .replace('<p>Content before</p>', '')
                .replace('<p>Content after</p>', '');
            }
            if (component === 'skip-link') {
              eclMarkup = eclMarkup.replace('<div id="top"></div>', '');
            }
            const eclMarkupMinusDiv = eclMarkup.replace(/^<div>/, '');
            if (eclMarkupMinusDiv !== eclMarkup) {
              eclMarkup = eclMarkupMinusDiv.replace(/<\/div>$/, '');
            }
            // Make the diff against the php rendered files.
            const diff = htmlDiffer.diffHtml(eclTwigMarkup, eclMarkup);
            const isEqual = htmlDiffer.isEqual(eclTwigMarkup, eclMarkup);

            console.log(
              `\nComparing ${fileName} from the ${system} system with ECL markup from ${eclFinalUrl}:`
            );

            let successMsg = false;
            if (isEqual) {
              successMsg = '> Perfectly matching!*';
            } else {
              logger.logDiffText(diff, { charsAroundDiff: 40 });
            }

            if (successMsg) {
              console.log(successMsg);
            }
            console.log(
              `\n* For the diff we use https://www.npmjs.com/package/html-differ, with this conf:`
            );
            console.log(diffOptions);
            // We made it!
            process.exit(0);
          } else {
            console.error(
              'Looks like we are not able to retrieve the html for this story...'
            );
          }
        } else {
          console.error(
            'Looks like we are not able to retrieve the html for this story...'
          );
        }
      } catch (error) {
        console.error(error.toString());
        process.exit(1);
      }
    })();
  });
