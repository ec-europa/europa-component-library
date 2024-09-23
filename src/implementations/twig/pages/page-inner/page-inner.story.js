import { correctPaths } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import logoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import logoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import logoNegativeEC from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import logoEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import logoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';

import dataInner from '@ecl/specs-page-inner/demo/data';
import inner from './page-inner.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  correctPaths(data);

  // Logo path; to be done after correctPaths
  if (getSystem() === 'eu') {
    data.site_header.logo.src_desktop = logoEU;
    data.site_header.logo.src_mobile = logoMobileEU;
    data.site_header.logo.size = 'm';
    data.site_footer.rows[1][0][0].logo.src_desktop = logoEU;
    data.site_footer.rows[1][0][0].logo.src_mobile = logoMobileEU;
  } else {
    data.site_header.logo.src_desktop = logoEC;
    data.site_header.logo.src_mobile = logoMobileEC;
    data.site_footer.rows[2][0][0].logo.src_desktop = logoNegativeEC;
  }

  return data;
};

export default {
  title: 'Page examples/Inner',
  decorators: [
    withNotes,
    withCode,
    (story) => {
      function createLink(href, media) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        link.media = media || 'all';
        return link;
      }
      const head = document.head || document.getElementsByTagName('head')[0];
      head.appendChild(createLink('./styles/optional/ecl-reset.css', 'screen'));
      if (getSystem() === 'eu') {
        head.appendChild(
          createLink('./styles/optional/ecl-eu-default.css', 'screen'),
        );
        head.appendChild(createLink('./styles/ecl-eu.css', 'screen'));
        head.appendChild(
          createLink('./styles/optional/ecl-eu-utilities.css', 'screen'),
        );
        head.appendChild(createLink('./styles/ecl-eu-print.css', 'print'));
        head.appendChild(
          createLink('./styles/optional/ecl-eu-default-print.css', 'print'),
        );
      } else {
        head.appendChild(
          createLink('./styles/optional/ecl-ec-default.css', 'screen'),
        );
        head.appendChild(createLink('./styles/ecl-ec.css', 'screen'));
        head.appendChild(
          createLink('./styles/optional/ecl-ec-utilities.css', 'screen'),
        );
        head.appendChild(createLink('./styles/ecl-ec-print.css', 'print'));
        head.appendChild(
          createLink('./styles/optional/ecl-ec-default-print.css', 'print'),
        );
      }

      return story();
    },
  ],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedInner = await inner(prepareData(dataInner));
  return renderedInner;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
Default.tags = ['!dev'];
