import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  withKnobs,
  text,
  boolean,
  select,
  button,
} from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import bannerDataDefault from './demo/data--default';
import bannerDataImage from './demo/data--image';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataPrimary from './demo/data--primary';
import bannerDataAlignLeft from './demo/data--align-left';
import pageBanner from './ecl-page-banner.html.twig';
import notes from './README.md';

// Preserve the adapted specs.
let defaultData = { ...bannerDataDefault };
let imageData = { ...bannerDataImage };
let imageShadeData = { ...bannerDataImageShade };
let primaryData = { ...bannerDataPrimary };
let leftData = { ...bannerDataAlignLeft };

// Show/hide buttons for optional elements.
const defaultDescBtnToggler = () => {
  if (defaultData.baseline) {
    delete defaultData.baseline;
  } else {
    defaultData.baseline = bannerDataDefault.baseline;
  }
};
const imageDescBtnToggler = () => {
  if (imageData.baseline) {
    delete imageData.baseline;
  } else {
    imageData.baseline = bannerDataImage.baseline;
  }
};
const imageShadeDescBtnToggler = () => {
  if (imageShadeData.baseline) {
    delete imageShadeData.baseline;
  } else {
    imageShadeData.baseline = bannerDataImageShade.baseline;
  }
};
const primaryDescBtnToggler = () => {
  if (primaryData.baseline) {
    delete primaryData.baseline;
  } else {
    primaryData.baseline = bannerDataPrimary.baseline;
  }
};
const leftDescBtnToggler = () => {
  if (leftData.baseline) {
    delete leftData.baseline;
  } else {
    leftData.baseline = bannerDataAlignLeft.baseline;
  }
};
const defaultTitleBtnToggler = () => {
  if (defaultData.title) {
    delete defaultData.title;
  } else {
    defaultData.title = bannerDataDefault.title;
  }
};
const imageTitleBtnToggler = () => {
  if (imageData.title) {
    delete imageData.title;
  } else {
    imageData.title = bannerDataImage.title;
  }
};
const imageShadeTitleBtnToggler = () => {
  if (imageShadeData.title) {
    delete imageShadeData.title;
  } else {
    imageShadeData.title = bannerDataImageShade.title;
  }
};
const primaryTitleBtnToggler = () => {
  if (primaryData.title) {
    delete primaryData.title;
  } else {
    primaryData.title = bannerDataPrimary.title;
  }
};
const leftTitleBtnToggler = () => {
  if (leftData.title) {
    delete leftData.title;
  } else {
    leftData.title = bannerDataAlignLeft.title;
  }
};
const defaultCtaBtnToggler = () => {
  if (defaultData.link) {
    delete defaultData.link;
  } else {
    defaultData.link = bannerDataDefault.link;
  }
};
const imageCtaBtnToggler = () => {
  if (imageData.link) {
    delete imageData.link;
  } else {
    imageData.link = bannerDataImage.link;
  }
};
const imageShadeCtaBtnToggler = () => {
  if (imageShadeData.link) {
    delete imageShadeData.link;
  } else {
    imageShadeData.link = bannerDataImage.link;
  }
};
const primaryCtaBtnToggler = () => {
  if (primaryData.link) {
    delete primaryData.link;
  } else {
    primaryData.link = bannerDataPrimary.link;
  }
};
const leftCtaBtnToggler = () => {
  if (leftData.link) {
    delete leftData.link;
  } else {
    leftData.link = bannerDataAlignLeft.link;
  }
};
// Reset buttons.
const defaultResetBtnToggler = () => {
  defaultData = { ...bannerDataDefault };
};
const imageResetBtnToggler = () => {
  imageData = { ...bannerDataImage };
};
const imageShadeResetBtnToggler = () => {
  imageShadeData = { ...bannerDataImageShade };
};
const primaryResetBtnToggler = () => {
  primaryData = { ...bannerDataPrimary };
};
const leftResetBtnToggler = () => {
  leftData = { ...bannerDataAlignLeft };
};

uiIcons.unshift('null');
const preparePageBanner = (data, variant) => {
  data.centered = boolean('centered', data.centered, tabLabels.states);
  data.type = select('type', [data.type], data.type, tabLabels.required);
  if (data.title) {
    data.title = text('title', data.title, tabLabels.optional);
  }
  if (data.baseline) {
    data.baseline = text('baseline', data.baseline, tabLabels.optional);
  }
  if (variant === 'img') {
    data.image = text('image', data.image, tabLabels.required);
  }
  if (data.link) {
    if (data.link.link) {
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
    }
    if (data.link.icon) {
      data.link.icon.name = select(
        'link.icon.name',
        uiIcons,
        data.link.icon.name,
        tabLabels.optional
      );
      if (data.link.icon.name !== 'null') {
        getIconKnobs(
          data,
          data.link.icon.name,
          'ui',
          'xs',
          'default',
          'rotate-90',
          true
        );
      } else {
        delete data.link.icon;
      }
    }
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Banners/Page Banner',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => {
  button('With or without title', defaultTitleBtnToggler, tabLabels.cases);
  button('With or without baseline', defaultDescBtnToggler, tabLabels.cases);
  button(
    'With or without call to action',
    defaultCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', defaultResetBtnToggler, tabLabels.cases);

  return pageBanner(preparePageBanner(defaultData));
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: defaultData } };

export const Image = () => {
  button('With or without title', imageTitleBtnToggler, tabLabels.cases);
  button('With or without baseline', imageDescBtnToggler, tabLabels.cases);
  button('With or without call to action', imageCtaBtnToggler, tabLabels.cases);
  button('Reset the layout', imageResetBtnToggler, tabLabels.cases);

  return pageBanner(preparePageBanner(imageData, 'img'));
};

Image.storyName = 'image';
Image.parameters = { notes: { markdown: notes, json: imageData } };

export const ImageShade = () => {
  button('With or without title', imageShadeTitleBtnToggler, tabLabels.cases);
  button('With or without baseline', imageShadeDescBtnToggler, tabLabels.cases);
  button(
    'With or without call to action',
    imageShadeCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', imageShadeResetBtnToggler, tabLabels.cases);

  return pageBanner(preparePageBanner(imageShadeData, 'img'));
};

ImageShade.storyName = 'image-shade';
ImageShade.parameters = { notes: { markdown: notes, json: imageShadeData } };

export const Primary = () => {
  button('With or without title', primaryTitleBtnToggler, tabLabels.cases);
  button('With or without baseline', primaryDescBtnToggler, tabLabels.cases);
  button(
    'With or without call to action',
    primaryCtaBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', primaryResetBtnToggler, tabLabels.cases);

  return pageBanner(preparePageBanner(primaryData));
};

Primary.storyName = 'primary';
Primary.parameters = { notes: { markdown: notes, json: primaryData } };

export const AlignLeft = () => {
  button('With or without title', leftTitleBtnToggler, tabLabels.cases);
  button('With or without baseline', leftDescBtnToggler, tabLabels.cases);
  button('With or without call to action', leftCtaBtnToggler, tabLabels.cases);
  button('Reset the layout', leftResetBtnToggler, tabLabels.cases);

  return pageBanner(preparePageBanner(leftData));
};

AlignLeft.storyName = 'align-left';
AlignLeft.parameters = { notes: { markdown: notes, json: leftData } };
