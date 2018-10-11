import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';
import Tag from '@ecl/ec-react-component-tag/Tag';

const Card = ({
  image,
  meta,
  title,
  description,
  links,
  infos,
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
  const TitleTag = `h${title.level || 1}`;
  if (title) {
    if (title.href) {
      titleMarkup = (
        <TitleTag className="ecl-card__title">
          <Link {...title} />
        </TitleTag>
      );
    } else {
      titleMarkup = (
        <TitleTag className="ecl-card__title">{title.label}</TitleTag>
      );
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
      <li className="ecl-card__link-item" key={link.label}>
        <Link className="ecl-card__link" {...link} />
      </li>
    ));
    linksMarkup = <ul className="ecl-card__link-container">{linksArray}</ul>;
  }

  // Infos
  let infosMarkup = '';
  if (infos && infos.length > 0) {
    const infosArray = infos.map(info => (
      <li className="ecl-card__info-item" key={info.label}>
        <Icon {...info.icon} />
        <span className="ecl-card__info-label">{info.label}</span>
      </li>
    ));
    infosMarkup = <ul className="ecl-card__info-container">{infosArray}</ul>;
  }

  // Tags
  let tagsMarkup = '';
  if (tags && tags.length > 0) {
    const tagsArray = tags.map(tag => (
      <li className="ecl-card__tag-item" key={tag.label}>
        <Tag className="ecl-card__tag" {...tag} />
      </li>
    ));
    tagsMarkup = <ul className="ecl-card__tag-container">{tagsArray}</ul>;
  }

  return (
    <article {...props} className={classNames}>
      <header className="ecl-card__header">
        {imageMarkup}
        {metaMarkup}
        {titleMarkup}
      </header>

      <div className="ecl-card__body">
        {descriptionMarkup}
        {linksMarkup}
      </div>

      <footer className="ecl-card__footer">
        {infosMarkup}
        {tagsMarkup}
      </footer>
    </article>
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
    level: PropTypes.number,
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
