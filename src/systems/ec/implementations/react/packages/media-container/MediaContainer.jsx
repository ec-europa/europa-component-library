import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MediaContainer = ({
  variant,
  poster,
  videos,
  shortDescription,
  description,
  className,
  ...props
}) => {
  const classNames = classnames(
    className,
    'ecl-container ecl-media-container',
    {
      [`ecl-media-container--${variant}`]: variant,
    }
  );

  return (
    <div className={classNames} {...props}>
      <div className="ecl-row">
        <div className="ecl-col-12 ecl-col-lg-6">
          <video
            className="ecl-media-container__video"
            controls="controls"
            poster={poster}
          >
            {videos.map(video => (
              <source src={video.url} type={video.type} />
            ))}
          </video>
          {shortDescription && (
            <span className="ecl-media-container__short-description">
              {shortDescription}
            </span>
          )}
        </div>
        <div className="ecl-media-container__content ecl-col-12 ecl-col-lg-6">
          {description && (
            <div className="ecl-media-container__description">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MediaContainer.propTypes = {
  variant: PropTypes.string,
  position: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

MediaContainer.defaultProps = {
  variant: '',
  position: 'center',
  shortDescription: '',
  description: '',
  videos: [],
  className: '',
};

export default MediaContainer;
