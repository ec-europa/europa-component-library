import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Import data for demos
import bannerDataImage from '@ecl/specs-component-banner/demo/data--image';
import bannerDataVideo from '@ecl/specs-component-banner/demo/data--video';
import banner from './banner.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_title: true,
    show_description: true,
    show_button: false,
    show_credit: true,
    credit: data.credit || '',
    size: 'm',
    font_size: 'm',
    box_background: 'light',
    font_color: 'dark',
    title: data.title.link.label,
    description: data.description.link.label,
    title_description_link: 'title',
    label: data.link && data.link.link.label ? data.link.link.label : '',
    horizontal: 'left',
    vertical: 'center',
    full_width: true,
    gridContent: false,
    oldVariants: '',
  };
  if (data.picture) {
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
    show_credit: {
      name: 'credit',
      type: { name: 'boolean' },
      description: 'Show the credit',
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
      if: { arg: 'box_background', eq: 'none' },
    },
    box_background: {
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
    title_description_link: {
      name: 'link on the title or the description',
      control: 'radio',
      options: ['none', 'title', 'description'],
      description: 'Use a link for the title or the description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'title' },
        category: 'Content',
      },
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
    oldVariants: {
      name: 'Test the old variants',
      type: { name: 'select' },
      description: 'Test the layout with deprecated markup',
      table: {
        category: 'Backward compatibility',
      },
      options: [
        '',
        'ecl-banner--plain-background',
        'ecl-banner--text-box',
        'ecl-banner--text-overlay',
      ],
      mapping: {
        none: '',
        'plain background': 'ecl-banner--plain-background',
        'text overlay': 'ecl-banner--text-overlay',
        'text box': 'ecl-banner--text-box',
      },
      control: {
        labels: {
          '': 'none',
          'ecl-banner--plain-background': 'plain background',
          'ecl-banner--text-box': 'text box',
          'ecl-banner--text-overlay': 'text overlay',
        },
        type: 'select',
      },
    },
  };

  if (data.picture) {
    argTypes.image = {
      type: 'string',
      description: 'Path or Url of the background image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  const {
    title_description_link: titleDescriptionLink,
    show_title: showTitle,
    show_description: showDescription,
    show_credit: showCredit,
    show_button: showButton,
    title,
    description,
  } = args;

  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);

  if (!showTitle) delete clone.title;
  if (!showDescription) delete clone.description;
  if (!showCredit) delete clone.credit;
  if (!showButton) delete clone.link;

  if (titleDescriptionLink === 'title' && showTitle) {
    clone.title = { ...data.title, link: { ...data.title.link, label: title } };
    if (showDescription) clone.description = description;
  } else if (titleDescriptionLink === 'description' && showDescription) {
    clone.description = {
      ...data.description,
      link: { ...data.description.link, label: description },
    };
    if (showTitle) clone.title = title;
  } else if (titleDescriptionLink === 'none') {
    if (showTitle) clone.title = title;
    if (showDescription) clone.description = description;
  }

  if (clone.picture) {
    clone.picture.img.src = args.image;
  }

  if (args.oldVariants !== '') {
    clone.extra_classes = args.oldVariants;
    if (args.oldVariants === 'ecl-banner--plain-background') {
      if (clone.picture) {
        clone.picture.img = {};
      } else {
        clone.video = {};
      }
    }
  } else {
    clone.extra_classes = '';
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

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedBannerImage = await renderStory(bannerDataImage, args);
  return renderedBannerImage;
};
Image.storyName = 'image';
Image.args = getArgs(bannerDataImage);
Image.argTypes = getArgTypes(bannerDataImage);
Image.parameters = { notes: { markdown: notes, json: bannerDataImage } };

export const Video = (_, { loaded: { component } }) => component;

Video.render = async (args) => {
  const renderedBannerVideo = await renderStory(bannerDataVideo, args);
  return renderedBannerVideo;
};
Video.storyName = 'video';
Video.args = getArgs(bannerDataVideo);
Video.argTypes = getArgTypes(bannerDataVideo);
Video.parameters = { notes: { markdown: notes, json: bannerDataVideo } };
