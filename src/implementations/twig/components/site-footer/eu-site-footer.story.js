import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataCore from '@ecl/specs-component-site-footer/demo/data-core--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import footer from './site-footer.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  correctSvgPath(data);
  data.rows[0][0][0].logo.src_mobile = logoEuMobile;
  data.rows[0][0][0].logo.src_desktop = logoEuDesktop;

  return data;
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

export const Core = () => footer(prepareData(dataCore));

Core.storyName = 'core';
Core.parameters = { notes: { markdown: notes, json: dataCore } };
