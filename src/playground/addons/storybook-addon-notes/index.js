import { addons, makeDecorator } from '@storybook/preview-api';
import { marked } from 'marked';
import Prism from 'prismjs';
import { decode } from 'he';

// Manually import extra languages
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-twig';

// Create custom marked renderer
const renderer = {
  code({ text, lang, escaped }) {
    const language = (lang || '').match(/\S*/)[0];

    if (!language) {
      return `<pre><code>${escaped ? text : escape(text, true)}</code></pre>`;
    }

    const highlightedCode = Prism.highlight(
      text,
      Prism.languages[language],
      language,
    );

    if (highlightedCode !== undefined && highlightedCode !== text) {
      escaped = true;
      text = highlightedCode;
    }

    const htmlLang = `language-${escape(language, true)}`;

    // Due to the format produced by JSON.stringify.
    if (lang === 'twig') {
      text = text.replace(
        /(<span class="token punctuation")>\.(<\/span>)/g,
        '$1 style="visibility:hidden">.$2',
      );
    }

    return `<pre class="${htmlLang}"><code class="${htmlLang}">${
      escaped ? text : escape(text, true)
    }</code></pre>\n`;
  },
};

// Register the renderer once.
// Do NOT put this inside renderMarkdown().
marked.use({ renderer });

function renderMarkdown(text, options, json) {
  if (json) {
    const example = { ...json };

    Object.keys(example).forEach((key) => {
      if (key.startsWith('show_')) {
        delete example[key];
      }
    });

    if (example.extra_classes === '') {
      delete example.extra_classes;
    }

    if (example.gridContent != null) {
      delete example.gridContent;
    }

    if (example.extra_attributes === undefined) {
      delete json.extra_attributes;
    }

    if (json.items) {
      example.items = [...json.items];

      example.items.forEach((item, i) => {
        if (item.label === '' && item.path === '') {
          example.items[i] = {};
        }
      });

      example.items = example.items.filter(
        (value) => Object.keys(value).length !== 0,
      );
    }

    if (json.links) {
      example.links = [...json.links];

      example.links.forEach((link, i) => {
        if (link.label === '' && link.path === '') {
          example.links[i] = {};
        }
      });

      example.links = example.links.filter(
        (value) => Object.keys(value).length !== 0,
      );
    }

    // Fixing the encoding of ', mainly
    Object.keys(example).forEach((key) => {
      if (typeof example[key] === 'string') {
        example[key] = decode(example[key]);
      }
    });

    // Ehm, this is the best format we could get.
    let specs = JSON.stringify(example, undefined, '\n..');

    // We only replace the existing examples.
    specs = specs.replace(/"([^"()]+)":/g, '$1:');

    const n = specs.lastIndexOf('}');
    specs = [specs.slice(0, n), '\n', specs.slice(n)].join('');

    const preTwig = text.slice(0, Math.max(0, text.indexOf("twig' with {")));

    const postTwig = text.split('```').pop();

    text = preTwig + "twig' with \n" + specs + postTwig + ' %}\n```';
  }

  return marked.parse(text, options);
}

export const withNotes = makeDecorator({
  name: 'withNotes',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const story = getStory(context);
    let { json } = parameters;

    if (typeof json === 'function') {
      json = structuredClone(json(context));
    }

    const storyOptions = parameters || options;

    const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;

    if (!text && !markdown) {
      throw new Error(
        'You must set one of `text` or `markdown` on the `notes` parameter',
      );
    }

    channel.emit(
      'ecl/notes/add_notes',
      text || renderMarkdown(markdown, markdownOptions, json),
    );

    return story;
  },
});

export const withMarkdownNotes = (text, options, json) =>
  withNotes({
    markdown: text,
    json,
    markdownOptions: options,
  });
