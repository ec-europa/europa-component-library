import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Utilities/Print',
  decorators: [withKnobs],
};

export const Display = () => {
  return (
    <>
      <div className="ecl-u-type-m">
        Note: on the playground, you can use the checkboxes located in &quot;CSS
        Resources&quot; (on the right) to switch between print and screen
        display. Otherwise, use the print preview in your browser.
      </div>

      <h2 className="ecl-u-type-heading-2">Print specific display</h2>
      <p className="ecl-u-type-paragraph">
        <strong>Screen and print</strong>
        <br />
        This paragraph is displayed on both screen and print
      </p>
      <p className="ecl-u-type-paragraph ecl-u-screen-only">
        <strong>Screen (.ecl-u-screen-only)</strong>
        <br />
        This paragraph is displayed only on screen
      </p>
      <p className="ecl-u-type-paragraph ecl-u-print-only">
        <strong>Print (.ecl-u-print-only)</strong>
        <br />
        This paragraph is displayed only on print
      </p>
    </>
  );
};

Display.story = {
  name: 'display',
};

export const PageBreak = () => {
  return (
    <>
      <div className="ecl-u-type-m">
        Note: In order to see the page breaks, you should open the demo in a new
        tab (button &quot;Open canvas in new tab&quot; in the top bar), and open
        the print preview in your brower.
      </div>

      <h2 className="ecl-u-type-heading-2">Page break examples</h2>
      <p className="ecl-u-type-paragraph">
        <strong>A paragraph with no page break specified:</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        facilisis urna vitae justo semper, eget lacinia elit luctus. Donec
        euismod tincidunt ornare. Morbi ut erat id erat sollicitudin maximus.
        Donec mi eros, pulvinar ultrices purus in, accumsan pretium lorem. Nam
        ut enim eros. Pellentesque maximus magna leo, eget faucibus magna
        convallis nec. Nunc ex enim, volutpat ac mauris eu, consequat maximus
        metus. Nullam odio neque, egestas hendrerit nunc sed, sodales congue
        ligula. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed in orci vitae purus efficitur pellentesque id ac
        ex. Donec ex lorem, condimentum non mi nec, vestibulum ornare sapien.
      </p>
      <p className="ecl-u-type-paragraph ecl-u-break-before-page">
        <strong>
          A paragraph with a forced page break before
          (.ecl-u-break-before-page):
        </strong>
        <br />
        Nam tempor ex turpis, at convallis justo bibendum id. Vivamus convallis
        lacus vel magna consectetur, id congue felis ultrices. Aenean vitae
        ligula vel justo sagittis venenatis. Vivamus nec lectus eleifend,
        ullamcorper massa consequat, maximus nulla. Donec in nibh metus. Quisque
        pretium, nibh vitae placerat interdum, libero nibh sodales ligula, non
        porttitor sem massa non orci. Suspendisse lacinia ullamcorper placerat.
        Cras tempor, tellus at lacinia egestas, risus ligula faucibus odio, ac
        pharetra justo elit a sapien. Vivamus posuere nulla eu risus faucibus, a
        molestie arcu laoreet. Donec sed facilisis neque.
      </p>
      <p className="ecl-u-type-paragraph ecl-u-break-after-page">
        <strong>
          A paragraph with a forced page break after
          (.ecl-u-break-before-after):
        </strong>
        <br />
        Nunc quis rhoncus urna. Donec nec commodo dolor. Vestibulum sed luctus
        erat. Etiam consectetur consequat sem eu finibus. Etiam id sagittis
        nibh. Ut ut lacinia ex. Ut vel elit feugiat, iaculis tortor eu,
        scelerisque ante. Mauris convallis mauris tortor, at finibus risus
        dictum sed. Morbi ullamcorper eros et magna varius posuere. Donec
        molestie orci mauris, rutrum cursus enim feugiat vel.
      </p>
      <p className="ecl-u-type-paragraph">
        <strong>A paragraph with no page break specified:</strong>
        <br />
        Proin egestas facilisis leo, a consequat lectus congue vel. Vestibulum
        placerat leo id urna commodo finibus. Integer consectetur pulvinar
        libero quis luctus. Morbi dolor velit, porttitor sit amet eleifend quis,
        rutrum at magna. Morbi fermentum, mauris id rutrum dapibus, libero ante
        consequat augue, sit amet tincidunt diam nibh at diam. Maecenas id
        dignissim sem, at ornare eros. Donec viverra eros ut interdum bibendum.
        Donec ultrices vitae mi eu pellentesque. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Curabitur tortor neque, luctus ac
        lobortis id, egestas eu risus. Duis consequat, lorem sit amet maximus
        euismod, libero lorem efficitur lorem, vitae gravida turpis eros ut
        orci. Proin volutpat a ex non lobortis. Cras pharetra, est sed imperdiet
        gravida, mi dui vulputate justo, vel scelerisque erat tortor at nibh.
        Duis auctor aliquet ex in ultricies. Nulla at ornare eros. Nam commodo,
        tellus quis dictum aliquam, tortor nisl interdum nisi, ut suscipit justo
        risus in urna.
      </p>
      <p className="ecl-u-type-paragraph">
        <strong>
          A paragraph with no page break inside (.ecl-u-break-inside-avoid):
        </strong>
        <br />
        Nullam in convallis massa. Nullam non lacus id ipsum congue vestibulum.
        Praesent sit amet nisl at nisi rutrum rutrum. Nullam imperdiet nisl vel
        lacus laoreet sodales. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. In libero quam, semper eget mauris a, pulvinar aliquet
        neque. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Pellentesque consequat ex a ultricies venenatis.
        Integer posuere odio nec tristique imperdiet. Cras faucibus scelerisque
        enim, eget dapibus urna mattis sit amet. Fusce dapibus porta malesuada.
        Sed et ex sit amet massa fermentum molestie in id lacus. Cras fringilla
        libero vel lectus imperdiet, vitae varius est ultricies. Curabitur sit
        amet odio pretium, dignissim magna nec, ullamcorper eros.
      </p>
    </>
  );
};

PageBreak.story = {
  name: 'page break',
};
