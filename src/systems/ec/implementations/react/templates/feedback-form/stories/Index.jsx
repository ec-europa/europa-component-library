/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import FeedbackFormDefault from '../examples/Default';
import FeedbackFormExpanded from '../examples/Expanded';

storiesOf('Templates/Feedback form', module)
  .add('default', FeedbackFormDefault)
  .add('expanded', FeedbackFormExpanded);
