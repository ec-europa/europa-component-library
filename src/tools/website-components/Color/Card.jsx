/* eslint-disable import/no-extraneous-dependencies */
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

    // Extract color
    const { tokens, name } = props;
    this.color = tokens.props[name];
  }

  componentDidMount() {
    const { name } = this.color;
    this.clipboard = new ClipboardJS(`#${name}`);
  }

  componentWillUnmount() {
    if (this.clipboard) this.clipboard.destroy();
  }

  render() {
    const { name, value } = this.color;
    const docs = Object.assign(
      { title: '', ui: 'light', border: false },
      this.color.docs
    );

    return (
      <div
        className={classnames(styles.card, {
          [styles[`card--${docs.ui}`]]: true,
        })}
      >
        <div
          className={classnames(styles.header, {
            [styles['header--bordered']]: docs.border,
          })}
          style={{ backgroundColor: value }}
        >
          <h3 className={styles.title}>{docs.title || name}</h3>
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
        {/* docs.description && (
          <div className={styles.body}>{docs.description}</div>
        ) */}
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  tokens: PropTypes.shape({
    props: PropTypes.shape({}),
  }).isRequired,
};

export default Card;
