/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import socialIcons from '@ecl/ec-resources-icons/dist/lists/social.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import Icon from '../Icon';
import './index.scss';

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
    const icon = selectV2('Icon', brandedIcons, brandedIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return <Icon icon={icon} iconSet="branded" size={size} color={color} />;
  })
  .add('general', () => {
    const icon = selectV2('Icon', generalIcons, generalIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const variant = selectV2(
      'Variant',
      {
        Default: '',
        Highlight: 'highlight',
      },
      ''
    );

    const color = variant === '' ? selectV2('Color', colors, defaultColor) : '';

    return (
      <Icon
        icon={icon}
        iconSet="general"
        size={size}
        color={color}
        variant={variant}
      />
    );
  })
  .add('notifications', () => {
    const icon = selectV2('Icon', notificationsIcons, notificationsIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return (
      <Icon icon={icon} iconSet="notifications" size={size} color={color} />
    );
  })
  .add('social', () => {
    const icon = selectV2('Icon', socialIcons, socialIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);

    return <Icon icon={icon} iconSet="social" size={size} />;
  })
  .add('ui', () => {
    const icon = selectV2('Icon', uiIcons, uiIcons[0]);
    const size = selectV2('Size', sizes, defaultSize);
    const color = selectV2('Color', colors, defaultColor);

    return <Icon icon={icon} iconSet="ui" size={size} color={color} />;
  });
