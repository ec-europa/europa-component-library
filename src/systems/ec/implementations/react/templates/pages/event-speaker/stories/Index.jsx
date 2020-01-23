/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import EventSpeakerCore from '../examples/EventSpeakerCore';
import EventSpeakerStandardised from '../examples/EventSpeakerStandardised';
import EventSpeakerHarmonisedG1 from '../examples/EventSpeakerHarmonisedG1';
import EventSpeakerHarmonisedG2 from '../examples/EventSpeakerHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Event speaker', () => {
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

    if (template === 'standardised') return <EventSpeakerStandardised />;
    if (template === 'harmonised-g1') return <EventSpeakerHarmonisedG1 />;
    if (template === 'harmonised-g2') return <EventSpeakerHarmonisedG2 />;

    return <EventSpeakerCore />;
  });
