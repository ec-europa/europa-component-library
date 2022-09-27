import withCode from '@ecl/storybook-addon-code';
import iconMediaSocialPath from '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg';
import iconPath from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import SocialMediaFollow from './src/ecl-social-media-follow.html';
import SocialMediaFollowVertical from './src/ecl-social-media-follow--vertical.html';

const fixPaths = (data) =>
  data
    .replace(/\/icon-social-media.svg/g, iconMediaSocialPath)
    .replace(/\/icons.svg/g, iconPath);

export default {
  title: 'webtools/Social Media Follow',
  decorators: [withCode],
  parameters: {
    cssresources: [
      {
        id: 'EC',
        code: `<link rel="stylesheet" type="text/css" href="./ecl-ec-social-media-follow.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: 'EU',
        code: `<link rel="stylesheet" type="text/css" href="./ecl-eu-social-media-follow.css" />`,
        picked: false,
        hideCode: true,
      },
    ],
  },
};

export const Horizontal = () => fixPaths(SocialMediaFollow);
export const Vertical = () => fixPaths(SocialMediaFollowVertical);
