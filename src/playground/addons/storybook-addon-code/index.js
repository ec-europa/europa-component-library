import addons, { makeDecorator } from '@storybook/addons';
import { ADD_CODE } from './constants';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    channel.emit(ADD_CODE, story);
    return story;
  },
});

export default withCode;
