import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import specsEu from '@ecl/specs-component-footer-harmonised/demo/data--eu';

import footer from './footer-harmonised.html.twig';
import notes from './README.md';

const getArgs = () => {
  return {
    hide_contact: true,
    hide_follow: true,
    hide_relate_site: true,
    hide_logo: true,
  };
};

const getArgTypes = () => {
  return {
    hide_logo: {
      name: 'logo',
      type: { name: 'boolean' },
      description: 'Show logo',
      table: {
        category: 'Optional sections',
      },
    },
    hide_contact: {
      name: 'contact site name',
      type: { name: 'boolean' },
      description: 'Show "Contact site name" section',
      table: {
        category: 'Optional sections',
      },
    },
    hide_follow: {
      name: 'follow us',
      type: { name: 'boolean' },
      description: 'Show "Follow us" section',
      table: {
        category: 'Optional sections',
      },
    },
    hide_relate_site: {
      name: 'optional links',
      type: { name: 'boolean' },
      description: 'Show "Optional links" section',
      table: {
        category: 'Optional sections',
      },
    },
  };
};

const prepareDataG1 = (data, args) => {
  correctSvgPath(data);

  const res = JSON.parse(JSON.stringify(data));
  if (args.hide_logo) {
    res.rows[1][0][0].logo.src_mobile = logoEuMobile;
    res.rows[1][0][0].logo.src_desktop = logoEuDesktop;
  } else {
    delete res.rows[1][0][0].logo;
  }
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

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => footer(prepareDataG1(specsEu, args));

Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: { specsEu },
  },
};
