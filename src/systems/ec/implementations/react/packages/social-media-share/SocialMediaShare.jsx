import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import socialSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';

import Link from '@ecl/ec-react-component-link/Link';

const SocialMediaShare = ({ links, className, ...props }) => {
  const classNames = classnames(className, 'ecl-social-media-share');

  return (
    <div {...props} className={classNames}>
      <ul className="ecl-social-media-share__list">
        {links.map(link => (
          <li key={link.label} className="ecl-social-media-share__item">
            <Link
              {...link}
              className={classnames(
                link.className,
                'ecl-social-media-share__link'
              )}
              icon={
                link.icon &&
                link.icon.map((i, index) => ({
                  key: i.shape,
                  ...i,
                  iconPath: i.iconPath || socialSprite,
                  className:
                    index === 0
                      ? 'ecl-social-media-share__icon'
                      : 'ecl-social-media-share__icon-hover',
                }))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

SocialMediaShare.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  className: PropTypes.string,
};

SocialMediaShare.defaultProps = {
  links: [],
  className: '',
};

export default SocialMediaShare;
