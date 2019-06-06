import React from 'react';
import Icon from '@ecl/ec-react-component-icon';
import { UnorderedList, UnorderedListItem } from '@ecl/ec-react-component-list';

export default () => (
  <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15">
    <div>
      <div className="ecl-u-type-s ecl-u-type-color-grey-75">
        NEWS ARTICLE | 17 October 2019
      </div>
      <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
        <a href="/example" className="ecl-link ecl-link--standalone">
          Article title
        </a>
      </div>
      <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex
        tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc
        tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.
      </p>

      <UnorderedList variant="no-bullet">
        <UnorderedListItem className="ecl-u-d-inline-flex ecl-u-align-items-center ecl-u-type-color-grey-75">
          <Icon shape="general--location" size="m" />
          <span className="ecl-u-type-s">Brussels, Belgium</span>
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-d-inline-flex ecl-u-align-items-center ecl-u-type-color-grey-75">
          <Icon shape="general--livestreaming" size="m" />
          <span className="ecl-u-type-s">Live stream available</span>
        </UnorderedListItem>
      </UnorderedList>
    </div>

    <img src="/example-image.jpg" alt="example" width="120" height="80" />
  </article>
);
