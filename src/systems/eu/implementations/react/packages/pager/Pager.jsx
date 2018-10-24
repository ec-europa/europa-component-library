import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link/Link';

const Pager = ({ label, items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-pager');

  return (
    <nav {...props} className={classNames} aria-label={label}>
      <ul className="ecl-pager__list">
        {items.map(item => (
          <li
            key={item.label}
            className={classnames('ecl-pager__item', {
              [`ecl-pager__item--current`]: item.isCurrent,
              [`ecl-pager__item--previous`]: item.isPrevious,
              [`ecl-pager__item--next`]: item.isNext,
            })}
          >
            {item.link ? (
              <Link
                {...item.link}
                className="ecl-pager__link"
                aria-label={item.ariaLabel}
              />
            ) : (
              <Fragment>
                <span
                  className="ecl-pager__text ecl-pager__text--summary"
                  aria-label={item.ariaLabel}
                  aria-current={item.isCurrent}
                >
                  {item.label}
                </span>
                <span
                  className="ecl-pager__text ecl-pager__text--full"
                  aria-current={item.isCurrent}
                >
                  {item.ariaLabel}
                </span>
              </Fragment>
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
      isPrevious: PropTypes.bool,
      isNext: PropTypes.bool,
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
