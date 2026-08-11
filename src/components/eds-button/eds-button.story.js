// EDS integration approach #2: a dedicated component (own twig, own css
// referencing --eds-* directly - see eds-button.scss) rather than the
// shared, themed @ecl/button used by approach #1
// (src/components/button/eds-button.story.js). See
// docs/eds-integration-poc.md for the full comparison.
import button from './eds-button.html.twig';
import dataButton from './demo/data';

const dataButtonPrimary = { ...dataButton, variant: 'primary' };
const dataButtonSecondary = { ...dataButton, variant: 'secondary' };
const dataButtonTertiary = { ...dataButton, variant: 'tertiary' };

export default {
  title: 'Components/Eds button',
};

// `button(...)` resolves async (twig rendering) - see .storybook/
// preview.js's `loaders` array for why `loaded.component` is needed here.
export const Primary = (_, { loaded: { component } }) => component;
Primary.render = async () => button(dataButtonPrimary);
Primary.storyName = 'primary';

export const Secondary = (_, { loaded: { component } }) => component;
Secondary.render = async () => button(dataButtonSecondary);
Secondary.storyName = 'secondary';

export const Tertiary = (_, { loaded: { component } }) => component;
Tertiary.render = async () => button(dataButtonTertiary);
Tertiary.storyName = 'tertiary';
