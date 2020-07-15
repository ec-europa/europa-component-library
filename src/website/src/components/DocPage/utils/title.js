export const getTitle = (component) => {
  if (
    component &&
    component.attributes &&
    component.attributes.level > 0 &&
    component.attributes.title
  ) {
    return component.attributes.title;
  }

  return '';
};

export const getPageTitle = (component) => {
  if (component.attributes.isTab) {
    if (component.parent) {
      return getTitle(component.parent);
    }

    return '';
  }

  return getTitle(component);
};

export const getSectionTitle = (component) => {
  if (component.attributes.isTab) {
    if (component.parent && component.parent.parent) {
      return getTitle(component.parent.parent);
    }

    return '';
  }

  if (component.parent) {
    return getTitle(component.parent);
  }

  return getTitle(component);
};
