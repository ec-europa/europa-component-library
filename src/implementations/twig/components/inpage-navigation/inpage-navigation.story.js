import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';

import demoData from '@ecl/specs-component-inpage-navigation/demo/data';
import inpageNavigation from './inpage-navigation.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  data.links.forEach((item, i) => {
    argTypes[`heading${i + 1}`] = {
      name: `heading ${i + 1}`,
      type: { name: 'string', required: true },
      defaultValue: item.label,
      description: `Label of heading  ${i + 1}`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    };
    argTypes.blockLeft = {
      name: 'left sidebar block',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Inject a test block in the left sidebar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    };
    argTypes.blockMain = {
      name: 'main content block',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Inject a generic block in the main column',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    };
  });

  return argTypes;
};

// Add generic container in the left or main column.
const blockHandler = (region, state) => {
  if (state) {
    return `<div class="ecl-u-mb-m ecl-u-pa-l ecl-u-bg-grey-25">
              <h4 class="ecl-u-type-heading-4">
                This is an injected block in the ${region} column
              </h4>
            </div>`;
  }

  return false;
};

// Prepare data for the navigation.
const prepareNavData = (data, args) => {
  data.icon_path = defaultSprite;
  data.links.forEach((item, i) => {
    item.label = args[`heading${i + 1}`];
  });

  return data;
};

// Prepare data for the main content.
const prepareContentData = (data, args) => {
  let html = '';
  const lorem = loremIpsum({ count: 25 });

  data.links.forEach((item, i) => {
    const index = i + 1;
    html += `<h2 class="ecl-u-type-heading-2" id="inline-nav-${index}">
    ${
      args[`heading${index}`]
    }</h2><p class="ecl-u-type-paragraph-m">${lorem}</p><p class="ecl-u-type-paragraph-m">${lorem}</p>`;
  });

  return html;
};

export default {
  title: 'Components/Navigation/Inpage navigation',
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Default = (args) => {
  const navHtml = inpageNavigation(prepareNavData(demoData, args));
  const contentHtml = prepareContentData(demoData, args);
  const leftBlock = blockHandler('Sidebar', args.blockLeft);
  const mainBlock = blockHandler('Main', args.blockMain);
  const demo = `<div class="ecl-container">
                  <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
                    <div class="ecl-col-l-3">
                      ${leftBlock || ''}
                      ${navHtml}
                    </div>
                    <div class="ecl-col-l-9">
                      ${mainBlock || ''}
                      ${contentHtml}
                    </div>
                  </div>
                </div>`;
  return demo;
};

Default.argTypes = getArgTypes(demoData);
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
Default.decorators = [withNotes, withCode];
