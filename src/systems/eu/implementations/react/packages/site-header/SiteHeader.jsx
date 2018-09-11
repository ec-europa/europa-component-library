/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon/Icon';
import Logo from '@ecl/eu-react-component-logo/Logo';

const SiteHeader = ({ languagePath, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-site-header': true,
  });

  return (
    <div className={classNames} {...props}>
      <Logo className="ecl-site-header__logo" />
      <a
        className="ecl-site-header__selector ecl-link ecl-link--standalone"
        href="{languagePath}"
      >
        English
        <Icon icon="Icon_Language" size="l" />
      </a>
    </div>
  );
};

SiteHeader.propTypes = {
  className: PropTypes.string,
};

SiteHeader.defaultProps = {
  className: '',
};

export default SiteHeader;
