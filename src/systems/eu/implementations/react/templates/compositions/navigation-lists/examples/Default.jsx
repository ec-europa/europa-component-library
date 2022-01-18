import React from 'react';
import Link from '@ecl/eu-react-component-link';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/eu-react-component-unordered-list';

export default function () {
  return (
    <div>
      <h2 className="ecl-u-ma-none ecl-u-type-prolonged-xl ecl-u-type-bold">
        <Link
          href="/example"
          className="ecl-link--standalone ecl-u-type-family-alt"
          label="Page title section (child A)"
        />
      </h2>
      <p className="ecl-u-mb-none ecl-u-mt-m ecl-u-type-color-grey ecl-u-type-paragraph">
        Child summary section.
        <br />
        Short description of the child A page.
      </p>
      <UnorderedList variant="no-bullet" className="ecl-u-mt-m">
        <UnorderedListItem>
          <Link
            href="/example"
            className="ecl-link--standalone"
            label="Page title section (grandchild page  A.1)"
          />
        </UnorderedListItem>
        <UnorderedListItem>
          <Link
            href="/example"
            className="ecl-link--standalone"
            label="Page title section (grandchild page  A.2)"
          />
        </UnorderedListItem>
        <UnorderedListItem>
          <Link
            href="/example"
            className="ecl-link--standalone"
            label="Page title section (grandchild page  A.3)"
          />
        </UnorderedListItem>
      </UnorderedList>
    </div>
  );
}
