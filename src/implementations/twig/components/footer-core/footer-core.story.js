import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import specsEc from '@ecl/specs-component-footer-core/demo/data--ec';
import specsEu from '@ecl/specs-component-footer-core/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import footer from './footer-core.html.twig';
import notes from './README.md';

const system = getSystem();
const demoData = system === 'eu' ? specsEu : specsEc;

const prepareData = (data) => {
  correctSvgPath(data);

  if (data.rows[0][0][0].logo) {
    data.rows[0][0][0].logo.src_mobile = logoEuMobile;
    data.rows[0][0][0].logo.src_desktop = logoEuDesktop;
  }

  return data;
};

export default {
  title: 'Components/Footers/Core',
  decorators: [withCode, withNotes],
};

export const Default = () => footer(prepareData(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
