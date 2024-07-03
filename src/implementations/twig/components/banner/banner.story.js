import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Import data for demos
import bannerData from '@ecl/specs-component-banner/demo/data';
import bannerDataPlainBackground from '@ecl/specs-component-banner/demo/data--plain-background';
import bannerDataTextBox from '@ecl/specs-component-banner/demo/data--text-box';
import bannerDataTextOverlay from '@ecl/specs-component-banner/demo/data--text-overlay';
import banner from './banner.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_title: true,
    show_description: true,
    show_button: false,
    size: 'm',
    font_size: 'm',
    font_color: 'dark',
    background: 'light',
    title: data.title.link.label,
    title_link: true,
    description: data.description,
    label: data.link.link.label,
    horizontal: 'left',
    vertical: 'center',
    full_width: true,
    gridContent: false,
  };
  if (data.picture) {
    args.show_credit = true;
    args.credit = data.credit || '';
    args.image = data.picture.img.src || '';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    show_title: {
      name: 'title',
      type: { name: 'boolean' },
      description: 'Show the title',
      table: {
        category: 'Optional',
      },
    },
    show_description: {
      name: 'description',
      type: { name: 'boolean' },
      description: 'Show the description',
      table: {
        category: 'Optional',
      },
    },
    show_button: {
      name: 'button',
      type: { name: 'boolean' },
      description: 'Show the cta button',
      table: {
        category: 'Optional',
      },
    },
    size: {
      name: 'banner size',
      type: 'select',
      description: 'Change banner size',
      options: ['xs', 's', 'm', 'l'],
      control: {
        labels: {
          xs: 'extra small',
          s: 'small',
          m: 'medium',
          l: 'large',
        },
      },
      mapping: {
        'extra small': 'xs',
        small: 's',
        medium: 'm',
        large: 'l',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'm' },
        category: 'Display',
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
    font_color: {
      name: 'font color',
      type: 'select',
      description: 'Change font color',
      options: ['dark', 'light'],
      control: {
        labels: {
          dark: 'dark',
          light: 'light',
        },
      },
      mapping: {
        dark: 'dark',
        light: 'light',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'dark' },
        category: 'Display',
      },
    },
    background: {
      name: 'box background',
      type: 'select',
      description: 'Change box background',
      options: ['none', 'dark', 'light'],
      control: {
        labels: {
          none: 'none',
          dark: 'dark',
          light: 'light',
        },
      },
      mapping: {
        none: 'none',
        dark: 'dark',
        light: 'light',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'light' },
        category: 'Display',
      },
    },
    horizontal: {
      name: 'horizontal',
      type: 'select',
      description: 'Horizontal alignment',
      options: ['left', 'center', 'right'],
      control: {
        labels: {
          left: 'left',
          center: 'center',
          right: 'right',
        },
      },
      mapping: {
        left: 'left',
        center: 'center',
        right: 'right',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'left' },
        category: 'Display',
      },
    },
    vertical: {
      name: 'vertical',
      type: 'select',
      description: 'Vertical alignment',
      options: ['top', 'center', 'bottom'],
      control: {
        labels: {
          top: 'top',
          center: 'center',
          bottom: 'bottom',
        },
      },
      mapping: {
        top: 'top',
        center: 'center',
        bottom: 'bottom',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'center' },
        category: 'Display',
      },
    },
    full_width: {
      name: 'full width',
      type: 'boolean',
      description: `Take the full width of the viewport when in a container`,
      mapping: {
        0: false,
        1: true,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    },
    title: {
      type: 'string',
      description: 'Heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_title' },
    },
    title_link: {
      name: 'title link',
      type: 'boolean',
      description: 'Use a link for the title',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'Content',
      },
      if: { arg: 'show_title' },
    },
    description: {
      type: 'string',
      description: 'Sub-heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_description' },
    },
    label: {
      type: 'string',
      description: 'Label of the call to action link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_button' },
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

  if (data.picture) {
    argTypes.show_credit = {
      name: 'credit',
      type: { name: 'boolean' },
      description: 'Show the credit',
      table: {
        category: 'Optional',
      },
    };
    argTypes.image = {
      type: 'string',
      description: 'Path or Url of the background image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.credit = {
      type: 'string',
      description: 'Credit of the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_credit' },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);

  if (!args.show_credit) {
    delete clone.credit;
  }
  if (!args.show_title) {
    delete clone.title;
  }
  if (!args.show_description) {
    delete clone.description;
  }
  if (!args.show_button) {
    delete clone.link;
  }

  if (!args.title_link) {
    clone.title = args.title;
  } else {
    clone.title = data.title;
    clone.title.link.label = args.title;
  }

  return clone;
};

const renderStory = async (data, args) => {
  let story = await banner(prepareData(data, args));
  story = `<div class="ecl-container">${story}</div>`;

  if (args.gridContent) {
    story +=
      '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: 'Components/Banner',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedBannerDefault = await renderStory(bannerData, args);
  return renderedBannerDefault;
};
Default.storyName = 'default';
Default.args = getArgs(bannerData);
Default.argTypes = getArgTypes(bannerData);
Default.parameters = { notes: { markdown: notes, json: bannerData } };

export const TextBox = (_, { loaded: { component } }) => component;

TextBox.render = async (args) => {
  const renderedBannerText = await renderStory(bannerDataTextBox, args);
  return renderedBannerText;
};
TextBox.storyName = 'text box';
TextBox.args = getArgs(bannerDataTextBox);
TextBox.argTypes = getArgTypes(bannerDataTextBox);
TextBox.parameters = { notes: { markdown: notes, json: bannerDataTextBox } };

export const TextOverlay = (_, { loaded: { component } }) => component;

TextOverlay.render = async (args) => {
  const renderedBannerOverlay = await renderStory(bannerDataTextOverlay, args);
  return renderedBannerOverlay;
};
TextOverlay.storyName = 'text overlay';
TextOverlay.args = getArgs(bannerDataTextOverlay);
TextOverlay.argTypes = getArgTypes(bannerDataTextOverlay);
TextOverlay.parameters = {
  notes: { markdown: notes, json: bannerDataTextOverlay },
};

export const PlainBackground = (_, { loaded: { component } }) => component;

PlainBackground.render = async (args) => {
  const renderedBannerPlain = await renderStory(
    bannerDataPlainBackground,
    args,
  );
  return renderedBannerPlain;
};
PlainBackground.storyName = 'plain background';
PlainBackground.args = getArgs(bannerDataPlainBackground);
PlainBackground.argTypes = getArgTypes(bannerDataPlainBackground);
PlainBackground.parameters = {
  notes: { markdown: notes, json: bannerDataPlainBackground },
};
