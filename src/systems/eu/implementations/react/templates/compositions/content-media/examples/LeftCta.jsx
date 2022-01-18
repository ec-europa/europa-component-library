import React from 'react';

import demoContentLeftCta from '@ecl/eu-specs-content-media/demo/data--left-cta';
import ContentMedia from '../src/ContentMedia';

export default function () {
  return (
    <div className="ecl-container">
      <h2 className="ecl-u-type-heading-2 ecl-u-mv-none ecl-u-type-color-black">
        Heading
      </h2>
      <ContentMedia
        {...demoContentLeftCta}
        className="ecl-u-mt-m ecl-u-mt-sm-l"
      >
        <p className="ecl-u-type-paragraph ecl-u-mt-none ecl-u-type-color-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          congue suscipit velit non fermentum. Vivamus ut blandit ipsum.
          Praesent sodales bibendum risus at consectetur. In bibendum aliquam
          rhoncus. Sed maximus magna eu leo euismod varius. Morbi ultricies ex
          lacus, at pellentesque metus fringilla sit amet. Aliquam placerat
          consectetur egestas. Nunc consequat nunc bibendum diam maximus, sit
          amet tempor mi pulvinar. In at urna at nisl maximus dignissim.
          Maecenas a ante ac erat imperdiet ornare eu non est. Aenean euismod
          gravida interdum. Proin non leo felis.
        </p>
        <p className="ecl-u-type-paragraph ecl-u-mb-none ecl-u-type-color-grey">
          Nulla iaculis dui in lacinia semper. Sed vitae ligula bibendum,
          vehicula neque sit amet, condimentum sapien. Sed convallis porta dui,
          id tincidunt dolor ultricies at. Curabitur venenatis nec risus
          fringilla venenatis.
        </p>
      </ContentMedia>
    </div>
  );
}
