/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';

import styles from './PaletteItem.scss';

class PaletteItem extends PureComponent {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.clipboard = null;
  }

  componentDidMount() {
    const { color } = this.props;
    const { name } = color;
    this.clipboard = new ClipboardJS(`#${name}`);
  }

  componentWillUnmount() {
    if (this.clipboard) this.clipboard.destroy();
  }

  render() {
    const { color } = this.props;
    const {
      name,
      value,
      docs = { title: '', complementColor: '#000' },
    } = color;

    return (
      <li className={styles.item} style={{ backgroundColor: value }}>
        <h3
          className={styles.title}
          style={{
            color: docs.complementColor,
          }}
        >
          {docs.title || name}
        </h3>
        <button
          type="button"
          id={name}
          data-clipboard-text={value.toUpperCase()}
          className={styles.button}
          style={{
            borderColor: docs.complementColor,
            color: docs.complementColor,
          }}
        >
          <span className={styles['button-hover-hidden']}>
            {value.toUpperCase()}
          </span>
          <span className={styles['button-hover-only']}>COPY</span>
        </button>
      </li>
    );
  }
}

PaletteItem.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    docs: PropTypes.shape({
      title: PropTypes.string,
      complementColor: PropTypes.string,
    }),
  }).isRequired,
};

export default PaletteItem;
