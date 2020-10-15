import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-footer-standardised/demo/data';

import { FooterStandardised } from '../src/FooterStandardised';

export default {
  title: 'Components/Footers/Standardised',
  decorators: [withKnobs],
};

export const Default = () => {
  // Optional section
  const sectionContact = boolean('Contact us', true);
  const sectionFollow = boolean('Follow us', true);
  const sectionAbout = boolean('About us', true);
  const sectionRelated = boolean('Related sites', true);

  // Update data
  const dataCopy = JSON.parse(JSON.stringify(demoContent));

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

  // Special cases
  if (!sectionFollow && !sectionContact && dataCopy.sections.dgNavigations) {
    dataCopy.sections.dgServices = [...dataCopy.sections.dgNavigations];
    delete dataCopy.sections.dgNavigations;
  }

  return <FooterStandardised {...dataCopy} />;
};

Default.storyName = 'default';
