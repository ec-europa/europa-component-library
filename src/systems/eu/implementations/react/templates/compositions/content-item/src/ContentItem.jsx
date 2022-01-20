import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DateBlock from '@ecl/eu-react-component-date-block';
import Icon from '@ecl/eu-react-component-icon';
import Link from '@ecl/eu-react-component-link';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/eu-react-component-unordered-list';

function ContentItem({
  hasBorder,
  meta,
  title,
  description,
  information,
  images,
  date,
  children,
  className,
  ...props
}) {
  return (
    <article
      {...props}
      className={classnames(className, 'ecl-u-d-flex ecl-u-pv-m', {
        'ecl-u-border-bottom ecl-u-border-color-grey-15': hasBorder === true,
      })}
    >
      {/* Images (left) */}
      {!!(images && images.position === 'left') && (
        <>
          {images.mobile && (
            <div
              role="img"
              aria-label={images.mobile.alt}
              className={classnames(
                images.mobile.className,
                'ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none',
                {
                  'ecl-u-d-lg-none': images.desktop,
                }
              )}
              style={{
                backgroundImage: `url("${images.mobile.src}")`,
              }}
            />
          )}
          {images.desktop && (
            <div
              role="img"
              aria-label={images.desktop.alt}
              className={classnames(
                images.desktop.className,
                'ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none ',
                {
                  'ecl-u-d-none ecl-u-d-lg-block': images.mobile,
                }
              )}
              style={{
                backgroundImage: `url("${images.desktop.src}")`,
              }}
            />
          )}
        </>
      )}

      {/* Date block */}
      {!!(date && Object.keys(date).length >= 1) && (
        <div className="ecl-u-flex-grow-0 ecl-u-mr-m">
          <DateBlock {...date} />
        </div>
      )}

      <div className="ecl-u-flex-grow-1">
        {/* Meta */}
        {!!(meta && meta.label) && (
          <div
            className={classnames(
              meta.className,
              'ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-type-family-alt'
            )}
          >
            {meta.label}
          </div>
        )}

        {/* Title */}
        {!!(title && Object.keys(title).length >= 1) && (
          <Link
            {...title}
            variant="standalone"
            className={classnames(
              title.className,
              'ecl-u-d-inline-block ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-type-family-alt',
              {
                'ecl-u-mt-xs': !!(meta && meta.label),
              }
            )}
          />
        )}

        {/* Description */}
        {!!(description && description.label) && (
          <p
            className={classnames(
              description.className,
              'ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs',
              {
                'ecl-u-mb-none': !!(!information || !information.items),
              }
            )}
          >
            {description.label}
          </p>
        )}

        {/* Extra information */}
        {!!(information && information.items) && (
          <UnorderedList
            variant="no-bullet"
            className={classnames(information.className, 'ecl-u-mt-m')}
          >
            {information.items.map((item) => (
              <UnorderedListItem
                key={item.label}
                className={classnames(
                  item.className,
                  'ecl-u-d-flex ecl-u-align-items-center ecl-u-type-color-grey-75'
                )}
              >
                {item.icon && (
                  <>
                    <Icon {...item.icon} />
                    <span className="ecl-u-type-s ecl-u-ml-s ecl-u-type-family-alt">
                      {item.label}
                    </span>
                  </>
                )}

                {!item.icon && (
                  <span className="ecl-u-type-s">{item.label}</span>
                )}
              </UnorderedListItem>
            ))}
          </UnorderedList>
        )}

        {/* Custom content */}
        {children}
      </div>

      {/* Images (right) */}
      {!!(images && images.position === 'right') && (
        <>
          {images.mobile && (
            <div
              role="img"
              aria-label={images.mobile.alt}
              className={classnames(
                images.mobile.className,
                'ecl-u-media-ratio-3-2 ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none'
              )}
              style={{
                backgroundImage: `url("${images.mobile.src}")`,
                width: '7.5rem',
              }}
            />
          )}
          {images.desktop && (
            <div
              role="img"
              aria-label={images.desktop.alt}
              className={classnames(
                images.desktop.className,
                'ecl-u-media-ratio-3-2 ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block'
              )}
              style={{
                backgroundImage: `url("${images.desktop.src}")`,
                width: '13.125rem',
              }}
            />
          )}
        </>
      )}
    </article>
  );
}

ContentItem.propTypes = {
  hasBorder: PropTypes.bool,
  meta: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
  }),
  title: PropTypes.shape(Link.propTypes),
  description: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
  }),
  information: PropTypes.shape({
    className: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.shape(Icon.propTypes),
        label: PropTypes.string,
      })
    ),
  }),
  date: PropTypes.shape(DateBlock.propTypes),
  images: PropTypes.shape({
    position: PropTypes.string,
    mobile: {
      className: PropTypes.string,
      alt: PropTypes.string,
      src: PropTypes.string,
    },
    desktop: {
      className: PropTypes.string,
      alt: PropTypes.string,
      src: PropTypes.string,
    },
  }),
  children: PropTypes.node,
  className: PropTypes.string,
};

ContentItem.defaultProps = {
  hasBorder: true,
  meta: {},
  title: {},
  description: {},
  information: {},
  date: {},
  images: {},
  children: null,
  className: '',
};

export default ContentItem;
