import iconPath from '@ecl/resources-ec-icons/dist/sprites/icons.svg';

/**
 * Pass a specification data object and get all occurences of *.svg corrected to file loader path.
 * @param {Object} data
 */
const correctSvgPath = (data) => {
  Object.keys(data).forEach((prop) => {
    if (typeof data[prop] === 'string' && data[prop].includes('.svg')) {
      data[prop] = iconPath;
    }
    if (data[prop] !== null && typeof data[prop] === 'object') {
      data[prop] = correctSvgPath(data[prop]);
    }
  });

  return data;
};

export default correctSvgPath;
