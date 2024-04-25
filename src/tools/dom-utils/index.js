export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

export const queryAll = (selector, context = document) =>
  [].slice.call(context.querySelectorAll(selector));

export const queryOne = (selector, context = document) =>
  context.querySelector(selector);

/**
 * @param {Object} stylesObject Object containing styles passed to React `style` prop
 * @returns {String} formatted styles for `style` attribute of a DOM element
 */
export const styled = (stylesObject) =>
  Object.keys(stylesObject)
    .map((prop) => {
      // backgroundColor to background-color
      const key = prop
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();

      return `${key}:${stylesObject[prop]}`;
    })
    .join(';');

/**
 * @param {icon} svg icon
 * @param {string} classes:  css classes
 * @returns svg element
 */
export const createSvgIcon = (icon, classes) => {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = icon; // avoiding the use of not-so-stable createElementNs
  const svg = tempElement.children[0];
  svg.removeAttribute('height');
  svg.removeAttribute('width');
  svg.setAttribute('focusable', false);
  svg.setAttribute('aria-hidden', true);
  // The following element is <path> which does not support classList API as others.
  svg.setAttribute('class', classes);
  return svg;
};
