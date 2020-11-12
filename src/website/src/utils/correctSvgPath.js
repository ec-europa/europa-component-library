import iconPath from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconSocialPath from '@ecl/resources-ec-social-icons/dist/sprites/icons-social.svg';

/**
 * Pass a specification data object and get all occurences of *.svg corrected to file loader path.
 * @param {Object} data
 */
const correctSvgPath = (data) => {
  Object.keys(data).forEach((prop) => {
    if (typeof data[prop] === 'string' && data[prop].includes('.svg')) {
      if (data[prop].includes('social')) {
        data[prop] = iconSocialPath;
      } else {
        data[prop] = iconPath;
      }
    }
    if (data[prop] !== null && typeof data[prop] === 'object') {
      data[prop] = correctSvgPath(data[prop]);
    }
  });

  return data;
};

export default correctSvgPath;
