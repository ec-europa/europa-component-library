/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import languagesList from '@ecl/eu-resources/languages';
import Icon from '@ecl/eu-react-component-icon/Icon';
import Logo from '@ecl/eu-react-component-logo/Logo';

const SiteHeader = ({
  logoHref,
  selectorHref,
  language,
  className,
  ...props
}) => {
  const classNames = classnames(className, {
    'ecl-site-header': true,
  });

  const languageName = languagesList.language || languagesList.en;

  return (
    <div className={classNames} {...props}>
      <div className="ecl-site-header__container ecl-container">
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
              <span className="ecl-site-header__language-code">{language}</span>
            </span>
          </a>
        </div>

        <div className="ecl-site-header__search">Search form</div>
      </div>
    </div>
  );
};

SiteHeader.propTypes = {
  logoHref: PropTypes.string,
  selectorHref: PropTypes.string,
  language: PropTypes.string,
  className: PropTypes.string,
};

SiteHeader.defaultProps = {
  logoHref: '#',
  selectorHref: '#',
  language: 'en',
  className: '',
};

export default SiteHeader;
