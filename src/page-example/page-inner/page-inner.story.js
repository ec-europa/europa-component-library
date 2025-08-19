import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import logoEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import logoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';

import dataInner from './demo/data';
import inner from './page-inner.html.twig';
import notes from './README.md';

const system = getSystem();
const prepareData = (data, args) => {
  correctPaths(data);
  console.log(data.page_header);
  data.page_header.media_container.description = '@copyright';
  data.page_header.extra_classes = 'ecl-featured-item--header';
  delete data.page_header.link;

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
  data.color_mode = args.color_mode;

  return data;
};

export default {
  title: 'Page examples/Inner',
  decorators: [withNotes, withCode],
  parameters: {
    EclNotes: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedInner = await inner(prepareData(dataInner, args));
  return renderedInner;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
Default.tags = ['!dev'];
Default.args = {
  color_mode: 'blue-ocean',
};
Default.argTypes = getColorModeControls();
