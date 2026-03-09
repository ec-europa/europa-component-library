import { withNotes } from '@ecl/storybook-addon-notes';
import { loremIpsum } from 'lorem-ipsum';
import withCode from '@ecl/storybook-addon-code';

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
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
