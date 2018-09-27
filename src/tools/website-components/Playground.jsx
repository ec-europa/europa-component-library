/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';

import styles from './Playground.scss';

const Playground = ({ playgroundLink, children }) => {
  if (!children) return null;

  return (
    <div className={styles.playground}>
      <div className={styles.showcase}>{children}</div>
      <ul className={styles.links}>
        <li>
          {playgroundLink && (
            <a
              href={playgroundLink}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Playground
            </a>
          )}
        </li>
      </ul>
      <div className={styles.code}>
        <pre className={`${styles['code-pre']} language-html`}>
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
      </div>
    </div>
  );
};

Playground.propTypes = {
  children: PropTypes.node.isRequired,
  playgroundLink: PropTypes.string,
};

Playground.defaultProps = {
  playgroundLink: '',
};

export default Playground;
