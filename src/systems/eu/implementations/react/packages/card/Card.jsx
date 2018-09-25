import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Card = ({ image, className, ...props }) => {
  const classNames = classnames(className, 'ecl-card', {});

  return (
    <div {...props} className={classNames}>
      <img className="ecl-card__image" alt={image.alt} src={image.src} />
      <div className="ecl-card__meta">meta</div>
      <div className="ecl-card__title">title</div>
      <div className="ecl-card__description">description</div>
      <div className="ecl-card__label">labels</div>
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
