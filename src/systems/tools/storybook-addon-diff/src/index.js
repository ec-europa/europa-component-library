import addons, { makeDecorator } from '@storybook/addons';

const { HtmlDiffer } = require('html-differ');

const logger = require('html-differ/lib/logger');

const diffOptions = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};
const htmlDiffer = new HtmlDiffer(diffOptions);
let res = '';

export const withDiff = makeDecorator({
  name: 'withDiff',
  parameterName: 'diff',

  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const story = getStory(context);
    const storyOptions = parameters || options;

    const { jsmarkup } =
      typeof storyOptions === 'string'
        ? { jsmarkup: storyOptions }
        : storyOptions;

    if (!jsmarkup) {
      throw new Error('You must set `jsmarkup` on the `diff` parameter');
    }

    let phpRendered = '';
    if (typeof story === 'string') {
      phpRendered = story;
    } else if (story instanceof DocumentFragment) {
      const htmlElement = document.createElement('div');
      phpRendered = story.cloneNode(true);
      const rootEl = phpRendered.firstChild;
      // Check whether we wrapped the story just for the demo.
      if (rootEl.hasAttribute('demo_only')) {
        const demoChildren = rootEl.childNodes;
        demoChildren.forEach(function refillNode(v, i) {
          htmlElement.appendChild(demoChildren[i]);
        });
      } else {
        htmlElement.appendChild(phpRendered);
      }
      phpRendered = htmlElement.innerHTML;
    } else if (story instanceof Node) {
      phpRendered = story.outerHTML;
    }

    const diff = htmlDiffer.diffHtml(jsmarkup, phpRendered);
    const isEqual = htmlDiffer.isEqual(jsmarkup, phpRendered);
    if (isEqual) {
      res = 'Perfectly matching!';
    } else {
      res = logger.getDiffText(diff, { charsAroundDiff: 40 });
    }
    channel.emit('ecl/diff/add_code', res);

    return getStory(context);
  },
});

export const withJsmarkupDiff = (text) =>
  withDiff({
    jsmarkup: text,
  });
