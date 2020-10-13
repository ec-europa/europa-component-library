import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageHeaderCore = ({
  breadcrumb,
  meta,
  title,
  description,
  image,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-header-core', {
    [`ecl-page-header-core--image`]: image,
  });

  return (
    <div
      {...props}
      className={classNames}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div className="ecl-container">
        {React.cloneElement(breadcrumb, {
          className: 'ecl-page-header-core__breadcrumb',
        })}
        {meta && (
          <div className="ecl-page-header-core__meta">{meta.toUpperCase()}</div>
        )}
        {title && <h1 className="ecl-page-header-core__title">{title}</h1>}
        {description && (
          <p className="ecl-page-header-core__description">{description}</p>
        )}
      </div>
    </div>
  );
};

PageHeaderCore.propTypes = {
  breadcrumb: PropTypes.node,
  meta: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
};

PageHeaderCore.defaultProps = {
  breadcrumb: null,
  meta: '',
  title: '',
  description: '',
  image: '',
  className: '',
};

export default PageHeaderCore;
