import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link/Link';

const Card = ({
  image,
  meta,
  title,
  description,
  links,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-card', {});

  // Image
  let imageMarkup = '';
  if (image && image.src) {
    imageMarkup = (
      <img className="ecl-card__image" alt={image.alt} src={image.src} />
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
      titleMarkup = <Link {...title} />;
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
  if (links) {
    linksMarkup = links.map(link => <Link {...link} />);
  }

  return (
    <div {...props} className={classNames}>
      {imageMarkup}
      {metaMarkup}
      {titleMarkup}
      {descriptionMarkup}
      {linksMarkup}
      <div className="ecl-card__actions">action</div>
      <div className="ecl-card__labels">labels</div>
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
  className: PropTypes.string,
};

Card.defaultProps = {
  image: {},
  meta: '',
  title: {},
  description: '',
  links: [],
  className: '',
};

export default Card;
