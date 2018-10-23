// Sort pages
const firstLevelKeys = [
  'Getting started',
  "What's new",
  'Guidelines',
  'Templates',
  'Page structure',
  'Components',
  // 'Utilities',
  'Resources',
];

const createPage = p => ({
  ...p,
  type: 'page',
});

const pushPageToParent = (p, parent) => {
  let groupExists = false;

  for (let i = 0; i < parent.length; i += 1) {
    if (parent[i].title === p.group) {
      parent[i].children.push(createPage(p));
      groupExists = true;
      break;
    }
  }

  if (!groupExists) {
    parent.push({
      type: 'group',
      title: p.group,
      children: [createPage(p)],
    });
  }
};

const sortPages = (pages, level) => {
  pages.sort((a, b) => {
    if (level === 0) {
      if (
        firstLevelKeys.indexOf(a.title) > -1 &&
        firstLevelKeys.indexOf(b.title) > -1
      ) {
        return (
          firstLevelKeys.indexOf(a.title) - firstLevelKeys.indexOf(b.title)
        );
      }
    } else {
      // Pages first
      if (a.type !== b.type) {
        return a.type === 'page' ? -1 : 1;
      }

      // Sort on order if exists, otherwise on title
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }

      if (typeof a.title === 'string' && typeof b.title === 'string') {
        return a.title.localeCompare(b.title);
      }
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
    if (!p.section && !p.group) {
      // Simple page
      newPages.push(createPage(p));
      return;
    }

    if (!p.section) {
      // Only a group
      pushPageToParent(p, newPages);
      return;
    }

    if (p.section === 'Utilities') {
      // temporarily ignore utilities
      return;
    }

    const sections = p.section.split('/');

    let parentSection = newPages;
    sections.forEach((s, index) => {
      let sectionExists = false;
      let sectionIndex = 0;
      for (let i = 0; i < parentSection.length; i += 1) {
        if (
          parentSection[i].type === 'section' &&
          parentSection[i].title === s
        ) {
          sectionExists = true;
          sectionIndex = i;
          break;
        }
      }

      if (!sectionExists) {
        parentSection.push({
          type: 'section',
          title: s,
          children: [],
        });

        sectionIndex = parentSection.length - 1;
      }

      if (index === sections.length - 1) {
        if (p.group) {
          pushPageToParent(p, parentSection[sectionIndex].children);
        } else {
          parentSection[sectionIndex].children.push(createPage(p));
        }

        return;
      }

      parentSection = parentSection[sectionIndex].children;
    });
  });

  loopThroughPages(newPages);

  return newPages;
};

export default processPages;
