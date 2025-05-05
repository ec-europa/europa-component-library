import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './PaletteItem.module.scss';

const getCode = (alias, parentRef) => {
  if (!alias) return '';

  let hex = '';
  // Try getting the computed style from the parent ol element
  if (parentRef?.current) {
    hex = window
      .getComputedStyle(parentRef.current)
      .getPropertyValue(`--${alias}`)
      .trim();
  }

  // If not found, fallback to document.body
  if (!hex) {
    hex = window
      .getComputedStyle(document.body)
      .getPropertyValue(`--${alias}`)
      .trim();
  }

  // Handle transparent color-mix cases
  if (hex.includes('color-mix')) {
    // Transparent color, we get the hex code and transparency
    [, hex] = hex.split(',');
  }

  return hex.toUpperCase();
};

class PaletteItem extends PureComponent {
  constructor(props) {
    super(props);

    const { name, id, value, alias, main } = props;
    this.color = { name, id, value, alias, main };

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
    const { name, id, value, alias, main, parentRef } = this.props;
    const { tooltipVisible } = this.state;

    let code = value.toUpperCase();

    // Get color code from alias, trying parent first, then fallback to body
    if (alias && typeof window !== 'undefined') {
      code = getCode(alias, parentRef);
    }

    return (
      <li className={classnames(styles.item, { [styles['item--main']]: main })}>
        <div
          className={styles.nameWrapper}
          style={{ backgroundColor: alias ? `var(--${alias})` : value }}
        >
          <button
            type="button"
            className={styles.title}
            onClick={() => this.handleCopy(this.customProperty)}
          >
            <span className={styles.nameHoverHidden}>{name}</span>
            <span className={styles.nameHoverOnly}>{this.customProperty}</span>
          </button>

          <button
            type="button"
            id={id || name.toLowerCase()}
            className={styles.button}
            onClick={() => this.handleCopy(code)}
          >
            <span className={styles.buttonHoverHidden}>{code}</span>
            <span className={styles.buttonHoverOnly}>COPY</span>
          </button>

          {tooltipVisible && <div className={styles.tooltip}>Copied!</div>}
        </div>
      </li>
    );
  }
}

PaletteItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  alias: PropTypes.string,
  main: PropTypes.bool,
  parentRef: PropTypes.shape({
    current: PropTypes.any,
  }),
};

PaletteItem.defaultProps = {
  id: '',
  value: '',
  alias: '',
  main: false,
  parentRef: null,
};

export default PaletteItem;
