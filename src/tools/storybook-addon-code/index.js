import ReactDOMServer from 'react-dom/server';
import addons, { makeDecorator } from '@storybook/addons';
import { EVENTS } from './constants';

export const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    // Render as string and unescape &nbsp;
    const code = ReactDOMServer.renderToStaticMarkup(story).replace(
      /\u00A0/g,
      '&nbsp;'
    );
    channel.emit(EVENTS.ADD_CODE, code);

    return story;
  },
});

export default withCode;
