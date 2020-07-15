import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaContainer = ({
  image,
  alt,
  sources,
  tracks,
  description,
  children,
  iframeRatio,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-media-container');

  return (
    <figure {...props} className={classNames}>
      {children ? (
        <div
          className={classnames(className, 'ecl-media-container__media', {
            [`ecl-media-container__media--ratio-${iframeRatio}`]: iframeRatio,
          })}
        >
          {children}
        </div>
      ) : (
        <Fragment>
          {Array.isArray(sources) && sources.length !== 0 ? (
            /* eslint-disable-next-line jsx-a11y/media-has-caption */
            <video
              className="ecl-media-container__media"
              controls="controls"
              poster={image}
            >
              {sources.map((source) => (
                <source {...source} key={source.src} />
              ))}

              {tracks.map((track) => (
                <track {...track} key={track.src} />
              ))}
            </video>
          ) : (
            <img className="ecl-media-container__media" src={image} alt={alt} />
          )}
        </Fragment>
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
  children: PropTypes.node,
  iframeRatio: PropTypes.string,
  className: PropTypes.string,
};

MediaContainer.defaultProps = {
  alt: '',
  description: '',
  image: '',
  className: '',
  sources: [],
  tracks: [],
  children: null,
  iframeRatio: '16-9',
};

export default MediaContainer;
