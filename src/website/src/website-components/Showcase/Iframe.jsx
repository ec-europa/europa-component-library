import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import iframeResizer from '@iframe-resizer/parent';

import styles from './Iframe.scss';

class Iframe extends PureComponent {
  constructor(props) {
    super(props);
    this.frameRef = React.createRef();
  }

  componentDidMount() {
    const { iframeOptions, license, disableAutoResize } = this.props;

    let options = { license };

    if (!disableAutoResize) {
      options = {
        ...options,
        direction: 'vertical',
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
      this.iframeResizer[0].iFrameResizer.disconnect();
      this.iframeResizer[0].iFrameResizer.close();
    }
  }

  render() {
    const { url, defaultHeight, maxWidth } = this.props;
    return (
      <iframe
        title="Showcase"
        src={url}
        className={styles.showcase}
        style={{
          minHeight: `${defaultHeight}px`,
          maxWidth: maxWidth === '100%' ? maxWidth : `${maxWidth}px`,
        }}
        ref={this.frameRef}
      />
    );
  }
}

Iframe.propTypes = {
  license: PropTypes.string,
  defaultHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  url: PropTypes.string,
  iframeOptions: PropTypes.shape(),
  disableAutoResize: PropTypes.bool,
};

Iframe.defaultProps = {
  defaultHeight: '200',
  license: 'GPLv3',
  maxWidth: '100%',
  url: '',
  iframeOptions: {},
  disableAutoResize: false,
};

export default Iframe;
