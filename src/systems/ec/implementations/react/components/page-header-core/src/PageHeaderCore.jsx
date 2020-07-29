import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PageBanner from '@ecl/ec-react-component-page-banner';

const PageHeaderCore = ({
  breadcrumb,
  breadcrumbPosition,
  banner,
  className,
  ...props
}) => {
  return (
    <div {...props} className={classnames(className, 'ecl-page-header-core')}>
      {breadcrumbPosition === 'before' && (
        <div className="ecl-container">
          {React.cloneElement(breadcrumb, {
            className: 'ecl-page-header-core__breadcrumb',
          })}
        </div>
      )}

      {banner && <PageBanner {...banner} />}

      {breadcrumbPosition === 'after' && (
        <div className="ecl-container">
          {React.cloneElement(breadcrumb, {
            className: 'ecl-page-header-core__breadcrumb',
          })}
        </div>
      )}
    </div>
  );
};

PageHeaderCore.propTypes = {
  breadcrumb: PropTypes.node,
  breadcrumbPosition: PropTypes.string,
  banner: PropTypes.shape(PageBanner.propTypes),
  className: PropTypes.string,
};

PageHeaderCore.defaultProps = {
  breadcrumb: null,
  breadcrumbPosition: 'before',
  banner: {},
  className: '',
};

export default PageHeaderCore;
