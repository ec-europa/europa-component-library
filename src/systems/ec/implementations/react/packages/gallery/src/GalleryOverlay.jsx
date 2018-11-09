import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';
import Icon from '@ecl/ec-react-component-icon/Icon';

const GalleryOverlay = ({ overlay, item, className, ...props }) => {
  const styles = {
    backgroundImage: `url(${item.src})`,
  };

  return (
    <div {...props} className={classnames(className, 'ecl-gallery__overlay')}>
      <div className="ecl-gallery__close">
        <Button
          {...overlay.close}
          className={classnames(
            overlay.close.className,
            'ecl-gallery__close-button'
          )}
        />
      </div>

      <div className="ecl-gallery__slider">
        <Icon
          {...overlay.previous}
          className={classnames(
            overlay.previous.className,
            'ecl-gallery__slider-previous'
          )}
        />

        <div className="ecl-gallery__slider-image-container">
          <img
            src={item.src}
            alt={item.alt}
            className="ecl-gallery__slider-image"
          />
          <div className="ecl-gallery__slider-image--fallback" style={styles} />
        </div>

        <Icon
          {...overlay.next}
          className={classnames(
            overlay.next.className,
            'ecl-gallery__slider-next'
          )}
        />
      </div>

      <div className="ecl-gallery__detail">
        <div className="ecl-gallery__detail-counter">3 of 5</div>
        <div className="ecl-gallery__detail-actions">Download Share</div>
        <div className="ecl-gallery__detail-description">
          {item.description}
        </div>
        <div className="ecl-gallery__detail-meta">Meta</div>
      </div>
    </div>
  );
};

GalleryOverlay.propTypes = {
  overlay: PropTypes.shape({
    close: PropTypes.shape(Button.propTypes),
  }),
  item: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
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
