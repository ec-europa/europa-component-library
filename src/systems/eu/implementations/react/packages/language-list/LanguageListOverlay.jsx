/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LanguageList from './LanguageList';

const LanguageListOverlay = ({
  closeLabel,
  title,
  items,
  className,
  ...props
}) => {
  const classNames = classnames(
    className,
    'ecl-language-list',
    'ecl-language-list--overlay'
  );

  return (
    <div {...props} className={classNames}>
      <div className="ecl-language-list__container">
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-sm-8 ecl-offset-sm-2">
            {closeLabel}
          </div>
          <div className="ecl-col-12 ecl-col-sm-8 ecl-offset-sm-2">{title}</div>
        </div>
        <LanguageList items={items} />
      </div>
    </div>
  );
};

LanguageListOverlay.propTypes = {
  closeLabel: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
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
  items: [],
  className: '',
};

export default LanguageListOverlay;
