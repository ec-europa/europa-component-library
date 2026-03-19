import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';

import dataPresident from './demo/data';
import president from './page-president.html.twig';

const prepareData = (data) => {
  correctPaths(data);

  return data;
};

dataPresident.site_header.logo.src_desktop = logoEC;
dataPresident.site_header.logo.src_mobile = logoMobileEC;
dataPresident.site_footer.section_site_info.logo.src = logoNegativeEC;

export default {
  title: 'Page examples/President',
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedPresident = await president(prepareData(dataPresident));
  return renderedPresident;
};
Default.storyName = 'default';
Default.tags = ['!dev'];
