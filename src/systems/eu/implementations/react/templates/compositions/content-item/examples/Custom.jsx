import React from 'react';
import parse from 'html-react-parser';

import demoContentCustom from '@ecl/eu-specs-content-item/demo/data--custom';
import ContentItem from '../src/ContentItem';

// Format data
demoContentCustom.description.label = parse(
  demoContentCustom.description.label
);

export default function () {
  return (
    <ContentItem {...demoContentCustom}>
      <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m ecl-u-type-family-alt">
        Moderator
      </div>
      <a
        href="/example"
        className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m ecl-link ecl-link--standalone ecl-u-type-family-alt"
      >
        Nullam nisi eros, convallis sit amet tellus vel, placerat elementum
        nisi. Vestibulum dignissim erat pretium dignissim finibus.
      </a>
      <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l ecl-u-type-family-alt">
        15 Nov 2019 | 09:15 - 12:00 | Auditorium
      </div>
    </ContentItem>
  );
}
