import React from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/eu-react-component-link/Link';

const ListItem = ({ item }) => {
  let itemMarkup = '';

  // Item is a link
  if (item.href) {
    itemMarkup = (
      <li className="ecl-list__item" key={item.label}>
        <Link className="ecl-list__link" {...item} variant="standalone" />
      </li>
    );
  }

  // Item has a title and description
  else if (item.title && item.description) {
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

    itemMarkup = (
      <li
        className="ecl-list__item ecl-list__item--block"
        key={item.title.label}
      >
        {itemTitleMarkup}
        <div className="ecl-list__item-description">{item.description}</div>
      </li>
    );
  }

  // Item is plain text
  else {
    itemMarkup = (
      <li className="ecl-list__item" key={item}>
        {item}
      </li>
    );
  }

  return { ...itemMarkup };
};

ListItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(Link.propTypes),
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ]),
};

ListItem.defaultProps = {
  item: null,
};

export default ListItem;
