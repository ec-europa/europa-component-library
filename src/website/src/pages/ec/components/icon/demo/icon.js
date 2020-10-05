import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoContentAudio from '@ecl/ec-specs-icon/demo/data--audio';
import template from '@ecl/ec-twig-component-icon/ecl-icon.html.twig';
import adapter from '@ecl/ec-twig-component-icon/adapter';

const applySvgPath = (data) => {
  data.icon.path = iconPath;
  return data;
};

export const iconDefault = template(applySvgPath(adapter(demoContentAudio)));

const demoContentAudioPrimary = applySvgPath(adapter(demoContentAudio));
demoContentAudioPrimary.icon.color = 'primary';
export const iconPrimary = template(demoContentAudioPrimary);
