import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { WidthIndicator } from './index.jsx';

addons.register('width-indicator', () => {
  addons.add('width-indicator/panel', {
    type: types.TOOL,
    title: 'Preview Width',
    render: () => <WidthIndicator />,
  });
});
