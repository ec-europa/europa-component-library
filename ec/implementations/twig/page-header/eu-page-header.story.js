import {
  withKnobs,
  text,
  boolean,
  select,
  optionsKnob,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/eu-resources-icons/dist/sprites/icons.svg';
import dataBasic from './demo/eu-data--basic';
import dataHomepage from './demo/eu-data--homepage';
import dataEvents from './demo/eu-data--events';
import dataBrandedHomepage from './demo/eu-data--branded-homepage';
import dataBrandedHomepageImage from './demo/eu-data--branded-homepage-image';
import dataEventsDescription from './demo/eu-data--events-description';
import dataHomepageImage from './demo/eu-data--homepage-image';
import pageHeader from './ecl-page-header.html.twig';
import notes from './README.md';

const preparePageHeader = (data, variant) => {
  data.title = text('title', data.title, tabLabels.required);
  data.description = text('description', data.description, tabLabels.optional);
  data.meta = text('meta', data.meta, tabLabels.optional);
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
    if (data.variant === 'homepage') {
      data.slogan = text('slogan', data.slogan, tabLabels.required);
    }
  }
  if (variant === 'event') {
    data.infos.forEach((info, i) => {
      info.text = text(`infos[${i}].text`, info.text, tabLabels.required);
      info.icon.name = select(
        `infos[${i}].icon.name`,
        [info.icon.name],
        info.icon.name,
        tabLabels.required
      );
      info.icon.path = optionsKnob(
        `infos[${i}].icon.path`,
        { current: defaultSprite, 'no path': '' },
        defaultSprite,
        { display: 'inline-radio' },
        tabLabels.required
      );
      info.icon.type = select(
        `infos[${i}].icon.type`,
        [info.icon.type],
        info.icon.type,
        tabLabels.required
      );
    });
  }
  if (variant === 'img') {
    data.background_image = boolean(
      'background_image',
      data.background_image,
      tabLabels.required
    );
    data.background_image_url = text(
      'background_image_url',
      data.background_image_url,
      tabLabels.optional
    );
  }
  if (!data.variant || data.variant !== 'homepage') {
    data.breadcrumb.ellipsis_label = text(
      'breadcrumb.ellipsis_label',
      data.breadcrumb.ellipsis_label,
      tabLabels.required
    );
    data.breadcrumb.navigation_text = text(
      'breadcrumb.navigation_text',
      data.breadcrumb.navigation_text,
      tabLabels.required
    );
    data.breadcrumb.icon_file_path = optionsKnob(
      'breadcrumb.icon_file_path',
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );
    data.breadcrumb.links.forEach((item, i) => {
      item.label = text(
        `data.breadcrumb.links[${i}].label`,
        item.label,
        tabLabels.required
      );
      item.path = text(
        `data.breadcrumb.links[${i}].path`,
        item.path,
        tabLabels.required
      );
    });
  }

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/deprecated/Page Header',
  decorators: [withKnobs, withNotes, withCode],
};

export const Basic = () => pageHeader(preparePageHeader(dataBasic));

Basic.storyName = 'ECL < 2.14 Basic';
Basic.parameters = { notes: { markdown: notes, json: dataBasic } };

export const Homepage = () => pageHeader(preparePageHeader(dataHomepage));

Homepage.storyName = 'ECL < 2.14 Homepage';
Homepage.parameters = { notes: { markdown: notes, json: dataHomepage } };

export const BrandedHomepage = () =>
  pageHeader(preparePageHeader(dataBrandedHomepage));

BrandedHomepage.storyName = 'ECL < 2.14 Branded homepage';
BrandedHomepage.parameters = {
  notes: { markdown: notes, json: dataBrandedHomepage },
};

export const BrandedHomepageImage = () =>
  pageHeader(preparePageHeader(dataBrandedHomepageImage, 'img'));

BrandedHomepageImage.storyName = 'ECL < 2.14 Branded homepage image';
BrandedHomepageImage.parameters = {
  notes: { markdown: notes, json: dataBrandedHomepageImage },
};

export const HomepageImage = () =>
  pageHeader(preparePageHeader(dataHomepageImage));

HomepageImage.storyName = 'ECL < 2.14 Homepage image';
HomepageImage.parameters = {
  notes: { markdown: notes, json: dataHomepageImage },
};

export const Events = () => pageHeader(preparePageHeader(dataEvents, 'event'));

Events.storyName = 'ECL < 2.14 events';
Events.parameters = { notes: { markdown: notes, json: dataEvents } };

export const EventsDescription = () =>
  pageHeader(preparePageHeader(dataEventsDescription, 'event'));

EventsDescription.storyName = 'ECL < 2.14 events-description';
EventsDescription.parameters = {
  notes: { markdown: notes, json: dataEventsDescription },
};
