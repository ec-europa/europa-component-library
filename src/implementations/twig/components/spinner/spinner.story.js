import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-spinner/demo/data';
import spinner from './spinner.html.twig';
import notes from './README.md';

const dataNegative = { ...dataDefault, variant: 'negative' };

const getArgs = (data) => ({
  show_text: true,
  text: data.text,
  size: data.size || 'm',
  centered: true,
  overlay: false,
});

const getArgTypes = () => ({
  show_text: {
    name: 'text',
    type: { name: 'boolean' },
    description: 'Show the additional text',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'Optional',
    },
  },
  overlay: {
    type: { name: 'boolean' },
    description: 'Show in an overlay',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Optional',
    },
  },
  text: {
    type: { name: 'string' },
    description: 'Text below the loading indicator',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  size: {
    name: 'size',
    type: 'select',
    description: "Possible sizes ('small', 'medium' or 'large')",
    options: ['s', 'm', 'l'],
    control: {
      labels: {
        s: 'small',
        m: 'medium',
        l: 'large',
      },
    },
    mapping: {
      s: 's',
      m: 'm',
      l: 'l',
    },
    table: {
      type: 'string',
      defaultValue: { summary: 'm' },
      category: 'Display',
    },
  },
  centered: {
    type: { name: 'boolean' },
    description: 'Center the element in a container',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Display',
    },
  },
});

const withNegative = (story) => {
  const demo = story();

  return `<div class="ecl-u-bg-dark ecl-u-width-100 ecl-u-height-100" style="position: absolute;">${demo}</div>`;
};

const prepareData = (data, args) => {
  Object.assign(data, args);

  if (!args.show_text) {
    data.text = '';
  }

  return data;
};

const renderStory = (data, args) => {
  let story = spinner(prepareData(data, args));
  if (args.overlay) {
    story = `
        ${story}
        <p class="ecl-u-type-paragraph ecl-u-mt-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis scelerisque massa, tempor scelerisque neque pharetra et. Duis sed orci in tellus gravida volutpat. Aliquam volutpat efficitur turpis. Cras non tortor fermentum ipsum viverra varius. Quisque congue viverra lacus, a pellentesque sapien congue nec. Duis at vulputate ligula. Sed ac elementum erat, ac pretium mauris. Sed vehicula arcu neque, in consequat velit porta ac. Mauris ullamcorper ante a urna blandit, et ultricies lacus efficitur. Vivamus dignissim felis a nunc cursus lacinia eu sit amet diam. Etiam vestibulum libero ac ultricies molestie. Vestibulum mattis quis nulla ac pharetra. Donec at velit at orci ornare euismod. Curabitur sed malesuada sapien, ac ultrices quam. Pellentesque a tristique libero, et fringilla odio. Sed tincidunt vehicula eros nec mattis.</p>
        <p class="ecl-u-type-paragraph">Cras feugiat eleifend sodales. Nulla in ipsum tincidunt, fermentum nisl pulvinar, iaculis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci ex, accumsan vitae tincidunt quis, ornare in mi. Pellentesque ut orci mollis, eleifend erat hendrerit, iaculis magna. Nunc nulla elit, rhoncus et est id, dictum condimentum libero. Phasellus faucibus augue a ex imperdiet, sit amet tristique eros dapibus. Nam eleifend odio nunc, eget condimentum purus tempor eget. Vivamus lobortis augue nisi, in iaculis enim maximus non. Proin et nisi suscipit, rhoncus tortor at, sodales arcu. Suspendisse sed feugiat tellus, quis venenatis ante. Ut ut sapien dignissim, venenatis nunc ac, fermentum neque.</p>
      `;
  }

  return story;
};

export default {
  title: 'Components/Loading indicator',
  decorators: [withNotes, withCode],
};

export const Default = (args) => renderStory(dataDefault, args);

Default.storyName = 'primary';
Default.args = getArgs(dataDefault, 'primary');
Default.argTypes = getArgTypes('primary');
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Negative = (args) => renderStory(dataNegative, args);

Negative.storyName = 'negative';
Negative.args = getArgs(dataNegative, 'negative');
Negative.argTypes = getArgTypes('negative');
Negative.parameters = { notes: { markdown: notes, json: dataNegative } };
Negative.decorators = [withNotes, withCode, withNegative];
