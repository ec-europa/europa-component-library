import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/eu-react-component-button/Button';

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

    <ul className="ecl-tabs__more-content" data-ecl-tabs-more-content />
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
