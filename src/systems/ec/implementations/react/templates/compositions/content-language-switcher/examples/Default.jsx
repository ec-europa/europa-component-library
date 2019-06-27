import React from 'react';
import Button from '@ecl/ec-react-component-button';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import Select from '@ecl/ec-react-component-select';
import { UnorderedList, UnorderedListItem } from '@ecl/ec-react-component-list';

export default () => (
  <div className="ecl-u-bg-blue ecl-u-border-bottom ecl-u-border-color-white">
    <form className="ecl-u-d-flex ecl-u-d-md-none">
      <Select
        id="content-language-switcher-id"
        options={[
          {
            value: 'bg',
            label: 'български',
          },
          {
            value: 'es',
            label: 'español',
          },
          {
            value: 'cs',
            label: 'čeština',
          },
          {
            value: 'da',
            label: 'dansk',
          },
          {
            value: 'en',
            label: 'English',
          },
          {
            value: 'fr',
            label: 'français',
          },
        ]}
      />

      <Button variant="secondary" label="Apply" className="ecl-u-ml-s" />
    </form>

    <div className="ecl-u-d-none ecl-u-d-md-flex ecl-u-type-color-white ecl-u-align-items-center ecl-u-font-s">
      <Icon shape="general--generic-lang" size="l" />

      <span className="ecl-u-type-strike ecl-u-ml-m">italiano</span>

      <UnorderedList variant="no-bullet" className="ecl-u-d-flex ecl-u-ml-xl">
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <span className="ecl-u-type-color-black ecl-u-type-color-hover-black ecl-u-bg-yellow ecl-u-ph-s ecl-u-pv-m ecl-u-type-s ecl-u-type-bold">
            English
          </span>
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#bg"
            label="български"
            className="ecl-u-type-color-white ecl-u-type-color-hover-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#es"
            label="español"
            className="ecl-u-type-color-white ecl-u-type-color-hover-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#cs"
            label="čeština"
            className="ecl-u-type-color-white ecl-u-type-color-hover-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#da"
            label="dansk"
            className="ecl-u-type-color-white ecl-u-type-color-hover-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
        <UnorderedListItem className="ecl-u-mt-none ecl-u-d-flex">
          <Link
            href="/example#fr"
            label="français"
            className="ecl-u-type-color-white ecl-u-type-color-hover-white ecl-u-ph-s ecl-u-pv-m ecl-u-type-s"
          />
        </UnorderedListItem>
      </UnorderedList>
    </div>
  </div>
);
