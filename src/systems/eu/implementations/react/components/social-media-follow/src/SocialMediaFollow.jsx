import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import socialSprite from '@ecl/eu-resources-social-icons/dist/sprites/icons-social.svg';

import Link from '@ecl/eu-react-component-link';

function SocialMediaFollow({
  description,
  links,
  className,
  variant,
  ...props
}) {
  const classNames = classnames(className, 'ecl-social-media-follow', {
    [`ecl-social-media-follow--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames}>
      {description && (
        <p className="ecl-social-media-follow__description">{description}</p>
      )}
      <ul className="ecl-social-media-follow__list">
        {links.map((link) => (
          <li key={link.label} className="ecl-social-media-follow__item">
            <Link
              {...link}
              className={classnames(
                link.className,
                'ecl-social-media-follow__link'
              )}
              icon={
                link.icon &&
                link.icon.map((i, index) => ({
                  key: i.shape,
                  ...i,
                  iconPath: i.iconPath || socialSprite,
                  className:
                    index === 0
                      ? 'ecl-social-media-follow__icon'
                      : 'ecl-social-media-follow__icon-hover',
                }))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

SocialMediaFollow.propTypes = {
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  className: PropTypes.string,
  variant: PropTypes.string,
};

SocialMediaFollow.defaultProps = {
  description: '',
  links: [],
  variant: '',
  className: '',
};

export default SocialMediaFollow;
