import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Utilities/Editor',
  decorators: [withKnobs],
};

export const Sample = () => {
  // Manually inject styles
  function createLink(href, media) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.media = media || 'all';
    return link;
  }

  const head = document.head || document.querySelectorAll('head')[0];
  head.append(createLink('./styles/ecl-eu-preset-editor.css', 'screen'));

  return (
    <div className="ecl-editor">
      <h1>Sample page for ecl-editor</h1>

      <h2>Typography and links</h2>
      <p>
        Etiam vel finibus lectus. Maecenas luctus commodo tellus,{' '}
        <a href="/example">at malesuada lorem</a>. Quisque et tempus sem.
        Maecenas ac neque in nibh ornare consequat. Proin commodo sed dolor sit
        amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus.
      </p>

      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1.1</td>
            <td>Cell 2.1</td>
            <td>Cell 3.1</td>
          </tr>
          <tr>
            <td>Cell 1.2</td>
            <td>Cell 2.2</td>
            <td>Cell 3.2</td>
          </tr>
        </tbody>
      </table>

      <h2>List</h2>
      <ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
      </ul>
      <br />
      <ol>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
      </ol>
      <br />
      <dl>
        <dt>Description list term</dt>
        <dd>Description list definition</dd>
        <dt>Description list term</dt>
        <dd>Description list definition</dd>
      </dl>

      <h2>Button</h2>
      <button type="button">Button tag</button>
      <br />
      <br />
      <input type="button" value="Input tag" />

      <h2>Blockquote</h2>
      <blockquote>
        <p>
          Donec at commodo felis. Aenean ornare vestibulum sem, eu lobortis
          odio.
        </p>
        <footer>
          <cite>Lorem Ipsum</cite>
        </footer>
      </blockquote>
    </div>
  );
};

Sample.storyName = 'sample';
