import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button/Button';
import Link from '@ecl/ec-react-component-link/Link';

const TabsMore = ({ label, isVisible }) => (
  <li
    className="ecl-tabs__item ecl-tabs__more"
    aria-hidden={!isVisible}
    data-ecl-tabs-more
  >
    <Button
      className="ecl-tabs__more-button"
      type="button"
      variant="ghost"
      label={label}
      icon={{
        shape: 'ui--solid-arrow',
        transform: 'rotate-180',
        size: 'xs',
      }}
      data-ecl-tabs-more-button
    />

    <ul className="ecl-tabs__more-content">
      <li className="ecl-tabs__more-item">
        <Link
          className="ecl-tabs__link"
          variant="standalone"
          label="Item More 1"
          href="/example"
        />
      </li>
      <li className="ecl-tabs__more-item ecl-tabs__more-item--active">
        <Link
          className="ecl-tabs__link"
          variant="standalone"
          label="Item More 2"
          href="/example"
        />
      </li>
      <li className="ecl-tabs__more-item">
        <Link
          className="ecl-tabs__link"
          variant="standalone"
          label="Item More 3"
          href="/example"
        />
      </li>
    </ul>
  </li>
);

TabsMore.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
};

TabsMore.defaultProps = {
  label: 'More',
  isVisible: true,
};

export default TabsMore;
