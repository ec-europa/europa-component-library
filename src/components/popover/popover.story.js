import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getIndicatorControls } from '@ecl/story-utils';
import { within, userEvent, expect } from '@storybook/test';
import { allModes } from '../../playground/ec/.storybook/modes';

import dataDefault from './demo/data';

import popover from './popover.html.twig';
import notes from './README.md';

const lorem = loremIpsum({ count: 10 });

const getArgs = (data) => ({
  label: data.toggle.label,
  content: data.content,
  indicator: false,
  indicator_value: '10',
  indicator_label: 'Items not read',
});

const getArgTypes = () => ({
  ...getIndicatorControls(),

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

  dataClone.toggle.label = args.label;
  dataClone.content = args.content;
  if (args.content !== '') {
    delete dataClone.links;
  }
  if (args.indicator) {
    dataClone.toggle.hide_label = true;
    dataClone.toggle.indicator = { value: '', sr_label: '' };

    if (args.indicator_value !== '') {
      dataClone.toggle.indicator.value = args.indicator_value;
    }
    if (args.indicator_label !== '') {
      dataClone.toggle.indicator.sr_label = args.indicator_label;
    }
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
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
  chromatic: {
    disable: true,
  },
};

export const Visible = (_, { loaded: { component } }) => component;

Visible.render = async () => {
  const visiblePopover = `
    <div class="ecl-container">
      <div class="ecl-u-f-r">${await popover({
        ...dataDefault,
        id: 'popover-example1',
      })}</div>
    </div>
  `;
  console.log(dataDefault);
  return visiblePopover;
};
Visible.storyName = 'visible';
Visible.tags = ['!dev'];
Visible.parameters = {
  chromatic: {
    modes: {
      m: allModes.m,
      l: allModes.l,
      xl: allModes.xl,
    },
  },
};
Visible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button');
  const popover = document.getElementById('popover-example1');
  expect(popover).toHaveAttribute('hidden');
  await userEvent.click(button);
  expect(popover).not.toHaveAttribute('hidden');
};
