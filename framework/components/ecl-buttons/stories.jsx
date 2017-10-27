/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Parser as HtmlToReactParser } from 'html-to-react';
import Twig from 'twig';

import tpl from './ecl-buttons.twig';

const parser = new HtmlToReactParser();
const template = Twig.twig({
  data: tpl,
});

const stories = storiesOf('Components/Buttons', module);

stories.addDecorator(withKnobs);

stories.add('simple', () => {
  const html = template
    .render({
      modifier: select(
        'Modifier',
        {
          default: 'Default',
          primary: 'Primary',
          secondary: 'Secondary',
          call: 'Call to action',
        },
        'default'
      ),
      type: select(
        'Type',
        {
          button: 'Button',
          link: 'Link',
        },
        'button'
      ),
      icon: text('Icon', ''),
      label: text('Label', 'Button Label'),
      href: text('Link', '#'),
      is_block: boolean('Block?', false),
      extra_classes: text('Extra classes', ''),
      extra_attributes: '',
    })
    .trim();

  return parser.parse(html);
});
