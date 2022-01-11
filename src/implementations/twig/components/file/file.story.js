import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import dataWithTranslation from '@ecl/specs-component-file/demo/data--with-translation';
import dataDefault from '@ecl/specs-component-file/demo/data--without-translation';
import dataThumbnail from '@ecl/specs-component-file/demo/data--thumbnail';
import dataThumbnailTaxonomy from '@ecl/specs-component-file/demo/data--taxonomy';

import file from './file.html.twig';
import notes from './README.md';

const listsClone = { ...dataThumbnailTaxonomy.lists[0] };
const metaClone = [...dataThumbnail.detail_meta];
const labelClone = { ...dataThumbnail.label };
const translationsClone = { ...dataWithTranslation.translation };
const system = getSystem();

const getArgs = (data) => {
  const args = {
    show_label: !!data.label,
    title: data.title,
    download_label: data.download.link.label,
  };
  if (data.description) {
    args.show_description = !!data.description;
    args.description = data.description || '';
  }
  if (data.detail_meta) {
    args.show_meta = true;
  }
  if (!data.image) {
    args.toggle_label = translationsClone.toggle.label;
    args.show_translations = false;
  } else {
    args.show_image = !!data.image;
    args.show_taxonomy = false;
    args.image =
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg';
  }
  if (data.lists) {
    args.lists = false;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    show_label: {
      name: 'label',
      type: { name: 'boolean' },
      description: 'Show label',
      table: {
        category: 'Optional',
      },
    },
  };

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
  if (data.lists) {
    argTypes.show_lists = {
      name: 'taxonomies',
      type: 'boolean',
      description: 'Show the list with taxonomies',
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
  if (data.image) {
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
    };
    argTypes.show_taxonomy = {
      name: 'taxonomies',
      type: 'boolean',
      description: 'Show taxonomies',
      table: {
        category: 'Optional',
      },
    };
  } else {
    argTypes.show_translations = {
      name: 'translations',
      type: 'boolean',
      description: 'Show translations',
      table: {
        category: 'Optional',
      },
    };
    argTypes.toggle_label = {
      name: 'toggle label',
      type: { name: 'string' },
      description: 'The label of the toggler',
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
  if (system === 'eu') {
    data.icon.size = 'm';
  }

  data.title = args.title;
  data.description = args.description;
  data.download.link.label = args.download_label;

  if (args.show_label) {
    data.label = labelClone;
  } else if (!args.show_label && data.label) {
    data.label = {};
  }

  if (args.show_meta && data.detail_meta) {
    data.detail_meta = metaClone;
  } else if (!args.show_meta && data.detail_meta) {
    data.detail_meta = [];
  }

  if (args.show_description) {
    data.description = args.description;
  } else if (!args.show_description && data.description) {
    data.description = '';
  }

  if (args.show_image && data.image) {
    data.image.src = args.image;
  } else if (!args.show_image && data.image) {
    data.image = {};
  }

  if (args.show_translations) {
    data.translation = translationsClone;
    data.translation.toggle.label = args.toggle_label;
  } else if (!args.show_translations && data.translation) {
    data.translation = {};
  }

  if (args.show_taxonomy) {
    data.lists = [listsClone];
  } else {
    data.lists = [];
  }

  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode],
};

export const Default = (args) => file(prepareData(dataDefault, args));

Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const Thumbnail = (args) => file(prepareData(dataThumbnail, args));

Thumbnail.storyName = 'with thumbnail';
Thumbnail.args = getArgs(dataThumbnail);
Thumbnail.argTypes = getArgTypes(dataThumbnail);
Thumbnail.parameters = { notes: { markdown: notes, json: dataThumbnail } };
