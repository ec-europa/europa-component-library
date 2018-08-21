/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const DisplayTokens = ({ tokens, category }) => (
  <ul>
    {Object.keys(tokens.props)
      .filter(key => !category || tokens.props[key].category === category)
      .sort()
      .map(key => (
        <li>
          {tokens.props[key].type === 'color' ? (
            <figure>
              <figcaption>{key}:</figcaption>
              <svg
                width="3em"
                height="3em"
                aria-label={tokens.props[key].value}
              >
                <rect
                  fill={tokens.props[key].value}
                  width="100%"
                  height="100%"
                />
              </svg>
            </figure>
          ) : (
            <span>
              {key}: {tokens.props[key].value}
            </span>
          )}
        </li>
      ))}
  </ul>
);

DisplayTokens.propTypes = {
  tokens: PropTypes.shape({
    props: PropTypes.object,
  }),
  category: PropTypes.string,
};

DisplayTokens.defaultProps = {
  tokens: {},
  category: '',
};

export default DisplayTokens;
