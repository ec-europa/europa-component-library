import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import logoEcG1 from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import logoEc from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import dataGroup1 from '@ecl/specs-component-footer-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-footer-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-footer-harmonised/demo/data--group3';

import footer from './footer-harmonised.html.twig';
import notes from './README.md';

const getArgs = (group) => {
  const args = {
    hide_logo: true,
  };
  if (group === 'g1') {
    args.hide_contact = true;
    args.hide_relate_site = true;
    args.hide_about = true;
    args.hide_follow = true;
  }

  return args;
};

const getArgTypes = (group) => {
  const argTypes = {
    hide_logo: {
      name: 'logo',
      type: { name: 'boolean' },
      description: 'Show logo',
      table: {
        category: 'Optional sections',
      },
    },
  };
  if (group === 'g1') {
    argTypes.hide_contact = {
      name: 'contact us',
      type: { name: 'boolean' },
      description: 'Show "Contact us" section',
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

    argTypes.hide_follow = {
      name: 'follow us',
      type: { name: 'boolean' },
      description: 'Show "Follow us" section',
      table: {
        category: 'Optional sections',
      },
    };

    argTypes.hide_relate_site = {
      name: 'related sites',
      type: { name: 'boolean' },
      description: 'Show "Related sites" section',
      table: {
        category: 'Optional sections',
      },
    };
  }

  return argTypes;
};

const prepareDataG1 = (data, args) => {
  correctSvgPath(data);

  const res = JSON.parse(JSON.stringify(data));
  if (args.hide_logo) {
    res.rows[2][0][0].logo.src_desktop = logoEcG1;
  } else {
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
  }
  if (!args.hide_about && !args.hide_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.hide_contact && !args.hide_follow) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

const prepareDataG3 = (data, args) => {
  const res = JSON.parse(JSON.stringify(data));
  if (args.hide_logo) {
    res.rows[0][0][1].logos[2].logo.src = logoEc;
  } else {
    delete res.rows[0][0][1].logos[2].logo;
  }

  return res;
};

const prepareDataG2 = (data, args) => {
  const res = JSON.parse(JSON.stringify(data));
  if (args.hide_logo) {
    res.rows[0][0][0].logo.src_desktop = logoEc;
  } else {
    delete res.rows[0][0][0].logo;
  }

  return res;
};

export default {
  title: 'Deprecated/Footers/Harmonised',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Group1 = (args) => footer(prepareDataG1(dataGroup1, args));

Group1.storyName = 'group 1';
Group1.argTypes = getArgTypes('g1');
Group1.args = getArgs('g1');
Group1.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup1 },
  },
};

export const Group2 = (args) => footer(prepareDataG2(dataGroup2, args));

Group2.storyName = 'group 2';
Group2.argTypes = getArgTypes('g2');
Group2.args = getArgs('g2');
Group2.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup2 },
  },
};

export const Group3 = (args) => footer(prepareDataG3(dataGroup3, args));

Group3.storyName = 'group 3';
Group3.argTypes = getArgTypes('g3');
Group3.args = getArgs('g3');
Group3.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup3 },
  },
};
