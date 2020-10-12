import merge from 'deepmerge';
import demoContentAudio from '@ecl/specs-component-icon/demo/data--audio';
import template from '@ecl/twig-component-icon/ecl-icon.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataDefault = correctSvgPath(demoContentAudio);
export const iconDefault = template(dataDefault);

export const iconPrimary = template(
  merge(dataDefault, { icon: { color: 'primary' } })
);
export const iconXs = template(merge(dataDefault, { icon: { size: 'xs' } }));
export const iconS = template(merge(dataDefault, { icon: { size: 's' } }));
export const iconM = template(merge(dataDefault, { icon: { size: 'm' } }));
export const iconL = template(merge(dataDefault, { icon: { size: 'l' } }));
export const iconXL = template(merge(dataDefault, { icon: { size: 'xl' } }));
export const icon2XL = template(merge(dataDefault, { icon: { size: '2xl' } }));
export const iconFluid = template(
  merge(dataDefault, { icon: { size: 'fluid' } })
);
export const iconRotate0 = template(
  merge(dataDefault, { icon: { transform: 'rotate-0' } })
);
export const iconRotate90 = template(
  merge(dataDefault, { icon: { transform: 'rotate-90' } })
);
export const iconRotate180 = template(
  merge(dataDefault, { icon: { transform: 'rotate-180' } })
);
export const iconRotate270 = template(
  merge(dataDefault, { icon: { transform: 'rotate-270' } })
);
export const iconFlipVertical = template(
  merge(dataDefault, { icon: { transform: 'flip-vertical' } })
);
export const iconFlipHorizontal = template(
  merge(dataDefault, { icon: { transform: 'flip-horizontal' } })
);
export const iconImage = template(
  merge(dataDefault, {
    as_image: true,
    extra_accessibility: {
      title: 'Title',
      title_id: 'example-title',
      description: 'Description',
      description_id: 'example-desc',
    },
  })
);
