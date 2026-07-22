import { withNotes } from '@ecl/storybook-addon-notes';
import { useArgs } from '@storybook/preview-api';
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
      type: 'string',
      description: 'Path or Url of the background image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
    clone.picture.debug_position = true;
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
  const [x, y] = args.image_anchor.split(',').map(Number);
  const renderedBannerFocalPoint = await renderStory(bannerDataImage, args);

  return `${renderedBannerFocalPoint}
    <h4>Original image</h4>
    <div style="position: relative; display: inline-block; cursor: crosshair;">
      <img
        id="focal-image"
        src="${args.image}"
        style="display: block; max-width: 100%;"
      />

      <span id="focal-marker"
        style="
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #e43;
          border: 3px solid white;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 1px rgba(0,0,0,.3);
          pointer-events: none;
        "
      ></span>
    </div>`;
};
FocalPoint.storyName = 'focal point';
FocalPoint.args = {
  show_media: true,
  show_description: false,
  show_title: true,
  show_credit: true,
  horizontal: 'right',
  vertical: 'bottom',
  size: 'm',
  image:
    'https://commission.europa.eu/sites/default/files/2026-07/Social-Pillar-action-plan_banner_1.jpg',
  image_anchor: '17,80',
  smartcrop: false,
  use_obj_position: false,
};
FocalPoint.argTypes = {
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
  show_media: {
    name: 'media',
    type: { name: 'boolean' },
    description: 'Show the media',
    table: {
      category: 'Optional',
    },
  },
  image: {
    type: 'select',
    options: [
      'https://commission.europa.eu/sites/default/files/2026-07/Social-Pillar-action-plan_banner_1.jpg',
      'https://images.pexels.com/photos/27254733/pexels-photo-27254733.jpeg?_gl=1*y3l02p*_ga*MjExOTQ1MjY0Ny4xNzgzODY3MzIy*_ga_8JE65Q40S6*czE3ODM4NjczMjIkbzEkZzEkdDE3ODM4Njc0ODEkajYkbDAkaDA.',
      'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: 'Path or Url of the background image',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  image_anchor: {
    name: 'focal point',
    description:
      'With object-fit: cover, only the axis where cropping occurs has an effect. For landscape images horizontal values affect the crop; for portrait images vertical values affect the crop.',
    type: { name: 'string' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  use_obj_position: {
    name: 'use css only',
    type: 'boolean',
    description: 'Use the current solution with css only',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Content',
    },
  },
  smartcrop: {
    type: 'boolean',
    description:
      'Use smartcrop script to crop the image, might non follow the focal point if it finds something more revelant.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Content',
    },
  },
};
FocalPoint.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(bannerDataImage, args),
  },
};
FocalPoint.decorators = [
  (Story) => {
    const [, updateArgs] = useArgs();

    setTimeout(() => {
      const image = document.querySelector('#focal-image');

      if (!image) {
        return;
      }

      image.onclick = (event) => {
        const rect = image.getBoundingClientRect();

        const x = Math.min(
          100,
          Math.max(0, ((event.clientX - rect.left) / rect.width) * 100),
        );

        const y = Math.min(
          100,
          Math.max(0, ((event.clientY - rect.top) / rect.height) * 100),
        );

        updateArgs({
          image_anchor: `${x.toFixed(1)},${y.toFixed(1)}`,
        });
      };
    });

    return Story();
  },
];

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
