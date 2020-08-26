/* eslint-disable default-case */
import { formatLink } from '@ecl-twig/data-utils';

const formatSection = (section) => {
  const sections = [];
  let innerSections = false;
  let innerSectionsArray = [];
  if (!Array.isArray(section)) {
    section = [section];
  } else {
    innerSections = true;
  }

  section.forEach((s) => {
    if (s.listClassName) {
      s.list_class_name = s.listClassName;
      delete s.listClassName;
    }
    if (s.titleClassName) {
      s.title_class_name = s.titleClassName;
      delete s.titleClassName;
    }
    if (s.contentBefore) {
      s.content_before = s.contentBefore;
      s.section_class_name = 'ecl-footer-core__section--separator';
      delete s.contentBefore;
    }
    if (s.contentAfter) {
      s.content_after = s.contentAfter;
      delete s.contentAfter;
    }
    if (s.title && s.title instanceof Object) {
      s.title = formatLink(s.title);
      if (s.title.icon) {
        s.title.icon.path = '/icons.svg';
      }
    }
    if (s.links && Array.isArray(s.links)) {
      s.links.forEach((l, i) => {
        if (!l.link) {
          s.links[i] = formatLink(l);
          if (l.icon) {
            l.icon.path = '/icons.svg';
          }
        }
      });
    }
    if (innerSections) {
      innerSectionsArray.push(s);
    } else {
      innerSectionsArray = s;
    }
  });

  sections.push(innerSectionsArray);
  return sections;
};

const adapter = (initialData) => {
  const adaptedData = {};
  adaptedData.sections = [];
  if (initialData.logo) {
    adaptedData.sections.push({ logo: initialData.logo });
    adaptedData.sections[0].logo.path = initialData.logo.href;
    delete adaptedData.sections[0].logo.href;
  }
  Object.keys(initialData.sections).forEach((section) => {
    if (section === 'siteName') {
      if (adaptedData.sections[0]) {
        adaptedData.sections[0] = {
          description: initialData.sections.siteName.description,
          logo: adaptedData.sections[0].logo,
        };
      } else {
        adaptedData.sections.push(
          ...formatSection(initialData.sections.siteName)
        );
      }
    }
    if (section === 'classes') {
      adaptedData.sections.push(...formatSection(initialData.sections.classes));
    }
    if (section === 'serviceNavigation') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.serviceNavigation)
      );
    }
    if (section === 'legalNavigation') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.legalNavigation)
      );
    }
  });

  return adaptedData;
};

export default adapter;
