import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  show_image: false,
  lang: 'en',
  citation: data.citation,
  author: data.author,
});

const getArgTypes = () => ({
  show_image: {
    name: 'show image',
    type: { name: 'boolean' },
    description: 'Toggle image visibility',
    table: {
      type: { summary: 'boolean' },
      category: 'Optional',
    },
  },
  lang: {
    name: 'language',
    type: 'select',
    options: [
      'bg',
      'cs',
      'da',
      'de',
      'el',
      'en',
      'es',
      'et',
      'fi',
      'fr',
      'ga',
      'hr',
      'hu',
      'it',
      'lt',
      'lv',
      'mt',
      'nl',
      'pl',
      'pt',
      'ro',
      'sk',
      'sl',
      'sv',
    ],
    control: {
      labels: {
        bg: 'bulgarian',
        cs: 'czech',
        da: 'danish',
        de: 'german',
        el: 'greek',
        en: 'english',
        es: 'spanish',
        et: 'estonian',
        fi: 'finnish',
        fr: 'french',
        ga: 'gaelic',
        hr: 'croatian',
        hu: 'hungarian',
        it: 'italian',
        lt: 'lituanian',
        lv: 'latvian',
        mt: 'maltese',
        nl: 'dutch',
        pl: 'polish',
        pt: 'portuguese',
        ro: 'romanian',
        sk: 'slovak',
        sl: 'slovenian',
        sv: 'swedish',
      },
    },
    mapping: {
      english: 'en',
      bulgarian: 'bg',
      czech: 'cs',
      danish: 'da',
      german: 'de',
      greek: 'el',
      spanish: 'es',
      estonian: 'et',
      finnish: 'fi',
      french: 'fr',
      gaelic: 'ga',
      croatian: 'hr',
      hungarian: 'hu',
      italian: 'it',
      lituanian: 'lt',
      latvian: 'lv',
      maltese: 'mt',
      dutch: 'nl',
      polish: 'pl',
      portuguese: 'pt',
      romanian: 'ro',
      slovak: 'sk',
      slovenian: 'sl',
      swedish: 'sv',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'en' },
      category: 'Content',
    },
  },
  citation: {
    name: 'citation',
    type: { name: 'string', required: true },
    description: 'Blockquote citation',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  author: {
    name: 'author',
    type: { name: 'string', required: true },
    description: 'Author of the citation',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  },
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_image) {
    delete clone.picture;
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Blockquote',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedBlockquote = await blockquote(prepareData(defaultData, args));
  return renderedBlockquote;
};
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
