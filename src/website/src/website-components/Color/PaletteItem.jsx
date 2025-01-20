import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './PaletteItem.scss';

class PaletteItem extends PureComponent {
  constructor(props) {
    super(props);

    const { name, id, value, ui, main } = props;
    this.color = { name, id, value, ui, main };

    const sanitizedName = name.replace(/\s*\([^)]*\)/g, '').trim();
    this.customProperty = `--ecl-color-${sanitizedName.toLowerCase()}`;

    // State to manage tooltip visibility
    this.state = {
      tooltipVisible: false,
    };
  }

  handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    this.setState({ tooltipVisible: true });

    // Hide tooltip after 1 second
    setTimeout(() => {
      this.setState({ tooltipVisible: false });
    }, 1000);
  };

  render() {
    const { name, id, value, ui, main } = this.color;
    const { tooltipVisible } = this.state;

    return (
      <li
        className={classnames(
          styles.item,
          { [styles[`item--${ui}`]]: true },
          { [styles['item--main']]: main },
        )}
        style={{ backgroundColor: value, color: value }}
      >
        <div className={styles.nameWrapper}>
          <button
            type="button"
            className={styles.title}
            onClick={() => this.handleCopy(this.customProperty)}
          >
            <span className={styles.nameHoverHidden}>{name}</span>
            <span className={styles.nameHoverOnly}>{this.customProperty}</span>
          </button>

          {tooltipVisible && <div className={styles.tooltip}>Copied!</div>}
        </div>

        <button
          type="button"
          id={id || name.toLowerCase()}
          className={styles.button}
          onClick={() => this.handleCopy(value.toUpperCase())}
        >
          <span className={styles.buttonHoverHidden}>
            {value.toUpperCase()}
          </span>
          <span className={styles.buttonHoverOnly}>COPY</span>
        </button>
      </li>
    );
  }
}

PaletteItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  ui: PropTypes.string,
  main: PropTypes.bool,
};

PaletteItem.defaultProps = {
  id: '',
  value: '',
  ui: 'light',
  main: false,
};

export default PaletteItem;
