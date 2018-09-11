/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon/Icon';
import Logo from '@ecl/eu-react-component-logo/Logo';

const SiteHeader = ({
  logoHref,
  selectorHref,
  languageName,
  languageCode,
  className,
  ...props
}) => {
  const classNames = classnames(className, {
    'ecl-site-header': true,
  });

  return (
    <div className={classNames} {...props}>
      <div className="ecl-site-header__banner">
        <a
          className="ecl-site-header__logo ecl-link ecl-link--standalone"
          href={logoHref}
        >
          <Logo />
        </a>

        <a
          className="ecl-site-header__selector ecl-link ecl-link--standalone"
          href={selectorHref}
        >
          {languageName}
          <span className="ecl-site-header__language-icon">
            <Icon icon="Icon_Language" size="l" />
            <span className="ecl-site-header__language-code">
              {languageCode}
            </span>
          </span>
        </a>
      </div>

      <div className="ecl-site-header__search">Search form</div>
    </div>
  );
};

SiteHeader.propTypes = {
  logoHref: PropTypes.string,
  selectorHref: PropTypes.string,
  languageName: PropTypes.string,
  languageCode: PropTypes.string,
  className: PropTypes.string,
};

SiteHeader.defaultProps = {
  logoHref: '#',
  selectorHref: '#',
  languageName: '',
  languageCode: '',
  className: '',
};

export default SiteHeader;
