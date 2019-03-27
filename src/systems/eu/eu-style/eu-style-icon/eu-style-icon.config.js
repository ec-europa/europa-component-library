module.exports = {
  title: 'Icons',
  label: 'Icons',
  status: 'ready',
  order: 3,
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <p>\n
        <span class="ecl-icon ${item.context.modifier}"></span>\n
        <span class="ecl-icon ecl-icon--rounded ecl-u-bg-secondary ${
          item.context.modifier
        }"></span>\n
        <span class="ecl-icon ecl-u-color-primary ${
          item.context.modifier
        }"></span>\n
        <code>${item.context.modifier}</code>\n
      </p>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'external',
  variants: [
    {
      name: 'arrow-down',
      label: 'Arrow down icon',
      context: {
        modifier: 'ecl-icon--arrow-down',
      },
    },
    {
      name: 'arrow-up',
      label: 'Arrow up icon',
      context: {
        modifier: 'ecl-icon--arrow-up',
      },
    },
    {
      name: 'audio',
      label: 'Audio icon',
      context: {
        modifier: 'ecl-icon--audio',
      },
    },
    {
      name: 'book',
      label: 'Book icon',
      context: {
        modifier: 'ecl-icon--book',
      },
    },
    {
      name: 'breadcrumb',
      label: 'Breadcrumb icon',
      context: {
        modifier: 'ecl-icon--breadcrumb',
      },
    },
    {
      name: 'brochure',
      label: 'Brochure icon',
      context: {
        modifier: 'ecl-icon--brochure',
      },
    },
    {
      name: 'budget',
      label: 'Budget icon',
      context: {
        modifier: 'ecl-icon--budget',
      },
    },
    {
      name: 'calendar',
      label: 'Calendar icon',
      context: {
        modifier: 'ecl-icon--calendar',
      },
    },
    {
      name: 'camera',
      label: 'Camera icon',
      context: {
        modifier: 'ecl-icon--camera',
      },
    },
    {
      name: 'check',
      label: 'Check icon',
      context: {
        modifier: 'ecl-icon--check',
      },
    },
    {
      name: 'close',
      label: 'Close icon',
      context: {
        modifier: 'ecl-icon--close',
      },
    },
    {
      name: 'close-dark',
      label: 'Close (dark) icon',
      context: {
        modifier: 'ecl-icon--close-dark',
      },
    },
    {
      name: 'copy',
      label: 'Copy icon',
      context: {
        modifier: 'ecl-icon--copy',
      },
    },
    {
      name: 'data',
      label: 'Data icon',
      context: {
        modifier: 'ecl-icon--data',
      },
    },
    {
      name: 'digital',
      label: 'Digital icon',
      context: {
        modifier: 'ecl-icon--digital',
      },
    },
    {
      name: 'down',
      label: 'Down icon',
      context: {
        modifier: 'ecl-icon--down',
      },
    },
    {
      name: 'download',
      label: 'Download icon',
      context: {
        modifier: 'ecl-icon--download',
      },
    },
    {
      name: 'edit',
      label: 'Edit icon',
      context: {
        modifier: 'ecl-icon--edit',
      },
    },
    {
      name: 'energy',
      label: 'Energy icon',
      context: {
        modifier: 'ecl-icon--energy',
      },
    },
    {
      name: 'error',
      label: 'Error icon',
      context: {
        modifier: 'ecl-icon--error',
      },
    },
    {
      name: 'euro',
      label: 'Euro icon',
      context: {
        modifier: 'ecl-icon--euro',
      },
    },
    {
      name: 'external',
      label: 'External link icon',
      context: {
        modifier: 'ecl-icon--external',
      },
    },
    {
      name: 'facebook',
      label: 'Facebook icon',
      context: {
        modifier: 'ecl-icon--facebook',
      },
    },
    {
      name: 'faq',
      label: 'Faq icon',
      context: {
        modifier: 'ecl-icon--faq',
      },
    },
    {
      name: 'feedback',
      label: 'Feedback icon',
      context: {
        modifier: 'ecl-icon--feedback',
      },
    },
    {
      name: 'file',
      label: 'File icon',
      context: {
        modifier: 'ecl-icon--file',
      },
    },
    {
      name: 'gear',
      label: 'Gear',
      context: {
        modifier: 'ecl-icon--gear',
      },
    },
    {
      name: 'generic-lang',
      label: 'Generic language icon',
      context: {
        modifier: 'ecl-icon--generic-lang',
      },
    },
    {
      name: 'global',
      label: 'Global icon',
      context: {
        modifier: 'ecl-icon--global',
      },
    },
    {
      name: 'growth',
      label: 'Growth icon',
      context: {
        modifier: 'ecl-icon--growth',
      },
    },
    {
      name: 'image',
      label: 'Image icon',
      context: {
        modifier: 'ecl-icon--image',
      },
    },
    {
      name: 'in',
      label: 'In icon',
      context: {
        modifier: 'ecl-icon--in',
      },
    },
    {
      name: 'info',
      label: 'Info icon',
      context: {
        modifier: 'ecl-icon--info',
      },
    },
    {
      name: 'infographic',
      label: 'Infographic icon',
      context: {
        modifier: 'ecl-icon--infographic',
      },
    },
    {
      name: 'instagram',
      label: 'Instagram icon',
      context: {
        modifier: 'ecl-icon--instagram',
      },
    },
    {
      name: 'language',
      label: 'Language icon',
      context: {
        modifier: 'ecl-icon--language',
      },
    },
    {
      name: 'left',
      label: 'Left icon',
      context: {
        modifier: 'ecl-icon--left',
      },
    },
    {
      name: 'linkedin',
      label: 'Linkedin icon',
      context: {
        modifier: 'ecl-icon--linkedin',
      },
    },
    {
      name: 'livestreaming',
      label: 'Live streaming icon',
      context: {
        modifier: 'ecl-icon--livestreaming',
      },
    },
    {
      name: 'location',
      label: 'Location icon',
      context: {
        modifier: 'ecl-icon--location',
      },
    },
    {
      name: 'multiple-files',
      label: 'Multiple files icon',
      context: {
        modifier: 'ecl-icon--multiple-files',
      },
    },
    {
      name: 'organigram',
      label: 'Organigram icon',
      context: {
        modifier: 'ecl-icon--organigram',
      },
    },
    {
      name: 'package',
      label: 'Package icon',
      context: {
        modifier: 'ecl-icon--package',
      },
    },
    {
      name: 'presentation',
      label: 'Presentation icon',
      context: {
        modifier: 'ecl-icon--presentation',
      },
    },
    {
      name: 'regulation',
      label: 'Regulation icon',
      context: {
        modifier: 'ecl-icon--regulation',
      },
    },
    {
      name: 'right',
      label: 'Right icon',
      context: {
        modifier: 'ecl-icon--right',
      },
    },
    {
      name: 'rss',
      label: 'RSS icon',
      context: {
        modifier: 'ecl-icon--rss',
      },
    },
    {
      name: 'search',
      label: 'Search icon',
      context: {
        modifier: 'ecl-icon--search',
      },
    },
    {
      name: 'share',
      label: 'Share icon',
      context: {
        modifier: 'ecl-icon--share',
      },
    },
    {
      name: 'slides',
      label: 'Slides icon',
      context: {
        modifier: 'ecl-icon--slides',
      },
    },
    {
      name: 'spinner',
      label: 'Spinner icon',
      context: {
        modifier: 'ecl-icon--spinner',
      },
    },
    {
      name: 'spreadsheet',
      label: 'Spreadsheet icon',
      context: {
        modifier: 'ecl-icon--spreadsheet',
      },
    },
    {
      name: 'success',
      label: 'Success icon',
      context: {
        modifier: 'ecl-icon--success',
      },
    },
    {
      name: 'tag-close',
      label: 'Tag-close icon',
      context: {
        modifier: 'ecl-icon--tag-close',
      },
    },
    {
      name: 'twitter',
      label: 'Twitter icon',
      context: {
        modifier: 'ecl-icon--twitter',
      },
    },
    {
      name: 'up',
      label: 'Up icon',
      context: {
        modifier: 'ecl-icon--up',
      },
    },
    {
      name: 'video',
      label: 'Video icon',
      context: {
        modifier: 'ecl-icon--video',
      },
    },
    {
      name: 'warning',
      label: 'Warning icon',
      context: {
        modifier: 'ecl-icon--warning',
      },
    },
  ],
};
