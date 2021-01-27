import { withNotes } from '@ecl/storybook-addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs';
import withCode from '@ecl/storybook-addon-code';
import { tabLabels } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import logoEC from '@ecl/resources-ec-logo/logo-ec--en.svg';
import dataGroup1 from '@ecl/specs-component-footer-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-footer-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-footer-harmonised/demo/data--group3';
import he from 'he';
import footerHarmonised from './footer-harmonised.html.twig';
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

const dataG1 = { ...dataGroup1 };
const dataG2 = { ...dataGroup2 };
const dataG3 = { ...dataGroup3 };

// Prepare the knobs for group3.
const prepareFooterHarmonisedG3 = (data) => {
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

  // Return the full specs.
  return data;
};

// Prepare the knobs for group1
const prepareFooterHarmonisedG1 = (data) => {
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
