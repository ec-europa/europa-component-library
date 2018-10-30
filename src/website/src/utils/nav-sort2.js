const sortPages = pages => {
  pages.sort((a, b) => {
    // Pages first
    /*
    if (a.type !== b.type) {
      return a.type === 'page' ? -1 : 1;
    }
    */

    // Sort on order if exists, otherwise on title
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }

    if (typeof a.title === 'string' && typeof b.title === 'string') {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });
};

const loopThroughPages = (pages, level = 0) => {
  pages.forEach(page => {
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

const processPages = pages => {
  const newPages = [];
  pages.forEach(p => {
    const { url } = p.attributes;
    const sections = url.split('/').filter(s => s);
    // console.log(sections);

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
          attributes: { url: `${fullSection}/`, order: 0, title: s },
          document: null,
          children: [],
          key: `.${fullSection}/`,
        });

        sectionIndex = parentSection.length - 1;
      }

      if (index === sections.length - 1) {
        parentSection[sectionIndex] = Object.assign(
          {},
          parentSection[sectionIndex],
          p
        );
      }

      parentSection = parentSection[sectionIndex].children;
    });
  });

  loopThroughPages(newPages);

  // console.log(newPages);

  return newPages;
};

export default processPages;
