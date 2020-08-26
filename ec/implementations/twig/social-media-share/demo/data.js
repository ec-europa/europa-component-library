/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-social-media-share/demo/data';

const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  adaptedData.links.forEach((link) => {
    // Corrections on links.
    link.path = link.href;
    delete link.href;
    if (link.iconPosition) {
      link.icon_position = link.iconPosition;
      delete link.iconPosition;
    }

    link.extra_classes = link.className;
    delete link.className;
    // Corrections on the icons inside the link.
    if (link.icon) {
      link.icon.forEach((icon) => {
        icon.name = icon.shape;
        icon.path = '/icons-social.svg';
        // Place common-sense defaults if spec is not concrete about it.
        icon.extra_classes = icon.name.includes('hover')
          ? 'ecl-social-media-share__icon ecl-social-media-share__icon-hover'
          : 'ecl-social-media-share__icon';
        delete icon.className;
        delete icon.shape;
      });
    }
  });

  return adaptedData;
};

export default adapter(specData);
