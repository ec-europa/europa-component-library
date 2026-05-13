import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import { userEvent, expect } from '@storybook/test';

import demoData from './demo/data';
import demoSidebarData from './demo/data--sidebar';
import accordion from './accordion.html.twig';
import notes from './README.md';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';

const getArgs = (data) => {
  const args = {};
  args.use_name = false;
  data.items.forEach((item, i) => {
    args[`toggle${i + 1}`] = item.toggle.label;
    args[`content${i + 1}`] = item.content;
  });

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getColorModeControls();

  argTypes.use_name = {
    name: 'use name',
    type: { name: 'boolean' },
    description: 'Use a name to link the items (only one item open)',
    table: {
      category: 'Optional',
    },
  };

  data.items.forEach((item, i) => {
    argTypes[`toggle${i + 1}`] = {
      name: `toggle ${i + 1}`,
      type: { name: 'string', required: true },
      description: 'Text of the accordion toggler',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Toggles',
      },
      control: {
        type: 'text',
      },
    };
    argTypes[`content${i + 1}`] = {
      name: `content ${i + 1}`,
      type: { name: 'string', required: true },
      description: 'Text of the hidden content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Hidden content',
      },
      control: {
        type: 'text',
      },
    };
  });

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  correctPaths(clone);
  clone.items.forEach((item, i) => {
    item.toggle.label = args[`toggle${i + 1}`];
    item.content = args[`content${i + 1}`];
  });
  clone.color_mode = args.color_mode;

  if (args.use_name) {
    clone.name = 'accordion-name';
  }

  return clone;
};

export default {
  title: 'Components/Accordion',
  parameters: {
    chromatic: {
      modes: {
        xs: { disable: true },
        s: { disable: true },
        l: { disable: true },
        xl: { disable: true },
      },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedAccordion = await accordion(prepareData(demoData, args));
  return renderedAccordion;
};
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.storyName = 'default';
Default.parameters = {
  notes: {
    markdown: notes,
    json: demoData,
  },
};
Default.decorators = [withCode, withNotes];

export const Opened = (_, { loaded: { component } }) => component;

Opened.render = async () => {
  const renderedOpened = await accordion(demoData);
  return renderedOpened;
};

Opened.storyName = 'opened';
Opened.tags = ['!dev'];
Opened.play = async () => {
  ECL.autoInit();
  const item = document.querySelector('.is-first');
  const button = item.querySelector('.ecl-accordion__toggle');
  const content = item.querySelector('.ecl-accordion__content');
  await userEvent.click(button);
  expect(content).toBeVisible();
};

export const Sidebar = (_, { loaded: { component } }) => component;

Sidebar.render = async () => {
  const renderedSidebar = `<div class="ecl-container">
      <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
        <div class="ecl-col-l-3">
          ${await accordion(demoSidebarData)}
        </div>
        <div class="ecl-col-l-9">
          <h4 class="ecl-u-type-heading-4 ecl-u-mt-l-m ecl-u-pb-m ecl-u-border-bottom">Collapsible Forms</h4>
          <p class="ecl-u-type-paragraph-m">${lorem}</p>
          <p class="ecl-u-type-paragraph-m">${lorem}</p>
          <h4 class="ecl-u-type-heading-4 ecl-u-border-bottom ecl-u-pb-m">Lorem ipsum</h4>
          <p class="ecl-u-type-paragraph-m">${lorem}</p>
          <p class="ecl-u-type-paragraph-m">${lorem}</p>
        </div>
      </div>
    </div>`;
  return renderedSidebar;
};

Sidebar.storyName = 'in a sidebar';
Sidebar.parameters = {
  notes: {
    markdown: notes,
    json: demoSidebarData,
  },
};
Sidebar.decorators = [withCode, withNotes];
Sidebar.play = async ({ canvasElement }) => {
  const mq = window.matchMedia('(min-width: 996px)');

  function syncDetails() {
    canvasElement.querySelectorAll('[data-desktop-open]').forEach((el) => {
      el.open = mq.matches;
    });
  }

  mq.addEventListener('change', syncDetails);
  syncDetails();
};
