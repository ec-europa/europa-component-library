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
  content: '',
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
    type: { name: 'string', required: false },
    description:
      'Custom content for the popover (leave empty for default content)',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  const dataClone = structuredClone(data);

  dataClone.toggle.link.label = args.label;
  dataClone.content = args.content;
  if (args.content !== '') {
    delete dataClone.links;
  }

  correctPaths(dataClone);

  return dataClone;
};

export default {
  title: 'Components/Popover',
  decorators: [withNotes, withCode],
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
