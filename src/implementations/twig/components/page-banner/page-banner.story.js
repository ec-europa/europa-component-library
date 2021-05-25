import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

// Import data for demos
import bannerDataSimplePrimary from '@ecl/specs-component-page-banner/demo/data--simple-primary';
import bannerDataSimpleSecondary from '@ecl/specs-component-page-banner/demo/data--simple-secondary';
import bannerDataSimpleWhite from '@ecl/specs-component-page-banner/demo/data--simple-white';
import bannerDataImage from '@ecl/specs-component-page-banner/demo/data--image-box';
import bannerDataImageShade from '@ecl/specs-component-page-banner/demo/data--image-shade';
import bannerDataImageGradient from '@ecl/specs-component-page-banner/demo/data--image-gradient';
import pageBanner from './page-banner.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {
    title: {
      type: { name: 'string', required: true },
      defaultValue: data.title,
      description: 'Heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    description: {
      type: 'string',
      defaultValue: data.description,
      description: 'Sub-heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    label: {
      type: 'string',
      defaultValue: data.link.link.label,
      description: 'Label of the call to action link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    centered: {
      type: 'boolean',
      defaultValue: data.centered,
      description: 'Whether the content of the banner is centered or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'Display',
      },
    },
    width: {
      name: 'width',
      defaultValue: 'outside the grid',
      description: `The banner extends to the whole viewport by default when outside the grid,
        if it's inside it can still be extended via an additional css class`,
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'full width - outside the grid container' },
        category: 'Display',
      },
      control: {
        type: 'select',
        defaultValue: { summary: 'outside' },
        options: {
          'full width - outside the grid container': 'outside',
          'full width - inside the grid container': 'inside',
          'grid container': 'container',
        },
      },
    },
    gridContent: {
      name: 'demo grid content',
      type: { name: 'boolean' },
      defaultValue: false,
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
    argTypes.image = {
      type: 'string',
      defaultValue: data.image || '',
      description: 'Path or Url of the background image',
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
  data.link.link.label = args.label;
  if (data.image) {
    data.image = args.image;
  }

  return data;
};

const renderStory = (data, args) => {
  let story = pageBanner(prepareData(correctSvgPath(data), args));
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
  title: 'Components/Banners/Page Banner',
  decorators: [withNotes, withCode],
};

export const Primary = (args) => renderStory(bannerDataSimplePrimary, args);

Primary.storyName = 'simple - primary';
Primary.argTypes = getArgTypes(bannerDataSimplePrimary);
Primary.parameters = {
  notes: { markdown: notes, json: bannerDataSimplePrimary },
};

export const Secondary = (args) => renderStory(bannerDataSimpleSecondary, args);

Secondary.storyName = 'simple - secondary';
Secondary.argTypes = getArgTypes(bannerDataSimpleSecondary);
Secondary.parameters = {
  notes: { markdown: notes, json: bannerDataSimpleSecondary },
};

export const SimpleWhite = (args) => renderStory(bannerDataSimpleWhite, args);

SimpleWhite.storyName = 'simple - white';
SimpleWhite.argTypes = getArgTypes(bannerDataSimpleWhite);
SimpleWhite.parameters = {
  notes: { markdown: notes, json: bannerDataSimpleWhite },
};

export const Image = (args) => renderStory(bannerDataImage, args);

Image.storyName = 'image - text-block';
Image.argTypes = getArgTypes(bannerDataImage);
Image.parameters = { notes: { markdown: notes, json: bannerDataImage } };

export const ImageGradient = (args) =>
  renderStory(bannerDataImageGradient, args);

ImageGradient.storyName = 'image - gradient';
ImageGradient.argTypes = getArgTypes(bannerDataImageGradient);
ImageGradient.parameters = {
  notes: { markdown: notes, json: bannerDataImageGradient },
};

export const ImageShade = (args) => renderStory(bannerDataImageShade, args);

ImageShade.storyName = 'image - shade';
ImageShade.argTypes = getArgTypes(bannerDataImageShade);
ImageShade.parameters = {
  notes: { markdown: notes, json: bannerDataImageShade },
};
