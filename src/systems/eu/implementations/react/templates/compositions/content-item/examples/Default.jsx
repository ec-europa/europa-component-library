import React from 'react';
import Icon from '@ecl/eu-react-component-icon';
import Link from '@ecl/eu-react-component-link';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/eu-react-component-unordered-list';

export default () => (
  <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
    <div className="ecl-u-flex-grow-1">
      <div className="ecl-u-type-s ecl-u-type-color-grey-75">
        NEWS ARTICLE | <time dateTime="2019-10-17">17 October 2019</time>
      </div>
      <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
        <Link href="/example" variant="standalone" label="Article title" />
      </div>
      <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex
        tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc
        tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.
      </p>

      <UnorderedList variant="no-bullet" className="ecl-u-mt-m">
        <UnorderedListItem className="ecl-u-d-flex ecl-u-align-items-center ecl-u-type-color-grey-75">
          <Icon shape="general--location" size="m" />
          <span className="ecl-u-type-s ecl-u-ml-s">Brussels, Belgium</span>
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-d-flex ecl-u-align-items-center ecl-u-type-color-grey-75">
          <Icon shape="general--livestreaming" size="m" />
          <span className="ecl-u-type-s ecl-u-ml-s">Live stream available</span>
        </UnorderedListItem>
      </UnorderedList>
    </div>

    <div
      role="img"
      aria-label="Example image"
      className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
      style={{
        backgroundImage:
          'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
        backgroundSize: 'contain',
        height: '5rem',
        width: '7.5rem',
      }}
    />

    <div
      role="img"
      aria-label="Example image"
      className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
      style={{
        backgroundImage:
          'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
        backgroundSize: 'contain',
        height: '8.75rem',
        width: '13.125rem',
      }}
    />
  </article>
);
