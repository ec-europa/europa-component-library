/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';

class Color extends PureComponent {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.clipboard = null;
  }

  componentDidMount() {
    const { tokenKey } = this.props;
    this.clipboard = new ClipboardJS(`#${tokenKey}`);
  }

  componentWillUnmount() {
    if (this.clipboard) this.clipboard.destroy();
  }

  render() {
    const { tokenKey, tokenProps } = this.props;
    const { docs = {} } = tokenProps;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            backgroundColor: tokenProps.value,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem 0',
          }}
        >
          <h3
            style={{
              color: docs.complementColor,
            }}
          >
            {docs.title || tokenKey}
          </h3>
          <button
            type="button"
            id={tokenKey}
            data-clipboard-text={tokenProps.value}
            style={{
              background: 'none',
              border: `1px solid ${docs.complementColor}`,
              color: docs.complementColor,
              padding: '0.5rem 0.75rem',
              marginTop: '1rem',
            }}
          >
            {tokenProps.value}
          </button>
        </div>
        {docs.description && (
          <div
            style={{
              backgroundColor: '#f3f3f3',
              padding: '1rem',
            }}
          >
            {docs.description}
          </div>
        )}
      </div>
    );
  }
}

Color.propTypes = {
  tokenKey: PropTypes.string.isRequired,
  tokenProps: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

export default Color;
