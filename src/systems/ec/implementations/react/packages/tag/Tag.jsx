/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/ec-react-component-icon';
import svgSprite from '@ecl/ec-resources/dist/icons.svg';

const Tag = ({ label, variant, href, className, ...props }) => {
  if (!label) return null;

  const classNames = classnames(className, {
    'ecl-tag': true,
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
      {!!(variant && variant === 'facet-close') && (
        <span className="ecl-tag__icon">
          <Icon
            icon="Icon_Close"
            iconPath={svgSprite}
            className="ecl-tag__icon-close"
            size="xs"
          />
          <Icon
            icon="Icon_Close-Filled"
            iconPath={svgSprite}
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
  variant: PropTypes.string,
  className: PropTypes.string,
};

Tag.defaultProps = {
  label: '',
  variant: '',
  className: '',
};

export default Tag;
