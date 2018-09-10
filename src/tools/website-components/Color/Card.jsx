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
    const {
      name,
      value,
      docs = { title: '', complementColor: '#000', border: false },
    } = this.color;

    return (
      <div className={styles.card}>
        <div
          className={classnames(styles.header, {
            [styles['header--bordered']]: docs.border,
          })}
          style={{ backgroundColor: value }}
        >
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
        </div>
        {docs.description && (
          <div className={styles.body}>{docs.description}</div>
        )}
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
