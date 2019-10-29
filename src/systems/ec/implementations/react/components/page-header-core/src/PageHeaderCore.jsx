import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageHeaderCore = ({
  breadcrumb,
  meta,
  title,
  description,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-header-core');

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        {React.cloneElement(breadcrumb, {
          className: 'ecl-page-header-core__breadcrumb',
        })}
        {meta && <div className="ecl-page-header-core__meta">{meta}</div>}
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
  className: PropTypes.string,
};

PageHeaderCore.defaultProps = {
  breadcrumb: null,
  meta: '',
  title: '',
  description: '',
  className: '',
};

export default PageHeaderCore;
