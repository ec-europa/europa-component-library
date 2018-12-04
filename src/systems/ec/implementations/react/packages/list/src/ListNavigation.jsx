import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const ListNavigation = ({ title, description, links, className, ...props }) => {
  // Title
  let titleMarkup = '';
  const TitleTag = `h${title.level || 1}`;
  if (title) {
    if (title.href) {
      titleMarkup = (
        <TitleTag className="ecl-list__title">
          <Link label={title.label} href={title.href} variant="standalone" />
        </TitleTag>
      );
    } else {
      titleMarkup = (
        <TitleTag className="ecl-list__title">{title.label}</TitleTag>
      );
    }
  }

  return (
    <div
      {...props}
      className={classnames(className, 'ecl-list', 'ecl-list--navigation')}
    >
      {titleMarkup}

      {description && <p className="ecl-list__description">{description}</p>}

      {links.map((linkGroup, index) => (
        <Fragment key={linkGroup[0].label}>
          <div className="ecl-list__link-group">
            {linkGroup.map(link => (
              <Link
                {...link}
                key={link.label}
                className={classnames(link.className, 'ecl-list__link')}
                variant="standalone"
              />
            ))}
          </div>
          {index + 1 < links.length && <hr className="ecl-list__separator" />}
        </Fragment>
      ))}
    </div>
  );
};

ListNavigation.propTypes = {
  title: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    level: PropTypes.number,
  }),
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(Link.propTypes))),
  className: PropTypes.string,
  children: PropTypes.node,
};

ListNavigation.defaultProps = {
  title: {},
  description: '',
  links: [],
  className: '',
  children: null,
};

export default ListNavigation;
