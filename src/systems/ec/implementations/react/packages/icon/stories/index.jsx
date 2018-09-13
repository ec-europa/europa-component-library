/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import Icon from '../Icon';

const sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
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

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('branded', () => {
    const shape = selectV2('Icon', brandedIcons, brandedIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);
    const transform = selectV2('Transform', transforms, defaultTransform);

    return (
      <Icon
        shape={`branded--${shape}`}
        size={size}
        color={color}
        transform={transform}
      />
    );
  })
  .add('general', () => {
    const shape = selectV2('Icon', generalIcons, generalIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);
    const transform = selectV2('Transform', transforms, defaultTransform);

    return (
      <Icon
        shape={`general--${shape}`}
        size={size}
        color={color}
        transform={transform}
      />
    );
  })
  .add('notifications', () => {
    const shape = selectV2('Icon', notificationsIcons, notificationsIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);
    const transform = selectV2('Transform', transforms, defaultTransform);

    return (
      <Icon
        shape={`notifications--${shape}`}
        size={size}
        color={color}
        transform={transform}
      />
    );
  })
  .add('ui', () => {
    const shape = selectV2('Icon', uiIcons, uiIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);
    const transform = selectV2('Transform', transforms, defaultTransform);

    return (
      <Icon
        shape={`ui--${shape}`}
        size={size}
        color={color}
        transform={transform}
      />
    );
  });
