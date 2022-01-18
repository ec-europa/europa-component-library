import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';
import LanguageList from './LanguageList';

function LanguageListOverlay({
  closeLabel,
  title,
  categoryEu,
  items,
  categoryNonEu,
  itemsNonEu,
  className,
  ...props
}) {
  const classNames = classnames(
    className,
    'ecl-language-list',
    'ecl-language-list--overlay'
  );

  return (
    <div
      {...props}
      className={classNames}
      aria-labelledby="ecl-language-list__title"
      role="dialog"
      data-ecl-language-list-overlay
    >
      <div className="ecl-language-list__container ecl-container">
        <div className="ecl-row">
          <div className="ecl-language-list__close ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2">
            <Button
              variant="ghost"
              label={closeLabel}
              icon={{ shape: 'ui--close', size: 's' }}
              className="ecl-language-list__close-button"
              data-ecl-language-list-close
            />
          </div>
          <div
            className="ecl-language-list__title ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2"
            id="ecl-language-list__title"
          >
            {title}
          </div>
        </div>
        <LanguageList
          items={items}
          categoryEu={categoryEu}
          itemsNonEu={itemsNonEu}
          categoryNonEu={categoryNonEu}
          isOverlay
        />
      </div>
    </div>
  );
}

LanguageListOverlay.propTypes = {
  closeLabel: PropTypes.string,
  title: PropTypes.string,
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
  className: PropTypes.string,
};

LanguageListOverlay.defaultProps = {
  closeLabel: '',
  title: '',
  categoryEu: '',
  items: [],
  categoryNonEu: '',
  itemsNonEu: [],
  className: '',
};

export default LanguageListOverlay;
