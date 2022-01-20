import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon';

function Tag({
  label,
  variant,
  href,
  dismissButtonLabel,
  className,
  ...props
}) {
  if (!label) return null;

  const classNames = classnames(className, 'ecl-tag', {
    [`ecl-tag--${variant}`]: variant,
  });

  let TagName = href ? 'a' : 'button';
  const TagNameIcon = TagName;

  if (variant === 'removable' || variant === 'display') {
    TagName = 'span';
  }

  const tagProps = {
    ...props,
    ...(href ? { href } : {}),
  };

  return (
    <TagName {...tagProps} className={classNames}>
      {label}
      {!!(variant && variant === 'removable') && (
        <TagNameIcon
          {...(TagNameIcon === 'button'
            ? {
                type: 'button',
                'aria-label': dismissButtonLabel,
              }
            : {})}
          className="ecl-tag__icon"
        >
          <Icon shape="ui--close" className="ecl-tag__icon-close" size="xs" />
          <Icon
            shape="ui--close-filled"
            className="ecl-tag__icon-close-filled"
            size="xs"
          />
        </TagNameIcon>
      )}
    </TagName>
  );
}

Tag.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  dismissButtonLabel: PropTypes.string,
};

Tag.defaultProps = {
  label: '',
  href: '',
  variant: '',
  className: '',
  dismissButtonLabel: '',
};

export default Tag;
