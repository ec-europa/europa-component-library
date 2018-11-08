import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import GalleryItem from './GalleryItem';

const Gallery = ({ items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-gallery');

  return (
    <section {...props} className={classNames}>
      <ul className="ecl-gallery__list">
        {items.map(item => (
          <GalleryItem item={item} key={item.src} />
        ))}
      </ul>
    </section>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(GalleryItem.propTypes)),
  className: PropTypes.string,
};

Gallery.defaultProps = {
  items: [],
  className: '',
};

export default Gallery;
