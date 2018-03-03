/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Parser as HtmlToReactParser } from 'html-to-react';

// Load defaults
import config from './ecl-blockquotes.config';

// Load template
import tpl from './ecl-blockquotes.twig';

const parser = new HtmlToReactParser();

const stories = storiesOf('Components/Blockquotes', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const html = tpl({
    body: text('Body', config.context.body),
    author: text('Author', config.context.author),
    extra_classes: text('Extra classes', ''),
    extra_attributes: '',
  }).trim();

  return parser.parse(html);
});
