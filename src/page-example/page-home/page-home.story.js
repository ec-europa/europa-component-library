import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';
import isChromatic from 'chromatic/isChromatic';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import logoEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import logoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';

import dataHome from './demo/data';
import home from './page-home.html.twig';
import notes from './README.md';

const system = getSystem();

if (isChromatic() || process.env.STORYBOOK_CHROMATIC) {
  // Ensure that the slogan ticker does not autoplay in Chromatic, to avoid random test failures
  dataHome.slogan_ticker.autoplay = false;
}

const getArgs = () => (system === 'ec' ? { color_mode: 'default' } : {});

const getArgTypes = () => getColorModeControls();

const prepareData = (data, args) => {
  correctPaths(data);

  // Logo path; to be done after correctPaths
  if (system === 'eu') {
    data.site_header.logo.src_desktop = logoEU;
    data.site_header.logo.src_mobile = logoMobileEU;
    data.site_header.logo.size = 'm';
    data.site_footer.rows[1][0][0].logo.src_desktop = logoEU;
    data.site_footer.rows[1][0][0].logo.src_mobile = logoMobileEU;
  } else {
    data.site_header.logo.src_desktop = logoEC;
    data.site_header.logo.src_mobile = logoMobileEC;
    data.site_footer.section_common.logo.src_desktop = logoNegativeEC;
  }

  Object.assign(data, args);

  return data;
};

export default {
  title: 'Page examples/Home',
  decorators: [withNotes, withCode],
  parameters: {
    EclNotes: { disable: true },
    layout: 'fullscreen',
    chromatic: {
      ignoreSelectors: ['.ecl-u-type-paragraph', '.ecl-carousel'],
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedHome = await home(prepareData(dataHome, args));
  return renderedHome;
};
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes } };
Default.tags = ['!dev'];
