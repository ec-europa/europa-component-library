import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import iframeResizer from 'iframe-resizer/js/iframeResizer';

import styles from './Iframe.scss';

class Iframe extends PureComponent {
  constructor(props) {
    super(props);
    this.frameRef = React.createRef();
  }

  componentDidMount() {
    const {
      iframeOptions,
      disableAutoResize,
      defaultHeight,
      heightCalculation,
    } = this.props;

    if (!disableAutoResize) {
      const options = {
        autoResize: true,
        minHeight: defaultHeight,
        heightCalculationMethod: heightCalculation,
        ...iframeOptions,
      };
      this.iframeResizer = iframeResizer(options, this.frameRef.current);
    }
  }

  componentWillUnmount() {
    if (
      this.iframeResizer &&
      this.iframeResizer.length > 0 &&
      this.iframeResizer[0].iFrameResizer
    ) {
      this.iframeResizer[0].iFrameResizer.removeListeners();
      this.iframeResizer[0].iFrameResizer.close();
    }
  }

  render() {
    const { defaultHeight, url } = this.props;
    return (
      <iframe
        title="Showcase"
        src={url}
        className={styles.showcase}
        height={defaultHeight}
        ref={this.frameRef}
      />
    );
  }
}

Iframe.propTypes = {
  defaultHeight: PropTypes.string,
  heightCalculation: PropTypes.string,
  url: PropTypes.string,
  iframeOptions: PropTypes.shape(),
  disableAutoResize: PropTypes.bool,
};

Iframe.defaultProps = {
  defaultHeight: '200px',
  heightCalculation: 'lowestElement',
  url: '',
  iframeOptions: {},
  disableAutoResize: false,
};

export default Iframe;
