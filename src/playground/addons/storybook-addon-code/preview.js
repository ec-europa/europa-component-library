import { addons, useEffect } from 'storybook/preview-api';
import { STORY_RENDERED } from 'storybook/internal/core-events';
import { ADD_CODE, REQUEST_CODE } from './constants';

const CAPTURE_SETTLE_DELAY = 250;
const CAPTURE_MAX_WAIT = 3000;

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
      let captureTimer;
      let maxCaptureTimer;
      let observer;
      const clearCapture = () => {
        clearTimeout(captureTimer);
        clearTimeout(maxCaptureTimer);
        captureTimer = undefined;
        maxCaptureTimer = undefined;
        observer?.disconnect();
        observer = undefined;
      };
      const publish = () => {
        clearCapture();
        const markup = root.innerHTML;
        if (markup === previousMarkup) return;
        previousMarkup = markup;
        channel.emit(ADD_CODE, { storyId: context.id, markup, originalMarkup });
      };
      const scheduleCapture = () => {
        clearTimeout(captureTimer);
        captureTimer = setTimeout(() => {
          if (root.querySelector('span[class*="wt-icon"]')) {
            scheduleCapture();
            return;
          }
          publish();
        }, CAPTURE_SETTLE_DELAY);
      };
      const startCapture = () => {
        clearCapture();
        observer = new MutationObserver(scheduleCapture);
        observer.observe(root, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
        });
        scheduleCapture();
        // Fall back if an icon is not processed or the DOM never settles.
        maxCaptureTimer = setTimeout(publish, CAPTURE_MAX_WAIT);
      };
      const onRequest = ({ storyId }) => {
        if (storyId === context.id) startCapture();
      };
      const onStoryRendered = ({ storyId }) => {
        if (storyId === context.id) startCapture();
      };
      channel.on(STORY_RENDERED, onStoryRendered);
      channel.on(REQUEST_CODE, onRequest);
      startCapture();
      return () => {
        clearCapture();
        channel.off(STORY_RENDERED, onStoryRendered);
        channel.off(REQUEST_CODE, onRequest);
      };
    }, [context.id, context.loaded?.component]);
    return story();
  },
];
