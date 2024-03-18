import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-popover/demo/data';

import popover from './popover.html.twig';
import notes from './README.md';

const lorem = loremIpsum({ count: 10 });

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
  const dataClone = global.structuredClone(data);

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

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedPopover = `
    <div style="text-align: right; max-width: 65ch">${await popover(
      prepareData({ ...dataDefault, id: 'popover-example4' }, args),
    )}</div>
    <p class="ecl-u-type-paragraph-m">${lorem}</p>
    ${await popover(prepareData(dataDefault, args))}
    <p class="ecl-u-type-paragraph-m">
      ${lorem}
    </p>
    <div class="ecl-container">
      <div class="ecl-u-f-r">${await popover(
        prepareData({ ...dataDefault, id: 'popover-example3' }, args),
      )}</div>
    </div>
    <div style="text-align: center; max-width: 65ch; margin-bottom: 2rem;">${await popover(
      prepareData({ ...dataDefault, id: 'popover-example5' }, args),
    )}</div>
    <div class="ecl-u-d-inline-flex">
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      <a class="ecl-link ecl-link--standalone ecl-u-mr-s" href="#">Link</a>
      ${await popover(
        prepareData({ ...dataDefault, id: 'popover-example2' }, args),
      )}
    </div>
  `;
  return renderedPopover;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
