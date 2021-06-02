import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import specsEu from '@ecl/specs-component-footer-harmonised/demo/data--eu';

import footer from './footer-harmonised.html.twig';
import notes from './README.md';

const getArgTypes = () => {
  const argTypes = {};
  argTypes.hide_contact = {
    name: 'contact site name',
    type: { name: 'boolean' },
    defaultValue: true,
    description: 'Show "Contact site name" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    defaultValue: true,
    description: 'Show "Follow us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.hide_relate_site = {
    name: 'optional links',
    type: { name: 'boolean' },
    defaultValue: true,
    description: 'Show "Optional links" section',
    table: {
      category: 'Optional sections',
    },
  };

  return argTypes;
};

const prepareDataG1 = (data, args) => {
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
  if (!args.hide_relate_site) {
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

export const Default = (args) => footer(prepareDataG1(specsEu, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: { specsEu },
  },
};

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};
