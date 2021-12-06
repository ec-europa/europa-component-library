import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import specsEu from '@ecl/specs-component-footer-standardised/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import footer from '@ecl/twig-component-footer-standardised/footer-standardised.html.twig';
import notes from './README-EU.md';

const demoData = specsEu;

const getArgs = () => {
  const args = {
    hide_contact: true,
    hide_follow: true,
    hide_relate_site: true,
    hide_logo: true,
    hide_about: true,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {};
  argTypes.hide_contact = {
    name: 'contact site name',
    type: { name: 'boolean' },
    description: 'Show "Contact site name" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_logo = {
    name: 'logo',
    type: { name: 'boolean' },
    description: 'Show logo',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    description: 'Show "Follow us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_about = {
    name: 'about us',
    type: { name: 'boolean' },
    description: 'Show "About us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_relate_site = {
    name: 'optional links',
    type: { name: 'boolean' },
    description: 'Show "Optional links" section',
    table: {
      category: 'Optional sections',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);

  const res = JSON.parse(JSON.stringify(data));
  res.rows[1][0][0].logo.src_mobile = logoEuMobile;
  res.rows[1][0][0].logo.src_desktop = logoEuDesktop;

  if (!args.hide_logo && res.rows[1][0][0].logo) {
    delete res.rows[1][0][0].logo;
  }
  if (!args.hide_logo && res.rows[2]) {
    delete res.rows[2][0][0].logo;
  }
  if (!args.hide_contact) {
    res.rows[0][1].splice(0, 1);
  }
  if (!args.hide_follow) {
    res.rows[0][1].splice(1, 1);
  }
  if (!args.hide_about) {
    res.rows[0][2].splice(0, 1);
  }
  if (!args.hide_relate_site) {
    res.rows[0].splice(2, 1);
  } else if (!args.hide_relate_site) {
    res.rows[0][2].splice(1, 1);
  }
  if (!args.hide_about && !args.hide_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.hide_contact && !args.hide_follow) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => footer(prepareData(demoData, args));

Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoData } };
