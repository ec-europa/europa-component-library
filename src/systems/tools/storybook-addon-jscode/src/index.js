import addons, { makeDecorator } from '@storybook/addons';

export const withJsCode = makeDecorator({
  name: 'withJsCode',
  parameterName: 'diff',

  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const storyOptions = parameters || options;

    const { jsmarkup } =
      typeof storyOptions === 'string'
        ? { jsmarkup: storyOptions }
        : storyOptions;

    if (!jsmarkup) {
      throw new Error('You must set `jsmarkup` on the `diff` parameter');
    }

    channel.emit('ecl/jsCode/add_code', jsmarkup);

    return getStory(context);
  },
});

export const withJsMarkup = (text) =>
  withJsCode({
    jsmarkup: text,
  });
