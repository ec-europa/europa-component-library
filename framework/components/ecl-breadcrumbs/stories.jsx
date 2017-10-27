/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { Parser as HtmlToReactParser } from 'html-to-react';
import Twig from 'twig';

// Load defaults
import config from './ecl-breadcrumbs.config';

// Load template
import tpl from './ecl-breadcrumbs.twig';

const parser = new HtmlToReactParser();
const template = Twig.twig({
  data: tpl,
});

const stories = storiesOf('Components/Breadcrumbs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const html = template
    .render({
      segments: object('Segments', config.context.segments),
      extraClass: text('Extra classes', ''),
    })
    .trim();

  return parser.parse(html);
});
