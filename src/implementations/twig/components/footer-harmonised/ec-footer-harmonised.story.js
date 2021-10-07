import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import logoEcG1 from '@ecl/resources-ec-logo/negative/logo-ec--en.svg';
import logoEc from '@ecl/resources-ec-logo/logo-ec--en.svg';
import dataGroup1 from '@ecl/specs-component-footer-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-footer-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-footer-harmonised/demo/data--group3';

import footer from './footer-harmonised.html.twig';
import notes from './README.md';

const getArgs = () => {
  return {
    hide_contact: true,
    hide_relate_site: true,
    hide_about: true,
    hide_follow: true,
  };
};

const getArgTypes = () => {
  const argTypes = {};
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

  return argTypes;
};

const prepareDataG1 = (data, args) => {
  correctSvgPath(data);
  if (data.rows[2][0][0].logo) {
    data.rows[2][0][0].logo.src_desktop = logoEcG1;
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

const prepareDataG3 = (data) => {
  data.rows[0][0][1].logos[2].logo.src = logoEc;

  return data;
};

export const Group1 = (args) => footer(prepareDataG1(dataGroup1, args));

Group1.storyName = 'group 1';
Group1.argTypes = getArgTypes();
Group1.args = getArgs();
Group1.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup1 },
  },
};

dataGroup2.rows[0][0][0].logo.src_desktop = logoEc;

export const Group2 = () => footer(dataGroup2);

Group2.storyName = 'group 2';
Group2.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup2 },
  },
  controls: { disable: true },
};

export const Group3 = () => footer(prepareDataG3(dataGroup3));

Group3.storyName = 'group 3';
Group3.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup3 },
  },
  controls: { disable: true },
};

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};
