import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow';
import { decode } from 'html-entities';
import beautifyHtml from 'js-beautify/js/src/html';

function Code({ children }) {
  const [formattedCode, setFormattedCode] = useState('');

  useEffect(() => {
    const unescapedMarkup = beautifyHtml(children, {
      indent_size: 2,
      wrap_line_length: 120,
    });
    const decodedMarkup = decode(unescapedMarkup);
    setFormattedCode(decodedMarkup);
  }, [children]);

  return (
    <SyntaxHighlighter language="html" style={tomorrow}>
      {formattedCode}
    </SyntaxHighlighter>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Code;
