import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getBrandedIconsOptions,
} from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-social-icons/dist/sprites/icons-social.svg';
import demoData from '@ecl/specs-component-social-media-share/demo/data';

import SocialMediaShare from './social-media-share.html.twig';
import notes from './README.md';

const prepareSocialMediaShare = (data) => {
  data.description = text('description', data.description, tabLabels.required);

  data.links.forEach((link, i) => {
    let label = tabLabels.optional;
    // Firt item we make it mandatory and not removable.
    if (i === 0) {
      label = tabLabels.required;
      link.label = select(
        `links[${i}].label`,
        getBrandedIconsOptions(true),
        link.label,
        label
      );
      link.path = text(`links[${i}].path`, link.path, label);
      link.icon_position = select(
        `links[${i}].icon_position`,
        [link.icon_position],
        link.icon_position,
        label
      );
      link.icon.forEach((icon, j) => {
        let knobLabel = `links[${i}].icon[${j}].name`;
        let options = getBrandedIconsOptions(false);
        if (j === 1) {
          knobLabel = `links[${i}].icon[${j}].name (hover icon)`;
          options = getBrandedIconsOptions(false, false, true);
        }
        icon.name = select(knobLabel, options, icon.name, label);
        icon.path = optionsKnob(
          `links[${i}].icon[${j}].path`,
          { current: defaultSprite, 'no path': '' },
          defaultSprite,
          { display: 'inline-radio' },
          label
        );
        icon.size = select(`links[${i}].icon[${j}].size`, ['xl'], 'xl', label);
        icon.extra_classes = text(
          `links[${i}].icon[${j}].extra_classes`,
          icon.extra_classes,
          label
        );
      });
    } else {
      // All the other items.
      if (data.links[i].label && data.links[i].path) {
        let linkOptions = getBrandedIconsOptions(true);
        if (!data.links[i].icon) {
          linkOptions = getBrandedIconsOptions(true, true);
        }
        link.label = select(
          `links[${i}].label`,
          linkOptions,
          link.label,
          label
        );
        link.path = text(`links[${i}].path`, link.path, label);
      }
      // If the option none has been selected we remove the item safely
      // since we know it can only be: Other social media
      if (link.label === 'none') {
        data.links[i].label = {};
      }
      // Icons.
      if (data.links[i].icon && data.links[i].icon[0]) {
        link.icon_position = select(
          `links[${i}].icon_position`,
          [link.icon_position],
          link.icon_position,
          label
        );
        link.icon.forEach((icon, k) => {
          let knobLabel = `links[${i}].icon[${k}].name`;
          let iconOptions = getBrandedIconsOptions(false, true);
          if (k === 1) {
            knobLabel = `links[${i}].icon[${k}].name (hover icon)`;
            iconOptions = getBrandedIconsOptions(false, true, true);
          }
          icon.name = select(knobLabel, iconOptions, icon.name, label);
          icon.path = optionsKnob(
            `links[${i}].icon[${k}].path`,
            { current: defaultSprite, 'no path': '' },
            defaultSprite,
            { display: 'inline-radio' },
            label
          );
          icon.size = select(
            `links[${i}].icon[${k}].size`,
            ['xl'],
            'xl',
            label
          );
          icon.extra_classes = text(
            `links[${i}].icon[${k}].extra_classes`,
            icon.extra_classes,
            label
          );
          // If a 'none' icon has been selected we reset the item not to
          // show the link anymore.
          if (icon.name === 'none') {
            data.links[i].label = '';
            data.links[i].path = '';
            data.links[i].icon = {};
          }
        });
      }
    }
  });

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Social Media Share',
};

export const Default = () =>
  SocialMediaShare(prepareSocialMediaShare(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withCode, withNotes];
