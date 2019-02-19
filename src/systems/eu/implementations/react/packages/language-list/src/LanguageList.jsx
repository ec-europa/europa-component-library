import React from 'react';
import PropTypes from 'prop-types';

import LanguageListItem from './LanguageListItem';

const LanguageList = ({ items, isOverlay }) => {
  const column1 = items.slice(0, Math.ceil(items.length / 2));
  const column2 = items.slice(Math.ceil(items.length / 2));

  return (
    <div className="ecl-row">
      <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4 ecl-offset-lg-2">
        <ul className="ecl-language-list__list">
          {column1.map(item => (
            <li
              key={item.label}
              className={`ecl-language-list__item ${
                item.isActive ? 'ecl-language-list__item--is-active' : ''
              }`}
            >
              <LanguageListItem {...item} isOverlay={isOverlay} />
            </li>
          ))}
        </ul>
      </div>
      <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4">
        <ul className="ecl-language-list__list">
          {column2.map(item => (
            <li
              key={item.label}
              className={`ecl-language-list__item ${
                item.isActive ? 'ecl-language-list__item--is-active' : ''
              }`}
            >
              <LanguageListItem {...item} isOverlay={isOverlay} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LanguageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  isOverlay: PropTypes.bool,
};

LanguageList.defaultProps = {
  items: [],
  isOverlay: false,
};

export default LanguageList;
