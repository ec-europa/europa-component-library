import { addons, useEffect } from 'storybook/preview-api';
import { ADD_CODE, REQUEST_CODE } from './constants';

// Capture markup inside the preview, where the canvas actually lives. The
// manager can mount before the iframe exists, or while the docs view is active.
export const decorators = [
  (story, context) => {
    useEffect(() => {
      const root =
        context.canvasElement || document.getElementById('storybook-root');
      if (!root) return undefined;
      const channel = addons.getChannel();
      const originalMarkup =
        typeof context.loaded?.component === 'string'
          ? context.loaded.component
          : '';
      let previousMarkup;
      const publish = () => {
        const markup = root.innerHTML;
        previousMarkup = markup;
        channel.emit(ADD_CODE, { storyId: context.id, markup, originalMarkup });
      };
      const onRequest = ({ storyId }) => {
        if (storyId === context.id) publish();
      };
      const observer = new MutationObserver(() => {
        if (root.innerHTML !== previousMarkup) publish();
      });
      observer.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
      channel.on(REQUEST_CODE, onRequest);
      publish();
      return () => {
        observer.disconnect();
        channel.off(REQUEST_CODE, onRequest);
      };
    }, [context.id, context.loaded?.component]);
    return story();
  },
];
