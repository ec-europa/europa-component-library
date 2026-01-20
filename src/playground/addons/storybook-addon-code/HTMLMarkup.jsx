import React, { useState } from 'react';
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

const TabBar = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.dark};
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background: ${({ active, theme }) =>
    active ? theme.color.dark : 'transparent'};
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  border-radius: 4px 4px 0 0;
  color: ${({ active, theme }) =>
    active ? theme.color.light : theme.color.defaultText};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.size.s2}px;
  margin-block-end: -1px;
  padding: 0.5rem 1rem;
  position: relative;

  &:hover {
    color: ${({ active, theme }) =>
      active ? theme.color.light : theme.color.defaultText};
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  flexGrow: '1',
  flexShrink: '1',
}));

function HTMLMarkup({ active, markup, originalMarkup }) {
  const [activeTab, setActiveTab] = useState('source');

  const beautifyHtml = (html, options = {}) => {
    return beautify(html, {
      indent_size: 2,
      indent_char: ' ',
      max_preserve_newlines: 1,
      preserve_newlines: true,
      indent_scripts: 'normal',
      end_with_newline: false,
      wrap_line_length: 0,
      wrap_attributes: 'auto',
      wrap_attributes_indent_size: 2,
      indent_inner_html: true,
      unformatted: [],
      content_unformatted: ['pre', 'textarea'],
      extra_liners: [],
      ...options,
    });
  };

  // For rendered HTML with SVG icons, apply more aggressive formatting
  const beautifiedRendered = beautifyHtml(markup, {
    unformatted: [],
    inline: [],
  });
  const unescapedRendered = decode(beautifiedRendered);

  // For original source HTML, also force block-level formatting for consistent output
  const beautifiedOriginal = originalMarkup
    ? beautifyHtml(originalMarkup, {
        unformatted: [],
        inline: [],
      })
    : '';
  const unescapedOriginal = originalMarkup ? decode(beautifiedOriginal) : '';

  const currentCode =
    activeTab === 'source' ? beautifiedOriginal : beautifiedRendered;
  const hasOriginal = originalMarkup && originalMarkup.trim() !== '';

  return active ? (
    <DocumentWrapper>
      <TitleBar>
        <h1>HTML</h1>
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
            element1.value = prefillPen(
              activeTab === 'source' ? unescapedOriginal : unescapedRendered,
            );

            form.appendChild(element1);

            document.body.appendChild(form);
            form.submit();
            form.remove();
          }}
        >
          Open in CodePen
        </Button>
      </TitleBar>
      {hasOriginal && (
        <TabBar>
          <Tab
            active={activeTab === 'source'}
            onClick={() => setActiveTab('source')}
          >
            Source HTML
          </Tab>
          <Tab
            active={activeTab === 'rendered'}
            onClick={() => setActiveTab('rendered')}
          >
            Rendered HTML
          </Tab>
        </TabBar>
      )}
      <StyledSyntaxHighlighter bordered copyable format={false} language="html">
        {hasOriginal ? currentCode : beautifiedRendered}
      </StyledSyntaxHighlighter>
    </DocumentWrapper>
  ) : null;
}

HTMLMarkup.propTypes = {
  active: PropTypes.bool.isRequired,
  markup: PropTypes.string.isRequired,
  originalMarkup: PropTypes.string,
};

export default HTMLMarkup;
