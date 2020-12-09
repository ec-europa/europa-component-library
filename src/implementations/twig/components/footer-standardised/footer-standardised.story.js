/* eslint-disable no-undef */
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { withKnobs, text } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';
import he from 'he';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import specsEc from '@ecl/specs-component-footer-standardised/demo/data--ec';
import specsEu from '@ecl/specs-component-footer-standardised/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/en.svg';
import footer from './footer-standardised.html.twig';
import notes from './README.md';

// Icons.
/*
specs.sections.forEach((section) => {
  if (!Array.isArray(section)) {
    section = [section];
  }

  section.forEach((s) => {
    if (section.title && section.title.icon) {
      section.title.icon.path = defaultSprite;
    }
    if (s.links && Array.isArray(s.links)) {
      s.links.forEach((l) => {
        if (l.icon) {
          l.icon.path = defaultSprite;
        }
      });
    }
  });
});
*/

// Prepare the knobs
const formatFooter = (data) => {
  data.sections.forEach((section, i) => {
    if (!Array.isArray(section)) {
      if (section.title && typeof section.title === 'object') {
        section.title.link = {
          label: text(
            `sections[${i}].title.link.label`,
            section.title.link.label,
            tabLabels.required
          ),
          path: text(
            `sections[${i}].title.link.path`,
            section.title.link.path,
            tabLabels.required
          ),
        };
      }
      // Site name & content owner details.
      if (section.description) {
        section.description = he.decode(
          text(
            `sections[${i}].description`,
            section.description,
            tabLabels.required
          )
        );
      }
      if (section.content_before) {
        section.content_before = text(
          `sections[${i}].content_before`,
          section.content_before,
          tabLabels.required
        );
      }
      if (section.list_class_name) {
        section.list_class_name = text(
          `sections[${i}].list_class_name`,
          section.list_class_name,
          tabLabels.required
        );
      }
      if (section.logo) {
        section.logo.path = text(
          `sections[${i}].logo.path`,
          section.logo.path,
          tabLabels.required
        );
        section.logo.title = text(
          `sections[${i}].logo.title`,
          section.logo.title,
          tabLabels.required
        );
        section.logo.alt = text(
          `sections[${i}].logo.alt`,
          section.logo.alt,
          tabLabels.required
        );
        section.logo.src_mobile = logoEuMobile;
        section.logo.src_desktop = logoEuDesktop;
      }
      if (section.links) {
        section.links.forEach((linkItem, j) => {
          linkItem.link.label = text(
            `sections[${i}].links[${j}].link.label`,
            linkItem.link.label,
            tabLabels.required
          );
          linkItem.link.path = text(
            `sections[${i}].links[${j}].link.path`,
            linkItem.link.path,
            tabLabels.required
          );
          linkItem.link.aria_label = text(
            `sections[${i}].links[${j}].link.aria_label`,
            linkItem.link.aria_label,
            tabLabels.optional
          );
          if (linkItem.icon) {
            linkItem.icon.name = text(
              `sections[${i}].links[${j}].icon.name`,
              linkItem.icon.name,
              tabLabels.required
            );
            linkItem.icon.path = text(
              `sections[${i}].links[${j}].icon.path`,
              defaultSprite,
              tabLabels.required
            );
            linkItem.icon.size = text(
              `sections[${i}].links[${j}].icon.size`,
              linkItem.icon.size,
              tabLabels.required
            );
          }
        });
      }
    } else {
      section.forEach((sectionItem, j) => {
        if (sectionItem.content_before) {
          sectionItem.content_before = text(
            `sections[${i}][${j}].content_before`,
            sectionItem.content_before,
            tabLabels.optional
          );
        }
        if (sectionItem.list_class_name) {
          sectionItem.list_class_name = text(
            `sections[${i}][${j}].list_class_name`,
            sectionItem.list_class_name,
            tabLabels.optional
          );
        }
        if (sectionItem.links) {
          sectionItem.title = text(
            `sections[${i}][${j}].title`,
            sectionItem.title,
            tabLabels.optional
          );
          sectionItem.links.forEach((linkItem, k) => {
            linkItem.link.label = text(
              `sections[${i}][${j}].links[${k}].link.label`,
              linkItem.link.label,
              tabLabels.optional
            );
            linkItem.link.path = text(
              `sections[${i}][${j}].links[${k}].link.path`,
              linkItem.link.path,
              tabLabels.optional
            );
            linkItem.link.aria_label = text(
              `sections[${i}][${j}].links[${k}].link.aria_label`,
              linkItem.link.aria_label,
              tabLabels.optional
            );
            if (linkItem.icon) {
              linkItem.icon.name = text(
                `sections[${i}][${j}].links[${k}].icon.name`,
                linkItem.icon.name,
                tabLabels.optional
              );
              linkItem.icon.path = text(
                `sections[${i}][${j}].links[${k}].icon.path`,
                defaultSprite,
                tabLabels.optional
              );
              linkItem.icon.size = text(
                `sections[${i}][${j}].links[${k}].icon.size`,
                linkItem.icon.size,
                tabLabels.optional
              );
            }
          });
        }
      });
    }
  });

  getExtraKnobs(data);

  // Return the full specs.
  return data;
};

export default {
  title: 'Components/Footers/Standardised',
  decorators: [withCode, withNotes, withKnobs],
};

const data = process.env.STORYBOOK_SYSTEM === 'EU' ? specsEu : specsEc;

export const Default = () => footer(formatFooter(data));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: data } };
