/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';

import './Playground.scss';

const Playground = ({ children }) => {
  if (!children) return null;

  return (
    <div>
      <div className="tmp-playground-showcase">
        <div className="tmp-playground-showcase-resizable">{children}</div>
      </div>
      <div className="tmp-playground-code-box">
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
};

export default Playground;
