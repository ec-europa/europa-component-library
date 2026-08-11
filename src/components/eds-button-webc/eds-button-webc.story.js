// EDS integration approach #3: the light custom element (no Twig, no
// Shadow DOM, no new CSS - see eds-button-webc.js) rendered directly as a
// DOM node. Compare against approach #1 (src/components/button/
// eds-button.story.js) and approach #2 (src/components/eds-button/
// eds-button.story.js). Kept just as small/minimal as those, for a fair
// comparison.
import './eds-button-webc';
import dataButton from './demo/data';

function buildButton({ label, variant, type, disabled }) {
  const el = document.createElement('eds-button-webc');
  el.setAttribute('variant', variant);
  el.setAttribute('type', type);
  if (disabled) el.setAttribute('disabled', '');
  el.textContent = label;
  return el;
}

const dataButtonPrimary = { ...dataButton, variant: 'primary' };
const dataButtonSecondary = { ...dataButton, variant: 'secondary' };
const dataButtonTertiary = { ...dataButton, variant: 'tertiary' };

export default {
  title: 'Components/Eds button webc',
};

// Synchronous, unlike the twig-based sibling stories - no twing render
// step involved, so none of preview.js's async `loaders` dance is needed
// here; returning the DOM node directly is enough.
export const Primary = () => buildButton(dataButtonPrimary);
Primary.storyName = 'primary';

export const Secondary = () => buildButton(dataButtonSecondary);
Secondary.storyName = 'secondary';

export const Tertiary = () => buildButton(dataButtonTertiary);
Tertiary.storyName = 'tertiary';
