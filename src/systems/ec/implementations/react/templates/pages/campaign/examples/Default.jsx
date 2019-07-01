/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
import React from 'react';
import data from '@ecl/ec-specs-campaign-page/demo/data';
import CampaignPage from '../src/CampaignPage';

export default () => <CampaignPage {...data} />;
