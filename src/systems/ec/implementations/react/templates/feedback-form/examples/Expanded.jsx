/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import data from '@ecl/ec-specs-feedback-form/demo/data';

import FeedbackFormExpanded from '../src/FeedbackFormExpanded';

export default () => {
  return <FeedbackFormExpanded footer={data.footer} />;
};
