import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function PageHeaderHarmonised({
  breadcrumb,
  meta,
  title,
  description,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-page-header-harmonised');

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        {breadcrumb &&
          React.cloneElement(breadcrumb, {
            className: classnames(
              breadcrumb.props.className,
              'ecl-page-header-harmonised__breadcrumb'
            ),
          })}
        {meta && <div className="ecl-page-header-harmonised__meta">{meta}</div>}
        {title && (
          <h1 className="ecl-page-header-harmonised__title">{title}</h1>
        )}
        {description && (
          <p className="ecl-page-header-harmonised__description">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

PageHeaderHarmonised.propTypes = {
  breadcrumb: PropTypes.node,
  meta: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

PageHeaderHarmonised.defaultProps = {
  breadcrumb: null,
  meta: '',
  title: '',
  description: '',
  className: '',
};

export default PageHeaderHarmonised;
