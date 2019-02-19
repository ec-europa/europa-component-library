import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';

const Tag = ({ label, variant, href, className, ...props }) => {
  if (!label) return null;

  const classNames = classnames(className, 'ecl-tag', {
    [`ecl-tag--${variant}`]: variant,
  });

  const TagName = href ? 'a' : 'button';

  const tagProps = {
    ...props,
    ...(href && { href }),
  };

  return (
    <TagName {...tagProps} className={classNames}>
      {label}
      {!!(variant && variant === 'removable') && (
        <span className="ecl-tag__icon">
          <Icon shape="ui--close" className="ecl-tag__icon-close" size="xs" />
          <Icon
            shape="ui--close-filled"
            className="ecl-tag__icon-close-filled"
            size="xs"
          />
        </span>
      )}
    </TagName>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

Tag.defaultProps = {
  label: '',
  href: '',
  variant: '',
  className: '',
};

export default Tag;
