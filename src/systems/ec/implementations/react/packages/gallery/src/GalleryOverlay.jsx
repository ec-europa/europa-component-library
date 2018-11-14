import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';
import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';

const GalleryOverlay = ({ overlay, item, className, ...props }) => {
  if (item == null) return null;

  const styles = {
    backgroundImage: `url(${item.src})`,
  };

  return (
    <div
      {...props}
      className={classnames(className, 'ecl-gallery__overlay')}
      aria-hidden="true"
      data-ecl-gallery-overlay
    >
      <div className="ecl-gallery__close">
        <Button
          {...overlay.close}
          className={classnames(
            overlay.close.className,
            'ecl-gallery__close-button'
          )}
          data-ecl-gallery-close
        />
      </div>

      <div className="ecl-gallery__slider">
        <div className="ecl-gallery__slider-image-container">
          <img
            src={item.src}
            alt={item.alt}
            className="ecl-gallery__slider-image"
            data-ecl-gallery-overlay-image
          />
          <div
            className="ecl-gallery__slider-image--fallback"
            style={styles}
            data-ecl-gallery-overlay-image-fallback
          />
        </div>

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
      </div>

      <div className="ecl-gallery__detail">
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
          />
          <Link
            {...overlay.share}
            className={classnames(
              overlay.share.className,
              'ecl-gallery__share'
            )}
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
      </div>
    </div>
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
