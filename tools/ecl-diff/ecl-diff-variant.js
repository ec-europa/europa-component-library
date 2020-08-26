#!/usr/bin/env node

/* eslint-disable consistent-return, no-await-in-loop, import/no-dynamic-require, no-async-promise-executor */

const fs = require('fs');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const he = require('he');
const { HtmlDiffer } = require('html-differ');
const { execSync } = require('child_process');

const domain = 'https://ec.europa.eu';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const version = execSync('npm view @ecl/ec-component-link versions')
  .toString()
  .replace(/([\s'[\]|])/g, '')
  .split(',')
  .reverse()
  .slice(0, 1)
  .toString();
const eclPath = require(`./mapping/ecl-mapping-${version}.js`);
const diffOptions = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};
const htmlDiffer = new HtmlDiffer(diffOptions);

const results = {
  ec: {
    matches: 0,
    variants: 0,
    message: '',
  },
  eu: {
    matches: 0,
    variants: 0,
    message: '',
  },
  totalMatches: 0,
  totalVariants: 0,
  version,
  diffOptions: JSON.stringify(diffOptions, undefined, ' '),
};

let current = '';
let diffMessage = '';
let variantMessage = '';
let successMsg = '';

const eclDiffVariant = (data, system) => {
  const systemFolder = `${distFolder}/packages/${system}`;
  const { component } = data;
  const { variant } = data;
  const { file } = data;
  const diffFolder = `${systemFolder}/${component}/ecl-diff`;
  const diffFilePath = `${systemFolder}/${component}/ecl-diff/${component}.md`;
  let componentMessage = '';

  if (current !== component) {
    // This is for the logs.
    componentMessage += `\nChecking component: ${component} - (${system})\n`;
    componentMessage += `-------------------------------------------------------\n`;
    current = component;
    results[system].message += componentMessage;
    // Create the ecl-diff folder in the component root if it doesn't exist.
    if (!fs.existsSync(diffFolder)) {
      fs.mkdirSync(diffFolder);
    }
    // Create the report file, it only contains the headings for now.
    fs.writeFile(diffFilePath, componentMessage, (err) => {
      if (err) throw err;
    });
  }

  return new Promise(async (resolve, reject) => {
    const eclTwigMarkup = fs
      .readFileSync(`${systemFolder}/${component}/${file}`, 'utf-8')
      .toString()
      // Masks, to avoid repeating patterns in the diff (@see htmldiffer).
      // Icons.
      .replace(
        /xlink:href="\/?icons(-social)?\.svg#/g,
        'xlink:href="{{.*icons.*.svg#}}'
      )
      // Booleans.
      .replace(/(data-ecl[\dA-Za-z-]+)(?=[\s/>])/g, '$1="{{true|false}}"')
      // aria-hidden
      .replace(/(aria-hidden)(=".+")/g, '$1="{{true|false}}"')
      // Logo
      .replace(
        /\/logo--(en|fr|mute).svg/g,
        '{{(.*?)logo--(en|fr|mute).*.svg}}'
      );
    // On the Ecl side.
    const eclGluePath = eclPath(component, variant, system);
    if (!eclGluePath) {
      return resolve();
    }
    if (eclGluePath !== '') {
      results[system].variants += 1;
      results.totalVariants += 1;
      const eclFinalUrl = `${domain}/component-library/v${version}/playground/${system}/?path=/story/${eclGluePath}`;
      // Puppeteer will try to reach the requested component variant page.
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      await page.goto(eclFinalUrl, {
        waitUntil: 'load',
        timeout: 0,
      });
      await page.setViewport({ width: 1900, height: 1600 });
      const htmlReveal = await page.waitForSelector(
        'button[title="Show HTML"]',
        {
          timeout: 0,
        }
      );
      if (htmlReveal) {
        // This will reveal the markup container.
        await page.click('button[title="Show HTML"]');
        try {
          await page.waitForSelector('code');
        } catch {
          resolve();
        }
        if (await page.waitForSelector('code')) {
          let eclMarkup = await page.evaluate(
            (el) => el.innerHTML,
            await page.$('code')
          );
          await browser.close();
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
          const thisMessage = `Comparing ${file} with ECL markup from ${eclFinalUrl}:\n`;
          console.log(thisMessage);
          results[system].message += thisMessage;

          if (isEqual) {
            successMsg = '> Perfectly matching! \n\n';
            console.log(successMsg);
            // Update our results bucket with the match.
            results[system].matches += 1;
            results.totalMatches += 1;
            results[system].message += successMsg;
            variantMessage = `\n${successMsg}`;
          } else {
            logger.logDiffText(diff, { charsAroundDiff: 40 });
            diffMessage = `\n> Differences were found, please check the diff by running yarn diff:ecl ${system} ${component} \n\n`;
            results[system].message += diffMessage;
            variantMessage = diffMessage;
          }
          // Here we append the reports about the single variants to the diff file.
          fs.appendFileSync(diffFilePath, thisMessage + variantMessage);
          // We resolve the promise with the number of matches, number of variants and
          // a message that gets populated in each iteration.
          resolve(results);
        } else {
          reject();
          console.error(
            'Looks like we are not able to retrieve the html for this story...'
          );
        }
      }
    } else {
      // It should not happen, if we reach this is because our mapping is not correct.
      reject();
      console.error(
        'Looks like we are not able to retrieve the html for this story...'
      );
    }
  });
};

module.exports = eclDiffVariant;
