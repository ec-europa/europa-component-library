module.exports = {
  title: 'Icons',
  label: 'Icons',
  status: 'ready',
  preview: '@preview-icons',
  order: 3,
  collated: true,
  collator(markup, item) {
    return `
    <!-- Start demo of: @${item.handle} -->\n
    <div class="ecl-u-d-inline-flex">
      ${markup}
      <div class="ecl-u-ml-xs">${item.context.icon}</div>
    </div><br />
    <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'external',
  variants: [
    {
      name: 'arrow-down',
      label: 'Arrow down icon',
      context: {
        icon: 'arrow-down',
      },
    },
    {
      name: 'arrow-up',
      label: 'Arrow up icon',
      context: {
        icon: 'arrow-up',
      },
    },
    {
      name: 'audio',
      label: 'Audio icon',
      context: {
        icon: 'audio',
      },
    },
    {
      name: 'book',
      label: 'Book icon',
      context: {
        icon: 'book',
      },
    },
    {
      name: 'brochure',
      label: 'Brochure icon',
      context: {
        icon: 'brochure',
      },
    },
    {
      name: 'budget',
      label: 'Budget icon',
      context: {
        icon: 'budget',
      },
    },
    {
      name: 'calendar',
      label: 'Calendar icon',
      context: {
        icon: 'icon-calendar',
      },
    },
    {
      name: 'check',
      label: 'Check icon',
      context: {
        icon: 'check',
      },
    },
    {
      name: 'close',
      label: 'Close icon',
      context: {
        icon: 'close',
      },
    },
    {
      name: 'close-dark',
      label: 'Close (dark) icon',
      context: {
        icon: 'close-dark',
      },
    },
    {
      name: 'copy',
      label: 'Copy icon',
      context: {
        icon: 'copy',
      },
    },
    {
      name: 'data',
      label: 'Data icon',
      context: {
        icon: 'data',
      },
    },
    {
      name: 'digital',
      label: 'Digital icon',
      context: {
        icon: 'digital',
      },
    },
    {
      name: 'down',
      label: 'Down icon',
      context: {
        icon: 'down',
      },
    },
    {
      name: 'download',
      label: 'Download icon',
      context: {
        icon: 'download',
      },
    },
    {
      name: 'edit',
      label: 'Edit icon',
      context: {
        icon: 'edit',
      },
    },
    {
      name: 'energy',
      label: 'Energy icon',
      context: {
        icon: 'energy',
      },
    },
    {
      name: 'error',
      label: 'Error icon',
      context: {
        icon: 'error',
      },
    },
    {
      name: 'euro',
      label: 'Euro icon',
      context: {
        icon: 'euro',
      },
    },
    {
      name: 'external',
      label: 'External link icon',
      context: {
        icon: 'external',
      },
    },
    {
      name: 'facebook',
      label: 'Facebook icon',
      context: {
        icon: 'facebook',
      },
    },
    {
      name: 'faq',
      label: 'Faq icon',
      context: {
        icon: 'faq',
      },
    },
    {
      name: 'feedback',
      label: 'Feedback icon',
      context: {
        icon: 'feedback',
      },
    },
    {
      name: 'file',
      label: 'File icon',
      context: {
        icon: 'file',
      },
    },
    {
      name: 'gear',
      label: 'Gear',
      context: {
        icon: 'if_gear_298781',
      },
    },
    {
      name: 'generic-lang',
      label: 'Generic language icon',
      context: {
        icon: 'generic-lang',
      },
    },
    {
      name: 'global',
      label: 'Global icon',
      context: {
        icon: 'global',
      },
    },
    {
      name: 'googleplus',
      label: 'G+ icon',
      context: {
        icon: 'googleplus',
      },
    },
    {
      name: 'growth',
      label: 'Growth icon',
      context: {
        icon: 'growth',
      },
    },
    {
      name: 'image',
      label: 'Image icon',
      context: {
        icon: 'image',
      },
    },
    {
      name: 'info',
      label: 'Info icon',
      context: {
        icon: 'info',
      },
    },
    {
      name: 'infographic',
      label: 'Infographic icon',
      context: {
        icon: 'infographic',
      },
    },
    {
      name: 'language',
      label: 'Language icon',
      context: {
        icon: 'language',
      },
    },
    {
      name: 'left',
      label: 'Left icon',
      context: {
        icon: 'left',
      },
    },
    {
      name: 'linkedin',
      label: 'Linkedin icon',
      context: {
        icon: 'linkedin',
      },
    },
    {
      name: 'livestreaming',
      label: 'Live streaming icon',
      context: {
        icon: 'livestreaming',
      },
    },
    {
      name: 'location',
      label: 'Location icon',
      context: {
        icon: 'location',
      },
    },
    {
      name: 'multiple-files',
      label: 'Multiple files icon',
      context: {
        icon: 'multiple-files',
      },
    },
    {
      name: 'organigram',
      label: 'Organigram icon',
      context: {
        icon: 'organigram',
      },
    },
    {
      name: 'package',
      label: 'Package icon',
      context: {
        icon: 'package',
      },
    },
    {
      name: 'presentation',
      label: 'Presentation icon',
      context: {
        icon: 'presentation',
      },
    },
    {
      name: 'regulation',
      label: 'Regulation icon',
      context: {
        icon: 'regulation',
      },
    },
    {
      name: 'right',
      label: 'Right icon',
      context: {
        icon: 'right',
      },
    },
    {
      name: 'rss',
      label: 'RSS icon',
      context: {
        icon: 'rss',
      },
    },
    {
      name: 'search',
      label: 'Search icon',
      context: {
        icon: 'search',
      },
    },
    {
      name: 'share',
      label: 'Share icon',
      context: {
        icon: 'share',
      },
    },
    {
      name: 'spinner',
      label: 'Spinner icon',
      context: {
        icon: 'spinner',
      },
    },
    {
      name: 'spreadsheet',
      label: 'Spreadsheet icon',
      context: {
        icon: 'spreadsheet',
      },
    },
    {
      name: 'success',
      label: 'Success icon',
      context: {
        icon: 'success',
      },
    },
    {
      name: 'twitter',
      label: 'Twitter icon',
      context: {
        icon: 'twitter',
      },
    },
    {
      name: 'up',
      label: 'Up icon',
      context: {
        icon: 'up',
      },
    },
    {
      name: 'video',
      label: 'Video icon',
      context: {
        icon: 'video',
      },
    },
    {
      name: 'warning',
      label: 'Warning icon',
      context: {
        icon: 'warning',
      },
    },
  ],
  context: {
    icon_path: '../../ec-preset-website/images/icons/symbol-defs.svg',
    size: 'xl',
  },
};
