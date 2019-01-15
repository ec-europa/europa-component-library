import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link/Link';
import TabsMore from './TabsMore';

const Tabs = ({ fit, items, className, ...props }) => {
  const classNames = classnames('ecl-tabs', {
    [`ecl-tabs--fit`]: fit,
  });

  return (
    <ul {...props} role="tablist" className={classNames} data-ecl-tabs>
      {items.map(item => {
        if (item.link && !item.link.label) return null;

        return (
          <li
            className={classnames('ecl-tabs__item', {
              [`ecl-tabs__item--active`]: item.isActive,
              [`ecl-tabs__item--disabled`]: item.isDisabled,
            })}
            key={item.link.label}
            data-ecl-tabs-item
          >
            <Link
              {...item.link}
              variant="standalone"
              className="ecl-tabs__link"
            />
          </li>
        );
      })}

      <TabsMore />
    </ul>
  );
};

Tabs.propTypes = {
  fit: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.shape(Link.propTypes),
      isActive: PropTypes.bool,
      isDisabled: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  fit: false,
  items: [],
  className: '',
};

export default Tabs;
