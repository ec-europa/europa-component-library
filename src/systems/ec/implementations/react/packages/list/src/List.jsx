import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link/Link';

const List = ({
  title,
  items,
  isOrdered,
  hasBullet,
  hasSeparator,
  className,
  ...props
}) => {
  // Title
  let titleMarkup = '';
  if (title && title.label) {
    const TitleTag = `h${title.level || 1}`;
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

  // Items
  let itemsMarkup = '';
  if (items && items.length > 0) {
    itemsMarkup = items.map(item => {
      // Item is a link
      if (item.href) {
        return (
          <li className="ecl-list__item" key={item.label}>
            <Link className="ecl-list__link" {...item} variant="standalone" />
          </li>
        );
      }

      // Item has a title and description
      if (item.title && item.description) {
        let itemTitleMarkup = '';
        const ItemTitleTag = `h${item.title.level || 1}`;
        if (item.title.href) {
          itemTitleMarkup = (
            <ItemTitleTag className="ecl-list__item-title">
              <Link
                label={item.title.label}
                href={item.title.href}
                variant="standalone"
              />
            </ItemTitleTag>
          );
        } else {
          itemTitleMarkup = (
            <ItemTitleTag className="ecl-list__item-title">
              {item.title.label}
            </ItemTitleTag>
          );
        }

        return (
          <li className="ecl-list__item" key={item.title.label}>
            {itemTitleMarkup}
            <div className="ecl-list__item-description">{item.description}</div>
          </li>
        );
      }

      // Item is plain text
      return (
        <li className="ecl-list__item" key={item}>
          {item}
        </li>
      );
    });
  }

  // Container
  let listMarkup = '';
  const ListTag = isOrdered ? 'ol' : 'ul';
  const listClass = classnames(className, 'ecl-list', {
    'ecl-list--no-bullet': !hasBullet,
    'ecl-list--separator': hasSeparator,
  });
  if (titleMarkup) {
    listMarkup = (
      <div className="ecl-list__container">
        {titleMarkup}
        <ListTag {...props} className={listClass}>
          {itemsMarkup}
        </ListTag>
      </div>
    );
  } else {
    listMarkup = (
      <ListTag {...props} className={listClass}>
        {itemsMarkup}
      </ListTag>
    );
  }

  return { ...listMarkup };
};

List.propTypes = {
  title: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    level: PropTypes.number,
  }),
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(Link.propTypes),
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ])
  ),
  isOrdered: PropTypes.bool,
  hasBullet: PropTypes.bool,
  hasSeparator: PropTypes.bool,
  className: PropTypes.string,
};

List.defaultProps = {
  title: {},
  items: [],
  isOrdered: false,
  hasBullet: true,
  hasSeparator: false,
  className: '',
};

export default List;
