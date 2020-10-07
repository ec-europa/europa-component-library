import demoContentAudio from '@ecl/ec-specs-icon/demo/data--audio';
import template from '@ecl/ec-twig-component-icon/ecl-icon.html.twig';
import correctSvgPath from '../../../../../utils/correctSvgPath';

export const iconDefault = template(correctSvgPath(demoContentAudio));

const demoContentAudioPrimary = correctSvgPath(demoContentAudio);
demoContentAudioPrimary.icon.color = 'primary';
export const iconPrimary = template(demoContentAudioPrimary);
