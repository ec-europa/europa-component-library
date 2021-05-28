import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-inpage-navigation/demo/data';
import inpageNavigation from './inpage-navigation.html.twig';
import notes from './README.md';

const lorem = loremIpsum({ count: 25 });

const getArgTypes = (data) => {
  const argTypes = {};
  const ordinalNum = ['first', 'second', 'third', 'fourth'];
  data.links.forEach((item, i) => {
    argTypes[`heading${i + 1}`] = {
      name: `${ordinalNum[i]} element label`,
      type: { name: 'string', required: true },
      defaultValue: item.label,
      description: `The heading label for the ${ordinalNum[i]} element`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    };
  });

  argTypes.blockLeft = {
    name: 'inject a test content block in the left sidebar',
    type: { name: 'boolean' },
    defaultValue: false,
    description:
      'Inpage navigation recalculates the position of the linked content when something gets added in the dom.',
    table: {
      category: 'Test content',
    },
    control: {
      type: 'boolean',
    },
  };
  argTypes.blockMain = {
    name: 'inject a test content block in the main column',
    type: { name: 'boolean' },
    defaultValue: false,
    description:
      'Inpage navigation recalculates the position of the linked content when something gets added in the dom.',
    table: {
      category: 'Test content',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

// Add generic container in the left or main column.
const blockHandler = (region, state) => {
  if (state) {
    return `<div class="ecl-u-bg-grey-25 ecl-u-mb-m ecl-u-pa-l">
              <h4 class="ecl-u-type-heading-4">This is an injected block in the ${region} column</h4>
            </div>`;
  }

  return '';
};

// Prepare data for the navigation.
const prepareData = (data, args) => {
  correctSvgPath(data);
  data.links.forEach((item, i) => {
    item.label = args[`heading${i + 1}`];
  });

  return data;
};

// Prepare Html for the main content.
const prepareHtmlContent = (data) => {
  return data.links.map(({ label }, index) => {
    return `
    <h2 class="ecl-u-type-heading-2" id="inline-nav-${index}">${label}</h2>
    <p class="ecl-u-type-paragraph-m">${lorem}</p>
    <p class="ecl-u-type-paragraph-m">${lorem}</p>
    `;
  });
};

export default {
  title: 'Components/Navigation/Inpage navigation',
};

export const Default = (args) => {
  const navHtml = inpageNavigation(prepareData(demoData, args));
  const contentHtml = prepareHtmlContent(demoData);
  const leftBlock = blockHandler('Sidebar', args.blockLeft);
  const mainBlock = blockHandler('Main', args.blockMain);
  const demo = `<div class="ecl-container">
                  <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
                    <div class="ecl-col-l-3">
                      ${leftBlock}
                      ${navHtml}
                    </div>
                    <div class="ecl-col-l-9">
                      ${mainBlock}
                      ${contentHtml}
                    </div>
                  </div>
                </div>`;
  return demo;
};

Default.argTypes = getArgTypes(demoData);
Default.storyName = 'default';
Default.parameters = { layout: 'fullscreen', notes: { markdown: notes } };
Default.decorators = [withNotes, withCode];
