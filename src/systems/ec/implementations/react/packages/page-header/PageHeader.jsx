import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageHeader = ({
  breadcrumb,
  title,
  description,
  meta,
  infos,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-header');

  const metaArray = Array.isArray(meta) ? meta : [meta];
  const infosArray = Array.isArray(infos) ? infos : [infos];

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        {React.cloneElement(breadcrumb, {
          className: 'ecl-page-header__breadcrumb',
        })}
        {metaArray && (
          <ul className="ecl-page-header__meta-list">
            {metaArray.map(metaItem => (
              <li className="ecl-page-header__meta-item">{metaItem}</li>
            ))}
          </ul>
        )}
        <h1 className="ecl-page-header__title">{title}</h1>
        {description && (
          <p className="ecl-page-header__description">{description}</p>
        )}
        {infosArray && (
          <ul className="ecl-page-header__info-list">
            {infos.map(infoItem => (
              <li className="ecl-page-header__info-item">{infoItem}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  breadcrumb: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  infos: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
};

PageHeader.defaultProps = {
  breadcrumb: null,
  title: '',
  description: '',
  meta: [],
  infos: [],
  className: '',
};

export default PageHeader;
