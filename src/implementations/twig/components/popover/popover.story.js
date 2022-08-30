import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-popover/demo/data';
import popover from './popover.html.twig';
import notes from './README.md';

const lorem = loremIpsum({ count: 20 });

const getArgs = (data) => ({
  label: data.toggle.link.label,
  content: data.content,
});

const getArgTypes = () => ({
  label: {
    name: 'toggle label',
    type: { name: 'string', required: true },
    description: 'Label of the toggle link',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  content: {
    type: { name: 'string', required: true },
    description: 'Hidden initially, can be revealed by clicking on the link',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => Object.assign(correctPaths(data), args);

export default {
  title: 'Components/Popover',
};

export const Default = (args) => {
  const demo = `
    <p class="ecl-u-type-paragraph-m">${lorem}</p>
    ${popover(prepareData(dataDefault, args))}
    <p class="ecl-u-type-paragraph-m">${lorem}</p>
    <div class="ecl-u-d-inline-flex">
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      ${popover(prepareData({ ...dataDefault, id: 'popover2' }, args))}
    </div>
  `;
  return demo;
};

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withCode, withNotes];
