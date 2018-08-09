/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Blockquote = ({ author, children, ...props }) => (
  <blockquote {...props} className="ecl-blockquote">
    <p className="ecl-paragraph ecl-blockquote__body">{children}</p>
    <footer className="ecl-blockquote__author">
      ―&thinsp;
      <cite>{author}</cite>
    </footer>
  </blockquote>
);

Blockquote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Blockquote.defaultProps = {
  author: '',
};

export default Blockquote;
