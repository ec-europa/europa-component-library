/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import CampaignPageExample from '../examples/Default';

storiesOf('Campaign page', module).add('default', () => (
  <CampaignPageExample />
));
