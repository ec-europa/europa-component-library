/* eslint-disable no-param-reassign, dot-notation */
import iconPath from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconSocialPath from '@ecl/resources-ec-social-icons/dist/sprites/icons-social.svg';

export const correctSvgPath = (data) => {
  Object.keys(data).forEach((prop) => {
    if (typeof data[prop] === 'string' && data[prop].includes('.svg')) {
      data[prop] = data[prop].includes('social') ? iconSocialPath : iconPath;
    }
    if (data[prop] !== null && typeof data[prop] === 'object') {
      data[prop] = correctSvgPath(data[prop]);
    }
  });

  return data;
};

export const getIconControls = (data, icons) => {
  const argTypes = {};
  argTypes.name = {
    type: { name: 'select', required: true },
    defaultValue: data.icon.name,
    description: 'Name of the icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    control: {
      type: 'select',
      options: icons,
    },
  };
  argTypes.size = {
    name: 'size',
    type: { name: 'select', required: true },
    defaultValue: 'm',
    description:
      "The size of the icon (from 2xs to 2xl, or 'fluid' to match parent element font size)",
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'm' },
      category: 'Icon',
    },
    control: {
      type: 'select',
      options: {
        'extra small 2': '2xs',
        'extra small': 'xs',
        small: 's',
        medium: 'm',
        large: 'l',
        'extra large': 'xl',
        'extra large 2': '2xl',
        fluid: 'fluid',
      },
    },
  };
  argTypes.color = {
    name: 'color',
    type: { name: 'select' },
    defaultValue: '',
    description: 'The color of the icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    control: {
      type: 'select',
      options: { default: '', inverted: 'inverted', primary: 'primary' },
    },
  };
  argTypes.transform = {
    name: 'transformation',
    type: { name: 'select' },
    defaultValue: '',
    description: 'A transformation applied to the icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    control: {
      type: 'select',
      options: {
        default: '',
        '90° rotation': 'rotate-90',
        '180° rotation': 'rotate-180',
        '270° rotation': 'rotate-270',
        'horizontal flip': 'flip-horizontal',
        'vertical flip': 'flip-vertical',
      },
    },
  };

  return argTypes;
};

export const getFormControls = (data, type) => {
  const argTypes = {};
  argTypes.label = {
    type: { name: 'string', required: true },
    defaultValue: data.label,
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
    defaultValue: data.helper_text,
    description: `Helper text for the form ${type}`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.invalid_text = {
    name: 'error message',
    type: 'string',
    defaultValue: data.invalid_text,
    description: 'Message to be shown in case of an invalid input by the user',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.optional_text = {
    name: 'optional text',
    type: 'string',
    defaultValue: data.optional_text,
    description: `Text to be shown when the form ${type} is optional`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.required_text = {
    name: 'required text',
    type: 'string',
    defaultValue: data.required_text,
    description: `Text to be shown when the form ${type} is mandatory`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '*' },
      category: 'Content',
    },
  };
  argTypes.invalid = {
    name: 'invalid',
    type: 'boolean',
    defaultValue: data.invalid,
    description: `Marks the form ${type} as invalid`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };
  argTypes.disabled = {
    name: 'disabled',
    type: 'boolean',
    defaultValue: data.disabled,
    description: `Disabled form ${type}`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
      disable: type !== 'element',
    },
  };
  argTypes.required = {
    name: 'required',
    type: 'boolean',
    defaultValue: data.required,
    description: `Sets the required attribute on the form ${type}`,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  if (data.placeholder) {
    argTypes.placeholder = {
      name: 'placeholder text',
      type: 'string',
      defaultValue: data.placeholder,
      description: `Text to be shown when the form ${type} is not filled`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (data.width) {
    argTypes.width = {
      name: 'width',
      type: { name: 'select' },
      defaultValue: data.width,
      description: `The width of the form ${type} {s: small, m: medium, l: large}`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: data.width },
        category: 'Size',
      },
      control: {
        type: 'select',
        options: { small: 's', medium: 'm', large: 'l' },
      },
    };
  }

  return argTypes;
};
