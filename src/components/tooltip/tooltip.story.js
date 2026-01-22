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
});

export default {
  title: 'Components/Tooltip',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => `
    <p class="ecl-u-type-paragraph-m ecl-u-mt-none">
      ${loremBefore}
      <span class="ecl-u-d-flex ecl-u-justify-content-between ecl-u-align-items-baseline">
        <button class="ecl-button ecl-button--primary" data-ecl-tooltip title="${args.content}">button tooltip</button>
        <a href="#" class="ecl-link" data-ecl-tooltip="${args.content}">link tooltip</a>
      </span>
      ${loremAfter}
    </p>
  `;
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
