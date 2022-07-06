/* eslint-disable no-param-reassign */
import iconPathEc from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconPathEu from '@ecl/resources-eu-icons/dist/sprites/icons.svg';
import iconSocialPath from '@ecl/resources-ec-social-icons/dist/sprites/icons-social.svg';
import iconMediaSocialPath from '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg';
import iconFlagPath from '@ecl/resources-flag-icons/dist/sprites/icons-flag.svg';
import getSystem from '@ecl/builder/utils/getSystem';

const system = getSystem();
const iconPath = system === 'eu' ? iconPathEu : iconPathEc;

/**
 * Pass a specification data object and get all occurences of *.svg corrected to file loader path.
 * @param {Object} data
 */
const correctSvgPath = (data) => {
  Object.keys(data).forEach((prop) => {
    if (typeof data[prop] === 'string' && data[prop].includes('.svg')) {
      if (data[prop].includes('social-media')) {
        data[prop] = iconMediaSocialPath;
      } else if (data[prop].includes('social')) {
        data[prop] = iconSocialPath;
      } else if (data[prop].includes('flag')) {
        data[prop] = iconFlagPath;
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
