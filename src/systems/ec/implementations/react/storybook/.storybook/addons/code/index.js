import ReactDOMServer from 'react-dom/server';
import addons, { makeDecorator } from '@storybook/addons';

export const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    let code = ReactDOMServer.renderToStaticMarkup(story);
    console.log('story', story);

    channel.emit('ecl/code/add_code', code);

    return story;
  },
});

export default withCode;
