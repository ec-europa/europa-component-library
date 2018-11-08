import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Gallery = ({ items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-gallery');

  return (
    <section {...props} className={classNames}>
      {items.map(item => (
        <div className="ecl-gallery__item" key={item.src}>
          <img src={item.src} alt={item.alt} className="ecl-gallery__image" />
        </div>
      ))}
    </section>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

Gallery.defaultProps = {
  items: [],
  className: '',
};

export default Gallery;
