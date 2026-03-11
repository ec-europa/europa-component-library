import { withNotes } from '@ecl/storybook-addon-notes';
import { loremIpsum } from 'lorem-ipsum';
import withCode from '@ecl/storybook-addon-code';
import { within, userEvent, expect } from '@storybook/test';

import notes from './README.md';

const loremBefore = loremIpsum({ count: 10 });
const loremAfter = loremIpsum({ count: 10 });

const dataDefault = {
  content: 'Tooltip content',
};

const getArgs = () => ({
  content: dataDefault.content,
  inverted: false,
});

const getArgTypes = () => ({
  content: {
    type: { name: 'string' },
    description: 'Tooltip content',
    table: {
      category: 'Content',
      type: { summary: 'string' },
    },
  },
  inverted: {
    type: { name: 'boolean' },
    description: 'Show inverted tooltip',
    table: {
      category: 'Display',
      type: { summary: 'boolean' },
    },
  },
});

export default {
  title: 'Components/Tooltip',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  if (args.inverted) {
    return `
    <div class="ecl-u-bg-black ecl-u-pa-m">
      <p class="ecl-u-type-paragraph-m ecl-u-mt-none">
        <span class="ecl-u-type-color-white">
          ${loremBefore}
        </span>
        <span class="ecl-u-d-flex ecl-u-justify-content-between ecl-u-align-items-baseline ecl-u-pv-m">
          <button class="ecl-button ecl-button--primary ecl-button--inverted" data-ecl-tooltip-inverted title="${args.content}">button tooltip</button>
          <a href="#" class="ecl-link ecl-link--inverted" data-ecl-tooltip-inverted="${args.content}">link tooltip</a>
        </span>
        <span class="ecl-u-type-color-white">
          ${loremAfter}
        </span>
      </p>
    </div>
  `;
  }

  return `
    <p class="ecl-u-type-paragraph-m ecl-u-mt-none">
      ${loremBefore}
      <span class="ecl-u-d-flex ecl-u-justify-content-between ecl-u-align-items-baseline ecl-u-pv-m">
        <button class="ecl-button ecl-button--primary" data-ecl-tooltip title="${args.content}">button tooltip</button>
        <a href="#" class="ecl-link" data-ecl-tooltip="${args.content}">link tooltip</a>
      </span>
      ${loremAfter}
    </p>
  `;
};
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.tags = ['!test'];
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const Visible = (_, { loaded: { component } }) => component;

Visible.render = async () =>
  `<p class="ecl-u-type-paragraph-m ecl-u-mt-none">
    Anim laborum enim velit magna dolor. Irure deserunt eiusmod laborum deserunt.
    Culpa do nisi fugiat eiusmod Lorem aute proident Lorem.
    Laboris consequat non deserunt ullamco cupidatat est cillum aute. 
    Id esse incididunt culpa fugiat qui ex enim exercitation id aliqua elit velit et
    <button class="ecl-button ecl-button--primary" data-ecl-tooltip title="test tooltip content">button tooltip</button>
    Anim laborum enim velit magna dolor. Irure deserunt eiusmod laborum deserunt.
    Culpa do nisi fugiat eiusmod Lorem aute proident Lorem.
    Laboris consequat non deserunt ullamco cupidatat est cillum aute.`;

Visible.storyName = 'visible';
Visible.tags = ['!dev'];
Visible.parameters = {
  chromatic: {
    modes: 'm',
  },
};
Visible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button');
  const tooltip = document.querySelector('.ecl-tooltip');

  expect(tooltip).not.toBeVisible();
  await userEvent.hover(button);
  expect(tooltip).toBeVisible();
};
