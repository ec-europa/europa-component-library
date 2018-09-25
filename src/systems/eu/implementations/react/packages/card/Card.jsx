import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Card = ({ image, className, ...props }) => {
  const classNames = classnames(className, 'ecl-card', {});

  return (
    <div {...props} className={classNames}>
      <img className="ecl-card__image" alt={image.alt} src={image.src} />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  className: PropTypes.string,
};

Card.defaultProps = {
  image: {},
  className: '',
};

export default Card;
