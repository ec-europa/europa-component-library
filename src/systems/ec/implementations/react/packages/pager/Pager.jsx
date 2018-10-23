import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const Pager = ({ label, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-pager');

  return (
    <nav {...props} className={classNames} aria-label={label}>
      <ul className="ecl-pager__list">
        {items.map(item => (
          <li key={item.label} className="ecl-pager__item">
            {item.link ? (
              <Link
                {...item.link}
                className={classnames(item.link.className, 'ecl-pager__link')}
                aria-label={item.link.label}
              />
            ) : (
              <span>{item.label}</span>
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
