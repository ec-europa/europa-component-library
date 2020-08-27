/* eslint-disable no-param-reassign */
import addons, { makeDecorator } from '@storybook/addons';
import marked from 'marked';
import Prism from 'prismjs';
import he from 'he';

// Manually import extra languages
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-twig';

// Create custom marked renderer
const renderer = new marked.Renderer();
renderer.code = function customCode(code, infostring, escaped) {
  const lang = (infostring || '').match(/\S*/)[0];

  if (!lang) {
    return `<pre><code>${escaped ? code : escape(code, true)}</code></pre>`;
  }

  const highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);
  if (highlightedCode !== undefined && highlightedCode !== code) {
    escaped = true;
    code = highlightedCode;
  }

  const htmlLang = this.options.langPrefix + escape(lang, true);
  // Due to the format produced by JSON.stringify.
  if (infostring === 'twig') {
    code = code.replace(
      /(<span class="token punctuation")>\.(<\/span>)/g,
      '$1 style="visibility:hidden">.$2'
    );
  }

  return `<pre class="${htmlLang}"><code class="${htmlLang}">${
    escaped ? code : escape(code, true)
  }</code></pre>\n`;
};

function renderMarkdown(text, options, json) {
  if (json) {
    const example = { ...json };
    if (example.extra_classes === '') {
      delete example.extra_classes;
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
        (value) => Object.keys(value).length !== 0
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
        (value) => Object.keys(value).length !== 0
      );
    }
    // Fixing the econding of ', mainly
    Object.keys(example).forEach((e) => {
      if (typeof example[e] === 'string') {
        example[e] = he.decode(example[e]);
      }
    });
    // Ehm, this is the best format we could get.
    let specs = JSON.stringify(example, undefined, '\n..');
    // We only replace the existing example.s
    specs = specs.replace(/"([^"()]+)":/g, '$1:');
    const n = specs.lastIndexOf('}');
    specs = [specs.slice(0, n), '\n', specs.slice(n)].join('');
    const preTwig = text.slice(0, Math.max(0, text.indexOf("twig' with {")));
    const postTwig = text.split('```').pop();
    // eslint-disable-next-line prefer-template
    text = preTwig + "twig' with \n" + specs + postTwig + ' %}\n```';
  }

  return marked(text, { ...marked.defaults, renderer, ...options });
}

export const withNotes = makeDecorator({
  name: 'withNotes',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const story = getStory(context);
    const { json } = parameters;
    const storyOptions = parameters || options;

    const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;

    if (!text && !markdown) {
      throw new Error(
        'You must set of one of `text` or `markdown` on the `notes` parameter'
      );
    }

    channel.emit(
      'ecl/notes/add_notes',
      text || renderMarkdown(markdown, markdownOptions, json)
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
