import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';

const GalleryOverlay = ({ overlay, item, className, ...props }) => {
  if (item == null) return null;

  return (
    <dialog
      {...props}
      className={classnames(className, 'ecl-gallery__overlay')}
      data-ecl-gallery-overlay
    >
      <header className="ecl-gallery__close" data-ecl-gallery-overlay-header>
        <Button
          {...overlay.close}
          className={classnames(
            overlay.close.className,
            'ecl-gallery__close-button'
          )}
          data-ecl-gallery-close
        />
      </header>

      <section className="ecl-gallery__slider">
        <div
          className="ecl-gallery__slider-media-container"
          data-ecl-gallery-overlay-media
        />

        <Button
          {...overlay.previous}
          className={classnames(
            overlay.previous.className,
            'ecl-gallery__slider-previous'
          )}
          data-ecl-gallery-overlay-previous
        />

        <Button
          {...overlay.next}
          className={classnames(
            overlay.next.className,
            'ecl-gallery__slider-next'
          )}
          data-ecl-gallery-overlay-next
        />
      </section>

      <footer className="ecl-gallery__detail" data-ecl-gallery-overlay-footer>
        <div className="ecl-gallery__detail-counter">
          <span data-ecl-gallery-overlay-counter-current>0</span>{' '}
          {overlay.counterSeparator}{' '}
          <span data-ecl-gallery-overlay-counter-max>0</span>
        </div>
        <div className="ecl-gallery__detail-actions">
          <Link
            {...overlay.download}
            className={classnames(
              overlay.download.className,
              'ecl-gallery__download'
            )}
            download
            data-ecl-gallery-overlay-download
          />
          <Link
            {...overlay.share}
            className={classnames(
              overlay.share.className,
              'ecl-gallery__share'
            )}
            data-ecl-gallery-overlay-share
          />
        </div>
        <div
          className="ecl-gallery__detail-description"
          data-ecl-gallery-overlay-description
        >
          {item.description}
        </div>
        <div className="ecl-gallery__detail-meta" data-ecl-gallery-overlay-meta>
          {item.meta}
        </div>
      </footer>
    </dialog>
  );
};

GalleryOverlay.propTypes = {
  overlay: PropTypes.shape({
    close: PropTypes.shape(Button.propTypes),
    previous: PropTypes.shape(Button.propTypes),
    next: PropTypes.shape(Button.propTypes),
    counterSeparator: PropTypes.string,
    download: PropTypes.shape(Link.propTypes),
    share: PropTypes.shape(Link.propTypes),
  }),
  item: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    image: PropTypes.string,
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.string,
      })
    ),
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        kind: PropTypes.string,
        srcLang: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    description: PropTypes.string,
    meta: PropTypes.string,
    icon: PropTypes.shape(Icon.propTypes),
  }),
  className: PropTypes.string,
};

GalleryOverlay.defaultProps = {
  overlay: {},
  item: {},
  className: '',
};

export default GalleryOverlay;
