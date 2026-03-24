import withCode from '@ecl/storybook-addon-code';

import example234612 from './examples/234612.html';
import example642 from './examples/642.html';
import example282 from './examples/282.html';
import example336 from './examples/336.html';
import offset from './examples/offset.html';
import responsive from './examples/responsive.html';

export default {
  title: 'Layout/Grid',
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    a11y: { disable: true },
    EclNotes: { disable: true },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const _234612 = (_, { loaded: { component } }) => component;

_234612.render = async () => {
  const rendered234612 = await example234612;
  return rendered234612;
};
_234612.storyName = '2-3-4-6-12';

export const _642 = (_, { loaded: { component } }) => component;

_642.render = async () => {
  const rendered642 = await example642;
  return rendered642;
};
_642.storyName = '6-4-2';

export const _282 = (_, { loaded: { component } }) => component;

_282.render = async () => {
  const rendered282 = await example282;
  return rendered282;
};
_282.storyName = '2-8-2';

export const _336 = (_, { loaded: { component } }) => component;

_336.render = async () => {
  const rendered336 = await example336;
  return rendered336;
};
_336.storyName = '3-3-6';

export const _offset = (_, { loaded: { component } }) => component;

_offset.render = async () => {
  const renderedOffset = await offset;
  return renderedOffset;
};
_offset.storyName = 'offset';

export const _responsive = (_, { loaded: { component } }) => component;

_responsive.render = async () => {
  const renderedResponsive = await responsive;
  return renderedResponsive;
};
_responsive.storyName = 'responsive';
