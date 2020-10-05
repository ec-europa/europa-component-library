/* eslint-disable no-undef */
import addons, { makeDecorator } from '@storybook/addons';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    let code = '';
    if (typeof story === 'string') {
      code = story;
    } else if (story instanceof DocumentFragment) {
      const htmlElement = document.createElement('div');
      code = story.cloneNode(true);
      const rootEl = code.firstChild;
      // Check whether we wrapped the story just for the demo.
      if (rootEl.hasAttribute('demo_only')) {
        const demoChildren = rootEl.childNodes;
        demoChildren.forEach(function refillNode(v, i) {
          htmlElement.appendChild(demoChildren[i]);
        });
      } else {
        htmlElement.appendChild(code);
      }
      code = htmlElement.innerHTML;
    } else if (story instanceof Node) {
      code = story.outerHTML;
    }

    channel.emit('ecl/twig-code/add_code', code);

    return story;
  },
});

export default withCode;
