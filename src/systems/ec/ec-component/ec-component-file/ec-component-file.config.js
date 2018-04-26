const contextDefault = require('@ecl/generic-component-file/data/demo--default');
const contextTranslations = require('@ecl/generic-component-file/data/demo--translations');
const contextLinks = require('@ecl/generic-component-file/data/demo--links');
const contextImages = require('@ecl/generic-component-file/data/demo--images');
const contextVideosIframe = require('@ecl/generic-component-file/data/demo--videos-iframe');
const contextVideosTag = require('@ecl/generic-component-file/data/demo--videos-tag');

module.exports = {
  title: 'Files',
  label: 'Files',
  status: 'ready',
  tags: ['molecule'],
  collated: false,
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default file download',
      context: contextDefault,
    },
    {
      name: 'translations',
      label: 'File download with translations',
      context: contextTranslations,
    },
    {
      name: 'links',
      label: 'Links to files',
      context: contextLinks,
    },
    {
      name: 'images',
      label: 'Image file',
      context: contextImages,
    },
    {
      name: 'videos-iframe',
      label: 'Video file (with iframe)',
      context: contextVideosIframe,
    },
    {
      name: 'videos-tag',
      label: 'Video file (with video tag)',
      context: contextVideosTag,
    },
  ],
};
