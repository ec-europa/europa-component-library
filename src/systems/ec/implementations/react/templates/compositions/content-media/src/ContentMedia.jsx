import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';
import MediaContainer from '@ecl/ec-react-component-media-container';

function ContentMedia({
  media,
  mediaPosition,
  title,
  link,
  children,
  className,
  ...props
}) {
  return (
    <article {...props} className={classnames(className)}>
      <div className="ecl-row">
        {mediaPosition === 'left' && (
          <div className="ecl-col-12 ecl-col-md-6">
            <MediaContainer {...media} />
          </div>
        )}

        <div className="ecl-col-12 ecl-col-md-6 ecl-u-mt-m ecl-u-mt-md-none">
          {title && (
            <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-type-color-grey">
              {title}
            </div>
          )}
          {children}
          {!!(link && Object.keys(link).length >= 1) && (
            <Link
              {...link}
              className={classnames(
                link.className,
                'ecl-u-mt-m ecl-u-mt-md-l ecl-u-type-bold'
              )}
            />
          )}
        </div>

        {mediaPosition === 'right' && (
          <div className="ecl-col-12 ecl-col-md-6 ecl-u-order-first ecl-u-order-md-0">
            <MediaContainer {...media} />
          </div>
        )}
      </div>
    </article>
  );
}

ContentMedia.propTypes = {
  media: PropTypes.shape(MediaContainer.propTypes).isRequired,
  mediaPosition: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.shape(Link.propTypes),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ContentMedia.defaultProps = {
  mediaPosition: 'left',
  title: '',
  link: {},
  className: '',
};

export default ContentMedia;
