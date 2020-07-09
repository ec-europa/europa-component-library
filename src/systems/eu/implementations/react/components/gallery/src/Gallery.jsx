import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button';

import { GalleryItem } from './GalleryItem';
import { GalleryOverlay } from './GalleryOverlay';

export const Gallery = ({
  overlay,
  items,
  viewAllLabel,
  counterLabel,
  selectedItemId,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-gallery');

  return (
    <section {...props} className={classNames} data-ecl-gallery>
      <ul className="ecl-gallery__list">
        {items.map((item) => (
          <GalleryItem item={item} key={item.shareHref} />
        ))}
      </ul>

      <div className="ecl-gallery__info">
        <strong data-ecl-gallery-count>0</strong> {counterLabel}
      </div>

      <Button label={viewAllLabel} variant="ghost" data-ecl-gallery-all />

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
  viewAllLabel: PropTypes.string,
  counterLabel: PropTypes.string,
  selectedItemId: PropTypes.number,
  className: PropTypes.string,
};

Gallery.defaultProps = {
  overlay: {},
  items: [],
  viewAllLabel: '',
  counterLabel: '',
  selectedItemId: 0,
  className: '',
};

export default Gallery;
