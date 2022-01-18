import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import socialSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';

import Link from '@ecl/ec-react-component-link';

function SocialMediaShare({ description, links, className, ...props }) {
  const classNames = classnames(className, 'ecl-social-media-share');

  return (
    <div {...props} className={classNames}>
      <p className="ecl-social-media-share__description">{description}</p>
      <ul className="ecl-social-media-share__list">
        {links.map((link) => (
          <li key={link.label} className="ecl-social-media-share__item">
            <Link
              {...link}
              className={classnames(
                link.className,
                'ecl-social-media-share__link'
              )}
              icon={
                link.icon &&
                link.icon.map((i) => ({
                  key: i.shape,
                  ...i,
                  className: classnames(
                    i.className,
                    'ecl-social-media-share__icon'
                  ),
                  iconPath: i.iconPath || socialSprite,
                }))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

SocialMediaShare.propTypes = {
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  className: PropTypes.string,
};

SocialMediaShare.defaultProps = {
  links: [],
  description: '',
  className: '',
};

export default SocialMediaShare;
