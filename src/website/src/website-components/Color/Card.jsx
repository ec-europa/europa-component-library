import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';

import styles from './Card.scss';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.clipboard = null;

    const { name, value, ui } = props;
    this.color = { name, value, ui };
  }

  componentDidMount() {
    const { name } = this.color;
    this.clipboard = new ClipboardJS(`#${name}`);
  }

  componentWillUnmount() {
    if (this.clipboard) this.clipboard.destroy();
  }

  render() {
    const { name, value, ui } = this.color;

    return (
      <div
        className={classnames(styles.card, {
          [styles[`card--${ui}`]]: true,
        })}
      >
        <div className={styles.header} style={{ backgroundColor: value }}>
          <h3 className={styles.title}>{name}</h3>
          <button
            type="button"
            id={name}
            data-clipboard-text={value.toUpperCase()}
            className={styles.button}
          >
            <span className={styles['button-hover-hidden']}>
              {value.toUpperCase()}
            </span>
            <span className={styles['button-hover-only']}>COPY</span>
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  ui: PropTypes.string,
};

Card.defaultProps = {
  value: '',
  ui: 'light',
};

export default Card;
