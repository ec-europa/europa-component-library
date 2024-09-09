import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import separator from './separator.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Separator',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
    parameters: { layout: 'fullscreen' },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedSeparator = `<ul class="ecl-unordered-list">
      <li class="ecl-unordered-list__item">Unordered list</li>
      <li class="ecl-unordered-list__item">Unordered list 
        <ul>
          <li class="ecl-unordered-list__item">Nested unordered list</li>
          <li class="ecl-unordered-list__item">Nested unordered list</li>
        </ul>
      </li>
    </ul>
    ${await separator()}
    <ol class="ecl-ordered-list">
      <li class="ecl-ordered-list__item">Ordered list</li>
      <li class="ecl-ordered-list__item">Ordered list <ol>
        <ol class="ecl-ordered-list">
          <li class="ecl-ordered-list__item">Nested ordered list</li>
          <li class="ecl-ordered-list__item">Nested ordered list</li>
        </ol>
      </li>
    </ol>
    ${await separator()}
    <dl class="ecl-description-list">
      <dt class="ecl-description-list__term">Description term</dt>
      <dd class="ecl-description-list__definition">Description definition</dd>
      <dt class="ecl-description-list__term">Description term</dt>
      <dd class="ecl-description-list__definition">Description definition</dd>
    </dl>${await separator()}`;

  return renderedSeparator;
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
