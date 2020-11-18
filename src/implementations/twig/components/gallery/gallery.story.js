import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import he from 'he';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataDefault from '@ecl/specs-component-gallery/demo/data';
import gallery from './gallery.html.twig';

import notes from './README.md';

const prepareGallery = (data) => {
  data.items.forEach((item, i) => {
    if (item.image) {
      item.image.src = text(
        `items[${i}].image.src`,
        item.image.src,
        tabLabels.required
      );
      item.image.alt = text(
        `items[${i}].image.alt`,
        item.image.alt,
        tabLabels.required
      );
    }
    if (
      (item.image && !item.image.alt) ||
      (item.path && !item.video && !item.image)
    ) {
      item.alt = text(`items[${i}].alt`, item.alt, tabLabels.required);
    }
    if ((item.image && !item.image.src) || (!item.video && !item.image)) {
      item.path = text(`items[${i}].path`, item.path, tabLabels.required);
    }
    item.share_path = select(
      `items[${i}].share_path`,
      [item.share_path],
      item.share_path,
      tabLabels.optional
    );
    item.description = he.decode(
      text(`items[${i}].description`, item.description, tabLabels.optional)
    );
    item.meta = text(`items[${i}].meta`, item.meta, tabLabels.optional);
    item.extra_classes = text(
      `items[${i}].extra_classes`,
      item.extra_classes,
      tabLabels.optional
    );
    if (!item.extra_attributes) {
      item.extra_attributes = [{}];
    }
    item.extra_attributes[0].name = text(
      `items[${i}].extra_attributes[0].name`,
      '',
      tabLabels.optional
    );
    item.extra_attributes[0].value = text(
      `items[${i}].extra_attributes[0].value`,
      item.extra_attributes[0].value,
      tabLabels.optional
    );
    if (!item.extra_attributes[0].value) {
      delete item.extra_attributes[0].value;
    }
    if (item.extra_attributes[0].name === '') {
      delete item.extra_attributes;
    }
    if (item.icon) {
      item.icon.path = optionsKnob(
        `items[${i}].icon.path`,
        { current: defaultSprite, 'no path': '' },
        defaultSprite,
        { display: 'inline-radio' },
        tabLabels.required
      );
      if (data.items[i].icon.path) {
        item.icon.type = select(
          `items[${i}].icon.type`,
          [item.icon.type],
          item.icon.type,
          tabLabels.required
        );
        item.icon.name = select(
          `items[${i}].icon.name`,
          [item.icon.name],
          item.icon.name,
          tabLabels.required
        );
      }
    }
    if (item.video) {
      item.video.poster = text(
        `items[${i}].video.poster`,
        item.video.poster,
        tabLabels.optional
      );
      item.video.sources.forEach((source, j) => {
        source.src = text(
          `items[${i}].video.sources[${j}].src`,
          source.src,
          tabLabels.required
        );
        source.type = text(
          `items[${i}].video.sources[${j}].type`,
          source.type,
          tabLabels.required
        );
      });
      item.video.tracks.forEach((track, k) => {
        track.src = text(
          `items[${i}].video.tracks[${k}].src`,
          track.src,
          tabLabels.optional
        );
        track.src_lang = text(
          `items[${i}].video.tracks[${k}].src_lang`,
          track.src_lang,
          tabLabels.optional
        );
        track.label = text(
          `items[${i}].video.tracks[${k}].label`,
          track.label,
          tabLabels.optional
        );
        track.kind = text(
          `items[${i}].video.tracks[${k}].kind`,
          track.kind,
          tabLabels.optional
        );
      });
    }
  });
  data.footer.link.label = text(
    'footer.link.label',
    data.footer.link.label,
    tabLabels.optional
  );
  data.footer.link.path = text(
    'footer.link.path',
    data.footer.link.path,
    tabLabels.optional
  );
  data.footer.icon.path = optionsKnob(
    'footer.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.optional
  );
  data.overlay.extra_classes = text(
    'data.overlay.extra_classes',
    '',
    tabLabels.optional
  );
  if (!data.overlay.extra_attributes) {
    data.overlay.extra_attributes = [{}];
  }
  data.overlay.extra_attributes[0].name = text(
    'data.overlay.extra_attributes[0].name',
    '',
    tabLabels.optional
  );
  data.overlay.extra_attributes[0].value = text(
    `data.overlay.extra_attributes[0].value`,
    data.overlay.extra_attributes[0].value,
    tabLabels.optional
  );
  if (!data.overlay.extra_attributes[0].value) {
    delete data.overlay.extra_attributes[0].value;
  }
  if (data.overlay.extra_attributes[0].name === '') {
    delete data.overlay.extra_attributes;
  }
  data.overlay.close.label = text(
    'overlay.close.label',
    data.overlay.close.label,
    tabLabels.required
  );
  data.overlay.close.icon.path = optionsKnob(
    'overlay.close.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (data.overlay.close.icon.path) {
    data.overlay.close.icon.type = select(
      'overlay.close.icon.type',
      [data.overlay.close.icon.type],
      data.overlay.close.icon.type,
      tabLabels.required
    );
    data.overlay.close.icon.name = select(
      'overlay.close.icon.name',
      [data.overlay.close.icon.name],
      data.overlay.close.icon.name,
      tabLabels.required
    );
  }
  data.overlay.previous.label = text(
    'overlay.previous.label',
    data.overlay.previous.label,
    tabLabels.required
  );
  data.overlay.previous.icon.path = optionsKnob(
    'overlay.previous.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (data.overlay.previous.icon.path) {
    data.overlay.previous.icon.type = select(
      'overlay.previous.icon.type',
      [data.overlay.previous.icon.type],
      data.overlay.previous.icon.type,
      tabLabels.required
    );
    data.overlay.previous.icon.name = select(
      'overlay.previous.icon.name',
      [data.overlay.previous.icon.name],
      data.overlay.previous.icon.name,
      tabLabels.required
    );
  }
  data.overlay.next.label = text(
    'overlay.next.label',
    data.overlay.next.label,
    tabLabels.required
  );
  data.overlay.next.icon.path = optionsKnob(
    'overlay.next.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (data.overlay.next.icon.path) {
    data.overlay.next.icon.type = select(
      `overlay.next.icon.type`,
      [data.overlay.next.icon.type],
      data.overlay.next.icon.type,
      tabLabels.required
    );
    data.overlay.next.icon.name = select(
      `overlay.next.icon.name`,
      [data.overlay.next.icon.name],
      data.overlay.next.icon.name,
      tabLabels.required
    );
  }
  data.overlay.download.link.label = text(
    'overlay.download.link.label',
    data.overlay.download.link.label,
    tabLabels.required
  );
  data.overlay.download.link.path = text(
    'overlay.download.link.path',
    data.overlay.download.link.path,
    tabLabels.required
  );
  data.overlay.download.icon.path = optionsKnob(
    'overlay.download.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.overlay.share.link.label = text(
    'overlay.share.link.label',
    data.overlay.share.link.label,
    tabLabels.optional
  );
  data.overlay.share.link.path = text(
    'overlay.share.link.path',
    data.overlay.share.link.path,
    tabLabels.optional
  );
  data.overlay.share.icon.path = optionsKnob(
    'overlay.share.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.optional
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Gallery',
};

export const Default = () => gallery(prepareGallery(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withCode, withNotes];
