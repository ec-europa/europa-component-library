import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';

function PageHeader({
  backgroundImage,
  breadcrumb,
  title,
  description,
  meta,
  infos,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-page-header', {
    [`ecl-page-header--background-image`]: backgroundImage,
  });

  const infosArray = Array.isArray(infos) ? infos : [infos];

  return (
    <div
      {...props}
      className={classNames}
      {...(backgroundImage
        ? {
            style: { 'background-image': `url(${backgroundImage})` },
          }
        : {})}
    >
      <div className="ecl-container">
        {React.cloneElement(breadcrumb, {
          className: 'ecl-page-header__breadcrumb',
        })}
        {meta && <div className="ecl-page-header__meta-list">{meta}</div>}
        <h1 className="ecl-page-header__title">{title}</h1>
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
  backgroundImage: PropTypes.string,
  breadcrumb: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.node,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

PageHeader.defaultProps = {
  backgroundImage: '',
  breadcrumb: null,
  title: '',
  description: '',
  meta: '',
  infos: [],
  className: '',
};

export default PageHeader;
