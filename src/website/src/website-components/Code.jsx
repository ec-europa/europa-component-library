import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

import Prism from 'prismjs';
import beautifyHtml from 'js-beautify/js/src/html';

function Code({ children }) {
  return (
    <code
      className="language-html"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(
          beautifyHtml(
            // Render as string and unescape &nbsp;
            ReactDOMServer.renderToStaticMarkup(children).replace(
              /\u00A0/g,
              '&nbsp;'
            ),
            {
              indent_size: 2,
              wrap_line_length: 120,
            }
          ),
          Prism.languages.html,
          'html'
        ),
      }}
    />
  );
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Code;
