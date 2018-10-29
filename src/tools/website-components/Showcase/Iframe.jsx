/* eslint-disable import/no-extraneous-dependencies */
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
    const options = {
      autoResize: true,
    };
    this.iframeResizer = iframeResizer(options, this.frameRef.current);
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
  url: PropTypes.string,
};

Iframe.defaultProps = {
  defaultHeight: '200px',
  url: '',
};

export default Iframe;
