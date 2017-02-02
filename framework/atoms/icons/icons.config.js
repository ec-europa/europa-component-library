module.exports = {
  title: 'Icons',
  label: 'Icons',
  status: 'wip',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<p>\n${markup} <code>${item.context.modifier}</code>\n</p>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'external',
  variants: [{
    name: 'external',
    label: 'External link icon',
    context: {
      modifier: 'icon--external',
    },
  }, {
    name: 'arrow-up',
    label: 'Arrow up icon',
    context: {
      modifier: 'icon--arrow-up',
    },
  }, {
    name: 'arrow-down',
    label: 'Arrow down icon',
    context: {
      modifier: 'icon--arrow-down',
    },
  }, {
    name: 'feedback',
    label: 'Feedback icon',
    context: {
      modifier: 'icon--feedback',
    },
  }, {
    name: 'spinner',
    label: 'Spinner icon',
    context: {
      modifier: 'icon--spinner',
    },
  }, {
    name: 'search',
    label: 'Search icon',
    context: {
      modifier: 'icon--search',
    },
  }, {
    name: 'language',
    label: 'Language icon',
    context: {
      modifier: 'icon--language',
    },
  }, {
    name: 'facebook',
    label: 'Facebook icon',
    context: {
      modifier: 'icon--facebook',
    },
  }, {
    name: 'twitter',
    label: 'Twitter icon',
    context: {
      modifier: 'icon--twitter',
    },
  }, {
    name: 'googleplus',
    label: 'G+ icon',
    context: {
      modifier: 'icon--googleplus',
    },
  }, {
    name: 'linkedin',
    label: 'Linkedin icon',
    context: {
      modifier: 'icon--linkedin',
    },
  }, {
    name: 'rss',
    label: 'RSS icon',
    context: {
      modifier: 'icon--rss',
    },
  }, {
    name: 'up',
    label: 'Up icon',
    context: {
      modifier: 'icon--up',
    },
  }, {
    name: 'right',
    label: 'Right icon',
    context: {
      modifier: 'icon--right',
    },
  }, {
    name: 'down',
    label: 'Down icon',
    context: {
      modifier: 'icon--down',
    },
  }, {
    name: 'left',
    label: 'Left icon',
    context: {
      modifier: 'icon--left',
    },
  }, {
    name: 'file',
    label: 'File icon',
    context: {
      modifier: 'icon--file',
    },
  }, {
    name: 'audio',
    label: 'Audio icon',
    context: {
      modifier: 'icon--audio',
    },
  }, {
    name: 'brochure',
    label: 'Brochure icon',
    context: {
      modifier: 'icon--brochure',
    },
  }, {
    name: 'edit',
    label: 'Edit icon',
    context: {
      modifier: 'icon--edit',
    },
  }, {
    name: 'image',
    label: 'Image icon',
    context: {
      modifier: 'icon--image',
    },
  }, {
    name: 'download',
    label: 'Download icon',
    context: {
      modifier: 'icon--download',
    },
  }, {
    name: 'infographic',
    label: 'Infographic icon',
    context: {
      modifier: 'icon--infographic',
    },
  }, {
    name: 'multiple-files',
    label: 'Multiple files icon',
    context: {
      modifier: 'icon--multiple-files',
    },
  }, {
    name: 'organigram',
    label: 'Organigram icon',
    context: {
      modifier: 'icon--organigram',
    },
  }, {
    name: 'package',
    label: 'Package icon',
    context: {
      modifier: 'icon--package',
    },
  }, {
    name: 'slides',
    label: 'Slides icon',
    context: {
      modifier: 'icon--slides',
    },
  }, {
    name: 'video',
    label: 'Video icon',
    context: {
      modifier: 'icon--video',
    },
  }, {
    name: 'error',
    label: 'Error icon',
    context: {
      modifier: 'icon--error',
    },
  }, {
    name: 'success',
    label: 'Success icon',
    context: {
      modifier: 'icon--success',
    },
  }, {
    name: 'warning',
    label: 'Warning icon',
    context: {
      modifier: 'icon--warning',
    },
  }, {
    name: 'check',
    label: 'Check icon',
    context: {
      modifier: 'icon--check',
    },
  }, {
    name: 'generic-lang',
    label: 'Generic language icon',
    context: {
      modifier: 'icon--generic-lang',
    },
  }, {
    name: 'budget',
    label: 'Budget icon',
    context: {
      modifier: 'icon--budget',
    },
  }, {
    name: 'digital',
    label: 'Digital icon',
    context: {
      modifier: 'icon--digital',
    },
  }, {
    name: 'energy',
    label: 'Energy icon',
    context: {
      modifier: 'icon--energy',
    },
  }, {
    name: 'euro',
    label: 'Euro icon',
    context: {
      modifier: 'icon--euro',
    },
  }, {
    name: 'global',
    label: 'Global icon',
    context: {
      modifier: 'icon--global',
    },
  }, {
    name: 'growth',
    label: 'Growth icon',
    context: {
      modifier: 'icon--growth',
    },
  }, {
    name: 'regulation',
    label: 'Regulation icon',
    context: {
      modifier: 'icon--regulation',
    },
  }, {
    name: 'tag-close',
    label: 'Tag-close icon',
    context: {
      modifier: 'icon--tag-close',
    },
  }, {
    name: 'tag-close-hover',
    label: 'Tag close with hover state',
    context: {
      modifier: 'icon--tag-close-hover',
    },
  }, {
    name: 'calendar',
    label: 'Calendar icon',
    context: {
      modifier: 'icon--calendar',
    },
  }, {
    name: 'location',
    label: 'Location icon',
    context: {
      modifier: 'icon--location',
    },
  }, {
    name: 'livestreaming',
    label: 'Live streaming icon',
    context: {
      modifier: 'icon--livestreaming',
    },
  }, {
    name: 'camera',
    label: 'Camera icon',
    context: {
      modifier: 'icon--camera',
    },
  }],
};
