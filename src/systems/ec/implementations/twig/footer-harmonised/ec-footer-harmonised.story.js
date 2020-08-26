import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logoEC from '@ecl/ec-resources-logo/logo--en.svg';
import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';
import footerHarmonised from './ecl-footer-harmonised.html.twig';
import notes from './README.md';

// Icons.
const groups = [dataGroup1, dataGroup2];
groups.forEach((g) => {
  g.sections.forEach((section) => {
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
});

// Preserve the original data.
const logo0 = JSON.parse(JSON.stringify(dataGroup3.sections[1].logos[0]));
const logo1 = JSON.parse(JSON.stringify(dataGroup3.sections[1].logos[1]));
const contactUs = JSON.parse(JSON.stringify(dataGroup1.sections[1][0]));
const followUs = JSON.parse(JSON.stringify(dataGroup1.sections[1][1]));
const aboutUs = JSON.parse(JSON.stringify(dataGroup1.sections[2][0]));
const related = JSON.parse(JSON.stringify(dataGroup1.sections[2][1]));

const dataG1 = { ...dataGroup1 };
const dataG2 = { ...dataGroup2 };
const dataG3 = { ...dataGroup3 };

// Buttons callbacks for optional elements.
// Group 3
const partnershipLogoBtnToggler = () => {
  if (dataG3.sections[1].logos[0]) {
    delete dataG3.sections[1].logos[0];
  } else {
    dataG3.sections[1].logos[0] = logo0;
  }
};
const partnershipLogo1BtnToggler = () => {
  if (dataG3.sections[1].logos[1]) {
    delete dataG3.sections[1].logos[1];
  } else {
    dataG3.sections[1].logos[1] = logo1;
  }
};
const resetG3BtnToggler = () => {
  dataG3.sections[1].logos[0] = logo0;
  dataG3.sections[1].logos[1] = logo1;
};
// Group 1
// Classes.
const classBtnToggler = () => {
  dataG1.sections[3] = dataG1.sections[3].links
    ? { section_id: 6 }
    : dataGroup1.sections[3];
};
// Dg related service navigation (contact us)
const serviceBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (dataG1.sections[1][0].demo_id === 'contact_us') {
    dataG1.sections[1][0] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (dataG1.sections[1][1].demo_id === 'related') {
      dataG1.sections[1][1] = { section_id: 2 };
      dataG1.sections[2][1] = related;
      dataG1.sections[2][1].section_id = 3;
    }
    if (dataG1.sections[1][0].demo_id === 'about_us') {
      dataG1.sections[1][0] = { section_id: 2 };
      dataG1.sections[2][0] = aboutUs;
      dataG1.sections[2][0].section_id = 3;
    }
    // Show it.
    dataG1.sections[1][0] = contactUs;
    dataG1.sections[1][0].section_id = 2;
  }
};
// Dg related service navigation. (follow us)
const socialBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (dataG1.sections[1][1].demo_id === 'follow_us') {
    dataG1.sections[1][1] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (dataG1.sections[1][1].demo_id === 'related') {
      dataG1.sections[1][1] = { section_id: 2 };
      dataG1.sections[2][1] = related;
      dataG1.sections[2][1].section_id = 3;
    }
    if (dataG1.sections[1][0].demo_id === 'about_us') {
      dataG1.sections[1][0] = { section_id: 2 };
      dataG1.sections[2][0] = aboutUs;
      dataG1.sections[2][0].section_id = 3;
    }
    // Show it.
    dataG1.sections[1][1] = followUs;
    dataG1.sections[1][1].section_id = 2;
  }
};
// Dg related navigation. (About us)
const aboutBtnToggler = () => {
  // No optional section is rendered.
  const emptyOptional =
    !dataG1.sections[1][0].demo_id &&
    !dataG1.sections[1][1].demo_id &&
    !dataG1.sections[2][1].demo_id &&
    !dataG1.sections[2][0].demo_id;
  // If it's where is supposed to be, hide it.
  if (dataG1.sections[2][0].demo_id === 'about_us') {
    dataG1.sections[2][0] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (dataG1.sections[1][0].demo_id === 'about_us') {
    dataG1.sections[1][0] = { section_id: 2 };
    // If no block is present or we have only one column.
  } else if (emptyOptional || dataG1.sections[1][1].demo_id === 'related') {
    dataG1.sections[1][0] = aboutUs;
    dataG1.sections[1][0].section_id = 2;
    // We show it.
  } else {
    dataG1.sections[2][0] = aboutUs;
    dataG1.sections[2][0].section_id = 3;
  }
};
// Dg related navigation. (Related sites)
const relatedBtnToggler = () => {
  // No optional section is rendered.
  const emptyOptional =
    !dataG1.sections[1][0].demo_id &&
    !dataG1.sections[1][1].demo_id &&
    !dataG1.sections[2][1].demo_id &&
    !dataG1.sections[2][0].demo_id;
  // If it's where is supposed to be, hide it.
  if (dataG1.sections[2][1].demo_id === 'related') {
    dataG1.sections[2][1] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (dataG1.sections[1][1].demo_id === 'related') {
    dataG1.sections[1][1] = { section_id: 2 };
    // If no block is present or we have only one column.
  } else if (emptyOptional || dataG1.sections[1][0].demo_id === 'about_us') {
    dataG1.sections[1][1] = related;
    dataG1.sections[1][1].section_id = 2;
    // We show it.
  } else {
    dataG1.sections[2][1] = related;
    dataG1.sections[2][1].section_id = 3;
  }
};
// Reset button.
const resetBtnToggler = () => {
  dataG1.sections[1][0] = contactUs;
  dataG1.sections[1][1] = followUs;
  dataG1.sections[2][0] = aboutUs;
  dataG1.sections[2][1] = related;
  dataG1.sections[1][0].section_id = 2;
  dataG1.sections[1][1].section_id = 2;
  dataG1.sections[2][0].section_id = 3;
  dataG1.sections[2][1].section_id = 3;
};

// Prepare the knobs for group3.
const prepareFooterHarmonisedG3 = (data) => {
  button(
    'With or without first "Partnership logo"',
    partnershipLogoBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without second "Partnership logo"',
    partnershipLogo1BtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', resetG3BtnToggler, tabLabels.cases);
  dataG3.sections.forEach((section, i) => {
    if (section.title) {
      section.title = text(
        `sections[${i}].title`,
        section.title,
        tabLabels.required
      );
    }

    if (section.logos && Array.isArray(section.logos)) {
      section.logos.forEach((logo, j) => {
        let label = tabLabels.optional;
        let logoSrc = section.logos[j].logo.src;
        if (j === 2) {
          label = tabLabels.required;
          logoSrc = logoEC;
        }
        if (logo) {
          section.logos[j].logo.title = text(
            `sections[${i}].logos[${j}].logo.title`,
            section.logos[j].logo.title,
            label
          );
          section.logos[j].logo.alt = text(
            `sections[${i}].logos[${j}].logo.alt`,
            section.logos[j].logo.alt,
            label
          );
          section.logos[j].logo.src = text(
            `sections[${i}].logos[${j}].logo.src`,
            logoSrc,
            label
          );
        }
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);
  // Return the full specs.
  return data;
};

// Prepare the knobs for group2.
const prepareFooterHarmonisedG2 = (data) => {
  dataG2.sections.forEach((section, i) => {
    if (section.title) {
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
      });
    }
  });

  getExtraKnobs(dataG2);
  getComplianceKnob(dataG2);
  // Return the full specs.
  return data;
};

// Prepare the knobs for group1
const prepareFooterHarmonisedG1 = (data) => {
  button('With our without class names', classBtnToggler, tabLabels.cases);
  button(
    'With our without DG-related service navigation (contact us)',
    serviceBtnToggler,
    tabLabels.cases
  );
  button(
    'With our without DG-related service navigation (Follow us)',
    socialBtnToggler,
    tabLabels.cases
  );
  button(
    'With our without DG-related navigation (About us)',
    aboutBtnToggler,
    tabLabels.cases
  );
  button(
    'With our without DG-related navigation (Related sites)',
    relatedBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', resetBtnToggler, tabLabels.cases);
  // Swap the columns when needed.
  if (!dataG1.sections[1][0].title && !dataG1.sections[1][1].title) {
    dataG1.sections[1][0] = dataG1.sections[2][0].title
      ? aboutUs
      : { section_id: 2 };
    dataG1.sections[1][1] = dataG1.sections[2][1].title
      ? related
      : { section_id: 2 };
    dataG1.sections[1][0].section_id = 2;
    dataG1.sections[1][1].section_id = 2;
    dataG1.sections[2][0] = { section_id: 3 };
    dataG1.sections[2][1] = { section_id: 3 };
  }

  dataG1.sections.forEach((section, i) => {
    if (!Array.isArray(section)) {
      let label = tabLabels.required;
      if (i === 3) {
        label = tabLabels.optional;
      }
      if (section.title && section.title.link) {
        section.title.link = {
          label: text(
            `sections[${i}].title.link.label`,
            section.title.link.label,
            label
          ),
          path: text(
            `sections[${i}].title.link.path`,
            section.title.link.path,
            label
          ),
        };
      }
      if (section.description) {
        section.description = he.decode(
          text(`sections[${i}].description`, section.description, label)
        );
      }
      if (section.content_before) {
        section.content_before = text(
          `sections[${i}].content_before`,
          section.content_before,
          label
        );
      }
      if (section.list_class_name) {
        section.list_class_name = text(
          `sections[${i}].list_class_name`,
          section.list_class_name,
          label
        );
      }
      if (section.links) {
        section.links.forEach((linkItem, j) => {
          linkItem.link.label = text(
            `sections[${i}].links[${j}].link.label`,
            linkItem.link.label,
            label
          );
          linkItem.link.path = text(
            `sections[${i}].links[${j}].link.path`,
            linkItem.link.path,
            label
          );
          if (linkItem.icon) {
            linkItem.icon.name = text(
              `sections[${i}].links[${j}].icon.name`,
              linkItem.icon.name,
              label
            );
            linkItem.icon.path = text(
              `sections[${i}].links[${j}].icon.path`,
              defaultSprite,
              label
            );
            linkItem.icon.size = text(
              `sections[${i}].links[${j}].icon.size`,
              linkItem.icon.size,
              label
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

  getExtraKnobs(dataG1);
  getComplianceKnob(dataG1);
  // Return the full specs.
  return data;
};

export default {
  title: 'Components/Footers/Harmonised',
  decorators: [withCode, withNotes, withKnobs],
};

export const Group1 = () => footerHarmonised(prepareFooterHarmonisedG1(dataG1));

Group1.storyName = 'group 1';
Group1.parameters = {
  notes: {
    markdown: notes,
    json: { dataG1 },
  },
};

export const Group2 = () => footerHarmonised(prepareFooterHarmonisedG2(dataG2));

Group2.storyName = 'group 2';
Group2.parameters = {
  notes: {
    markdown: notes,
    json: { dataG2 },
  },
};

export const Group3 = () => footerHarmonised(prepareFooterHarmonisedG3(dataG3));

Group3.storyName = 'group 3';
Group3.parameters = {
  notes: {
    markdown: notes,
    json: { dataG3 },
  },
};
