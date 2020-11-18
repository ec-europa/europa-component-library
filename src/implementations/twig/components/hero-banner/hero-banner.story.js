import {
  withKnobs,
  text,
  boolean,
  select,
  button,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import {
  getExtraKnobs,
  getIconKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import uiIcons from '@ecl/resources-ec-icons/dist/lists/ui.json';
import bannerDataImage from '@ecl/specs-component-hero-banner/demo/data--image-box';
import bannerDataImageGradient from '@ecl/specs-component-hero-banner/demo/data--image-gradient';
import bannerDataImageShade from '@ecl/specs-component-hero-banner/demo/data--image-shade';
import bannerDataSimplePrimary from '@ecl/specs-component-hero-banner/demo/data--simple-primary';
import bannerDataSimpleGrey from '@ecl/specs-component-hero-banner/demo/data--simple-grey';
import bannerDataSimpleWhite from '@ecl/specs-component-hero-banner/demo/data--simple-white';
import heroBanner from './hero-banner.html.twig';
import notes from './README.md';

const icons = { none: '' };
uiIcons.forEach((icon) => {
  icons[icon] = icon;
});

// Preserve the adapted specs.
let simplePrimaryData = { ...bannerDataSimplePrimary };
let simpleGreyData = { ...bannerDataSimpleGrey };
let simpleWhiteData = { ...bannerDataSimpleWhite };
let imageData = { ...bannerDataImage };
let imageShadeData = { ...bannerDataImageShade };
let imageGradientData = { ...bannerDataImageGradient };

// Show/hide buttons for optional elements.
const simplePrimaryDescBtnToggler = () => {
  if (simplePrimaryData.description) {
    delete simplePrimaryData.description;
  } else {
    simplePrimaryData.description = bannerDataSimplePrimary.description;
  }
};
const simpleGreyDescBtnToggler = () => {
  if (simpleGreyData.description) {
    delete simpleGreyData.description;
  } else {
    simpleGreyData.description = bannerDataSimpleGrey.description;
  }
};
const simpleWhiteDescBtnToggler = () => {
  if (simpleWhiteData.description) {
    delete simpleWhiteData.description;
  } else {
    simpleWhiteData.description = bannerDataSimpleWhite.description;
  }
};
const imageDescBtnToggler = () => {
  if (imageData.description) {
    delete imageData.description;
  } else {
    imageData.description = bannerDataImage.description;
  }
};
const imageGradientDescBtnToggler = () => {
  if (imageGradientData.description) {
    delete imageGradientData.description;
  } else {
    imageGradientData.description = bannerDataImageGradient.description;
  }
};
const imageShadeDescBtnToggler = () => {
  if (imageShadeData.description) {
    delete imageShadeData.description;
  } else {
    imageShadeData.description = bannerDataImageShade.description;
  }
};
const simplePrimaryCtaBtnToggler = () => {
  if (simplePrimaryData.link) {
    delete simplePrimaryData.link;
  } else {
    simplePrimaryData.link = bannerDataSimplePrimary.link;
  }
};
const simpleGreyCtaBtnToggler = () => {
  if (simpleGreyData.link) {
    delete simpleGreyData.link;
  } else {
    simpleGreyData.link = bannerDataSimpleGrey.link;
  }
};
const simpleWhiteCtaBtnToggler = () => {
  if (simpleWhiteData.link) {
    delete simpleWhiteData.link;
  } else {
    simpleWhiteData.link = bannerDataSimpleWhite.link;
  }
};
const imageCtaBtnToggler = () => {
  if (imageData.link) {
    delete imageData.link;
  } else {
    imageData.link = bannerDataImage.link;
  }
};
const imageGradientCtaBtnToggler = () => {
  if (imageGradientData.link) {
    delete imageGradientData.link;
  } else {
    imageGradientData.link = bannerDataImageGradient.link;
  }
};
const imageShadeCtaBtnToggler = () => {
  if (imageShadeData.link) {
    delete imageShadeData.link;
  } else {
    imageShadeData.link = bannerDataImage.link;
  }
};
// Reset buttons.
const simplePrimaryResetBtnToggler = () => {
  simplePrimaryData = { ...bannerDataSimplePrimary };
};
const simpleGreyResetBtnToggler = () => {
  simpleGreyData = { ...bannerDataSimpleGrey };
};
const simpleWhiteResetBtnToggler = () => {
  simpleWhiteData = { ...bannerDataSimpleWhite };
};
const imageResetBtnToggler = () => {
  imageData = { ...bannerDataImage };
};
const imageGradientResetBtnToggler = () => {
  imageGradientData = { ...bannerDataImageGradient };
};
const imageShadeResetBtnToggler = () => {
  imageShadeData = { ...bannerDataImageShade };
};

const prepareHeroBanner = (data, variant) => {
  data.centered = boolean('centered', data.centered, tabLabels.states);
  data.type = select('type', [data.type], data.type, tabLabels.required);
  data.title = text('title', data.title, tabLabels.required);
  if (data.description) {
    data.description = text(
      'description',
      data.description,
      tabLabels.optional
    );
  }

  if (variant === 'img') {
    data.image = text('image', data.image, tabLabels.required);
  }

  if (data.link) {
    data.link.link.label = text(
      'link.link.label',
      data.link.link.label,
      tabLabels.optional
    );
    data.link.link.path = text(
      'link.link.path',
      data.link.link.path,
      tabLabels.optional
    );
    data.link.icon.name = select(
      'link.icon.name',
      icons,
      data.link.icon.name,
      tabLabels.optional
    );
    if (data.link.icon.name) {
      getIconKnobs(
        data,
        data.link.icon.name,
        'ui',
        'xs',
        'default',
        'rotate-90',
        true
      );
    }
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Banners/Hero Banner',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => {
  button(
    'With or without description',
    simplePrimaryDescBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without call to action',
    simplePrimaryCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', simplePrimaryResetBtnToggler, tabLabels.cases);

  return heroBanner(prepareHeroBanner(simplePrimaryData));
};

Default.storyName = 'simple - primary';
Default.parameters = { notes: { markdown: notes, json: simplePrimaryData } };

export const SimpleGrey = () => {
  button(
    'With or without description',
    simpleGreyDescBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without call to action',
    simpleGreyCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', simpleGreyResetBtnToggler, tabLabels.cases);

  return heroBanner(prepareHeroBanner(simpleGreyData));
};

SimpleGrey.storyName = 'simple - grey';
SimpleGrey.parameters = { notes: { markdown: notes, json: simpleGreyData } };

export const SimpleWhite = () => {
  button(
    'With or without description',
    simpleWhiteDescBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without call to action',
    simpleWhiteCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', simpleWhiteResetBtnToggler, tabLabels.cases);

  return heroBanner(prepareHeroBanner(simpleWhiteData));
};

SimpleWhite.storyName = 'simple - white';
SimpleWhite.parameters = { notes: { markdown: notes, json: simpleWhiteData } };

export const Image = () => {
  button('With or without description', imageDescBtnToggler, tabLabels.cases);
  button('With or without call to action', imageCtaBtnToggler, tabLabels.cases);
  button('Reset the layout', imageResetBtnToggler, tabLabels.cases);

  return heroBanner(prepareHeroBanner(imageData, 'img'));
};

Image.storyName = 'image - text-block';
Image.parameters = { notes: { markdown: notes, json: imageData } };

export const ImageGradient = () => {
  button(
    'With or without description',
    imageGradientDescBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without call to action',
    imageGradientCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', imageGradientResetBtnToggler, tabLabels.cases);

  return heroBanner(prepareHeroBanner(imageGradientData, 'img'));
};

ImageGradient.storyName = 'image - gradient';
ImageGradient.parameters = { notes: { markdown: notes, json: imageData } };

export const ImageShade = () => {
  button(
    'With or without description',
    imageShadeDescBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without call to action',
    imageShadeCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', imageShadeResetBtnToggler, tabLabels.cases);

  return heroBanner(prepareHeroBanner(imageShadeData, 'img'));
};

ImageShade.storyName = 'image - shade';
ImageShade.parameters = { notes: { markdown: notes, json: imageShadeData } };
