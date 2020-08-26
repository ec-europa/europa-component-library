import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';
import { getExtraKnobs } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import euLogoMobile from '@ecl/eu-resources-logo/condensed-version/positive/en.svg';
import euLogoDesktop from '@ecl/eu-resources-logo/standard-version/positive/en.svg';
import dataEu from './demo/eu-data';
import footerHarmonised from './ecl-footer-harmonised.html.twig';
import notes from './README.md';

// Icons.
dataEu.sections.forEach((section) => {
  if (!Array.isArray(section)) {
    section = [section];
  }
  section.forEach((s) => {
    if (s.links && Array.isArray(s.links)) {
      s.links.forEach((l) => {
        if (l.icon) {
          l.icon.path = defaultSprite;
        }
      });
    }
    if (s.title && s.title.icon) {
      s.title.icon.path = defaultSprite;
    }
  });
});

const prepareFooterHarmonised = (data) => {
  data.sections.forEach((section, i) => {
    if (!Array.isArray(section)) {
      if (section.logo) {
        section.logo.path = text(`sections[${i}].logo.path`, section.logo.path);
        section.logo.title = text(
          `sections[${i}].logo.title`,
          section.logo.title
        );
        section.logo.alt = text(`sections[${i}].logo.alt`, section.logo.alt);
        section.logo.src_mobile = optionsKnob(
          `sections[${i}].logo.src_mobile`,
          { current: euLogoMobile, 'no path': '' },
          euLogoMobile,
          { display: 'inline-radio' }
        );
        section.logo.src_desktop = optionsKnob(
          `sections[${i}].logo.src_desktop`,
          { current: euLogoDesktop, 'no path': '' },
          euLogoDesktop,
          { display: 'inline-radio' }
        );
      }
      if (section.title && typeof section.title === 'object') {
        section.title.link = {
          label: text(
            `sections[${i}].title.link.label`,
            section.title.link.label
          ),
          path: text(`sections[${i}].title.link.path`, section.title.link.path),
        };
      }
      if (section.description) {
        section.description = he.decode(
          text(`sections[${i}].description`, section.description)
        );
      }
      if (section.content_before) {
        section.content_before = text(
          `sections[${i}].content_before`,
          section.content_before
        );
      }
      if (section.list_class_name) {
        section.list_class_name = text(
          `sections[${i}].list_class_name`,
          section.list_class_name
        );
      }
      if (section.links) {
        section.links.forEach((linkItem, j) => {
          linkItem.link.label = text(
            `sections[${i}].links[${j}].link.label`,
            linkItem.link.label
          );
          linkItem.link.path = text(
            `sections[${i}].links[${j}].link.path`,
            linkItem.link.path
          );
          if (linkItem.icon) {
            linkItem.icon.name = text(
              `sections[${i}].links[${j}].icon.name`,
              linkItem.icon.name
            );
            linkItem.icon.path = text(
              `sections[${i}].links[${j}].icon.path`,
              defaultSprite
            );
            linkItem.icon.size = text(
              `sections[${i}].links[${j}].icon.size`,
              linkItem.icon.size
            );
          }
        });
      }
    } else {
      section.forEach((sectionItem, j) => {
        if (sectionItem.content_before) {
          sectionItem.content_before = text(
            `sections[${i}][${j}].content_before`,
            sectionItem.content_before
          );
        }
        if (sectionItem.list_class_name) {
          sectionItem.list_class_name = text(
            `sections[${i}][${j}].list_class_name`,
            sectionItem.list_class_name
          );
        }
        if (sectionItem.links) {
          sectionItem.title = text(
            `sections[${i}][${j}].title`,
            sectionItem.title
          );
          sectionItem.links.forEach((linkItem, k) => {
            linkItem.link.label = text(
              `sections[${i}][${j}].links[${k}].link.label`,
              linkItem.link.label
            );
            linkItem.link.path = text(
              `sections[${i}][${j}].links[${k}].link.path`,
              linkItem.link.path
            );
            if (linkItem.icon) {
              linkItem.icon.name = text(
                `sections[${i}][${j}].links[${k}].icon.name`,
                linkItem.icon.name
              );
              linkItem.icon.path = text(
                `sections[${i}][${j}].links[${k}].icon.path`,
                defaultSprite
              );
              linkItem.icon.size = text(
                `sections[${i}][${j}].links[${k}].icon.size`,
                linkItem.icon.size
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
  title: 'Components/Footers/Harmonised',
};

export const Group1 = () => footerHarmonised(prepareFooterHarmonised(dataEu));

Group1.storyName = 'group1';
Group1.parameters = { notes: { markdown: notes, json: dataEu } };
Group1.decorators = [withCode, withNotes, withKnobs];
