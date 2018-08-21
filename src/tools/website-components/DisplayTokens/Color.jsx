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

    return (
      <figure>
        <figcaption>
          {tokenKey}: {tokenProps.value}
        </figcaption>
        <svg
          width="3em"
          height="3em"
          aria-label={tokenProps.value}
          id={tokenKey}
          data-clipboard-text={tokenProps.value}
        >
          <rect fill={tokenProps.value} width="100%" height="100%" />
        </svg>
      </figure>
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
