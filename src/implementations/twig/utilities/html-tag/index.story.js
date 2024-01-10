import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

export default {
  title: 'Utilities/HTML tag styling',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
    controls: { disable: true },
    EclNotes: { disable: true },
  },
};

export const Default = () => `
  <h2 class="ecl-u-type-heading-2">HTML tag styling</h2>
  <p class="ecl-u-type-paragraph">To see the following HTML tags styled with ECL, just activate the optional "ecl-${getSystem()}-default" or "ecl-${getSystem()}-default-print" css file in the "CSS resources" tab.</p>
  <details>
    <summary><strong>Link and button</strong></summary>
    <br />
    <div class="ecl">
      <a href="#">Link</a><br /><br />
      <button>Button</button>
    </div>
  </details>
  <br />
  <details>
    <summary><strong>Typography</strong></summary>
    <div class="ecl">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis volutpat diam. Aliquam ac eleifend elit. Vivamus urna orci, vehicula nec sagittis et, facilisis a dolor. Mauris sed justo a sapien venenatis lobortis. Sed eu ornare nunc. Curabitur vitae est suscipit, mattis magna aliquam, scelerisque lorem. Aenean sem ex, dignissim eget justo vitae, fringilla dictum ligula.</p>
    </div>
  </details>
  <br />
  <details>
    <summary><strong>Lists</strong></summary>
    <br />
    <div class="ecl">
      <ul>
        <li>Unordered list</li>
        <li>Unordered list
          <ul>
            <li>Nested unordered list</li>
            <li>Nested unordered list</li>
          </ul>
        </li>
      </ul>
      <br />
      <ol>
        <li>Ordered list</li>
        <li>Ordered list
          <ol>
            <li>Nested ordered list</li>
            <li>Nested ordered list</li>
          </ol>
        </li>
      </ol>
      <dl>
        <dt>Description term</dt>
        <dd>Description definition</dd>
        <dt>Description term</dt>
        <dd>Description definition</dd>
      </dl>
    </div>
  </details>
  <br />
  <details>
    <summary><strong>Blockquote</strong></summary>
    <br />
    <div class="ecl">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur vulputate venenatis.
        <cite>Someone</cite>
      </blockquote>
    </div>
  </details>
  <br />
  <details>
    <summary><strong>Table</strong></summary>
    <br />
    <div class="ecl">
      <table>
        <thead>
          <th>Table heading</th>
          <th>Table heading</th>
        </thead>
        <tbody>
          <tr>
            <td data-ecl-table-header="Table heading">Table cell</td>
            <td data-ecl-table-header="Table heading">Table cell</td>
          </tr>
          <tr>
            <td data-ecl-table-header="Table heading">Table cell</td>
            <td data-ecl-table-header="Table heading">Table cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
  `;

Default.storyName = 'default';
