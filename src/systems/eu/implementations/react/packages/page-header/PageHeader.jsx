import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageHeader = ({
  breadcrumb,
  title,
  description,
  image,
  className,
  isBranded,
  isHomepage,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-header', {
    'ecl-page-header--image': image,
    'ecl-page-header--branded-homepage': isBranded,
    'ecl-page-header--homepage': isHomepage,
  });

  return (
    <div
      {...props}
      className={classNames}
      {...image && { style: { backgroundImage: `url(${image})` } }}
    >
      <div className="ecl-container">
        {breadcrumb &&
          React.cloneElement(breadcrumb, {
            className: 'ecl-page-header__breadcrumb',
          })}
        <div className="ecl-page-header__title-wrapper">
          <h1 className="ecl-page-header__title">{title}</h1>
          {!!(description && (isBranded || isHomepage)) && (
            <p className="ecl-page-header__description">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  breadcrumb: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  isBranded: PropTypes.bool,
  isHomepage: PropTypes.bool,
};

PageHeader.defaultProps = {
  breadcrumb: null,
  title: '',
  description: '',
  className: '',
  image: '',
  isBranded: false,
  isHomepage: false,
};

export default PageHeader;
