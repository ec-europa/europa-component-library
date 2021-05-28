import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import bannerDataImage from '@ecl/specs-component-hero-banner/demo/data--image-box';
import bannerDataImageGradient from '@ecl/specs-component-hero-banner/demo/data--image-gradient';
import bannerDataImageShade from '@ecl/specs-component-hero-banner/demo/data--image-shade';
import bannerDataSimplePrimary from '@ecl/specs-component-hero-banner/demo/data--simple-primary';
import bannerDataSimpleGrey from '@ecl/specs-component-hero-banner/demo/data--simple-grey';
import bannerDataSimpleWhite from '@ecl/specs-component-hero-banner/demo/data--simple-white';
import heroBanner from './hero-banner.html.twig';
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
    full_width: {
      name: 'full width',
      control: {
        type: 'inline-radio',
        options: ['outside the grid', 'inside the grid'],
      },
      defaultValue: 'outside the grid',
      description: `The banner extends to the whole viewport by default when outside the grid,
        if it's inside it can still be extended via an additional css class`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Display',
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
  data.full_width = args.full_width === 'inside the grid';
  data.link.link.label = args.label;
  if (data.image) {
    data.image = args.image;
  }

  return data;
};

const renderStory = (data, args) => {
  let story = heroBanner(prepareData(correctSvgPath(data), args));
  if (args.full_width === 'inside the grid') {
    story = `<div class="ecl-container">${story}</div>`;
  }

  return story;
};

export default {
  title: 'Components/Banners/Hero Banner',
  decorators: [withNotes, withCode],
};

export const Default = (args) => renderStory(bannerDataSimplePrimary, args);

Default.storyName = 'simple - primary';
Default.argTypes = getArgTypes(bannerDataSimplePrimary);
Default.parameters = {
  layout: 'fullscreen',
  notes: { markdown: notes, json: bannerDataSimplePrimary },
};

export const SimpleGrey = (args) => renderStory(bannerDataSimpleGrey, args);

SimpleGrey.storyName = 'simple - grey';
SimpleGrey.argTypes = getArgTypes(bannerDataSimpleGrey);
SimpleGrey.parameters = {
  layout: 'fullscreen',
  notes: { markdown: notes, json: bannerDataSimpleGrey },
};

export const SimpleWhite = (args) => renderStory(bannerDataSimpleWhite, args);

SimpleWhite.storyName = 'simple - white';
SimpleWhite.argTypes = getArgTypes(bannerDataSimpleWhite);
SimpleWhite.parameters = {
  layout: 'fullscreen',
  notes: { markdown: notes, json: bannerDataSimpleWhite },
};

export const Image = (args) => renderStory(bannerDataImage, args);

Image.storyName = 'image - text-block';
Image.argTypes = getArgTypes(bannerDataImage);
Image.parameters = {
  layout: 'fullscreen',
  notes: { markdown: notes, json: bannerDataImage },
};

export const ImageGradient = (args) =>
  renderStory(bannerDataImageGradient, args);

ImageGradient.storyName = 'image - gradient';
ImageGradient.argTypes = getArgTypes(bannerDataImageGradient);
ImageGradient.parameters = {
  layout: 'fullscreen',
  notes: { markdown: notes, json: bannerDataImageGradient },
};

export const ImageShade = (args) => renderStory(bannerDataImageShade, args);

ImageShade.storyName = 'image - shade';
ImageShade.argTypes = getArgTypes(bannerDataImageShade);
ImageShade.parameters = {
  layout: 'fullscreen',
  notes: { markdown: notes, json: bannerDataImageShade },
};
