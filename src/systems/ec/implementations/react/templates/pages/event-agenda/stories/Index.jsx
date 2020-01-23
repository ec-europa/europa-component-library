/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import EventAgendaCore from '../examples/EventAgendaCore';
import EventAgendaStandardised from '../examples/EventAgendaStandardised';
import EventAgendaHarmonisedG1 from '../examples/EventAgendaHarmonisedG1';
import EventAgendaHarmonisedG2 from '../examples/EventAgendaHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Event agenda', () => {
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

    if (template === 'standardised') return <EventAgendaStandardised />;
    if (template === 'harmonised-g1') return <EventAgendaHarmonisedG1 />;
    if (template === 'harmonised-g2') return <EventAgendaHarmonisedG2 />;

    return <EventAgendaCore />;
  });
