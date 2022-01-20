import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon';

function PageHeader({
  breadcrumb,
  title,
  slogan,
  image,
  className,
  isBranded,
  isHomepage,
  meta,
  description,
  infos,
  ...props
}) {
  const classNames = classnames(className, 'ecl-page-header', {
    'ecl-page-header--image': image,
    'ecl-page-header--branded-homepage': isBranded,
    'ecl-page-header--homepage': isHomepage,
  });

  const infosArray = Array.isArray(infos) ? infos : [infos];

  return (
    <div
      {...props}
      className={classNames}
      {...(image && { style: { backgroundImage: `url(${image})` } })}
    >
      <div className="ecl-container">
        {breadcrumb &&
          React.cloneElement(breadcrumb, {
            className: 'ecl-page-header__breadcrumb',
          })}
        {meta && <div className="ecl-page-header__meta-list">{meta}</div>}
        <div className="ecl-page-header__title-wrapper">
          <h1 className="ecl-page-header__title">{title}</h1>
          {!!(slogan && (isBranded || isHomepage)) && (
            <p className="ecl-page-header__slogan">{slogan}</p>
          )}
        </div>
        {description && (
          <p className="ecl-page-header__description">{description}</p>
        )}
        {!!(infosArray && infosArray.length > 0) && (
          <ul className="ecl-page-header__info-list">
            {infos.map((infoItem) => (
              <li className="ecl-page-header__info-item" key={infoItem.text}>
                <Icon
                  className="ecl-page-header__info-icon"
                  shape={infoItem.icon}
                  size="s"
                  role="presentation"
                  aria-hidden
                />
                {infoItem.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  breadcrumb: PropTypes.node,
  title: PropTypes.string,
  slogan: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  isBranded: PropTypes.bool,
  isHomepage: PropTypes.bool,
  meta: PropTypes.node,
  description: PropTypes.string,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

PageHeader.defaultProps = {
  breadcrumb: null,
  title: '',
  slogan: '',
  className: '',
  image: '',
  isBranded: false,
  isHomepage: false,
  meta: '',
  description: '',
  infos: [],
};

export default PageHeader;
