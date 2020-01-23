/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import EventDetailCore from '../examples/EventDetailCore';
import EventDetailStandardised from '../examples/EventDetailStandardised';
import EventDetailHarmonisedG1 from '../examples/EventDetailHarmonisedG1';
import EventDetailHarmonisedG2 from '../examples/EventDetailHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Event detail', () => {
    const template = radios(
      'Template',
      {
        Core: 'core',
        Standardised: 'standardised',
        'Harmonised group 1': 'harmonised-g1',
        'Harmonised group 2': 'harmonised-g2',
      },
      'core'
    );

    if (template === 'standardised') return <EventDetailStandardised />;
    if (template === 'harmonised-g1') return <EventDetailHarmonisedG1 />;
    if (template === 'harmonised-g2') return <EventDetailHarmonisedG2 />;

    return <EventDetailCore />;
  });
