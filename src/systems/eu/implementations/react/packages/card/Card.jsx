import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Card = ({ className, ...props }) => {
  const classNames = classnames(className, 'ecl-card', {});

  return (
    <div {...props} className={classNames}>
      Card
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
