// Query helper
export const queryAll = (selector, context = document) =>
  [].slice.call(context.querySelectorAll(selector));

export default queryAll;

export const hasClass = (element, cssClass) =>
  !!element.className.match(new RegExp(`(\\s|^)${cssClass}(\\s|$)`));

export const addClass = (element, cssClass) => {
  if (!hasClass(element, cssClass)) {
    // eslint-disable-next-line no-param-reassign
    element.className = `${element.className.trim()} ${cssClass}`;
  }
};

export const removeClass = (element, cssClass) => {
  if (hasClass(element, cssClass)) {
    const reg = new RegExp(`(\\s|^)${cssClass}(\\s|$)`);
    // eslint-disable-next-line no-param-reassign
    element.className = element.className.trim().replace(reg, ' ');
  }
};
