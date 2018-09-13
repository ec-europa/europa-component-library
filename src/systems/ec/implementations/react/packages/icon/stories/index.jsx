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

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('branded', () => {
    const shape = selectV2('Icon', brandedIcons, brandedIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return <Icon shape={`branded--${shape}`} size={size} color={color} />;
  })
  .add('general', () => {
    const shape = selectV2('Icon', generalIcons, generalIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return <Icon shape={`general--${shape}`} size={size} color={color} />;
  })
  .add('notifications', () => {
    const shape = selectV2('Icon', notificationsIcons, notificationsIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return <Icon shape={`notifications--${shape}`} size={size} color={color} />;
  })
  .add('ui', () => {
    const shape = selectV2('Icon', uiIcons, uiIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return <Icon shape={`ui--${shape}`} size={size} color={color} />;
  });
