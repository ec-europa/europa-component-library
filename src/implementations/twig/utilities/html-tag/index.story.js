import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

export default {
  title: 'Utilities/HTML tag styling',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
    controls: { disable: true },
  },
};

export const Default = () => {
  const h6 = getSystem() === 'eu' ? '<h6>Heading 6</h6>' : '';
  return `
  <h2 class="ecl-u-type-heading-2">HTML tag styling</h2>
  <p class="ecl-u-type-paragraph">To see the following HTML tags styled with ECL, just activate the optional "ecl-default" css file in the "CSS resources" tab.</p>
  <hr />
  <div class="ecl">
    <a href="#">Link</a><br />
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    ${h6}
    <p>Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur vulputate venenatis. Proin tempus viverra felis, a sollicitudin lorem rutrum sit amet. Phasellus mattis fringilla iaculis.</p>
    <ul>
      <li>Unordered list</li>
      <li>Unordered list
        <ul>
          <li>Nested unordered list</li>
          <li>Nested unordered list</li>
        </ul>
      </li>
    </ul><br />
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
    <button>Button</button><br /><br />
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
    </table><br />
    <blockquote>
      Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur vulputate venenatis.
      <cite>Someone</cite>
    </blockquote>
  </div>
  `;
};

Default.storyName = 'default';
