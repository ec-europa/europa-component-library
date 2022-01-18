import React from 'react';
import PropTypes from 'prop-types';

import LanguageListItem from './LanguageListItem';

function LanguageList({
  categoryEu,
  items,
  categoryNonEu,
  itemsNonEu,
  isOverlay,
}) {
  const column1Eu = items.slice(0, Math.ceil(items.length / 2));
  const column2Eu = items.slice(Math.ceil(items.length / 2));

  const column1NonEu = itemsNonEu.slice(0, Math.ceil(itemsNonEu.length / 2));
  const column2NonEu = itemsNonEu.slice(Math.ceil(itemsNonEu.length / 2));

  return (
    <>
      {/* EU languages */}
      {!!(items && items.length > 0) && (
        <div className="ecl-row ecl-language-list__eu">
          {categoryEu && (
            <div className="ecl-language-list__category ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2">
              {categoryEu}
            </div>
          )}

          <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4 ecl-offset-lg-2">
            <ul className="ecl-language-list__list">
              {column1Eu.map((item) => (
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
              {column2Eu.map((item) => (
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
      )}

      {/* Non EU languages */}
      {!!(itemsNonEu && itemsNonEu.length > 0) && (
        <div className="ecl-row ecl-language-list__non-eu">
          {categoryNonEu && (
            <div className="ecl-language-list__category ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2">
              {categoryNonEu}
            </div>
          )}

          <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4 ecl-offset-lg-2">
            <ul className="ecl-language-list__list">
              {column1NonEu.map((item) => (
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
              {column2NonEu.map((item) => (
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
      )}
    </>
  );
}

LanguageList.propTypes = {
  categoryEu: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  categoryNonEu: PropTypes.string,
  itemsNonEu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  isOverlay: PropTypes.bool,
};

LanguageList.defaultProps = {
  categoryEu: '',
  items: [],
  categoryNonEu: '',
  itemsNonEu: [],
  isOverlay: false,
};

export default LanguageList;
