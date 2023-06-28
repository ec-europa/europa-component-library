import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

import iconSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import Iframe from './Showcase/Iframe';
import styles from './Playground.scss';
import Code from './Code';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.showcaseCodeRef = React.createRef();
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);

    // Parameters
    this.showcaseLineHeight = 1.5;
    this.showcaseNbLines = 6;
    this.state = {
      hasError: false,
      resolvedMarkup: null,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidMount() {
    this.renderMarkup();

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
          false
        );
        this.showcaseCodeRef.current.style.maxHeight = `${this.maxHeight}px`;
      }
    });
  }

  handleClickOnToggle() {
    // Display full code
    this.showcaseCodeRef.current.parentElement.setAttribute(
      'aria-expanded',
      true
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

  async renderMarkup() {
    const { children } = this.props;

    if (!children) {
      return;
    }

    if (children instanceof Promise) {
      const resolvedMarkup = await children;
      if (typeof resolvedMarkup === 'string') {
        this.setState({ resolvedMarkup });
      }
      return;
    }

    const childrenArray = Array.isArray(children) ? children : [children];

    const htmlPromises = childrenArray.map(async (child) => {
      const { markup } = child.props;
      const resolvedMarkup = await markup;
      if (typeof resolvedMarkup === 'string') {
        return resolvedMarkup;
      }
      return ReactDOMServer.renderToStaticMarkup(child);
    });

    const resolvedHtmlArray = await Promise.all(htmlPromises);
    const resolvedMarkup = resolvedHtmlArray.join('');

    this.setState({ resolvedMarkup });
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
      heightCalculation,
      disableAutoResize,
      iframeOptions,
      hideDemo,
      children,
    } = this.props;

    const { hasError, resolvedMarkup } = this.state;

    if (!children) return null;

    if (hasError)
      return (
        <div className={styles.playground}>
          <p className={styles.description}>
            An error happened when rendering the playground!
          </p>
        </div>
      );

    let playgroundUrl;

    const argsUrl = selectedArgs ? `&args=${selectedArgs}` : '';

    if (playgroundLink) {
      playgroundUrl = playgroundLink;
    } else if (system && selectedKind && selectedStory) {
      playgroundUrl = encodeURI(
        `${process.env.PUBLIC_URL}/playground/${system}/${
          process.env.NODE_ENV === 'development' ? 'index.html' : ''
        }?path=/story/${selectedKind}--${selectedStory}${argsUrl}`
      );
    }

    const fullFrameUrl =
      system && selectedKind && selectedStory
        ? encodeURI(
            `${process.env.PUBLIC_URL}/playground/${system}/iframe.html?id=${selectedKind}--${selectedStory}${argsUrl}`
          )
        : '';

    let markupElement = null;

    if (resolvedMarkup) {
      markupElement = <Code>{resolvedMarkup}</Code>;
    }

    return (
      <div className={styles.playground}>
        <div className={styles.showcase}>
          {!hideDemo && (
            <>
              {showFrame && fullFrameUrl ? (
                <Iframe
                  url={fullFrameUrl}
                  defaultHeight={frameHeight}
                  maxWidth={frameWidth}
                  iframeOptions={iframeOptions}
                  disableAutoResize={disableAutoResize}
                  heightCalculation={heightCalculation}
                />
              ) : (
                <div className={styles.showcase__content}>{children}</div>
              )}
            </>
          )}

          {fullFrameUrl && (
            <a
              href={fullFrameUrl}
              className={`${styles.link} ${styles['link--icon']} ${styles.fullscreen}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.link__label}>Fullscreen</span>
              <svg
                focusable="false"
                aria-hidden="true"
                className={styles.link__icon}
              >
                <use xlinkHref={`${iconSprite}#fullscreen`} />
              </svg>
            </a>
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
            <button
              type="button"
              className={`${styles.link} ${styles['link--icon']} ${styles.toggle}`}
              onClick={this.handleClickOnToggle}
            >
              <div className={styles.toggle__container}>
                <span className={styles.link__label}>Show more</span>
                <svg
                  focusable="false"
                  aria-hidden="true"
                  className={styles.link__icon}
                >
                  <use xlinkHref={`${iconSprite}#corner-arrow`} />
                </svg>
              </div>
            </button>
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
              <svg
                focusable="false"
                aria-hidden="true"
                className={styles.link__icon}
              >
                <use xlinkHref={`${iconSprite}#corner-arrow`} />
              </svg>
            </a>
          </>
        )}
      </div>
    );
  }
}

Playground.propTypes = {
  children: PropTypes.node.isRequired,
  frameHeight: PropTypes.string,
  frameWidth: PropTypes.string,
  playgroundLink: PropTypes.string,
  showFrame: PropTypes.bool,
  hideCode: PropTypes.bool,
  // iframeOptions: https://github.com/davidjbradshaw/iframe-resizer#options
  iframeOptions: PropTypes.shape(),
  hideDemo: PropTypes.bool,
  heightCalculation: PropTypes.string,
  disableAutoResize: PropTypes.bool,
  system: PropTypes.string,
  selectedKind: PropTypes.string,
  selectedStory: PropTypes.string,
  selectedArgs: PropTypes.string,
};

Playground.defaultProps = {
  frameHeight: '200px',
  frameWidth: '100%',
  playgroundLink: '',
  showFrame: false,
  hideCode: false,
  iframeOptions: {},
  hideDemo: false,
  heightCalculation: 'max',
  disableAutoResize: false,
  system: '',
  selectedKind: '',
  selectedStory: '',
  selectedArgs: '',
};

export default Playground;
