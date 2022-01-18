import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import brandedIcons from '@ecl/eu-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/eu-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/eu-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/eu-resources-icons/dist/lists/ui.json';

import Icon from '../src/Icon';

const sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  '2XL': '2xl',
};

const defaultSize = 'm';

const colors = {
  Default: '',
  Inverted: 'inverted',
  Primary: 'primary',
};

const defaultColor = '';

const transforms = {
  None: '',
  'Rotate 90': 'rotate-90',
  'Rotate 180': 'rotate-180',
  'Rotate 270': 'rotate-270',
  'Flip horizontal': 'flip-horizontal',
  'Flip vertical': 'flip-vertical',
};

const defaultTransform = '';

export default {
  title: 'Components/Icon',
  decorators: [withKnobs],
};

export function Branded() {
  const shape = select('Icon', brandedIcons, brandedIcons[0]);
  const size = select('Size', sizes, defaultSize);
  const color = select('Color', colors, defaultColor);
  const transform = select('Transform', transforms, defaultTransform);

  return (
    <Icon
      shape={`branded--${shape}`}
      size={size}
      color={color}
      transform={transform}
    />
  );
}

Branded.storyName = 'branded';

export function General() {
  const shape = select('Icon', generalIcons, generalIcons[0]);
  const size = select('Size', sizes, defaultSize);
  const color = select('Color', colors, defaultColor);
  const transform = select('Transform', transforms, defaultTransform);

  return (
    <Icon
      shape={`general--${shape}`}
      size={size}
      color={color}
      transform={transform}
    />
  );
}

General.storyName = 'general';

export function Notifications() {
  const shape = select('Icon', notificationsIcons, notificationsIcons[0]);
  const size = select('Size', sizes, defaultSize);
  const color = select('Color', colors, defaultColor);
  const transform = select('Transform', transforms, defaultTransform);

  return (
    <Icon
      shape={`notifications--${shape}`}
      size={size}
      color={color}
      transform={transform}
    />
  );
}

Notifications.storyName = 'notifications';

export function Ui() {
  const shape = select('Icon', uiIcons, uiIcons[0]);
  const size = select('Size', sizes, defaultSize);
  const color = select('Color', colors, defaultColor);
  const transform = select('Transform', transforms, defaultTransform);

  return (
    <Icon
      shape={`ui--${shape}`}
      size={size}
      color={color}
      transform={transform}
    />
  );
}

Ui.storyName = 'ui';
