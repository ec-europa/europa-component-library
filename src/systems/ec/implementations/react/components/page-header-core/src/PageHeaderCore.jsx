import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import PageBanner from '@ecl/ec-react-component-page-banner';

const PageHeaderCore = ({ breadcrumb, banner, className, ...props }) => {
  return (
    <div {...props} className={classnames(className, 'ecl-page-header-core')}>
      <div className="ecl-container">
        {/* Breadcrumb (before) */}
        {breadcrumb && (
          <BreadcrumbCore data-ecl-auto-init="BreadcrumbCore">
            {breadcrumb.items.map(item => (
              <BreadcrumbCoreItem {...item} key={item.label} />
            ))}
          </BreadcrumbCore>
        )}

        {/* Banner */}
        {banner && <PageBanner {...banner} isFullWidth />}
      </div>
    </div>
  );
};

PageHeaderCore.propTypes = {
  breadcrumb: PropTypes.shape(BreadcrumbCore.propTypes),
  banner: PropTypes.shape(PageBanner.propTypes),
  className: PropTypes.string,
};

PageHeaderCore.defaultProps = {
  breadcrumb: {},
  banner: {},
  className: '',
};

export default PageHeaderCore;
