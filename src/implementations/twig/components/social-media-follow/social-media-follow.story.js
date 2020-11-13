/* eslint-disable dot-notation */
import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getBrandedIconsOptions,
  getComplianceKnob,
} from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

// Import data for demos
import defaultSprite from '@ecl/resources-ec-social-icons/dist/sprites/icons-social.svg';
import demoData from '@ecl/specs-component-social-media-follow/demo/data';
import SocialMediaFollow from './social-media-follow.html.twig';
import notes from './README.md';

const prepareSocialMediaFollow = (data, vertical) => {
  data.description = text('description', data.description, tabLabels.required);
  if (vertical) {
    data.variant = select(
      'variant',
      [vertical],
      'vertical',
      tabLabels.required
    );
    data['_compliance_'] = false;
  } else {
    delete data.variant;
  }

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
        data.links[i] = {};
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
  getComplianceKnob(data);
  return data;
};

export default {
  title: 'Components/Social Media Follow',
  decorators: [withKnobs, withCode, withNotes],
};

export const Horizontal = () =>
  SocialMediaFollow(prepareSocialMediaFollow(demoData));

Horizontal.storyName = 'horizontal';
Horizontal.parameters = { notes: { markdown: notes, json: demoData } };

export const Vertical = () =>
  SocialMediaFollow(prepareSocialMediaFollow(demoData, 'vertical'));

Vertical.storyName = 'vertical';
Vertical.parameters = { notes: { markdown: notes, json: demoData } };
