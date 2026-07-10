import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import bannerDataImage from './demo/data--image';
import bannerDataVideo from './demo/data--video';
import banner from './banner.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_media: true,
    show_title: true,
    show_description: true,
    show_button: false,
    show_credit: true,
    credit: data.credit || '',
    size: 'm',
    font_size: 'm',
    font_weight: 'light',
    box_background: 'light',
    box_background_overlay: 'light',
    overlay: false,
    font_color: 'dark',
    title: data.title.link.label,
    description: data.description.link.label,
    title_description_link: 'title',
    label: data.link && data.link.link.label ? data.link.link.label : '',
    horizontal: 'left',
    vertical: 'center',
    full_width: true,
    gridContent: false,
  };
  if (data.picture) {
    args.image = data.picture.img.src || '';
    args.image_anchor = '50,90';
    args.smartcrop = false;
    args.use_obj_position = false;
  }
  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    ...getColorModeControls(),
    show_media: {
      name: 'media',
      type: { name: 'boolean' },
      description: 'Show the media',
      table: {
        category: 'Optional',
      },
    },
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
      if: { arg: 'show_media' },
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
      options: ['s', 'm', 'l'],
      control: {
        labels: {
          s: 'small',
          m: 'medium',
          l: 'large',
        },
      },
      mapping: {
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
    font_weight: {
      name: 'font weight',
      type: 'select',
      description: 'Change font weight',
      options: ['light', 'bold'],
      control: {
        labels: {
          light: 'light',
          bold: 'bold',
        },
      },
      mapping: {
        light: 'light',
        bold: 'bold',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'light' },
        category: 'Display',
      },
    },
    font_color: {
      name: 'font color',
      type: 'select',
      description: 'Change font color (no effect when overlay is enabled)',
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
    overlay: {
      name: 'overlay',
      type: { name: 'boolean' },
      description: 'Display overlay on the image',
      table: {
        type: 'boolean',
        defaultValue: { summary: false },
        category: 'Display',
      },
      if: { arg: 'show_media' },
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
      if: { arg: 'overlay', truthy: false },
    },
    box_background_overlay: {
      name: 'box background',
      type: 'select',
      description: 'Change box background (dark not available with overlay)',
      options: ['none', 'light'],
      control: {
        labels: {
          none: 'none',
          light: 'light',
        },
      },
      mapping: {
        none: 'none',
        light: 'light',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'light' },
        category: 'Display',
      },
      if: { arg: 'overlay' },
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
      description: 'Take the full width of the viewport when in a container',
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
  };

  if (data.picture) {
    argTypes.image = {
      type: 'select',
      options: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1429704658776-3d38c9990511?q=80&w=1679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      description: 'Path or Url of the background image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_media' },
    };
    argTypes.image_anchor = {
      name: 'focal point',
      description:
        'With object-fit: cover, only the axis where cropping occurs has an effect. For landscape images horizontal values affect the crop; for portrait images vertical values affect the crop.',
      type: { name: 'select' },
      options: [
        '',
        '10,10',
        '50,10',
        '90,10',
        '10,50',
        '30,50',
        '50,50',
        '50,30',
        '70,50',
        '90,50',
        '10,90',
        '50,90',
        '90,90',
        '30,30',
        '70,30',
        '30,70',
        '70,70',
      ],
      control: {
        labels: {
          '': 'none',
          '10,10': 'x: 10%, y: 10% - Top left',
          '50,10': 'x: 50%, y: 10% - Top',
          '90,10': 'x: 90%, y: 10% - Top right',
          '10,50': 'x: 10%, y: 50% - Left',
          '30,50': 'x: 30%, y: 50% - Left-center',
          '50,50': 'x: 50%, y: 50% - Center',
          '50,30': 'x: 50%, y: 30% - Center top',
          '70,50': 'x: 70%, y: 50% - Right-center',
          '90,50': 'x: 90%, y: 50% - Right',
          '10,90': 'x: 10%, y: 90% - Bottom left',
          '50,90': 'x: 50%, y: 90% - Bottom',
          '90,90': 'x: 90%, y: 90% - Bottom right',
          '30,30': 'x: 30%, y: 30% - Upper left',
          '70,30': 'x: 70%, y: 30% - Upper right',
          '30,70': 'x: 30%, y: 70% - Lower left',
          '70,70': 'x: 70%, y: 70% - Lower right',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_media' },
    };
    argTypes.use_obj_position = {
      name: 'use css only',
      type: 'boolean',
      description: 'Use the current solution with css only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Content',
      },
      if: { arg: 'show_media' },
    };
    argTypes.smartcrop = {
      type: 'boolean',
      description:
        'Use smartcrop script to crop the image, might non follow the focal point if it finds something more revelant.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Content',
      },
      if: { arg: 'show_media' },
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
    show_media: showMedia,
    title,
    description,
  } = args;

  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);
  if (args.overlay) {
    clone.box_background = args.box_background_overlay;
  }

  if (!showTitle) delete clone.title;
  if (!showDescription) delete clone.description;
  if (!showCredit) delete clone.credit;
  if (!showButton) delete clone.link;
  if (!showMedia) {
    delete clone.picture;
    delete clone.video;
  }

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
    clone.picture.image_anchor = args.image_anchor;
    clone.picture.smartcrop = args.smartcrop;
    clone.picture.use_obj_position = args.use_obj_position;
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
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      diffThreshold: 0.2,
    },
  },
};

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedBannerImage = await renderStory(bannerDataImage, args);
  return renderedBannerImage;
};
Image.storyName = 'image';
Image.args = getArgs(bannerDataImage);
Image.argTypes = getArgTypes(bannerDataImage);
Image.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(bannerDataImage, args),
  },
};

export const FocalPoint = (_, { loaded: { component } }) => component;

FocalPoint.render = async (args) => {
  const renderedBannerFocalPoint = await renderStory(bannerDataImage, {
    ...args,
    media_anchor: '30,70',
  });
  return renderedBannerFocalPoint;
};
FocalPoint.storyName = 'focal point';
FocalPoint.args = getArgs(bannerDataImage);
FocalPoint.argTypes = getArgTypes(bannerDataImage);
FocalPoint.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(bannerDataImage, args),
  },
};

export const Video = (_, { loaded: { component } }) => component;

Video.render = async (args) => {
  const renderedBannerVideo = await renderStory(bannerDataVideo, args);
  return renderedBannerVideo;
};
Video.storyName = 'video';
Video.args = getArgs(bannerDataVideo);
Video.argTypes = getArgTypes(bannerDataVideo);
Video.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(bannerDataVideo, args),
  },
};
