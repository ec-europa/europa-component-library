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
    delete dataCopy.sections.dgServices[0];
  }
  if (!sectionFollow) {
    delete dataCopy.sections.dgServices[1];
  }
  if (!sectionAbout) {
    delete dataCopy.sections.dgNavigations[0];
  }
  if (!sectionRelated) {
    delete dataCopy.sections.dgNavigations[1];
  }
  if (!sectionClass) {
    delete dataCopy.sections.classes;
  }

  // Special cases
  if (!sectionFollow && !sectionContact && dataCopy.sections.dgNavigations) {
    dataCopy.sections.dgServices = [...dataCopy.sections.dgNavigations];
    delete dataCopy.sections.dgNavigations;
  }

  return dataCopy;
};

export const Group1 = () => {
  // Optional section
  const sectionContact = boolean('Contact us', true);
  const sectionFollow = boolean('Follow us', true);
  const sectionAbout = boolean('About us', true);
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
