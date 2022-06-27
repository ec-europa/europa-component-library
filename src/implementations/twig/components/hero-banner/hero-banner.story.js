import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Import data for demos
import bannerDataSimplePrimary from '@ecl/specs-component-hero-banner/demo/data--simple-primary';
import bannerDataSimpleSecondary from '@ecl/specs-component-hero-banner/demo/data--simple-secondary';
import bannerDataSimpleWhite from '@ecl/specs-component-hero-banner/demo/data--simple-white';
import bannerDataImage from '@ecl/specs-component-hero-banner/demo/data--image-box';
import bannerDataImageShade from '@ecl/specs-component-hero-banner/demo/data--image-shade';
import bannerDataImageGradient from '@ecl/specs-component-hero-banner/demo/data--image-gradient';
import heroBanner from './hero-banner.html.twig';
import notes from './README.md';

const cta = { ...bannerDataSimplePrimary.link };
const getArgs = (data) => {
  const args = {
    show_description: true,
    show_button: true,
    title: data.title,
    description: data.description,
    label: data.link.link.label,
    centered: data.centered,
    width: 'outside',
    gridContent: false,
  };
  if (data.image) {
    args.image = data.image || '';
  }
  if (data.credit) {
    args.show_credit = true;
    args.credit = data.credit || '';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    show_description: {
      name: 'description',
      type: { name: 'boolean' },
      description: 'Show the description',
      table: {
        category: 'Optional',
      },
    },
    show_button: {
      name: 'button',
      type: { name: 'boolean' },
      description: 'Show the cta button',
      table: {
        category: 'Optional',
      },
    },

    title: {
      type: { name: 'string', required: true },
      description: 'Heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    description: {
      type: 'string',
      description: 'Sub-heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    label: {
      type: 'string',
      description: 'Label of the call to action link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    centered: {
      type: 'boolean',
      description: 'Whether the content of the banner is centered or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'Display',
      },
    },
    width: {
      name: 'width',
      type: 'radio',
      options: ['outside', 'container', 'inside'],
      control: {
        labels: {
          outside: 'outside the grid container',
          container: 'inside the grid container',
          inside: 'inside the grid container, with fullwidth class',
        },
      },
      description: `The media container extends to the whole viewport by default when outside the grid,
        if it's inside it can still be extended by adding class .ecl-hero-banner--full-width`,
      table: {
        type: { summary: 'radio' },
        defaultValue: { summary: 'outside the grid container' },
        category: 'Display',
      },
    },
    gridContent: {
      name: 'demo grid content',
      type: { name: 'boolean' },
      description:
        'Inject a test content block displayed on the grid, to see the alignment',
      table: {
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    },
  };

  if (data.image) {
    argTypes.show_credit = {
      name: 'credit',
      type: { name: 'boolean' },
      description: 'Show the credit',
      table: {
        category: 'Optional',
      },
    };
    argTypes.image = {
      type: 'string',
      description: 'Path or Url of the background image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.credit = {
      type: 'string',
      description: 'Credit of the image',
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
  data.title = args.title;
  data.description = args.description;
  data.centered = args.centered;
  data.full_width = args.width === 'inside';

  if (data.image) {
    data.image = args.image;
    data.credit = args.credit;
  }
  if (!args.show_credit) {
    data.credit = '';
  }
  if (!args.show_description) {
    data.description = '';
  }
  if (!args.show_button) {
    data.link = false;
  } else {
    data.link = cta;
    data.link.link.label = args.label;
  }

  return data;
};

const renderStory = (data, args) => {
  let story = heroBanner(prepareData(correctPaths(data), args));
  if (args.width === 'container' || args.width === 'inside') {
    story = `<div class="ecl-container">${story}</div>`;
  }
  if (args.gridContent) {
    story +=
      '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: 'Components/Banners/Hero Banner',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Primary = (args) => renderStory(bannerDataSimplePrimary, args);

Primary.storyName = 'simple - primary';
Primary.args = getArgs(bannerDataSimplePrimary);
Primary.argTypes = getArgTypes(bannerDataSimplePrimary);
Primary.parameters = {
  notes: { markdown: notes, json: bannerDataSimplePrimary },
};

export const Secondary = (args) => renderStory(bannerDataSimpleSecondary, args);

Secondary.storyName = 'simple - secondary';
Secondary.args = getArgs(bannerDataSimpleSecondary);
Secondary.argTypes = getArgTypes(bannerDataSimpleSecondary);
Secondary.parameters = {
  notes: { markdown: notes, json: bannerDataSimpleSecondary },
};

export const SimpleWhite = (args) => renderStory(bannerDataSimpleWhite, args);

SimpleWhite.storyName = 'simple - white';
SimpleWhite.args = getArgs(bannerDataSimpleWhite);
SimpleWhite.argTypes = getArgTypes(bannerDataSimpleWhite);
SimpleWhite.parameters = {
  notes: { markdown: notes, json: bannerDataSimpleWhite },
};

export const Image = (args) => renderStory(bannerDataImage, args);

Image.storyName = 'image - text-block';
Image.args = getArgs(bannerDataImage);
Image.argTypes = getArgTypes(bannerDataImage);
Image.parameters = { notes: { markdown: notes, json: bannerDataImage } };

export const ImageGradient = (args) =>
  renderStory(bannerDataImageGradient, args);

ImageGradient.storyName = 'image - gradient';
ImageGradient.args = getArgs(bannerDataImageGradient);
ImageGradient.argTypes = getArgTypes(bannerDataImageGradient);
ImageGradient.parameters = {
  notes: { markdown: notes, json: bannerDataImageGradient },
};

export const ImageShade = (args) => renderStory(bannerDataImageShade, args);

ImageShade.storyName = 'image - shade';
ImageShade.args = getArgs(bannerDataImageShade);
ImageShade.argTypes = getArgTypes(bannerDataImageShade);
ImageShade.parameters = {
  notes: { markdown: notes, json: bannerDataImageShade },
};
