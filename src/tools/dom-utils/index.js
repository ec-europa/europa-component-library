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
 * Object containing styles passed to React `style` prop.
 * @param {Object} stylesObject
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
