import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { withKnobs, text } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';
import he from 'he';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import specsEc from '@ecl/specs-component-footer-core/demo/data--ec';
import specsEu from '@ecl/specs-component-footer-core/demo/data--eu';
import logoEuMobile from '@ecl/resources-eu-logo/condensed-version/positive/en.svg';
import logoEuDesktop from '@ecl/resources-eu-logo/standard-version/positive/en.svg';
import footer from './footer-core.html.twig';
import notes from './README.md';

// Prepare the knobs.
const formatFooter = (data) => {
  data.sections.forEach((section, i) => {
    if (!Array.isArray(section)) {
      if (section.title) {
        if (typeof section.title === 'object') {
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
        } else {
          section.title = text(
            `sections[${i}].title`,
            section.title,
            tabLabels.required
          );
        }
      }
      if (section.description) {
        section.description = he.decode(
          text(
            `sections[${i}].description`,
            section.description,
            tabLabels.required
          )
        );
      } else if (!section.description && i === 0) {
        section.description = he.decode(
          text(`sections[${i}].description`, '', tabLabels.required)
        );
      }
      if (section.content_before) {
        section.content_before = text(
          `sections[${i}].content_before`,
          section.content_before,
          tabLabels.required
        );
      }
      if (section.section_class_name) {
        section.section_class_name = text(
          `sections[${i}].section_class_name`,
          section.section_class_name,
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
        section.links.forEach((link, j) => {
          link.link.label = text(
            `sections[${i}].links[${j}].link.label`,
            link.link.label,
            tabLabels.required
          );
          link.link.path = text(
            `sections[${i}].links[${j}].link.path`,
            link.link.path,
            tabLabels.required
          );
          link.link.aria_label = text(
            `sections[${i}].links[${j}].link.aria_label`,
            link.link.aria_label,
            tabLabels.required
          );
          if (link.icon) {
            link.icon.name = text(
              `sections[${i}].links[${j}].icon.name`,
              link.icon.name,
              tabLabels.required
            );
            link.icon.path = text(
              `sections[${i}].links[${j}].icon.path`,
              defaultSprite,
              tabLabels.required
            );
            link.icon.size = text(
              `sections[${i}].links[${j}].icon.size`,
              link.icon.size,
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
        if (sectionItem.title_class_name) {
          sectionItem.title_class_name = text(
            `sections[${i}][${j}].title_class_name`,
            sectionItem.title_class_name,
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
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Footers/Core',
  decorators: [withCode, withNotes, withKnobs],
};

export const Ec = () => footer(formatFooter(specsEc));

Ec.storyName = 'ec';
Ec.parameters = { notes: { markdown: notes, json: specsEc } };

export const Eu = () => footer(formatFooter(specsEu));

Eu.storyName = 'eu';
Eu.parameters = { notes: { markdown: notes, json: specsEu } };
