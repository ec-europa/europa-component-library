import ReactDOMServer from 'react-dom/server';
import addons, { makeDecorator } from '@storybook/addons';
import { EVENTS } from './constants';

export const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    const code = ReactDOMServer.renderToStaticMarkup(story);
    channel.emit(EVENTS.ADD_CODE, code);

    return story;
  },
});

export default withCode;
