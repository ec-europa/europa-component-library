import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

import beautifyHtml from 'js-beautify/js/src/html';

function Code({ children }) {
  const [formattedCode, setFormattedCode] = useState('');

  useEffect(() => {
    const unescapedMarkup = beautifyHtml(children, {
      indent_size: 2,
      wrap_line_length: 120,
    });
    setFormattedCode(unescapedMarkup);
  }, [children]);

  return (
    <SyntaxHighlighter language="html" style={xonokai}>
      {formattedCode}
    </SyntaxHighlighter>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Code;
