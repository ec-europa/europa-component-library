import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefault from './demo/data--with-translation';

import file from './file.html.twig';
import notes from './README.md';

const system = getSystem();

let previewTimeout = null;

const getArgs = (data) => {
  const args = {
    show_image: false,
    show_label: true,
    show_description: true,
    show_meta: true,
    show_lists: true,
    show_preview: false,
    show_translations: true,
    translation_count: data.translation.items.length,
    download_attribute: false,
    title: data.title,
    show_title_link: false,
    description: data.description,
    download_label: data.download.link.label,
    icon_name: data.icon.name,
    image: data.picture.img.src,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {};

  argTypes.show_label = {
    name: 'label',
    type: { name: 'boolean' },
    description: 'Show label',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_meta = {
    name: 'primary meta',
    type: { name: 'boolean' },
    description: 'Show primary meta',
    table: {
      category: 'Optional',
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

  argTypes.show_lists = {
    name: 'lists',
    type: { name: 'boolean' },
    description: 'Show lists',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_preview = {
    name: 'preview',
    type: { name: 'boolean' },
    description: 'Show preview placeholder',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_translations = {
    name: 'translations',
    type: 'boolean',
    description: 'Show translations',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_image = {
    name: 'image',
    type: 'boolean',
    description: 'Show image',
    table: {
      category: 'Optional',
    },
  };

  argTypes.download_attribute = {
    name: 'download attribute',
    type: { name: 'boolean' },
    description: 'Add download attribute to the download link',
    table: {
      category: 'Optional',
    },
  };

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

  argTypes.show_title_link = {
    name: 'title link',
    type: { name: 'boolean' },
    description: 'Make the title a link',
    table: {
      type: { summary: 'boolean' },
      category: 'Content',
    },
  };

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

  argTypes.icon_name = {
    name: 'icon',
    type: { name: 'select' },
    description: 'File type icon (sample)',
    options: ['file-pdf', 'file-doc', 'file-xls'],
    control: {
      labels: {
        'file-pdf': 'pdf',
        'file-doc': 'doc',
        'file-xls': 'xls',
      },
    },
    mapping: {
      pdf: 'file-pdf',
      doc: 'file-doc',
      xls: 'file-xls',
    },
    table: {
      type: { summary: 'string' },
      category: 'Content',
    },
  };

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

  argTypes.translation_count = {
    name: 'number of translations',
    type: { name: 'number' },
    description: 'Number of translation items to display',
    control: {
      type: 'range',
      min: 1,
      max: dataDefault.translation.items.length,
      step: 1,
    },
    table: {
      type: { summary: 'number' },
      category: 'Content',
    },
    if: { arg: 'show_translations' },
  };

  return argTypes;
};

const prepareData = (data, args, preview = false) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (system === 'eu') {
    clone.icon.size = 'm';
  }

  clone.icon.name = args.icon_name;
  clone.download.link.label = args.download_label;
  clone.download_attribute = args.download_attribute;

  if (!args.show_label) {
    delete clone.label;
  }

  if (!args.show_meta) {
    delete clone.primary_meta;
  }

  if (args.show_preview && preview) {
    clone.download.extra_attributes = [{ name: 'data-wt-preview' }];
    // Add preview placeholder
    clearTimeout(previewTimeout);
    previewTimeout = setTimeout(() => {
      const downloadAction =
        document.getElementsByClassName('ecl-file__action')[0];
      if (downloadAction) {
        const previewLink = document.createElement('a');
        previewLink.innerHTML = 'View (placeholder)';
        previewLink.setAttribute('href', '#');
        previewLink.classList.add(
          'ecl-link',
          'ecl-link--standalone',
          'ecl-link--brand',
        );
        downloadAction.prepend(previewLink);
      }

      const translationAction = Array.prototype.slice.call(
        document.getElementsByClassName('ecl-file__translation-action'),
        0,
      );
      if (translationAction) {
        for (let i = 0; i < translationAction.length; i += 1) {
          const previewLink = document.createElement('a');
          previewLink.innerHTML = 'View (placeholder)';
          previewLink.setAttribute('href', '#');
          previewLink.classList.add('ecl-link', 'ecl-link--standalone');
          translationAction[i].prepend(previewLink);
        }
      }
    }, 500);
  }

  if (!args.show_description) {
    delete clone.description;
  }

  if (!args.show_image) {
    delete clone.picture;
  }

  if (!args.show_translations) {
    delete clone.translation;
  } else {
    clone.translation.items = clone.translation.items.slice(
      0,
      args.translation_count,
    );
  }

  if (!args.show_lists) {
    delete clone.lists;
  }

  const result = Object.assign(correctPaths(clone), args);

  if (args.show_title_link) {
    result.title = {
      link: {
        label: args.title,
        path: '#',
      },
    };
  }

  return result;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode],
  parameters: {
    chromatic: {
      modes: {
        m: { disable: true },
        xl: { disable: true },
      },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedFile = await file(prepareData(dataDefault, args, true));
  return renderedFile;
};
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataDefault, args),
  },
};
