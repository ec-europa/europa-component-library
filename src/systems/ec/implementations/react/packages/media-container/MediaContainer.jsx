import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaContainer = ({
  image,
  alt,
  sources,
  tracks,
  description,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-media-container', {});

  return (
    <figure {...props} className={classNames}>
      {Array.isArray(sources) && sources.length !== 0 ? (
        /* eslint-disable-next-line jsx-a11y/media-has-caption */
        <video
          className="ecl-media-container__media"
          controls="controls"
          poster={image}
          alt={alt}
        >
          {sources.map(source => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}

          {tracks.map(track => (
            <track
              key={track.src}
              src={track.src}
              kind={track.kind}
              srcLang={track.srcLang}
              label={track.label}
            />
          ))}
        </video>
      ) : (
        <img className="ecl-media-container__media" src={image} alt={alt} />
      )}
      {description && (
        <figcaption className="ecl-media-container__caption">
          {description}
        </figcaption>
      )}
    </figure>
  );
};

MediaContainer.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
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
      srclang: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

MediaContainer.defaultProps = {
  alt: '',
  description: '',
  image: '',
  className: '',
  sources: [],
  tracks: [],
};

export default MediaContainer;
