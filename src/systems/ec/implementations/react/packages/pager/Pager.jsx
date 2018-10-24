import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const Pager = ({ isCurrent, label, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-pager');

  return (
    <nav {...props} className={classNames} aria-label={label}>
      <ul className="ecl-pager__list">
        {items.map(item => (
          <li
            key={item.label}
            className={classnames('ecl-pager__item', {
              [`ecl-pager__item--current`]: item.isCurrent,
              [`ecl-pager__item--highlight`]: item.link && item.link.icon,
            })}
          >
            {item.link ? (
              <Link
                {...item.link}
                className="ecl-pager__link"
                aria-label={item.ariaLabel}
              />
            ) : (
              <span
                className="ecl-pager__text"
                aria-label={item.ariaLabel}
                aria-current={item.isCurrent}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pager.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isCurrent: PropTypes.bool,
      label: PropTypes.string,
      link: PropTypes.shape(Link.propTypes),
    })
  ),
  className: PropTypes.string,
};

Pager.defaultProps = {
  items: [],
  className: '',
};

export default Pager;
