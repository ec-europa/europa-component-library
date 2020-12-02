import addons, { makeDecorator } from '@storybook/addons';
import { EVENTS } from './constants';

export const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    channel.emit(EVENTS.ADD_CODE, story);
    return story;
  },
});

export default withCode;
