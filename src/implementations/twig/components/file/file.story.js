import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataWithTranslation from '@ecl/specs-component-file/demo/data--with-translation';
import dataWithoutTranslation from '@ecl/specs-component-file/demo/data--without-translation';
import dataThumbnail from '@ecl/specs-component-file/demo/data--thumbnail';

import file from './file.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  if (data.detail_meta) {
    argTypes.detail_meta = {
      name: 'Meta',
      type: 'array',
      defaultValue: data.detail_meta,
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
    defaultValue: data.title,
    description: 'The heading must describe the downloadable file accurately',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  if (data.description) {
    argTypes.description = {
      name: 'description',
      type: 'string',
      defaultValue: data.description,
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
    defaultValue: data.download.link.label,
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
      defaultValue: data.image.src,
      description: 'Select different image variant to test thumbnail size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'select',
        options: {
          landscape:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          portrait:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          square:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
        },
      },
    };
  }

  if (data.translation) {
    argTypes.toggle_label = {
      name: 'toggle label',
      type: 'string',
      defaultValue: data.translation.toggle.label,
      description:
        'The label of the button to display the file in different languages available',
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
  correctSvgPath(data);
  data.detail_meta = args.detail_meta;
  data.title = args.title;
  data.description = args.description;
  data.download.link.label = args.download_label;
  if (data.image) {
    data.image.src = args.image;
  }
  if (data.translation) {
    data.translation.toggle.label = args.toggle_label;
  }

  return data;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const WithoutTranslation = (args) =>
  file(prepareData(dataWithoutTranslation, args));

WithoutTranslation.storyName = 'without translation';
WithoutTranslation.argTypes = getArgTypes(dataWithoutTranslation);
WithoutTranslation.parameters = {
  notes: { markdown: notes, json: dataWithoutTranslation },
};

export const WithTranslation = (args) =>
  file(prepareData(dataWithTranslation, args));

WithTranslation.storyName = 'with translation';
WithTranslation.argTypes = getArgTypes(dataWithTranslation);
WithTranslation.parameters = {
  notes: { markdown: notes, json: dataWithTranslation },
};

export const Thumbnail = (args) => file(prepareData(dataThumbnail, args));

Thumbnail.storyName = 'thumbnail';
Thumbnail.argTypes = getArgTypes(dataThumbnail);
Thumbnail.parameters = { notes: { markdown: notes, json: dataThumbnail } };
