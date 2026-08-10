// EDS integration approach #1: the real @ecl/button component (same
// button.html.twig, same build workflow as ec/eu) themed through the eds
// preset. See src/themes/eds/variables/_button.scss for the current
// (placeholder) token wiring. Kept deliberately small — no controls/notes
// addons — this exists to compare against an alternative, more
// hand-styled approach being tested in parallel.
import button from './button.html.twig';
import dataButton from './demo/data';

const dataButtonPrimary = { ...dataButton, variant: 'primary' };
const dataButtonSecondary = { ...dataButton, variant: 'secondary' };
const dataButtonTertiary = { ...dataButton, variant: 'tertiary' };

export default {
  title: 'Components/Button',
};

// `button(...)` resolves async (twig rendering) - the `.storybook/
// preview.js` `loaders` array awaits `.render` and hands the result back
// as `loaded.component`, since @storybook/html-webpack5 doesn't await a
// story's render function on its own.
export const Primary = (_, { loaded: { component } }) => component;
Primary.render = async () => button(dataButtonPrimary);
Primary.storyName = 'primary';

export const Secondary = (_, { loaded: { component } }) => component;
Secondary.render = async () => button(dataButtonSecondary);
Secondary.storyName = 'secondary';

export const Tertiary = (_, { loaded: { component } }) => component;
Tertiary.render = async () => button(dataButtonTertiary);
Tertiary.storyName = 'tertiary';
