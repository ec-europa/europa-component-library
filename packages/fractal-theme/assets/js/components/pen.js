/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import storage from '../storage';
import events from '../events';
import Preview from './preview';
import Browser from './browser';

class Pen {
  constructor(el) {
    this._el = $(el);
    this._id = this._el[0].id;
    this._previewPanel = this._el.find('[data-behaviour="preview"]');
    this._browser = this._el.find('[data-behaviour="browser"]');
    this._handle = this._el.children('[data-role="resize-handle"]');
    this._init();
  }

  _init() {
    const initialHeight = storage.get(
      'pen.previewHeight',
      this._el.outerHeight() / 2
    );

    const preview = new Preview(this._previewPanel);
    const browser = new Browser(this._browser); // eslint-disable-line no-unused-vars
    let state = storage.get('pen.previewState', 'open');
    let handleClicks = 0;
    let dblClick = false;

    if (state === 'open') {
      this._previewPanel.outerHeight(initialHeight);
      storage.set('pen.previewHeight', initialHeight);
    } else {
      this._previewPanel.css('height', '100%');
    }

    this._handle.on('mousedown', () => {
      dblClick = false;
      handleClicks += 1;

      setTimeout(() => {
        handleClicks = 0;
      }, 400);

      if (handleClicks === 2) {
        dblClick = true;
        handleClicks = 0;
        return false;
      }

      return true;
    });

    this._previewPanel.resizable({
      handleSelector: this._handle,
      resizeWidth: false,
      onDragStart: () => {
        this._el.addClass('is-resizing');
        preview.disableEvents();
        events.trigger('start-dragging');
      },
      onDragEnd: () => {
        this._el.removeClass('is-resizing');
        preview.enableEvents();
        events.trigger('end-dragging');
        if (dblClick) {
          if (state === 'closed') {
            this._previewPanel.css(
              'height',
              storage.get('pen.onClosedHeight', initialHeight)
            );
            state = 'open';
            storage.set('pen.previewState', 'open');
          } else {
            storage.set('pen.onClosedHeight', this._previewPanel.outerHeight());
            this._previewPanel.css({
              height: '100%',
              transition: '.3s ease all',
            });
            state = 'closed';
            storage.set('pen.previewState', 'closed');
          }
        } else if (state !== 'closed') {
          storage.set('pen.previewHeight', this._previewPanel.outerHeight());
        } else {
          setTimeout(() => {
            if (!dblClick) {
              state = 'open';
              storage.set('pen.previewState', 'open');
              storage.set(
                'pen.previewHeight',
                this._previewPanel.outerHeight()
              );
            }
          }, 400);
        }
      },
    });
  }
}

export default Pen;
