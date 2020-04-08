import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import PageBanner from '@ecl/ec-react-component-page-banner';

const PageHeaderCore = ({
  variant,
  breadcrumb,
  breadcrumbPosition,
  banner,
  className,
  ...props
}) => {
  const hasBreadcrumbSeparator = variant === 'primary';

  return (
    <div {...props} className={classnames(className, 'ecl-page-header-core')}>
      <div className="ecl-container">
        {/* Breadcrumb (before) */}
        {!!(
          breadcrumb &&
          Object.keys(breadcrumb).length >= 1 &&
          breadcrumbPosition === 'before'
        ) && (
          <BreadcrumbCore
            data-ecl-auto-init="BreadcrumbCore"
            hasSeparator={hasBreadcrumbSeparator}
          >
            {breadcrumb.items.map(item => (
              <BreadcrumbCoreItem {...item} key={item.label} />
            ))}
          </BreadcrumbCore>
        )}

        {/* Banner */}
        {banner && <PageBanner {...banner} isFullWidth />}

        {/* Breadcrumb (after) */}
        {!!(
          breadcrumb &&
          Object.keys(breadcrumb).length >= 1 &&
          breadcrumbPosition === 'after'
        ) && (
          <BreadcrumbCore
            data-ecl-auto-init="BreadcrumbCore"
            hasSeparator={hasBreadcrumbSeparator}
          >
            {breadcrumb.items.map(item => (
              <BreadcrumbCoreItem {...item} key={item.label} />
            ))}
          </BreadcrumbCore>
        )}
      </div>
    </div>
  );
};

PageHeaderCore.propTypes = {
  variant: PropTypes.string,
  breadcrumb: PropTypes.shape(BreadcrumbCore.propTypes),
  breadcrumbPosition: PropTypes.string,
  banner: PropTypes.shape(PageBanner.propTypes),
  className: PropTypes.string,
};

PageHeaderCore.defaultProps = {
  variant: 'primary',
  breadcrumb: {},
  breadcrumbPosition: 'before',
  banner: {},
  className: '',
};

export default PageHeaderCore;
