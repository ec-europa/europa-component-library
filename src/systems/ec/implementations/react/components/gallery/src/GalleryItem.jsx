import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';

const GalleryItem = ({ item, className, ...props }) => (
  <li {...props} className={classnames(className, 'ecl-gallery__item')}>
    <a
      href={
        Array.isArray(item.sources) && item.sources.length !== 0
          ? item.sources[0].src
          : item.src
      }
      className="ecl-gallery__item-link"
      aria-label={item.alt}
      data-ecl-gallery-item
      data-ecl-gallery-item-share={item.shareHref}
    >
      <figure className="ecl-gallery__image-container">
        {Array.isArray(item.sources) && item.sources.length !== 0 ? (
          /* eslint-disable-next-line jsx-a11y/media-has-caption */
          <video
            className="ecl-gallery__image"
            poster={item.image}
            alt={item.alt}
          >
            {item.sources.map(source => (
              <source {...source} key={source.src} />
            ))}

            {item.tracks.map(track => (
              <track {...track} key={track.src} />
            ))}
          </video>
        ) : (
          <img className="ecl-gallery__image" src={item.src} alt={item.alt} />
        )}

        {!!(item.icon && item.icon.shape) && (
          <Icon
            {...item.icon}
            size="l"
            className={classnames(
              item.icon.className,
              'ecl-gallery__image-icon'
            )}
          />
        )}

        <figcaption
          className="ecl-gallery__description"
          data-ecl-gallery-description
        >
          {item.description}
          {!!(item.icon && item.icon.shape) && (
            <Icon
              {...item.icon}
              size="l"
              className={classnames(
                item.icon.className,
                'ecl-gallery__description-icon'
              )}
            />
          )}

          <span className="ecl-gallery__meta" data-ecl-gallery-meta>
            {item.meta}
          </span>
        </figcaption>
      </figure>
    </a>
  </li>
);

GalleryItem.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    image: PropTypes.string,
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.string,
      })
    ),
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        kind: PropTypes.string,
        srcLang: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    description: PropTypes.string,
    meta: PropTypes.string,
    icon: PropTypes.shape(Icon.propTypes),
    shareHref: PropTypes.string,
  }),
  className: PropTypes.string,
};

GalleryItem.defaultProps = {
  item: {},
  className: '',
};

export default GalleryItem;
