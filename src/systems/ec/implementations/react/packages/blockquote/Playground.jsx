/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { html as beautifyHtml } from 'js-beautify';

const Playground = ({ children }) => {
  if (!children) return null;

  return (
    <div>
      <div
        style={{
          backgroundColor: '#f3f3f3',
          border: '1px solid #ddd',
        }}
      >
        <div
          style={{
            backgroundColor: '#f9f9f9',
            borderRight: '1px solid #ddd',
            maxWidth: 'calc(100% - 2rem)',
            overflow: 'auto',
            padding: '1rem',
            resize: 'horizontal',
            width: '100%',
          }}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          padding: '0',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderTopWidth: 0,
          overflow: 'auto',
        }}
      >
        <pre
          style={{
            padding: '2rem 1rem',
            margin: 0,
          }}
        >
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
