import { makeDecorator } from '@storybook/preview-api';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const story = getStory(context);
    return story;
  },
});

export default withCode;
