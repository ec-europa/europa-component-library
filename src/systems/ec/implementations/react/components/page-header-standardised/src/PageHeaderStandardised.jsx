import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageHeaderStandardised = ({
  breadcrumb,
  meta,
  title,
  description,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-header-standardised');

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        {breadcrumb &&
          React.cloneElement(breadcrumb, {
            className: 'ecl-page-header-standardised__breadcrumb',
          })}
        {meta && (
          <div className="ecl-page-header-standardised__meta">{meta}</div>
        )}
        {title && (
          <h1 className="ecl-page-header-standardised__title">{title}</h1>
        )}
        {description && (
          <p className="ecl-page-header-standardised__description">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

PageHeaderStandardised.propTypes = {
  breadcrumb: PropTypes.node,
  meta: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

PageHeaderStandardised.defaultProps = {
  breadcrumb: null,
  meta: '',
  title: '',
  description: '',
  className: '',
};

export default PageHeaderStandardised;
