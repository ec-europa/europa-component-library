import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import spotlightDataImage from './demo/data--image';
import spotlight from './spotlight.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_header: true,
    show_anchor: true,
    show_credit: true,
    font_size: 'l',
    header: data.header,
    title: data.title,
    credit: data.credit,
    sidebarContent: false,
    gridContent: false,
  };
  if (data.picture) {
    args.image = data.picture.img.src || '';
  }
  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    ...getColorModeControls(),
    show_header: {
      name: 'header',
      type: { name: 'boolean' },
      description: 'Show the header',
      table: {
        category: 'Optional',
      },
    },
    show_anchor: {
      name: 'anchor',
      type: { name: 'boolean' },
      description: 'Show the visual anchor',
      table: {
        category: 'Optional',
      },
    },
    show_credit: {
      name: 'credit',
      type: { name: 'boolean' },
      description: 'Show the credit',
      table: {
        category: 'Optional',
      },
    },
    font_size: {
      name: 'font size',
      type: 'select',
      description: 'Change font size',
      options: ['m', 'l'],
      control: {
        labels: {
          m: 'medium',
          l: 'large',
        },
      },
      mapping: {
        medium: 'm',
        large: 'l',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'm' },
        category: 'Display',
      },
    },
    header: {
      type: 'string',
      description: 'Header of the spotlight',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_header' },
    },
    title: {
      type: 'string',
      description: 'Title of the spotlight',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    credit: {
      type: 'string',
      description: 'Credit of the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_credit' },
    },
    sidebarContent: {
      name: 'demo sidebar content',
      type: { name: 'boolean' },
      description:
        'Inject a test content block in the sidebar, to see the display',
      table: {
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    },
    gridContent: {
      name: 'demo grid content',
      type: { name: 'boolean' },
      description:
        'Inject a test content block displayed on the grid, to see the alignment',
      table: {
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    },
  };
  argTypes.image = {
    name: 'example image',
    type: 'select',
    description: 'Sample images',
    options: [
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg',
    ],
    control: {
      labels: {
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg':
          'image 1',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg':
          'image 2',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg':
          'image 3',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg':
          'image 4',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg':
          'image 5',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg':
          'image 6',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg':
          'image 7',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg':
          'image 8',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg':
          'image 9',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg':
          'image 10',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg':
          'image 11',
      },
    },
    mapping: {
      'image 1':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      'image 2':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      'image 3':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
      'image 4':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
      'image 5':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
      'image 6':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
      'image 7':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
      'image 8':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      'image 9':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
      'image 10':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
      'image 11':
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg',
    },
    table: {
      type: 'string',
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);

  if (!args.show_header) delete clone.header;
  if (!args.show_anchor) clone.has_anchor = false;
  if (!args.show_credit) delete clone.credit;

  if (clone.picture) {
    clone.picture.img.src = args.image;
  }

  return clone;
};

const renderStory = async (data, args) => {
  let story = await spotlight(prepareData(data, args));

  if (args.gridContent) {
    if (args.sidebarContent) {
      story += '<p class="ecl-u-type-paragraph">Content inside the grid</p>';
    } else {
      story +=
        '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
    }
  }

  if (args.sidebarContent) {
    story = `<div class="ecl-container"><div class="ecl-row"><div class="ecl-col-12 ecl-col-m-3"><p class="ecl-u-type-paragraph">Sidebar</p></div><div class="ecl-col-12 ecl-col-m-9">${story}</div></div></div>`;
  }

  return story;
};

export default {
  title: 'Components/Spotlight',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedSpotlight = await renderStory(spotlightDataImage, args);
  return renderedSpotlight;
};
Default.storyName = 'default';
Default.args = getArgs(spotlightDataImage);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: spotlightDataImage } };
