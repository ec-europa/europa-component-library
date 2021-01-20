/* eslint-disable no-undef */
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { withKnobs } from '@storybook/addon-knobs';
import { correctSvgPath } from '@ecl/story-utils';

import specsEc from '@ecl/specs-component-footer-standardised/demo/data--ec';
import specsEu from '@ecl/specs-component-footer-standardised/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/en.svg';
import footer from './footer-standardised.html.twig';
import notes from './README.md';

// Prepare the knobs
const formatFooter = (data) => {
  correctSvgPath(data);
  if (data.sections[1][0][0].logo.path) {
    data.sections[1][0][0].logo.src_mobile = logoEuMobile;
    data.sections[1][0][0].logo.src_desktop = logoEuDesktop;
  }

  // Return the full specs.
  return data;
};

export default {
  title: 'Components/Footers/Standardised',
  decorators: [withCode, withNotes, withKnobs],
};

const data = process.env.STORYBOOK_SYSTEM === 'EU' ? specsEu : specsEc;

export const Default = () => footer(formatFooter(data));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: data } };
