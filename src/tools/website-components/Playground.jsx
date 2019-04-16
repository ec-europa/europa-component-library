/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';
import Axe from 'axe-core';

import iconSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import Iframe from './Showcase/Iframe';
import styles from './Playground.scss';

class Playground extends PureComponent {
  constructor(props) {
    super(props);
    this.showcaseCodeRef = React.createRef();
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);

    // Parameters
    this.showcaseLineHeight = 1.5;
    this.showcaseNbLines = 6;
  }

  componentDidMount() {
    // Calculate max height
    this.maxHeight =
      this.showcaseLineHeight *
      this.showcaseNbLines *
      parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Check if code area is too long
    if (this.showcaseCodeRef.current.clientHeight > this.maxHeight) {
      this.showcaseCodeRef.current.parentElement.setAttribute(
        'aria-expanded',
        false
      );
      this.showcaseCodeRef.current.style.maxHeight = `${this.maxHeight}px`;
    }

    // Axe core test
    const showcases = document.querySelectorAll('[data-axe]');
    Axe.run(showcases, function(err, results) {
      if (results) console.log(results.violations);
    });
  }

  handleClickOnToggle() {
    // Display full code
    this.showcaseCodeRef.current.parentElement.setAttribute(
      'aria-expanded',
      true
    );
    this.showcaseCodeRef.current.style.maxHeight = `none`;

    return this;
  }

  render() {
    const {
      frameHeight,
      playgroundLink,
      system,
      selectedKind,
      selectedStory,
      showFrame,
      disableAutoResize,
      iframeOptions,
      hideDemo,
      children,
    } = this.props;

    if (!children) return null;

    const playgroundUrl =
      playgroundLink ||
      encodeURI(
        `/storybook/${system}/${
          process.env.NODE_ENV === 'development' ? 'index.html' : ''
        }?path=/story/${selectedKind}--${selectedStory}`
      );

    const fullFrameUrl =
      system && selectedKind && selectedStory
        ? encodeURI(
            `/storybook/${system}/${
              process.env.NODE_ENV === 'development' ? 'iframe.html' : 'iframe'
            }?id=${selectedKind}--${selectedStory}`
          )
        : '';

    return (
      <div className={styles.playground}>
        <div className={styles.showcase} data-axe>
          {!hideDemo && (
            <Fragment>
              {showFrame && fullFrameUrl ? (
                <Iframe
                  url={fullFrameUrl}
                  defaultHeight={frameHeight}
                  iframeOptions={iframeOptions}
                  disableAutoResize={disableAutoResize}
                />
              ) : (
                <div className={styles.showcase__content}>{children}</div>
              )}
            </Fragment>
          )}

          {fullFrameUrl && (
            <a
              href={fullFrameUrl}
              className={`${styles.link} ${styles['link--icon']} ${
                styles.fullscreen
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.link__label}>Fullscreen</span>
              <svg
                focusable="false"
                aria-hidden="true"
                className={styles.link__icon}
              >
                <use xlinkHref={`${iconSprite}#ui--fullscreen`} />
              </svg>
            </a>
          )}
        </div>

        <div className={styles.code}>
          <pre
            className={`${styles['code-pre']} language-html`}
            ref={this.showcaseCodeRef}
          >
            <code
              className="language-html"
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  beautifyHtml(ReactDOMServer.renderToStaticMarkup(children), {
                    indent_size: 2,
                    wrap_line_length: 120,
                  }),
                  Prism.languages.html,
                  'html'
                ),
              }}
            />
          </pre>

          <button
            type="button"
            className={`${styles.link} ${styles['link--icon']} ${
              styles.toggle
            }`}
            onClick={this.handleClickOnToggle}
          >
            <div className={styles.toggle__container}>
              <span className={styles.link__label}>Show more</span>
              <svg
                focusable="false"
                aria-hidden="true"
                className={styles.link__icon}
              >
                <use xlinkHref={`${iconSprite}#ui--corner-arrow`} />
              </svg>
            </div>
          </button>
        </div>

        <p className={styles.description}>Try it yourself on the playground</p>

        {playgroundUrl && (
          <a
            href={playgroundUrl}
            className={`${styles.link} ${styles['link--icon']} ${
              styles['playground-link']
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.link__label}>Playground</span>
            <svg
              focusable="false"
              aria-hidden="true"
              className={styles.link__icon}
            >
              <use xlinkHref={`${iconSprite}#ui--corner-arrow`} />
            </svg>
          </a>
        )}
      </div>
    );
  }
}

Playground.propTypes = {
  children: PropTypes.node.isRequired,
  frameHeight: PropTypes.string,
  playgroundLink: PropTypes.string,
  showFrame: PropTypes.bool,
  // iframeOptions: https://github.com/davidjbradshaw/iframe-resizer#options
  iframeOptions: PropTypes.shape(),
  hideDemo: PropTypes.bool,
  disableAutoResize: PropTypes.bool,
  system: PropTypes.string,
  selectedKind: PropTypes.string,
  selectedStory: PropTypes.string,
};

Playground.defaultProps = {
  frameHeight: '200px',
  playgroundLink: '',
  showFrame: false,
  iframeOptions: {},
  hideDemo: false,
  disableAutoResize: false,
  system: '',
  selectedKind: '',
  selectedStory: '',
};

export default Playground;
