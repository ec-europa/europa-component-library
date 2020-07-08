import merge from 'deepmerge';

const sortPages = (pages) => {
  pages.sort((a, b) => {
    if (!a.attributes || !b.attributes) return 0;

    // Groups last
    if (a.attributes.type !== b.attributes.type) {
      return a.attributes.type === 'group' ? 1 : -1;
    }

    // Sort on order if exists, otherwise on title
    if (a.attributes.order !== undefined && b.attributes.order !== undefined) {
      return a.attributes.order - b.attributes.order;
    }

    if (
      typeof a.attributes.title === 'string' &&
      typeof b.attributes.title === 'string'
    ) {
      return a.attributes.title
        .trim()
        .localeCompare(b.attributes.title.trim(), 'en-GB');
    }

    return 0;
  });
};

const loopThroughPages = (pages, level = 0) => {
  pages.forEach((page) => {
    if (
      page.children &&
      Array.isArray(page.children) &&
      page.children.length > 0
    ) {
      loopThroughPages(page.children, level + 1);
    }
  });

  sortPages(pages, level);
};

const addParent = (pages) => {
  pages.forEach((page) => {
    page.parent = null; // eslint-disable-line no-param-reassign

    if (
      page.children &&
      Array.isArray(page.children) &&
      page.children.length > 0
    ) {
      addParent(page.children);

      page.children.forEach((p) => {
        p.parent = page; // eslint-disable-line no-param-reassign
      });
    }
  });
};

const processPages = (pages) => {
  const newPages = [];

  // First pass
  pages.forEach((p) => {
    const { url } = p.attributes;
    const sections = url.split('/').filter((s) => s);

    let parentSection = newPages;
    let fullSection = '';
    sections.forEach((s, index) => {
      fullSection = `${fullSection}/${s}`;
      let sectionExists = false;
      let sectionIndex = 0;
      for (let i = 0; i < parentSection.length; i += 1) {
        if (parentSection[i].attributes.url === `${fullSection}/`) {
          sectionExists = true;
          sectionIndex = i;
          break;
        }
      }

      if (!sectionExists) {
        parentSection.push({
          attributes: {
            url: `${fullSection}/`,
            order: 1000,
            title: s,
            level: index,
          },
          document: null,
          children: [],
          key: `.${fullSection}/`,
        });

        sectionIndex = parentSection.length - 1;
      }

      if (index === sections.length - 1) {
        parentSection[sectionIndex] = merge(parentSection[sectionIndex], p);
      }

      parentSection = parentSection[sectionIndex].children;
    });
  });

  // Second pass: add "parent" to children
  addParent(newPages);

  // Sort
  loopThroughPages(newPages);

  return newPages;
};

export default processPages;
