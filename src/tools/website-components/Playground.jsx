/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';

import './Playground.scss';

const Playground = ({ playgroundLink, children }) => {
  if (!children) return null;

  return (
    <div className="tmp-playground">
      <div className="tmp-playground__showcase">{children}</div>
      <ul className="tmp-playground__links">
        <li>
          {playgroundLink && (
            <a
              href={playgroundLink}
              className="tmp-playground__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playground
            </a>
          )}
        </li>
      </ul>
      <div className="tmp-playground__code">
        <pre className="tmp-playground__code-pre language-html">
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
};

Playground.defaultProps = {
  playgroundLink: '',
};

export default Playground;
