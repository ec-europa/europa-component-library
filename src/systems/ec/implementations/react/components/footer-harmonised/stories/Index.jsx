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

const UpdateData = (
  data,
  sectionContact,
  sectionAbout,
  sectionFollow,
  sectionRelated,
  sectionClass
) => {
  const dataCopy = JSON.parse(JSON.stringify(data));

  if (!sectionContact) {
    dataCopy.sections[1] = { key: 'section 2' };
  }
  if (!sectionAbout) {
    dataCopy.sections[2] = { key: 'section 3' };
  }
  if (!sectionFollow) {
    dataCopy.sections[3] = { key: 'section 4' };
  }
  if (!sectionRelated) {
    dataCopy.sections[4] = { key: 'section 5' };
  }
  if (!sectionClass) {
    dataCopy.sections[5] = { key: 'section 6' };
  }

  // Special cases
  if (!sectionFollow && !sectionContact) {
    dataCopy.sections[1] = { ...dataCopy.sections[2] };
    dataCopy.sections[1].key = 'section 2';
    dataCopy.sections[2] = { key: 'section 3' };
    dataCopy.sections[3] = { ...dataCopy.sections[4] };
    dataCopy.sections[3].key = 'section 4';
    dataCopy.sections[4] = { key: 'section 5' };
  }

  return dataCopy;
};

export const Group1 = () => {
  // Optional section
  const sectionContact = boolean('Contact us', true);
  const sectionAbout = boolean('About us', true);
  const sectionFollow = boolean('Follow us', true);
  const sectionRelated = boolean('Related sites', true);
  const sectionClass = boolean('Class name', true);

  // Update data
  const dataCopy = UpdateData(
    demoContentGroup1,
    sectionContact,
    sectionAbout,
    sectionFollow,
    sectionRelated,
    sectionClass
  );

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
