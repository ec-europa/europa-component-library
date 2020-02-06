/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoContentGroup1 from '@ecl/ec-specs-footer-harmonised/demo/data--group1';
import demoContentGroup2 from '@ecl/ec-specs-footer-harmonised/demo/data--group2';
import demoContentGroup3 from '@ecl/ec-specs-footer-harmonised/demo/data--group3';

import FooterHarmonised from '../src/FooterHarmonised';

export default {
  title: 'Components|Footers/Harmonised',
  decorators: [withKnobs],
};

export const Group1 = () => {
  // Optional section
  const sectionContact = boolean('Contact us', true);

  // Update data
  const dataCopy = JSON.parse(JSON.stringify(demoContentGroup1));
  if (!sectionContact) {
    dataCopy[1] = { key: 'section 2' };
  }

  return (
    <FooterHarmonised {...dataCopy} className="ecl-footer-harmonised--group1" />
  );
};

Group1.story = {
  name: 'group 1',
};

export const Group2 = () => (
  <FooterHarmonised
    {...demoContentGroup2}
    className="ecl-footer-harmonised--group2"
  />
);

Group2.story = {
  name: 'group 2',
};

export const Group3 = () => (
  <FooterHarmonised
    {...demoContentGroup3}
    className="ecl-footer-harmonised--group3"
  />
);

Group3.story = {
  name: 'group 3',
};
