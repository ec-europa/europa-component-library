import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import dataWithTranslation from '@ecl/specs-component-file/demo/data--with-translation';
import dataWithoutTranslation from '@ecl/specs-component-file/demo/data--without-translation';
import dataThumbnail from '@ecl/specs-component-file/demo/data--thumbnail';
import dataThumbnailTaxonomy from '@ecl/specs-component-file/demo/data--taxonomy';

import file from './file.html.twig';
import notes from './README.md';

const listsClone = { ...dataThumbnailTaxonomy.lists[0] };

const getArgs = (data) => {
  const args = {
    title: data.title,
    download_label: data.download.link.label,
  };
  if (data.detail_meta) {
    args.detail_meta = data.detail_meta;
  }
  if (data.description) {
    args.description = data.description;
  }
  if (data.label) {
    args.label = data.label.label;
  }
  if (data.image) {
    args.image = data.image.src;
  }
  if (data.translation) {
    args.toggle_label = data.translation.toggle.label;
  }
  if (data.lists) {
    args.lists = true;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  if (data.detail_meta) {
    argTypes.detail_meta = {
      name: 'Meta',
      type: 'array',
      description: 'File metadatas (comma separated)',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  argTypes.title = {
    name: 'title',
    type: { name: 'string', required: true },
    description: 'The heading that describes the file',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  if (data.label) {
    argTypes.label = {
      name: 'label',
      type: { name: 'string' },
      description: 'The optional label element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (data.description) {
    argTypes.description = {
      name: 'description',
      type: 'string',
      description: 'A summary that describes the content of the file',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  argTypes.download_label = {
    name: 'download label',
    type: { name: 'string', required: true },
    description: 'The label of the link to download the file',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  if (data.image) {
    argTypes.image = {
      name: 'image example',
      type: 'select',
      description: 'Select different image variant to test thumbnail size',
      options: {
        landscape:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        portrait:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
        square:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (data.translation) {
    argTypes.toggle_label = {
      name: 'toggle label',
      type: 'string',
      description:
        'The label of the button to display the file in different languages available',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (data.lists) {
    argTypes.lists = {
      name: 'Show taxonomies',
      type: 'boolean',
      description: 'Show/hide the list with taxonomies',
      table: {
        category: 'Taxonomies',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  const system = getSystem();
  if (system === 'eu') {
    data.icon.size = 'm';
  }
  data.detail_meta = args.detail_meta;
  data.title = args.title;
  if (data.label) {
    data.label = {
      label: args.label,
      variant: data.label.variant,
    };
  }
  data.description = args.description;
  data.download.link.label = args.download_label;
  if (data.image) {
    data.image.src = args.image;
  }
  if (data.translation) {
    data.translation.toggle.label = args.toggle_label;
  }

  if (data.lists) {
    if (!args.lists) {
      data.lists = [];
    } else {
      data.lists = [listsClone];
    }
  }

  return data;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode],
};

export const WithoutTranslation = (args) =>
  file(prepareData(dataWithoutTranslation, args));

WithoutTranslation.storyName = 'without translation';
WithoutTranslation.args = getArgs(dataWithoutTranslation);
WithoutTranslation.argTypes = getArgTypes(dataWithoutTranslation);
WithoutTranslation.parameters = {
  notes: { markdown: notes, json: dataWithoutTranslation },
};

export const WithTranslation = (args) =>
  file(prepareData(dataWithTranslation, args));

WithTranslation.storyName = 'with translation';
WithTranslation.args = getArgs(dataWithTranslation);
WithTranslation.argTypes = getArgTypes(dataWithTranslation);
WithTranslation.parameters = {
  notes: { markdown: notes, json: dataWithTranslation },
};

export const Thumbnail = (args) => file(prepareData(dataThumbnail, args));

Thumbnail.storyName = 'with thumbnail';
Thumbnail.args = getArgs(dataThumbnail);
Thumbnail.argTypes = getArgTypes(dataThumbnail);
Thumbnail.parameters = { notes: { markdown: notes, json: dataThumbnail } };

export const ThumbnailTaxonomy = (args) =>
  file(prepareData(dataThumbnailTaxonomy, args));

ThumbnailTaxonomy.storyName = 'with taxonomy';
ThumbnailTaxonomy.args = getArgs(dataThumbnailTaxonomy);
ThumbnailTaxonomy.argTypes = getArgTypes(dataThumbnailTaxonomy);
ThumbnailTaxonomy.parameters = {
  notes: { markdown: notes, json: dataThumbnailTaxonomy },
};
