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
  const classNames = classnames(className, 'ecl-media-container');

  return (
    <figure {...props} className={classNames}>
      {Array.isArray(sources) && sources.length !== 0 ? (
        /* eslint-disable-next-line jsx-a11y/media-has-caption */
        <video
          className="ecl-media-container__media"
          controls="controls"
          poster={image}
        >
          {sources.map(source => (
            <source {...source} key={source.src} />
          ))}

          {tracks.map(track => (
            <track {...track} key={track.src} />
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
      srcLang: PropTypes.string,
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
