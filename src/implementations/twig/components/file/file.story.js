import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefault from '@ecl/specs-component-file/demo/data--with-translation';
import dataThumbnailTaxonomy from '@ecl/specs-component-file/demo/data--taxonomy';

import file from './file.html.twig';
import notes from './README.md';

const system = getSystem();

const getArgs = (data) => {
  const args = {
    title: data.title,
    download_label: data.download.link.label,
  };

  if (data.label) {
    args.show_label = true;
  }
  if (data.translation) {
    args.show_translations = true;
    args.toggle_label = data.translation.toggle.label || '';
  }
  if (data.description) {
    args.show_description = !!data.description;
    args.description = data.description || '';
  }
  if (data.detail_meta) {
    args.show_meta = true;
  }
  if (data.picture) {
    args.show_image = !!data.picture;
    args.show_taxonomy = !!data.lists;
    args.image =
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  if (data.label) {
    argTypes.show_label = {
      name: 'label',
      type: { name: 'boolean' },
      description: 'Show label',
      table: {
        category: 'Optional',
      },
    };
  }

  if (data.detail_meta) {
    argTypes.show_meta = {
      name: 'meta',
      type: { name: 'boolean' },
      description: 'Show meta',
      table: {
        category: 'Optional',
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
  if (data.description) {
    argTypes.description = {
      name: 'description',
      type: { name: 'string' },
      description: 'Description of the file',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_description' },
    };
    argTypes.show_description = {
      name: 'description',
      type: { name: 'boolean' },
      description: 'Show description',
      table: {
        category: 'Optional',
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
  if (data.picture) {
    argTypes.show_image = {
      name: 'image',
      type: 'boolean',
      description: 'Show image',
      table: {
        category: 'Optional',
      },
    };
    argTypes.image = {
      name: 'image example',
      type: 'select',
      description: 'Select different image variant to test thumbnail size',
      options: [
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
      ],
      control: {
        labels: {
          none: 'none',
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg':
            'landscape',
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg':
            'portrait',
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg':
            'square',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_image' },
    };
    argTypes.show_taxonomy = {
      name: 'taxonomies',
      type: 'boolean',
      description: 'Show taxonomies',
      table: {
        category: 'Optional',
      },
    };
  }
  argTypes.toggle_label = {
    name: 'toggle label',
    type: { name: 'string' },
    description: 'The label of the toggler',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_translations' },
  };
  argTypes.show_translations = {
    name: 'translations',
    type: 'boolean',
    description: 'Show translations',
    table: {
      category: 'Optional',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (system === 'eu') {
    clone.icon.size = 'm';
  }

  clone.title = args.title;
  clone.description = args.description;
  clone.download.link.label = args.download_label;
  clone.translation.toggle.label = args.toggle_label;

  if (!args.show_label) {
    delete clone.label;
  }

  if (!args.show_meta) {
    delete clone.detail_meta;
  }

  if (!args.show_description) {
    delete clone.description;
  }

  if (!args.show_image) {
    delete clone.picture;
  } else {
    clone.picture.img.src = args.image;
  }

  if (!args.show_translations) {
    delete clone.translation;
  }

  if (!args.show_taxonomy) {
    delete clone.lists;
  }

  return clone;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedFile = await file(prepareData(dataDefault, args));
  return renderedFile;
};
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const Thumbnail = (_, { loaded: { component } }) => component;

Thumbnail.render = async (args) => {
  const renderedFileThumbnail = await file(
    prepareData(dataThumbnailTaxonomy, args),
  );
  return renderedFileThumbnail;
};
Thumbnail.storyName = 'with thumbnail';
Thumbnail.args = getArgs(dataThumbnailTaxonomy);
Thumbnail.argTypes = {
  ...getArgTypes(dataThumbnailTaxonomy),
  title: {
    type: { name: 'object' },
  },
};
Thumbnail.parameters = {
  notes: { markdown: notes, json: dataThumbnailTaxonomy },
};
