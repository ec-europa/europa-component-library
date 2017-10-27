/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Parser as HtmlToReactParser } from 'html-to-react';
import Twig from 'twig';
import tpl from './ecl-pagers.twig';

const parser = new HtmlToReactParser();
const template = Twig.twig({
  data: tpl,
});

const stories = storiesOf('Components/Pagers', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const labelPrevious = text('Previous', 'Previous');
  const labelNext = text('Next', 'Next');
  const currentPage = number('Current page', 4);
  const maxPage = number('Max pages', 10);

  const html = template
    .render({
      label_previous: labelPrevious,
      label_next: labelNext,
      current_page: currentPage,
      max_page: maxPage,
    })
    .trim();

  return parser.parse(html);
});
