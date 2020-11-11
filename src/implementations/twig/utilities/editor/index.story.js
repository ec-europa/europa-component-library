import { withKnobs } from '@storybook/addon-knobs';
import sample from './sample.html';

export default {
  title: 'Utilities/Editor',
  decorators: [withKnobs],
};

export const Sample = () => {
  // Manually inject styles
  function createLink(href, media) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.media = media || 'all';
    return link;
  }

  const head = document.head || document.querySelectorAll('head')[0];
  head.append(createLink('./styles/ecl-ec-preset-editor.css', 'screen'));

  return sample;
};

Sample.storyName = 'sample';
