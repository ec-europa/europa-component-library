import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoContentAudio from '@ecl/ec-specs-icon/demo/data--audio';
import template from '@ecl/ec-twig-component-icon/ecl-icon.html.twig';

const applySvgPath = (data) => {
  data.icon.path = iconPath;
  return data;
};

export const iconDefault = template(applySvgPath(demoContentAudio));

const demoContentAudioPrimary = applySvgPath(demoContentAudio);
demoContentAudioPrimary.icon.color = 'primary';
export const iconPrimary = template(demoContentAudioPrimary);
