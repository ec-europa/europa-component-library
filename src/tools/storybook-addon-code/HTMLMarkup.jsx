import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  SyntaxHighlighter,
  Button,
  DocumentWrapper,
} from '@storybook/components';
import { styled } from '@storybook/theming';
import { html as beautify } from 'js-beautify';

import { ADD_CODE } from './constants';
import prefillPen from './codepen';

const TitleBar = styled.div`
  align-items: center; /* stylelint-disable-line */
  display: flex;
  justify-content: space-between;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  flexGrow: '1',
  flexShrink: '1',
}));

const HTMLMarkup = ({ active, channel }) => {
  const [code, setCode] = useState('');
  useEffect(() => {
    channel.on(ADD_CODE, (html) => setCode(html));
    return channel.removeListener(ADD_CODE);
  }, []);

  const beautifiedCode = beautify(code, {
    indent_size: 2,
    max_preserve_newlines: -1,
    preserve_newlines: false,
    indent_scripts: 'normal',
  });

  return active ? (
    <DocumentWrapper>
      <TitleBar>
        <h1>Live HTML</h1>
        <Button
          type="button"
          tertiary
          onClick={() => {
            const form = document.createElement('form');
            const element1 = document.createElement('input');

            form.method = 'POST';
            form.action = 'https://codepen.io/pen/define';
            form.target = '_blank';

            element1.type = 'hidden';
            element1.name = 'data';
            element1.value = prefillPen(code);

            form.appendChild(element1);

            document.body.appendChild(form);
            form.submit();
            form.remove();
          }}
        >
          Open in CodePen
        </Button>
      </TitleBar>
      <StyledSyntaxHighlighter bordered copyable format={false} language="html">
        {beautifiedCode}
      </StyledSyntaxHighlighter>
    </DocumentWrapper>
  ) : null;
};

HTMLMarkup.propTypes = {
  active: PropTypes.bool.isRequired,
  channel: PropTypes.shape({
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }).isRequired,
};

export default HTMLMarkup;
