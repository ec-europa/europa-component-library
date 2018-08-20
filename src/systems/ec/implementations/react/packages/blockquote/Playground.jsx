/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';

import './Playground.scss';

const Playground = ({ playgroundLink, fullscreenLink, children }) => {
  if (!children) return null;

  return (
    <div>
      <div className="tmp-playground-showcase">{children}</div>
      <ul className="ecl-list ecl-list--inline tmp-playground-links">
        <li>
          {playgroundLink && (
            <a
              href={playgroundLink}
              className="ecl-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playground
            </a>
          )}
        </li>
        <li>
          {fullscreenLink && (
            <a
              href={fullscreenLink}
              className="ecl-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullscreen
            </a>
          )}
        </li>
      </ul>
      <div className="tmp-playground-code">
        <pre className="tmp-playground-code-pre language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                beautifyHtml(ReactDOMServer.renderToStaticMarkup(children)),
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
  fullscreenLink: PropTypes.string,
};

Playground.defaultProps = {
  playgroundLink: '',
  fullscreenLink: '',
};

export default Playground;
