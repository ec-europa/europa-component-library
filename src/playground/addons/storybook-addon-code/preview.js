import { addons, useEffect } from 'storybook/preview-api';
import { STORY_RENDERED } from 'storybook/internal/core-events';
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
      const onStoryRendered = ({ storyId }) => {
        if (storyId === context.id && root.innerHTML !== previousMarkup) {
          publish();
        }
      };
      channel.on(STORY_RENDERED, onStoryRendered);
      channel.on(REQUEST_CODE, onRequest);
      publish();
      return () => {
        channel.off(STORY_RENDERED, onStoryRendered);
        channel.off(REQUEST_CODE, onRequest);
      };
    }, [context.id, context.loaded?.component]);
    return story();
  },
];
