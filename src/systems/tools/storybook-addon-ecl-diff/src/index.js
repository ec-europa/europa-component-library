import addons, { makeDecorator } from '@storybook/addons';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.blockquote = (text) => {
  if (text.includes('Perfectly')) {
    return `<blockquote class="matches"><p>${text}</p></blockquote>`;
  }
  return `<blockquote class="differences"><p>${text}</p></blockquote>`;
};

function renderMarkdown(text, options) {
  return marked(text, { ...marked.defaults, renderer, ...options });
}

export const withEclDiff = makeDecorator({
  name: 'withEclDiff',
  parameterName: 'ecl_diff',

  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const storyOptions = parameters || options;

    const { eclDiff, markdownOptions } =
      typeof storyOptions === 'string'
        ? { eclDiff: storyOptions }
        : storyOptions;

    if (!eclDiff) {
      throw new Error('You must set `eclDiff` on the `eclDiff` parameter');
    }
    const res = renderMarkdown(eclDiff, markdownOptions);

    channel.emit('ecl/ecl_diff/add_code', res);

    return getStory(context);
  },
});

export const withEclMarkupDiff = (text, options) =>
  withEclDiff({
    eclDiff: text,
    markdownOptions: options,
  });
