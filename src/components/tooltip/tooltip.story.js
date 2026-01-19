import { loremIpsum } from 'lorem-ipsum';
import withCode from '@ecl/storybook-addon-code';

const loremBefore = loremIpsum({ count: 10 });
const loremAfter = loremIpsum({ count: 10 });

const getArgs = () => ({
  content: 'Tooltip content, wraping on multiple lines',
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
  decorators: [withCode],
};

export const Default = (args) => `
    <p class="ecl-u-type-paragraph-m ecl-u-mt-none">
      ${loremBefore}
      <span class="ecl-u-d-flex ecl-u-justify-content-between ecl-u-align-items-baseline">
        <button class="ecl-button ecl-button--primary" data-ecl-tooltip title="${args.content}">button tooltip</button>
        <a href="#" class="ecl-link" data-ecl-tooltip title="${args.content}">link tooltip</a>
      </span>
      ${loremAfter}
    </p>
  `;
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
