/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayTokens.scss';

class DisplayTokens extends PureComponent {
  render() {
    const { tokens, category, name } = this.props;

    return (
      <ul className={styles.ul}>
        {Object.keys(tokens.props)
          .filter(
            (key) =>
              (!category && !name) ||
              (category && tokens.props[key].category === category) ||
              (name && tokens.props[key].name === name)
          )
          .map((key) => (
            <li key={key}>
              {key}:{tokens.props[key].value}
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
