import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import specsEc from '@ecl/specs-component-footer-standardised/demo/data--ec';
import specsEu from '@ecl/specs-component-footer-standardised/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/en.svg';
import footer from './footer-standardised.html.twig';
import notes from './README.md';

const system = getSystem();
const demoData = system === 'EU' ? specsEu : specsEc;

const getArgTypes = () => {
  const argTypes = {};
  argTypes.hide_contact = {
    name: system === 'EU' ? 'contact site name' : 'contact us',
    type: { name: 'boolean' },
    defaultValue: true,
    description:
      system === 'EU'
        ? 'Show "Contact site name" section'
        : 'Show "Contact us" section',
    table: {
      category: 'Use cases',
    },
  };

  argTypes.hide_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    defaultValue: true,
    description: 'Show "Follow us" section',
    table: {
      category: 'Use cases',
    },
  };

  if (system !== 'EU') {
    argTypes.hide_about = {
      name: 'about us',
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Show "About us" section',
      table: {
        category: 'Use cases',
      },
    };
  }

  argTypes.hide_relate_site = {
    name: system === 'EU' ? 'optional links' : 'related sites',
    type: { name: 'boolean' },
    defaultValue: true,
    description:
      system === 'EU'
        ? 'Show "Optional links" section'
        : 'Show "Related sites" section',
    table: {
      category: 'Use cases',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);

  if (data.rows[1][0][0].logo) {
    data.rows[1][0][0].logo.src_mobile = logoEuMobile;
    data.rows[1][0][0].logo.src_desktop = logoEuDesktop;
  }

  const res = JSON.parse(JSON.stringify(data));
  if (!args.hide_contact) {
    res.rows[0][1].splice(0, 1);
  }
  if (!args.hide_follow) {
    res.rows[0][1].splice(1, 1);
  }
  if (!args.hide_about) {
    res.rows[0][2].splice(0, 1);
  }
  if (args.hide_relate_site) {
    res.rows[0][2].splice(1, 1);
  }
  if (!args.hide_about && !args.hide_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.hide_relate_site && system === 'EU') {
    res.rows[0].splice(2, 1);
  }
  if (!args.hide_contact && !args.hide_follow) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

export default {
  title: 'Components/Footers/Standardised',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => footer(prepareData(demoData, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoData } };
