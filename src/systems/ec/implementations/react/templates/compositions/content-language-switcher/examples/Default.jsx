import React from 'react';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import { UnorderedList, UnorderedListItem } from '@ecl/ec-react-component-list';

export default () => (
  <div className="ecl-u-bg-blue ecl-u-border-bottom ecl-u-border-color-white">
    <div className="ecl-u-d-flex ecl-u-type-color-white ecl-u-align-items-center ecl-u-font-s">
      <Icon shape="general--generic-lang" size="l" />

      <span className="ecl-u-type-strike ecl-u-ml-m">italiano</span>

      <UnorderedList
        variant="no-bullet"
        className="ecl-u-d-flex ecl-u-flex-column ecl-u-flex-md-row ecl-u-ml-xl"
      >
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <span className="ecl-u-type-color-black ecl-u-bg-yellow ecl-u-ph-s ecl-u-pv-m ecl-u-type-s ecl-u-type-bold">
            English
          </span>
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#bg"
            label="български"
            className="ecl-u-type-color-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#es"
            label="español"
            className="ecl-u-type-color-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#cs"
            label="čeština"
            className="ecl-u-type-color-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#da"
            label="dansk"
            className="ecl-u-type-color-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#fr"
            label="français"
            className="ecl-u-type-color-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
      </UnorderedList>
    </div>
  </div>
);
