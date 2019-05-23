/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
import React from 'react';
import data from '@ecl/ec-specs-content-view/demo/data--default';
import DefaultContentView from '../src/DefaultContentView';

export default () => <DefaultContentView {...data} />;
