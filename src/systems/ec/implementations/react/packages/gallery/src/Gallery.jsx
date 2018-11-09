import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import GalleryItem from './GalleryItem';
import GalleryOverlay from './GalleryOverlay';

const Gallery = ({ overlay, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-gallery');

  return (
    <section {...props} className={classNames}>
      <ul className="ecl-gallery__list">
        {items.map(item => (
          <GalleryItem item={item} key={item.src} />
        ))}
      </ul>

      <GalleryOverlay overlay={overlay} item={items[6]} />
    </section>
  );
};

Gallery.propTypes = {
  overlay: PropTypes.shape(GalleryOverlay.propTypes),
  items: PropTypes.arrayOf(PropTypes.shape(GalleryItem.propTypes)),
  className: PropTypes.string,
};

Gallery.defaultProps = {
  overlay: {},
  items: [],
  className: '',
};

export default Gallery;
