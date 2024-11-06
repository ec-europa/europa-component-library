/* eslint-disable no-param-reassign */
import iconPath from '@ecl/resources-icons/dist/sprites/icons.svg';
import iconSocialPath from '@ecl/resources-ec-social-icons/dist/sprites/icons-social.svg';
import iconMediaSocialPath from '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg';
import iconFlagPath from '@ecl/resources-flag-icons/dist/sprites/icons-flag.svg';

export const correctPaths = (data) => {
  Object.keys(data).forEach((prop) => {
    if (typeof data[prop] === 'string' && data[prop].includes('.svg')) {
      if (data[prop].includes('social-media')) {
        data[prop] = iconMediaSocialPath;
      } else if (data[prop].includes('social')) {
        data[prop] = iconSocialPath;
      } else if (data[prop].includes('flag')) {
        data[prop] = iconFlagPath;
      } else if (data[prop].includes('xlink:href="/icons.svg#')) {
        data[prop] = data[prop].replace(
          'xlink:href="/icons.svg#',
          `xlink:href="${iconPath}#`,
        );
      } else {
        data[prop] = iconPath;
      }
    }
    if (typeof data[prop] === 'string' && data[prop].endsWith('/example')) {
      data[prop] = data[prop].replace(
        '/example',
        `/example#${Math.random().toString(36).slice(2, 7)}`,
      );
    }
    if (data[prop] !== null && typeof data[prop] === 'object') {
      data[prop] = correctPaths(data[prop]);
    }
  });

  return data;
};

export const getIconControls = (data, icons, mapping) => {
  const argTypes = {};
  argTypes.name = {
    type: { name: 'select', required: true },
    description: 'Name of the icon',
    options: icons,
    mapping,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  };
  argTypes.size = {
    name: 'size',
    type: { name: 'select', required: true },
    description:
      "The size of the icon (from 2xs to 2xl, or 'fluid' to match parent element font size)",
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'm' },
      category: 'Icon',
    },
    options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', 'fluid'],
    control: {
      labels: {
        '2xs': 'extra small 2',
        xs: 'extra small',
        s: 'small',
        m: 'medium',
        l: 'large',
        xl: 'extra large',
        '2xl': 'extra large 2',
        fluid: 'fluid',
      },
    },
    mapping: {
      'extra small 2': '2xs',
      'extra small': 'xs',
      small: 's',
      medium: 'm',
      large: 'l',
      'extra large': 'xl',
      'extra large 2': '2xl',
      fluid: 'fluid',
    },
    if: { arg: 'name', neq: 'none' },
  };
  argTypes.color = {
    name: 'color',
    type: { name: 'select' },
    description: 'The color of the icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    options: ['default', 'inverted', 'primary'],
    mapping: {
      default: 'default',
      inverted: 'inverted',
      primary: 'primary',
    },
    if: { arg: 'name', neq: 'none' },
  };
  argTypes.transform = {
    name: 'transformation',
    type: { name: 'select' },
    description: 'A transformation applied to the icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    options: [
      'none',
      'rotate-90',
      'rotate-180',
      'rotate-270',
      'flip-horizontal',
      'flip-vertical',
    ],
    mapping: {
      none: 'none',
      '90° rotation': 'rotate-90',
      '180° rotation': 'rotate-180',
      '270° rotation': 'rotate-270',
      'horizontal flip': 'flip-horizontal',
      'vertical flip': 'flip-vertical',
    },
    control: {
      labels: {
        none: 'none',
        'rotate-90': '90° rotation',
        'rotate-180': '180° rotation',
        'rotate-270': '270° rotation',
        'flip-horizontal': 'horizontal flip',
        'flip-vertical': 'vertical flip',
      },
    },
    if: { arg: 'name', neq: 'none' },
  };
  argTypes.title = {
    name: 'icon title',
    type: 'string',
    description: 'Textual information for the icon, mostly for screen readers',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    if: { arg: 'name', neq: 'none' },
  };

  return argTypes;
};

export const getFormControls = (data, type) => {
  const argTypes = {};
  argTypes.hide_label = {
    name: 'hide label',
    type: 'boolean',
    description: `Hide ${type} label on screen, keeping it only for screen readers`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Optional',
    },
  };
  argTypes.show_helper = {
    name: 'helper text',
    type: 'boolean',
    description: `Show ${type} helper text`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
      category: 'Optional',
    },
  };
  argTypes.show_error = {
    name: 'error message',
    type: 'boolean',
    description: `Show ${type} error message (only visible if invalid state is active)`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
      category: 'Optional',
    },
    if: { arg: 'invalid' },
  };
  argTypes.invalid_text = {
    name: 'error message',
    type: 'string',
    description: `Message to be shown in case of an invalid ${type}`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'invalid' },
  };
  argTypes.invalid = {
    name: 'invalid',
    type: 'boolean',
    description: `Marks the form ${type} as invalid`,
    mapping: {
      0: false,
      1: true,
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };
  argTypes.disabled = {
    name: 'disabled',
    type: 'boolean',
    description: `Disabled (read only) form ${type}`,
    mapping: {
      0: false,
      1: true,
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
      disable: type !== 'element',
    },
  };
  argTypes.label = {
    type: { name: 'string' },
    description: `Label of the form ${type}`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.helper_text = {
    name: 'helper text',
    type: 'string',
    description: `Helper text for the form ${type}`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_helper' },
  };
  argTypes.required = {
    name: 'required',
    type: 'boolean',
    description: `Sets the required attribute on the form ${type}`,
    mapping: {
      0: false,
      1: true,
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };
  argTypes.required_text = {
    name: 'required text',
    type: { name: 'string' },
    description: 'Text to be shown when required',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '*' },
      category: 'Content',
    },
    if: { arg: 'required' },
  };
  argTypes.optional_text = {
    name: 'optional text',
    type: { name: 'string' },
    description: 'Text to be shown when optional',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '*' },
      category: 'Content',
    },
    if: { arg: 'required', truthy: false },
  };
  if (data.placeholder) {
    argTypes.placeholder = {
      name: 'placeholder text',
      type: 'string',
      description: `Text to be shown when the form ${type} is not filled`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.name) {
    argTypes.name = {
      name: 'name',
      type: 'string',
      description: `Name attribute`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.width || data.input.width) {
    argTypes.width = {
      name: 'width',
      type: { name: 'select' },
      description: `The width of the form ${type} {s: small, m: medium, l: large}`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: data.width || data.input.width },
        category: 'Size',
      },
      options: ['s', 'm', 'l'],
      control: {
        type: 'select',
        label: { s: 'small', m: 'medium', l: 'large' },
      },
      mapping: {
        small: 's',
        medium: 's',
        large: 'l',
      },
    };
  }

  return argTypes;
};
