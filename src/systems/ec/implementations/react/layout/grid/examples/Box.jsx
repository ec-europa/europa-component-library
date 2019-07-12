/* eslint-disable import/no-extraneous-dependencies, react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ padding, className }) => (
  <div className={className}>
    <div
      style={{
        backgroundColor: '#BFD0E4',
        border: '1px solid #004494',
        color: '#004494',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        padding,
      }}
    >
      {className
        .split(' ')
        .filter(str => str)
        .map(str => `.${str}`)
        .join(' ')}
    </div>
  </div>
);

Box.propTypes = {
  padding: PropTypes.string,
  className: PropTypes.string,
};

Box.defaultProps = {
  padding: '1rem',
  className: '',
};

export default Box;
