/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Parser as HtmlToReactParser } from 'html-to-react';
import tpl from './ecl-banners.twig';

const { context } = require('./ecl-banners.config');

const parser = new HtmlToReactParser();

const stories = storiesOf('Components/Banners', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const html = tpl(context).trim();

  return parser.parse(html);
});
