import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Blockquote({ author, citation, className, ...props }) {
  if (!citation) return null;

  const classNames = classnames(className, 'ecl-blockquote');

  return (
    <blockquote {...props} className={classNames}>
      <p className="ecl-blockquote__body">{citation}</p>
      {author && (
        <footer className="ecl-blockquote__attribution">
          <cite className="ecl-blockquote__author">{author}</cite>
        </footer>
      )}
    </blockquote>
  );
}

Blockquote.propTypes = {
  author: PropTypes.string,
  citation: PropTypes.string,
  className: PropTypes.string,
};

Blockquote.defaultProps = {
  author: '',
  citation: '',
  className: '',
};

export default Blockquote;
