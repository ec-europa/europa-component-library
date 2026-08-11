// EDS integration approach #3: the light custom element (see
// eds-button-webc.js) rendered directly as a DOM node. See
// docs/eds-integration-poc.md for the full comparison.
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
