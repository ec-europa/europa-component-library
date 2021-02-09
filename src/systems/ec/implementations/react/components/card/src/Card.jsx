import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { DescriptionListWithData } from '@ecl/ec-react-component-description-list';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import Tag from '@ecl/ec-react-component-tag';

const Card = ({
  image,
  meta,
  title,
  description,
  links,
  infos,
  tags,
  list,
  taxonomy,
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
        aria-label={image.alt}
        role="img"
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
    const { level: titleLevel, ...otherTitleProps } = title;
    const TitleTag = `h${titleLevel || 1}`;

    if (title.href) {
      titleMarkup = (
        <TitleTag className="ecl-card__title">
          <Link {...otherTitleProps} />
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
    const linksArray = links.map((link) => (
      <li className="ecl-card__link-item" key={link.label}>
        <Link className="ecl-card__link" {...link} />
      </li>
    ));
    linksMarkup = <ul className="ecl-card__link-container">{linksArray}</ul>;
  }

  // Infos
  let infosMarkup = '';
  if (infos && infos.length > 0) {
    const infosArray = infos.map((info) => (
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
    const tagsArray = tags.map((tag) => (
      <li className="ecl-card__tag-item" key={tag.label}>
        <Tag className="ecl-card__tag" {...tag} />
      </li>
    ));
    tagsMarkup = <ul className="ecl-card__tag-container">{tagsArray}</ul>;
  }

  // Additional description list
  let listMarkup = '';
  if (list && Object.keys(list).length > 0) {
    listMarkup = (
      <DescriptionListWithData
        {...list}
        variant="horizontal"
        className="ecl-card__list"
      />
    );
  }

  // Taxonomy
  let taxonomyMarkup = '';
  if (taxonomy && Object.keys(taxonomy).length > 0) {
    taxonomyMarkup = (
      <DescriptionListWithData
        {...taxonomy}
        variant="taxonomy"
        className="ecl-card__list"
      />
    );
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
        {listMarkup}
        {taxonomyMarkup}
      </footer>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.shape(Icon.propTypes),
    })
  ),
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
  list: PropTypes.shape(DescriptionListWithData.propTypes),
  taxonomy: PropTypes.shape(DescriptionListWithData.propTypes),
  className: PropTypes.string,
};

Card.defaultProps = {
  image: {},
  infos: [],
  meta: '',
  title: {},
  description: '',
  links: [],
  tags: [],
  list: {},
  taxonomy: {},
  className: '',
};

export default Card;
