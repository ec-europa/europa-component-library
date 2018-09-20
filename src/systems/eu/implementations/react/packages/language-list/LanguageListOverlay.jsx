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
        <LanguageList {...items} />
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
