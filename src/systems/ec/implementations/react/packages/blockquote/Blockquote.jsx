/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Blockquote = ({ author, citation, ...props }) => {
  if (!citation) return null;

  return (
    <blockquote {...props} className="ecl-blockquote">
      <p className="ecl-blockquote__body">{citation}</p>
      {author && (
        <footer className="ecl-blockquote__attribution">
          <cite className="ecl-blockquote__author">{author}</cite>
        </footer>
      )}
    </blockquote>
  );
};

Blockquote.propTypes = {
  author: PropTypes.string,
  citation: PropTypes.string.isRequired,
};

Blockquote.defaultProps = {
  author: '',
};

export default Blockquote;
