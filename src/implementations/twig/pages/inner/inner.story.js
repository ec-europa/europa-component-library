import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Get data
import dataSiteHeaderEC from '@ecl/specs-component-site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/specs-component-site-footer/demo/data-harmonised--ec';
import dataMegaMenu from '@ecl/specs-component-mega-menu/demo/data';
import dataBreadcrumb from '@ecl/specs-component-breadcrumb/demo/data--long';
import dataPageHeader from '@ecl/specs-component-page-header/demo/data';
import dataInpageNavigation from '@ecl/specs-component-inpage-navigation/demo/data';
import dataAccordion from '@ecl/specs-component-accordion/demo/data';
import dataUnorderedList from '@ecl/specs-component-unordered-list/demo/data--text';
import dataFile from '@ecl/specs-component-file/demo/data--with-translation';
import dataGallery from '@ecl/specs-component-gallery/demo/data';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';

import inner from './inner.html.twig';
import notes from './README.md';

const prepareData = () => {
  const data = {};

  data.icon_path = '/icons.svg';

  data.site_header = dataSiteHeaderEC;
  data.site_header.mega_menu = dataMegaMenu;
  delete data.site_header.cta_link;
  delete data.site_header.banner_top;
  delete data.site_header.notification;

  data.site_footer = dataSiteFooterEC;

  data.page_header = dataPageHeader;
  data.page_header.breadcrumb = dataBreadcrumb;
  delete data.page_header.picture_background;

  data.inpage_navigation = dataInpageNavigation;
  data.inpage_navigation.links[0].label = 'Donec nec ex condimentum';
  data.inpage_navigation.links[1].label = 'Curabitur faucibus ex eu';
  data.inpage_navigation.links[2].label =
    'Maecenas ultrices mi rutrum urna volutpat';
  data.inpage_navigation.links[3].label = 'Nullam';

  data.accordion = dataAccordion;

  data.unordered_list = dataUnorderedList;

  data.file = dataFile;

  data.gallery = dataGallery;

  correctPaths(data);

  // Logo path; to be done after correctPaths
  data.site_header.logo.src_desktop = logoEC;
  data.site_header.logo.src_mobile = logoMobileEC;
  data.site_footer.rows[2][0][0].logo.src_desktop = logoNegativeEC;

  return data;
};

export default {
  title: 'Page examples/Inner',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedInner = await inner(prepareData());
  return renderedInner;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
