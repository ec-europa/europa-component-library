import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link';

function Pagination({ label, items, className, ...props }) {
  const classNames = classnames(className, 'ecl-pagination');

  return (
    <nav {...props} className={classNames} aria-label={label}>
      <ul className="ecl-pagination__list">
        {items.map((item) => (
          <li
            key={item.link ? item.link.label : item.label}
            className={classnames('ecl-pagination__item', {
              [`ecl-pagination__item--current`]: item.isCurrent,
              [`ecl-pagination__item--previous`]: item.isPrevious,
              [`ecl-pagination__item--next`]: item.isNext,
            })}
          >
            {item.link ? (
              <Link
                {...item.link}
                className="ecl-pagination__link"
                aria-label={item.ariaLabel}
              />
            ) : (
              <>
                <span
                  className="ecl-pagination__text ecl-pagination__text--summary"
                  aria-label={item.ariaLabel}
                  aria-current={item.isCurrent}
                >
                  {item.label}
                </span>
                <span
                  className="ecl-pagination__text ecl-pagination__text--full"
                  aria-current={item.isCurrent}
                >
                  {item.ariaLabel}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  label: PropTypes.string,
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

Pagination.defaultProps = {
  label: '',
  items: [],
  className: '',
};

export default Pagination;
