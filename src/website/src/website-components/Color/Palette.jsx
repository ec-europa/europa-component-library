/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PaletteItem from './PaletteItem';
import styles from './Palette.scss';

class Palette extends PureComponent {
  constructor(props) {
    super(props);

    // Extract colors
    const { tokens, category } = props;
    this.colors = Object.keys(tokens.props)
      .filter((key) => tokens.props[key].category === category)
      .map((key) => tokens.props[key]);
  }

  render() {
    return (
      <ol className={styles.palette}>
        {this.colors.map((color) => (
          <PaletteItem color={color} key={color.name} />
        ))}
      </ol>
    );
  }
}

Palette.propTypes = {
  category: PropTypes.string.isRequired,
  tokens: PropTypes.shape({
    props: PropTypes.shape({}),
  }).isRequired,
};

export default Palette;
