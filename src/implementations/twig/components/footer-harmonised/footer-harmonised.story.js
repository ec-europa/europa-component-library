import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

// import logoEC from '@ecl/resources-ec-logo/logo--en.svg';
import dataGroup1 from '@ecl/specs-component-footer-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-footer-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-footer-harmonised/demo/data--group3';

import footerHarmonised from './footer-harmonised.html.twig';
import notes from './README.md';

const getArgTypes = () => {
  const argTypes = {};
  argTypes.hide_contact = {
    name: 'contact us',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Hide "Contact us" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  argTypes.hide_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Hide "Follow us" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  argTypes.hide_about = {
    name: 'about us',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Hide "About us" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  argTypes.hide_relate_site = {
    name: 'related sites',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Hide "Related sites" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  argTypes.hide_class_name = {
    name: 'class name',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'hide "Class name" section',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  argTypes.hide_partnership_logo = {
    name: 'partnership logo',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Hide the Partnership logo',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  const res = JSON.parse(JSON.stringify(data));
  if (args.hide_contact === true && args.hide_follow === true) {
    res.sections.splice(1, 1);
  } else if (args.hide_contact === true) {
    res.sections[1].splice(0, 1);
    if (args.hide_follow !== true) {
      const follow = { ...data.sections[1][1] };
      res.sections[1] = follow;
    }
  } else if (args.hide_follow === true) {
    res.sections[1].splice(1, 2);
    if (args.hide_contact !== true) {
      const contact = { ...data.sections[1][0] };
      res.sections[1] = contact;
    }
  }
  if (args.hide_about === true) {
    res.sections[2].splice(0, 1);
  }
  if (args.hide_relate_site === true) {
    res.sections[2].splice(1, 0);
  }
  if (args.hide_class_name === true) {
    res.sections.splice(3, 4);
  }

  // eslint-disable-next-line no-console
  console.log(res);
  return res;
};

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
  },
};

export const Group1 = (args) => footerHarmonised(prepareData(dataGroup1, args));

Group1.storyName = 'group 1';
Group1.argTypes = getArgTypes();
Group1.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup1 },
  },
};

export const Group2 = (args) => footerHarmonised(prepareData(dataGroup2, args));

Group2.storyName = 'group 2';
Group2.argTypes = getArgTypes();
Group2.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup2 },
  },
};

export const Group3 = (args) => footerHarmonised(prepareData(dataGroup3, args));

Group3.storyName = 'group 3';
Group3.argTypes = getArgTypes();
Group3.parameters = {
  notes: {
    markdown: notes,
    json: { dataGroup3 },
  },
};
