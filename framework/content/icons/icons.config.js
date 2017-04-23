module.exports = {
  title: 'Icons',
  label: 'Icons',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <p>\n
        <span class="ecl-icon ${item.context.modifier}"></span>\n
        <span class="ecl-icon ecl-icon--yellowbg ${item.context.modifier}"></span>\n
        <span class="ecl-icon ecl-icon--blue-dark ${item.context.modifier}"></span>\n
        <code>${item.context.modifier}</code>\n
      </p>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'external',
  variants: [{
    name: 'external',
    label: 'External link icon',
    context: {
      modifier: 'ecl-icon--external',
    },
  }, {
    name: 'arrow-up',
    label: 'Arrow up icon',
    context: {
      modifier: 'ecl-icon--arrow-up',
    },
  }, {
    name: 'arrow-down',
    label: 'Arrow down icon',
    context: {
      modifier: 'ecl-icon--arrow-down',
    },
  }, {
    name: 'feedback',
    label: 'Feedback icon',
    context: {
      modifier: 'ecl-icon--feedback',
    },
  }, {
    name: 'spinner',
    label: 'Spinner icon',
    context: {
      modifier: 'ecl-icon--spinner',
    },
  }, {
    name: 'search',
    label: 'Search icon',
    context: {
      modifier: 'ecl-icon--search',
    },
  }, {
    name: 'language',
    label: 'Language icon',
    context: {
      modifier: 'ecl-icon--language',
    },
  }, {
    name: 'facebook',
    label: 'Facebook icon',
    context: {
      modifier: 'ecl-icon--facebook',
    },
  }, {
    name: 'twitter',
    label: 'Twitter icon',
    context: {
      modifier: 'ecl-icon--twitter',
    },
  }, {
    name: 'googleplus',
    label: 'G+ icon',
    context: {
      modifier: 'ecl-icon--googleplus',
    },
  }, {
    name: 'linkedin',
    label: 'Linkedin icon',
    context: {
      modifier: 'ecl-icon--linkedin',
    },
  }, {
    name: 'rss',
    label: 'RSS icon',
    context: {
      modifier: 'ecl-icon--rss',
    },
  }, {
    name: 'up',
    label: 'Up icon',
    context: {
      modifier: 'ecl-icon--up',
    },
  }, {
    name: 'right',
    label: 'Right icon',
    context: {
      modifier: 'ecl-icon--right',
    },
  }, {
    name: 'down',
    label: 'Down icon',
    context: {
      modifier: 'ecl-icon--down',
    },
  }, {
    name: 'left',
    label: 'Left icon',
    context: {
      modifier: 'ecl-icon--left',
    },
  }, {
    name: 'file',
    label: 'File icon',
    context: {
      modifier: 'ecl-icon--file',
    },
  }, {
    name: 'audio',
    label: 'Audio icon',
    context: {
      modifier: 'ecl-icon--audio',
    },
  }, {
    name: 'brochure',
    label: 'Brochure icon',
    context: {
      modifier: 'ecl-icon--brochure',
    },
  }, {
    name: 'edit',
    label: 'Edit icon',
    context: {
      modifier: 'ecl-icon--edit',
    },
  }, {
    name: 'image',
    label: 'Image icon',
    context: {
      modifier: 'ecl-icon--image',
    },
  }, {
    name: 'download',
    label: 'Download icon',
    context: {
      modifier: 'ecl-icon--download',
    },
  }, {
    name: 'infographic',
    label: 'Infographic icon',
    context: {
      modifier: 'ecl-icon--infographic',
    },
  }, {
    name: 'multiple-files',
    label: 'Multiple files icon',
    context: {
      modifier: 'ecl-icon--multiple-files',
    },
  }, {
    name: 'organigram',
    label: 'Organigram icon',
    context: {
      modifier: 'ecl-icon--organigram',
    },
  }, {
    name: 'package',
    label: 'Package icon',
    context: {
      modifier: 'ecl-icon--package',
    },
  }, {
    name: 'slides',
    label: 'Slides icon',
    context: {
      modifier: 'ecl-icon--slides',
    },
  }, {
    name: 'video',
    label: 'Video icon',
    context: {
      modifier: 'ecl-icon--video',
    },
  }, {
    name: 'error',
    label: 'Error icon',
    context: {
      modifier: 'ecl-icon--error',
    },
  }, {
    name: 'success',
    label: 'Success icon',
    context: {
      modifier: 'ecl-icon--success',
    },
  }, {
    name: 'warning',
    label: 'Warning icon',
    context: {
      modifier: 'ecl-icon--warning',
    },
  }, {
    name: 'check',
    label: 'Check icon',
    context: {
      modifier: 'ecl-icon--check',
    },
  }, {
    name: 'generic-lang',
    label: 'Generic language icon',
    context: {
      modifier: 'ecl-icon--generic-lang',
    },
  }, {
    name: 'budget',
    label: 'Budget icon',
    context: {
      modifier: 'ecl-icon--budget',
    },
  }, {
    name: 'digital',
    label: 'Digital icon',
    context: {
      modifier: 'ecl-icon--digital',
    },
  }, {
    name: 'energy',
    label: 'Energy icon',
    context: {
      modifier: 'ecl-icon--energy',
    },
  }, {
    name: 'euro',
    label: 'Euro icon',
    context: {
      modifier: 'ecl-icon--euro',
    },
  }, {
    name: 'global',
    label: 'Global icon',
    context: {
      modifier: 'ecl-icon--global',
    },
  }, {
    name: 'growth',
    label: 'Growth icon',
    context: {
      modifier: 'ecl-icon--growth',
    },
  }, {
    name: 'regulation',
    label: 'Regulation icon',
    context: {
      modifier: 'ecl-icon--regulation',
    },
  }, {
    name: 'tag-close',
    label: 'Tag-close icon',
    context: {
      modifier: 'ecl-icon--tag-close',
    },
  }, {
    name: 'tag-close-hover',
    label: 'Tag close with hover state',
    context: {
      modifier: 'ecl-icon--tag-close-hover',
    },
  }, {
    name: 'calendar',
    label: 'Calendar icon',
    context: {
      modifier: 'ecl-icon--calendar',
    },
  }, {
    name: 'location',
    label: 'Location icon',
    context: {
      modifier: 'ecl-icon--location',
    },
  }, {
    name: 'livestreaming',
    label: 'Live streaming icon',
    context: {
      modifier: 'ecl-icon--livestreaming',
    },
  }, {
    name: 'camera',
    label: 'Camera icon',
    context: {
      modifier: 'ecl-icon--camera',
    },
  }],
};
