import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Get data
import dataSiteHeaderEC from '@ecl/specs-component-site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/specs-component-site-footer/demo/data-harmonised--ec';
import dataMegaMenu from '@ecl/specs-component-mega-menu/demo/data';
import dataBannerVideo from '@ecl/specs-component-banner/demo/data--video';
import dataCard from '@ecl/specs-component-card/demo/data';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';

import home from './home.html.twig';
import notes from './README.md';

const prepareData = () => {
  const data = {};

  data.site_header = dataSiteHeaderEC;
  data.site_header.mega_menu = dataMegaMenu;
  delete data.site_header.cta_link;
  delete data.site_header.banner_top;
  delete data.site_header.notification;
  delete data.site_header.site_name;

  data.site_footer = dataSiteFooterEC;

  data.banner = dataBannerVideo;
  data.banner.description = data.banner.description.link.label;
  data.banner.full_width = true;
  delete data.banner.link;

  data.card = dataCard;
  delete data.card.description;
  delete data.card.primary_meta;
  delete data.card.labels;
  delete data.card.labels_aria;
  delete data.card.secondary_meta;
  delete data.card.lists;

  correctPaths(data);

  // Logo path; to be done after correctPaths
  data.site_header.logo.src_desktop = logoEC;
  data.site_header.logo.src_mobile = logoMobileEC;
  data.site_footer.rows[2][0][0].logo.src_desktop = logoNegativeEC;

  return data;
};

export default {
  title: 'Page examples/Home',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedHome = await home(prepareData());
  return renderedHome;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
