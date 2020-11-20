/* eslint-disable no-undef */
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import specs from '@ecl/specs-component-footer-standardised/demo/data';
import footerStandardised from './footer-standardised.html.twig';
import notes from './README.md';

// Icons.
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

const contactUs = JSON.parse(JSON.stringify(specs.sections[1][0]));
const followUs = JSON.parse(JSON.stringify(specs.sections[1][1]));
const aboutUs = JSON.parse(JSON.stringify(specs.sections[2][0]));
const related = JSON.parse(JSON.stringify(specs.sections[2][1]));

// Buttons callbacks.
// Dg related service navigation (contact us)
const serviceBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (data.sections[1][0].demo_id === 'contact_us') {
    data.sections[1][0] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (data.sections[1][1].demo_id === 'related') {
      data.sections[1][1] = { section_id: 2 };
      data.sections[2][1] = related;
      data.sections[2][1].section_id = 3;
    }
    if (data.sections[1][0].demo_id === 'about_us') {
      data.sections[1][0] = { section_id: 2 };
      data.sections[2][0] = aboutUs;
      data.sections[2][0].section_id = 3;
    }
    // Show it.
    data.sections[1][0] = contactUs;
    data.sections[1][0].section_id = 2;
  }
};

// Dg related service navigation. (follow us)
const socialBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (data.sections[1][1].demo_id === 'follow_us') {
    data.sections[1][1] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (data.sections[1][1].demo_id === 'related') {
      data.sections[1][1] = { section_id: 2 };
      data.sections[2][1] = related;
      data.sections[2][1].section_id = 3;
    }
    if (data.sections[1][0].demo_id === 'about_us') {
      data.sections[1][0] = { section_id: 2 };
      data.sections[2][0] = aboutUs;
      data.sections[2][0].section_id = 3;
    }
    // Show it.
    data.sections[1][1] = followUs;
    data.sections[1][1].section_id = 2;
  }
};
// Reset button.
const resetBtnToggler = () => {
  data.sections[1][0] = contactUs;
  data.sections[1][1] = followUs;
  data.sections[2][0] = aboutUs;
  data.sections[2][1] = related;
  data.sections[1][0].section_id = 2;
  data.sections[1][1].section_id = 2;
  data.sections[2][0].section_id = 3;
  data.sections[2][1].section_id = 3;
};
// Dg related navigation. (About us)
const aboutBtnToggler = () => {
  // If it's where is supposed to be, hide it.
  if (data.sections[2][0].demo_id === 'about_us') {
    data.sections[2][0] = { section_id: 3 };
  } else if (data.swap) {
    resetBtnToggler();
    // We show it.
  } else {
    data.sections[2][0] = aboutUs;
    data.sections[2][0].section_id = 3;
  }
};
// Dg related navigation. (Related sites)
const relatedBtnToggler = () => {
  // If it's where is supposed to be, hide it.
  if (data.sections[2][1].demo_id === 'related') {
    data.sections[2][1] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (data.swap) {
    resetBtnToggler();
    // We show it.
  } else {
    data.sections[2][1] = related;
    data.sections[2][1].section_id = 3;
  }
};

// Prepare the knobs for group1
const prepareFooterStandardised = (data) => {
  button(
    'With or without DG-related service navigation (contact us)',
    serviceBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without DG-related service navigation (Follow us)',
    socialBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without DG-related navigation (About us)',
    aboutBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without DG-related navigation (Related sites)',
    relatedBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', resetBtnToggler, tabLabels.cases);

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
        section.description = text(
          `sections[${i}].description`,
          section.description,
          tabLabels.required
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
  // Swap the columns when needed.
  if (
    !data.sections[1][0].title &&
    !data.sections[1][1].title &&
    (data.sections[2][0].title || data.sections[2][1].title)
  ) {
    if (data.sections[2][0].demo_id === 'about_us') {
      data.sections[1][0].title = data.sections[2][0].title;
      data.sections[1][0].links = [];
      data.sections[1][0].links = data.sections[2][0].links;
      data.sections[1][0].demo_id = 'about_us';
      data.sections[1][0].title_class_name =
        'ecl-footer-standardised__title--separator';
    }
    if (data.sections[2][1].demo_id === 'related') {
      data.sections[1][1].links = [];
      data.sections[1][1].title = data.sections[2][1].title;
      data.sections[1][1].links = data.sections[2][1].links;
      data.sections[1][1].demo_id = 'related';
      data.sections[1][1].title_class_name =
        'ecl-footer-standardised__title--separator';
    }
    data.sections[2][0] = { section_id: 3 };
    data.sections[2][1] = { section_id: 3 };
    data.swap = true;
  }

  getExtraKnobs(data);
  getComplianceKnob(data);
  // Return the full specs.
  return data;
};

export default {
  title: 'Components/Footers/Standardised',
};

export const Default = () =>
  footerStandardised(prepareFooterStandardised(specs));

Default.storName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withNotes, withCode, withKnobs];
