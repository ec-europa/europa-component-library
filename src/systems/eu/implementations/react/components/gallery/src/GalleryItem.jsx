import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon';

export const GalleryItem = ({ item, className, ...props }) => {
  let mediaHref = '';
  if (item.video) {
    mediaHref = item.video.sources[0].src;
  } else if (item.embeddedVideo) {
    mediaHref = item.embeddedVideo.src;
  } else {
    mediaHref = item.image ? item.image.src : item.src;
  }

  return (
    <li {...props} className={classnames(className, 'ecl-gallery__item')}>
      <a
        href={mediaHref}
        className="ecl-gallery__item-link"
        aria-label={item.image ? item.image.alt : item.alt || undefined}
        data-ecl-gallery-item
        {...(item.shareHref
          ? { 'data-ecl-gallery-item-share': item.shareHref }
          : {})}
        {...(item.embeddedVideo
          ? { 'data-ecl-gallery-item-embed-src': item.embeddedVideo.src }
          : {})}
      >
        <figure className="ecl-gallery__image-container">
          {item.video ? (
            /* eslint-disable-next-line jsx-a11y/media-has-caption */
            <video className="ecl-gallery__image" poster={item.video.poster}>
              {item.video.sources.map((source) => (
                <source {...source} key={source.src} />
              ))}

              {item.video.tracks.map((track) => (
                <track {...track} key={track.src} />
              ))}
            </video>
          ) : (
            <img
              className="ecl-gallery__image"
              src={item.image ? item.image.src : item.src}
              alt={item.image ? item.image.alt : item.alt}
            />
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
};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string, // DEPRECATED
    alt: PropTypes.string, // DEPRECATED
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    video: PropTypes.shape({
      poster: PropTypes.string,
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
    }),
    embeddedVideo: PropTypes.shape({
      src: PropTypes.string,
    }),
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
