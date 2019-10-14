import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';

const PageHeaderStandardised = ({
  breadcrumb,
  title,
  description,
  meta,
  infos,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-page-header-standardised');

  const infosArray = Array.isArray(infos) ? infos : [infos];

  return (
    <div {...props} className={classNames}>
      <div className="ecl-container">
        {React.cloneElement(breadcrumb, {
          className: 'ecl-page-header-standardised__breadcrumb',
        })}
        {meta && (
          <div className="ecl-page-header-standardised__meta-list">{meta}</div>
        )}
        <h1 className="ecl-page-header-standardised__title">{title}</h1>
        {description && (
          <p className="ecl-page-header-standardised__description">
            {description}
          </p>
        )}
        {!!(infosArray && infosArray.length > 0) && (
          <ul className="ecl-page-header-standardised__info-list">
            {infos.map(infoItem => (
              <li
                className="ecl-page-header-standardised__info-item"
                key={infoItem.text}
              >
                <Icon
                  className="ecl-page-header-standardised__info-icon"
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
};

PageHeaderStandardised.propTypes = {
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

PageHeaderStandardised.defaultProps = {
  breadcrumb: null,
  title: '',
  description: '',
  meta: '',
  infos: [],
  className: '',
};

export default PageHeaderStandardised;
