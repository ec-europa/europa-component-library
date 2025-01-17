import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  padding: '0.5rem',
};

const styleBox = {
  alignItems: 'center',
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'flex',
  height: '3rem',
  justifyContent: 'center',
  padding: '0.5rem',
  width: '7rem',
};

export default {
  title: 'Utilities/Float',
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    a11y: { disable: true },
    EclNotes: { disable: true },
  },
};

export const Custom = () =>
  ` <h2 class="ecl-u-type-heading-2">Float none</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="ecl-u-f-none">
        ecl-u-f-none
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, ligula vitae lobortis porttitor, magna lectus placerat urna, ornare sollicitudin sem odio at elit. Suspendisse consequat interdum libero, ut ornare lorem ornare sed. Cras in justo non urna interdum dapibus. Vestibulum bibendum lectus non elit facilisis iaculis. Etiam vel placerat purus, vel rutrum sem. Nunc posuere quis lacus at pulvinar. Sed leo nulla, blandit eu risus et, dignissim rutrum mauris.
    </div>
    <h2 class="ecl-u-type-heading-2">Float left</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="ecl-u-f-l">
        ecl-u-f-l
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, ligula vitae lobortis porttitor, magna lectus placerat urna, ornare sollicitudin sem odio at elit. Suspendisse consequat interdum libero, ut ornare lorem ornare sed. Cras in justo non urna interdum dapibus. Vestibulum bibendum lectus non elit facilisis iaculis. Etiam vel placerat purus, vel rutrum sem. Nunc posuere quis lacus at pulvinar. Sed leo nulla, blandit eu risus et, dignissim rutrum mauris.
    </div>
    <h2 class="ecl-u-type-heading-2">Float right</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="ecl-u-f-r">
        ecl-u-f-r
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, ligula vitae lobortis porttitor, magna lectus placerat urna, ornare sollicitudin sem odio at elit. Suspendisse consequat interdum libero, ut ornare lorem ornare sed. Cras in justo non urna interdum dapibus. Vestibulum bibendum lectus non elit facilisis iaculis. Etiam vel placerat purus, vel rutrum sem. Nunc posuere quis lacus at pulvinar. Sed leo nulla, blandit eu risus et, dignissim rutrum mauris.
    </div>
  `;

Custom.storyName = 'custom';
