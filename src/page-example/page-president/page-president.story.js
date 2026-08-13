import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import logoEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import logoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';

import dataPresident from './demo/data';
import president from './page-president.html.twig';

const system = getSystem();

const prepareData = (data) => {
  correctPaths(data);

  if (system === 'eu') {
    data.site_header.logo.src_desktop = logoEU;
    data.site_header.logo.src_mobile = logoMobileEU;
    data.site_header.logo.size = 'm';
    data.site_footer.rows[1][0][0].logo.src_desktop = logoEU;
    data.site_footer.rows[1][0][0].logo.src_mobile = logoMobileEU;
  } else {
    data.site_header.logo.src_desktop = logoEC;
    data.site_header.logo.src_mobile = logoMobileEC;
    data.site_footer.section_site_info.logo.picture.img.src = logoNegativeEC;
  }

  return data;
};

export default {
  title: 'Page examples/President',
  decorators: [
    withCode,
    (Story) => {
      if (!document.getElementById('eu-adaptation') && system === 'eu') {
        const style = document.createElement('style');
        style.id = 'eu-adaptation';
        style.innerHTML = `
          .ecl-u-bg-surface-lowest {
            background-color: var(--c-p-10);
          }
        `;
        document.head.appendChild(style);
      }

      return Story();
    },
  ],
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
  const renderedPresident = await president(prepareData(dataPresident));
  return renderedPresident;
};
Default.storyName = 'default';
Default.tags = ['!dev'];
