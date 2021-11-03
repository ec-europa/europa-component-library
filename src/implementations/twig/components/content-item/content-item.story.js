import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataContentItem from '@ecl/specs-component-content-item/demo/data';

import contentItem from './content-item.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {};
  args.image_size = 'l';

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  if (data.image) {
    argTypes.image_size = {
      name: 'image size',
      type: 'select',
      description: "Possible image sizes ('s' or 'l')",
      options: {
        'small (square)': 's',
        'large (landscape)': 'l',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  if (data.image) {
    data.image.size = args.image_size;
  }

  correctSvgPath(data);
  return data;
};

export default {
  title: 'Components/Content item',
  decorators: [withCode, withNotes],
};

export const ContentItem = (args) =>
  contentItem(prepareData(dataContentItem, args));

ContentItem.storyName = 'default';
ContentItem.args = getArgs(dataContentItem);
ContentItem.argTypes = getArgTypes(dataContentItem);
ContentItem.parameters = { notes: { markdown: notes, json: dataContentItem } };
