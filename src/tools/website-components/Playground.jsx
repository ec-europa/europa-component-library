/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';
import { queryOne } from '@ecl/ec-base/helpers/dom';

import iconSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import Iframe from './Showcase/Iframe';
import styles from './Playground.scss';

class Playground extends PureComponent {
  constructor(props) {
    super(props);
    this.playgroundRef = React.createRef();

    // Parameters
    this.showcaseCodeSelector = '[data-ecl-showcase-code]';
    this.showcaseToggleSelector = '[data-ecl-showcase-toggle]';
    this.showcaseLineHeight = 1.5;
    this.showcaseNbLines = 6;
  }

  componentDidMount() {
    // Get code area
    this.showcaseCode = queryOne(
      this.showcaseCodeSelector,
      this.playgroundRef.current
    );

    // Calculate max height
    this.maxHeight =
      this.showcaseLineHeight *
      this.showcaseNbLines *
      parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Check if code area is too long
    if (this.showcaseCode.clientHeight > this.maxHeight) {
      this.showcaseCode.parentElement.setAttribute('aria-expanded', false);
      this.showcaseCode.style.maxHeight = `${this.maxHeight}px`;

      // Get toggle button
      this.showcaseToggle = queryOne(
        this.showcaseToggleSelector,
        this.playgroundRef.current
      );

      // Add click event
      if (this.showcaseToggle) {
        this.showcaseToggle.addEventListener(
          'click',
          this.handleClickOnToggle.bind(this)
        );
      }
    }
  }

  componentWillUnmount() {
    if (this.showcaseToggle) {
      this.showcaseToggle.removeEventListener(
        'click',
        this.handleClickOnToggle
      );
    }
  }

  handleClickOnToggle() {
    // Display full code
    this.showcaseCode.parentElement.setAttribute('aria-expanded', true);
    this.showcaseCode.style.maxHeight = `none`;

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
      hideDemo,
      children,
    } = this.props;

    if (!children) return null;

    const playgroundUrl =
      playgroundLink ||
      encodeURI(
        `/storybook/${system}/index.html?selectedKind=${selectedKind}&selectedStory=${selectedStory}&stories=1`
      );

    const fullFrameUrl =
      system && selectedKind && selectedStory
        ? encodeURI(
            `/storybook/${system}/iframe.html?selectedKind=${selectedKind}&selectedStory=${selectedStory}`
          )
        : '';

    return (
      <div className={styles.playground} ref={this.playgroundRef}>
        <div className={styles.showcase}>
          {!hideDemo && (
            <Fragment>
              {showFrame && fullFrameUrl ? (
                <Iframe url={fullFrameUrl} defaultHeight={frameHeight} />
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
              &nbsp;
              <svg className={styles.link__icon}>
                <use xlinkHref={`${iconSprite}#ui--fullscreen`} />
              </svg>
            </a>
          )}
        </div>

        <div className={styles.code}>
          <pre
            className={`${styles['code-pre']} language-html`}
            data-ecl-showcase-code
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
            data-ecl-showcase-toggle
          >
            <div className={styles.toggle__container}>
              <span
                className={styles.link__label}
                data-ecl-showcase-toggle-label
              >
                Show more
              </span>
              &nbsp;
              <svg className={styles.link__icon}>
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
            &nbsp;
            <svg className={styles.link__icon}>
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
  hideDemo: PropTypes.bool,
  system: PropTypes.string,
  selectedKind: PropTypes.string,
  selectedStory: PropTypes.string,
};

Playground.defaultProps = {
  frameHeight: '200px',
  playgroundLink: '',
  showFrame: false,
  hideDemo: false,
  system: '',
  selectedKind: '',
  selectedStory: '',
};

export default Playground;
