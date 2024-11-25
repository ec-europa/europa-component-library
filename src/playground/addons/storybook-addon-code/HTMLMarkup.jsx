import React from 'react';
import PropTypes from 'prop-types';
import { decode } from 'html-entities';
import {
  SyntaxHighlighter,
  Button,
  DocumentWrapper,
} from '@storybook/components';
import { styled } from '@storybook/theming';
import { html as beautify } from 'js-beautify';
import prefillPen from './codepen';

const TitleBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  flexGrow: '1',
  flexShrink: '1',
}));

function HTMLMarkup({ active, markup }) {
  const beautifiedCode = beautify(markup, {
    indent_size: 2,
    max_preserve_newlines: -1,
    preserve_newlines: false,
    indent_scripts: 'normal',
  });

  const unescapedCode = decode(beautifiedCode);

  return active ? (
    <DocumentWrapper>
      <TitleBar>
        <h1>Live HTML</h1>
        <Button
          type="button"
          variant="tertiary"
          onClick={() => {
            const form = document.createElement('form');
            const element1 = document.createElement('input');

            form.method = 'POST';
            form.action = 'https://codepen.io/pen/define';
            form.target = '_blank';

            element1.type = 'hidden';
            element1.name = 'data';
            element1.value = prefillPen(unescapedCode);

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
        {unescapedCode}
      </StyledSyntaxHighlighter>
    </DocumentWrapper>
  ) : null;
}

HTMLMarkup.propTypes = {
  active: PropTypes.bool.isRequired,
  markup: PropTypes.string.isRequired, // Accept the markup prop
};

export default HTMLMarkup;
