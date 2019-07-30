import React from 'react';
import Expandable from '@ecl/ec-react-component-expandable';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

export default () => (
  <div className="ecl-u-bg-blue ecl-u-border-bottom ecl-u-border-color-white">
    <div className="ecl-u-d-flex ecl-u-type-color-white ecl-u-align-items-center ecl-u-font-s">
      <Icon shape="general--generic-lang" size="l" />

      <span className="ecl-u-type-strike ecl-u-ml-m">italiano</span>

      <Expandable
        button={{
          variant: 'secondary',
          label: 'English',
          icon: {
            shape: 'ui--corner-arrow',
            transform: 'rotate-180',
            size: 'fluid',
          },
        }}
        labelExpanded="English"
        labelCollapsed="English"
        className="ecl-u-ml-s"
      >
        <UnorderedList
          variant="no-bullet"
          className="ecl-u-d-flex ecl-u-flex-wrap"
        >
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
      </Expandable>
    </div>
  </div>
);
