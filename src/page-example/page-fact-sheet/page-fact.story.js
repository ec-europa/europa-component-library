import { correctPaths } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import logoEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import logoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';

import dataFact from './demo/data';
import fact from './page-fact.html.twig';
import notes from './README.md';

const system = getSystem();
const prepareData = (data) => {
  correctPaths(data);

  // Logo path; to be done after correctPaths
  if (system === 'eu') {
    data.site_header.logo.src_desktop = logoEU;
    data.site_header.logo.src_mobile = logoMobileEU;
    data.site_header.logo.size = 'm';
    data.site_footer.rows[2][0][0].logo.src_desktop = logoEU;
    data.site_footer.rows[2][0][0].logo.src_mobile = logoMobileEU;
  } else {
    data.site_header.logo.src_desktop = logoEC;
    data.site_header.logo.src_mobile = logoMobileEC;
    data.site_footer.section_common.logo.src_desktop = logoNegativeEC;
  }

  return data;
};

export default {
  title: 'Page examples/Fact',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
    layout: 'fullscreen',
    chromatic: {
      disable: true,
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedFact = await fact(prepareData(dataFact));
  return renderedFact;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
Default.tags = ['!dev'];
