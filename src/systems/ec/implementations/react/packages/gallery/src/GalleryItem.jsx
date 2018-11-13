import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';

const GalleryItem = ({ item, className, ...props }) => {
  const styles = {
    backgroundImage: `url(${item.src})`,
  };

  return (
    <li {...props} className={classnames(className, 'ecl-gallery__item')}>
      <a
        href={item.src}
        className="ecl-gallery__item-link"
        data-ecl-gallery-item
      >
        <div className="ecl-gallery__image-container" style={styles}>
          <img src={item.src} alt={item.alt} className="ecl-gallery__image" />
          {!!(item.icon && item.icon.shape) && (
            <Icon
              {...item.icon}
              size="l"
              className={classnames(
                item.icon.className,
                'ecl-gallery__image-icon'
              )}
            />
          )}
        </div>

        <div className="ecl-gallery__description">
          {item.description}
          {!!(item.icon && item.icon.shape) && (
            <Icon
              {...item.icon}
              size="l"
              className={classnames(
                item.icon.className,
                'ecl-gallery__description-icon'
              )}
            />
          )}
        </div>
      </a>
    </li>
  );
};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape(Icon.propTypes),
  }),
  className: PropTypes.string,
};

GalleryItem.defaultProps = {
  item: {},
  className: '',
};

export default GalleryItem;
