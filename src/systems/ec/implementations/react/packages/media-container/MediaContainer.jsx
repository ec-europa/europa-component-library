import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaContainer = ({
  image,
  sources,
  tracks,
  description,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-media-container', {});

  return (
    <figure className={classNames} {...props}>
      {sources ? (
        <video
          className="ecl-media-container__media"
          controls="controls"
          poster={image}
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
        <img className="ecl-media-container__media" src={image} alt="" />
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
  description: '',
  image: '',
  className: '',
};

export default MediaContainer;
