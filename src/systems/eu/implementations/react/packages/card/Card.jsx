import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/eu-react-component-icon/Icon';
import Link from '@ecl/eu-react-component-link/Link';
import Tag from '@ecl/eu-react-component-tag/Tag';

const Card = ({
  image,
  meta,
  title,
  description,
  links,
  items,
  tags,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-card', {
    'ecl-card--tile': !(image && image.src),
  });

  // Image
  let imageMarkup = '';
  if (image && image.src) {
    imageMarkup = (
      <div
        className="ecl-card__image"
        alt={image.alt}
        style={{ backgroundImage: `url(${image.src})` }}
      />
    );
  }

  // Meta
  let metaMarkup = '';
  if (meta) {
    metaMarkup = <div className="ecl-card__meta">{meta}</div>;
  }

  // Title
  let titleMarkup = '';
  if (title) {
    if (title.href) {
      titleMarkup = (
        <div className="ecl-card__title">
          <Link {...title} />
        </div>
      );
    } else {
      titleMarkup = <div className="ecl-card__title">{title.label}</div>;
    }
  }

  // Description
  let descriptionMarkup = '';
  if (description) {
    descriptionMarkup = (
      <div className="ecl-card__description">{description}</div>
    );
  }

  // Links
  let linksMarkup = '';
  if (links && links.length > 0) {
    const linksArray = links.map(link => (
      <Link className="ecl-card__link" {...link} />
    ));
    linksMarkup = <div className="ecl-card__link-container">{linksArray}</div>;
  }

  // Items
  let itemsMarkup = '';
  if (items && items.length > 0) {
    const itemsArray = items.map(item => (
      <div className="ecl-card__item">
        <Icon {...item.icon} />
        <span className="ecl-card__item-label">{item.label}</span>
      </div>
    ));
    itemsMarkup = <div className="ecl-card__item-container">{itemsArray}</div>;
  }

  // Tags
  let tagsMarkup = '';
  if (tags && tags.length > 0) {
    const tagsArray = tags.map(tag => (
      <Tag className="ecl-card__tag" {...tag} />
    ));
    tagsMarkup = <div className="ecl-card__tag-container">{tagsArray}</div>;
  }

  return (
    <div {...props} className={classNames}>
      {imageMarkup}
      {metaMarkup}
      {titleMarkup}
      {descriptionMarkup}
      {itemsMarkup}
      {linksMarkup}
      {tagsMarkup}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  meta: PropTypes.string,
  title: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  description: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

Card.defaultProps = {
  image: {},
  meta: '',
  title: {},
  description: '',
  links: [],
  tags: [],
  className: '',
};

export default Card;
