/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-social-media-follow/demo/data';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  adaptedData.links.forEach((link) => {
    // Corrections on links.
    link.path = link.href;
    link.icon_position = link.iconPosition;
    delete link.href;
    delete link.iconPosition;
    // Corrections on the icons inside the link.
    if (link.icon) {
      link.icon.forEach((icon) => {
        icon.name = icon.shape;
        delete icon.shape;
        icon.path = '/icons-social.svg';
        icon.extra_classes = icon.name.includes('hover')
          ? 'ecl-social-media-follow__icon-hover'
          : 'ecl-social-media-follow__icon';
      });
    }
  });

  return adaptedData;
};

export default adapter(specData);
