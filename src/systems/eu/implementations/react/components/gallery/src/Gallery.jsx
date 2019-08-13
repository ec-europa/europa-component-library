import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { GalleryItem } from './GalleryItem';
import { GalleryOverlay } from './GalleryOverlay';

export const Gallery = ({
  overlay,
  items,
  selectedItemId,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-gallery');

  return (
    <section {...props} className={classNames} data-ecl-gallery>
      <ul className="ecl-gallery__list">
        {items.map(item => (
          <GalleryItem item={item} key={item.shareHref} />
        ))}
      </ul>

      <GalleryOverlay
        overlay={overlay}
        item={items[selectedItemId] ? items[selectedItemId] : {}}
      />
    </section>
  );
};

Gallery.propTypes = {
  overlay: PropTypes.shape(GalleryOverlay.propTypes),
  items: PropTypes.arrayOf(PropTypes.shape(GalleryItem.propTypes)),
  selectedItemId: PropTypes.number,
  className: PropTypes.string,
};

Gallery.defaultProps = {
  overlay: {},
  items: [],
  selectedItemId: 0,
  className: '',
};

export default Gallery;
