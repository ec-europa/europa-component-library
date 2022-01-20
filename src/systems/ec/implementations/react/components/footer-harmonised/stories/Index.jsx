import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoContentGroup1 from '@ecl/ec-specs-footer-harmonised/demo/data--group1';
import demoContentGroup2 from '@ecl/ec-specs-footer-harmonised/demo/data--group2';
import demoContentGroup3 from '@ecl/ec-specs-footer-harmonised/demo/data--group3';

import { FooterHarmonisedG1 } from '../src/FooterHarmonisedG1';
import { FooterHarmonisedG2 } from '../src/FooterHarmonisedG2';
import { FooterHarmonisedG3 } from '../src/FooterHarmonisedG3';

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withKnobs],
};

export function Group1() {
  // Optional section
  const sectionContact = boolean('Contact us', true);
  const sectionFollow = boolean('Follow us', true);
  const sectionAbout = boolean('About us', true);
  const sectionRelated = boolean('Related sites', true);
  const sectionClass = boolean('Class name', true);

  // Update data
  const dataCopy = JSON.parse(JSON.stringify(demoContentGroup1));

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

  return <FooterHarmonisedG1 {...dataCopy} />;
}

Group1.storyName = 'group 1';

export function Group2() {
  return <FooterHarmonisedG2 {...demoContentGroup2} />;
}

Group2.storyName = 'group 2';

export function Group3() {
  // Optional section
  const sectionPartnershipLogo = boolean('Partnership logo', true);

  // Update data
  const dataCopy = JSON.parse(JSON.stringify(demoContentGroup3));

  if (!sectionPartnershipLogo) {
    delete dataCopy.sections.partnershipLogos;
  }

  return <FooterHarmonisedG3 {...dataCopy} />;
}

Group3.storyName = 'group 3';
