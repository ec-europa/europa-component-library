import { addons, makeDecorator } from 'storybook/preview-api';
import { marked } from 'marked';
import Prism from 'prismjs';
import { decode } from 'he';

// Manually import extra languages
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-twig';

const escapeHtml = (text) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character],
  );

// Escape code as HTML, not with the browser's URL-oriented global escape().
marked.use({
  renderer: {
    code({ text, lang }) {
      const language = (lang || '').match(/\S*/)[0];
      const grammar = Prism.languages[language];
      const highlighted = grammar
        ? Prism.highlight(text, grammar, language)
        : escapeHtml(text);
      const className = language
        ? ` class="language-${escapeHtml(language)}"`
        : '';
      return `<pre${className}><code${className}>${highlighted}</code></pre>\n`;
    },
  },
});

const channel = addons.getChannel();
let latestNotes;
channel.on('ecl/notes/request_notes', ({ storyId }) => {
  if (latestNotes?.storyId === storyId) {
    channel.emit('ecl/notes/add_notes', latestNotes);
  }
});

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
      delete example.extra_attributes;
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

    const specs = JSON.stringify(example, null, 2);

    // Replace only a complete include inside a Twig code fence. Keep every
    // other README section, code fence, and trailing paragraph intact.
    text = text.replace(
      /(^[ \t]*```twig[^\n]*\n)([\s\S]*?)(^[ \t]*```[ \t]*$)/gm,
      (fence, opening, body, closing) => {
        const include = body.match(
          /^(\s*{%\s*include\s+(['"])[^'"]+\2\s+with\s+)[\s\S]*?(\s+(?:only\s+)?%}\s*)$/,
        );
        if (!include) return fence;
        return `${opening}${include[1]}${specs}${include[3]}${closing}`;
      },
    );
  }

  return marked.parse(text, options);
}

export const withNotes = makeDecorator({
  name: 'withNotes',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const story = getStory(context);
    const storyOptions = parameters || options;
    let json =
      typeof storyOptions === 'object' ? storyOptions?.json : undefined;

    if (typeof json === 'function') {
      json = structuredClone(json(context));
    }

    const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;

    if (!text && !markdown) {
      throw new Error(
        'You must set one of `text` or `markdown` on the `notes` parameter',
      );
    }

    latestNotes = {
      storyId: context.id,
      html: text || renderMarkdown(markdown, markdownOptions, json),
    };
    channel.emit('ecl/notes/add_notes', latestNotes);

    return story;
  },
});

export const withMarkdownNotes = (text, options, json) =>
  withNotes({
    markdown: text,
    json,
    markdownOptions: options,
  });
