import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Iframe from './Showcase/Iframe';
import styles from './Playground.module.scss';
import Code from './Code';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.showcaseCodeRef = React.createRef();
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.iframeRef = React.createRef();

    // Parameters
    this.showcaseLineHeight = 1.5;
    this.showcaseNbLines = 6;
    this.state = {
      hasError: false,
      iframeHtml: null,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidMount() {
    this.calculateContainerHeight().then((containerHeight) => {
      // Calculate max height
      this.maxHeight =
        this.showcaseLineHeight *
        this.showcaseNbLines *
        parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Check if code area is too long
      if (this.showcaseCodeRef.current && containerHeight > this.maxHeight) {
        this.showcaseCodeRef.current.parentElement.setAttribute(
          'aria-expanded',
          false,
        );
        this.showcaseCodeRef.current.style.maxHeight = `${this.maxHeight}px`;
      }
    });

    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = (event) => {
    let parsedData = null;
    try {
      parsedData = JSON.parse(event.data);
    } catch {
      return;
    }

    if (
      parsedData &&
      parsedData.key === 'storybook-channel' &&
      parsedData.event?.type === 'storybook/docs/snippet-rendered'
    ) {
      const [payload] = parsedData.event.args || [];
      const story = `${this.props.selectedKind}--${this.props.selectedStory}`;

      if (!payload?.id || payload.id !== story) return;

      const selectedArgs = this.props.selectedArgs;

      // If there are no selected args, assume it's a match and accept the payload
      if (!selectedArgs) {
        this.setState({ iframeHtml: payload.source });
        return;
      }

      // Parse the selectedArgs string into key-value pairs, converting to correct types
      const expectedArgs = selectedArgs.split(';').reduce((acc, pair) => {
        const [key, ...rest] = pair.split(':');
        if (!key) return acc;

        const rawValue = rest.join(':'); // allows colons inside values
        let normalizedValue;

        if (rawValue === '!true') {
          normalizedValue = true;
        } else if (rawValue === '!false') {
          normalizedValue = false;
        } else if (rawValue === '') {
          normalizedValue = ''; // explicitly handle empty string
        } else if (!isNaN(rawValue)) {
          normalizedValue = Number(rawValue);
        } else {
          normalizedValue = rawValue;
        }

        acc[key] = normalizedValue;
        return acc;
      }, {});

      const payloadArgs = payload.args || {};

      const allArgsMatch = Object.entries(expectedArgs).every(
        ([key, value]) => payloadArgs[key] === value,
      );

      if (allArgsMatch) {
        this.setState({ iframeHtml: payload.source });
      }
    }
  };

  handleClickOnToggle() {
    // Display full code
    this.showcaseCodeRef.current.parentElement.setAttribute(
      'aria-expanded',
      true,
    );
    this.showcaseCodeRef.current.style.maxHeight = 'none';
  }

  calculateContainerHeight() {
    return new Promise((resolve) => {
      const checkContainerHeight = () => {
        const container = this.showcaseCodeRef.current;

        if (container && container.childNodes.length > 0) {
          const containerHeight = container.offsetHeight;
          resolve(containerHeight);
        } else {
          setTimeout(checkContainerHeight, 100);
        }
      };

      checkContainerHeight();
    });
  }

  render() {
    const {
      frameHeight,
      frameWidth,
      playgroundLink,
      system,
      selectedKind,
      selectedStory,
      selectedArgs,
      showFrame,
      hideCode,
      disableAutoResize,
      iframeOptions,
      hideDemo,
      children,
    } = this.props;

    const { hasError, iframeHtml } = this.state;

    if (hasError) {
      return (
        <div className={styles.playground}>
          <p className={styles.description}>
            An error happened when rendering the playground!
          </p>
        </div>
      );
    }

    let playgroundUrl;

    const argsUrl = selectedArgs ? `&args=${selectedArgs}` : '';

    if (playgroundLink) {
      playgroundUrl = playgroundLink;
    } else if (system && selectedKind && selectedStory) {
      playgroundUrl = encodeURI(
        `${process.env.PUBLIC_URL}/playground/${system}/${
          process.env.NODE_ENV === 'development' ? 'index.html' : ''
        }?path=/story/${selectedKind}--${selectedStory}${argsUrl}`,
      );
    }

    const fullFrameUrl =
      system && selectedKind && selectedStory
        ? encodeURI(
            `${process.env.PUBLIC_URL}/playground/${system}/iframe.html?id=${selectedKind}--${selectedStory}${argsUrl}`,
          )
        : '';

    let markupElement = null;

    if (iframeHtml) {
      markupElement = <Code>{iframeHtml}</Code>;
    }

    return (
      <div className={styles.playground}>
        <div
          className={`${styles.showcase}${showFrame && fullFrameUrl ? ` ${styles['showcase--framed']}` : ''}`}
        >
          {!hideDemo && (
            <>
              {showFrame && fullFrameUrl ? (
                <Iframe
                  url={fullFrameUrl}
                  defaultHeight={frameHeight}
                  maxWidth={frameWidth}
                  iframeOptions={iframeOptions}
                  disableAutoResize={disableAutoResize}
                />
              ) : (
                <div className={styles.showcase__content}>{children}</div>
              )}
            </>
          )}

          {fullFrameUrl && (
            <div className={`${styles.more}`}>
              <a
                href={fullFrameUrl}
                className={`${styles.link} ${styles['link--icon']} ${styles.fullscreen}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.link__label}>Fullscreen</span>
                <span className={`wt-icon--fullscreen ${styles.link__icon}`} />
              </a>
            </div>
          )}
        </div>

        {!hideCode && (
          <div className={styles.code}>
            <pre
              className={`${styles['code-pre']} language-html`}
              ref={this.showcaseCodeRef}
            >
              {markupElement}
            </pre>
            <div className={`${styles.more}`}>
              <button
                type="button"
                className={`${styles.link} ${styles['link--icon']} ${styles.toggle}`}
                onClick={this.handleClickOnToggle}
              >
                <div className={styles.toggle__container}>
                  <span className={styles.link__label}>Show more</span>
                  <span
                    className={`wt-icon--corner-arrow ${styles.link__icon}`}
                  />
                </div>
              </button>
            </div>
          </div>
        )}

        {playgroundUrl && (
          <>
            <p className={styles.description}>
              Try it yourself on the playground
            </p>
            <a
              href={playgroundUrl}
              className={`${styles.link} ${styles['link--icon']} ${styles['playground-link']}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.link__label}>Playground</span>
              <span className={`wt-icon--corner-arrow ${styles.link__icon}`} />
            </a>
          </>
        )}
      </div>
    );
  }
}

Playground.propTypes = {
  children: PropTypes.node,
  frameHeight: PropTypes.string,
  frameWidth: PropTypes.string,
  playgroundLink: PropTypes.string,
  showFrame: PropTypes.bool,
  hideCode: PropTypes.bool,
  // iframeOptions: https://github.com/davidjbradshaw/iframe-resizer#options
  iframeOptions: PropTypes.shape(),
  hideDemo: PropTypes.bool,
  disableAutoResize: PropTypes.bool,
  system: PropTypes.string,
  selectedKind: PropTypes.string,
  selectedStory: PropTypes.string,
  selectedArgs: PropTypes.string,
};

Playground.defaultProps = {
  children: '',
  frameHeight: '200',
  frameWidth: '100%',
  playgroundLink: '',
  showFrame: true,
  hideCode: false,
  iframeOptions: {},
  hideDemo: false,
  disableAutoResize: false,
  system: '',
  selectedKind: '',
  selectedStory: '',
  selectedArgs: '',
};

export default Playground;
