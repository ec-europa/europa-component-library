/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Color from './DisplayTokens/Color';

class DisplayTokens extends PureComponent {
  render() {
    const { tokens, category, name } = this.props;

    return (
      <ul>
        {Object.keys(tokens.props)
          .filter(
            key =>
              (!category && !name) ||
              (category && tokens.props[key].category === category) ||
              (name && tokens.props[key].name === name)
          )
          .map(key => (
            <li key={key}>
              {tokens.props[key].type === 'color' ? (
                <Color tokenKey={key} tokenProps={tokens.props[key]} />
              ) : (
                <span>
                  {key}: {tokens.props[key].value}
                </span>
              )}
            </li>
          ))}
      </ul>
    );
  }
}

DisplayTokens.propTypes = {
  tokens: PropTypes.shape({
    props: PropTypes.object,
  }),
  category: PropTypes.string,
  name: PropTypes.string,
};

DisplayTokens.defaultProps = {
  tokens: {},
  category: '',
  name: '',
};

export default DisplayTokens;
