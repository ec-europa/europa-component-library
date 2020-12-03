import { withKnobs } from '@storybook/addon-knobs';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  padding: '0.5rem',
};

const styleBox = {
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
  height: '3rem',
  padding: '0.5rem',
  width: '7rem',
};

export default {
  title: 'Utilities/Float',
  decorators: [withKnobs],
};

export const Custom = () => {
  return `
    <h2 class="ecl-u-type-heading-2">Float none</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="ecl-u-f-none">
        Content box
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, ligula vitae lobortis porttitor, magna lectus placerat urna, ornare sollicitudin sem odio at elit. Suspendisse consequat interdum libero, ut ornare lorem ornare sed. Cras in justo non urna interdum dapibus. Vestibulum bibendum lectus non elit facilisis iaculis. Etiam vel placerat purus, vel rutrum sem. Nunc posuere quis lacus at pulvinar. Sed leo nulla, blandit eu risus et, dignissim rutrum mauris.
    </div>
  
    <h2 class="ecl-u-type-heading-2">Float left</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="ecl-u-f-l">
        Content box
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, ligula vitae lobortis porttitor, magna lectus placerat urna, ornare sollicitudin sem odio at elit. Suspendisse consequat interdum libero, ut ornare lorem ornare sed. Cras in justo non urna interdum dapibus. Vestibulum bibendum lectus non elit facilisis iaculis. Etiam vel placerat purus, vel rutrum sem. Nunc posuere quis lacus at pulvinar. Sed leo nulla, blandit eu risus et, dignissim rutrum mauris.
    </div>

    <h2 class="ecl-u-type-heading-2">Float right</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="ecl-u-f-r">
        Content box
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, ligula vitae lobortis porttitor, magna lectus placerat urna, ornare sollicitudin sem odio at elit. Suspendisse consequat interdum libero, ut ornare lorem ornare sed. Cras in justo non urna interdum dapibus. Vestibulum bibendum lectus non elit facilisis iaculis. Etiam vel placerat purus, vel rutrum sem. Nunc posuere quis lacus at pulvinar. Sed leo nulla, blandit eu risus et, dignissim rutrum mauris.
    </div>
  `;
};

Custom.storyName = 'custom';
