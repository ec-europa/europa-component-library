/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import data from '@ecl/ec-specs-feedback-form/demo/data';

import FeedbackForm from '../src/FeedbackForm';

export default () => {
  return <FeedbackForm footer={data.footer} isExpanded="true" />;
};
