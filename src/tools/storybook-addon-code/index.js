import ReactDOMServer from 'react-dom/server';
import addons, { makeDecorator } from '@storybook/addons';

export const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    const code = ReactDOMServer.renderToStaticMarkup(story);
    channel.emit('ecl/code/add_code', code);

    return story;
  },
});

export default withCode;
