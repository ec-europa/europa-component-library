import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@ecl/eu-react-component-button';
import Icon from '@ecl/eu-react-component-icon';
import Label from '@ecl/eu-react-component-label';
import Link from '@ecl/eu-react-component-link';
import { DescriptionListWithData } from '@ecl/eu-react-component-description-list';

export function FileDownload({
  variant,
  title,
  ariaLabel,
  language,
  meta,
  icon,
  download,
  detailMeta,
  description,
  image,
  translation,
  taxonomy,
  label,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-file', {
    [`ecl-file--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames} data-ecl-file>
      <div className="ecl-file__container">
        {variant === 'thumbnail' ? (
          <>
            {!!(label && Object.keys(label).length > 0) && (
              <div className="ecl-file__label">
                <Label {...label} />
              </div>
            )}

            <div className="ecl-file__detail">
              <div className="ecl-file__detail-info">
                {detailMeta && (
                  <div className="ecl-file__detail-meta">
                    {Array.isArray(detailMeta) ? (
                      <>
                        {detailMeta.map((metaData) => (
                          <span
                            key={metaData}
                            className="ecl-file__detail-meta-item"
                          >
                            {metaData}
                          </span>
                        ))}
                      </>
                    ) : (
                      <>{detailMeta}</>
                    )}
                  </div>
                )}
                <div className="ecl-file__title">{title}</div>
                {description && (
                  <div className="ecl-file__description">{description}</div>
                )}
              </div>

              {image && (
                <img
                  className="ecl-file__image"
                  src={image.src}
                  alt={image.alt}
                />
              )}
            </div>

            {!!(taxonomy && Object.keys(taxonomy).length > 0) && (
              <div className="ecl-file__taxonomy">
                <DescriptionListWithData {...taxonomy} variant="taxonomy" />
              </div>
            )}

            <div className="ecl-file__info">
              <div className="ecl-file__language">{language}</div>
              <div className="ecl-file__meta">{meta}</div>
            </div>
            <Link
              {...download}
              icon={{
                shape: 'ui--download',
                size: 'fluid',
              }}
              variant="standalone"
              className={classnames(download.className, 'ecl-file__download')}
              {...(ariaLabel && { ariaLabel })}
              download
            />
          </>
        ) : (
          <>
            <Icon
              {...icon}
              className={classnames(icon.className, 'ecl-file__icon')}
            />
            <div className="ecl-file__info">
              <div className="ecl-file__title">{title}</div>
              <div className="ecl-file__language">{language}</div>
              <div className="ecl-file__meta">{meta}</div>
            </div>
            <Link
              {...download}
              icon={{
                shape: 'ui--download',
                size: 'fluid',
              }}
              variant="standalone"
              className={classnames(download.className, 'ecl-file__download')}
              {...(ariaLabel && { ariaLabel })}
              download
            />
          </>
        )}
      </div>
      {!!(translation && translation.items && translation.items.length > 0) && (
        <div
          className="ecl-file__translation-container"
          data-ecl-file-translation-container
        >
          <Button
            {...translation.toggle}
            icon={{
              shape: 'ui--corner-arrow',
              size: 'fluid',
              transform: 'rotate-180',
            }}
            variant="ghost"
            type="button"
            className={classnames(
              translation.toggle.className,
              'ecl-file__translation-toggle'
            )}
            data-ecl-file-translation-toggle
          />

          <ul className="ecl-file__translation-list">
            {variant === 'thumbnail' ? (
              <>
                {translation.items.map((item) => (
                  <li
                    className={classnames(
                      item.className,
                      'ecl-file__translation-item'
                    )}
                    key={item.title}
                  >
                    <div className="ecl-file__translation-detail">
                      <div
                        className="ecl-file__translation-title"
                        {...(item.lang && { lang: item.lang })}
                      >
                        {item.title}
                      </div>
                      <div
                        className="ecl-file__translation-description"
                        {...(item.lang && { lang: item.lang })}
                      >
                        {item.description}
                      </div>
                    </div>
                    <div className="ecl-file__translation-info">
                      <div className="ecl-file__translation-language">
                        {item.langFull}
                      </div>
                      <div className="ecl-file__translation-meta">
                        {item.meta}
                      </div>
                    </div>
                    <Link
                      {...item.download}
                      icon={{
                        shape: 'ui--download',
                        size: 'fluid',
                      }}
                      href={item.download.href || download.href}
                      label={item.download.label || download.label}
                      {...(item.download.ariaLabel && {
                        ariaLabel: item.download.ariaLabel,
                      })}
                      variant="standalone"
                      className={classnames(
                        item.download.className,
                        'ecl-file__translation-download'
                      )}
                      download
                      {...(item.lang && { hrefLang: item.lang })}
                    />
                  </li>
                ))}
              </>
            ) : (
              <>
                {translation.items.map((item) => (
                  <li
                    className={classnames(
                      item.className,
                      'ecl-file__translation-item'
                    )}
                    key={item.title}
                  >
                    <div className="ecl-file__translation-info">
                      <div
                        className="ecl-file__translation-title"
                        {...(item.lang && { lang: item.lang })}
                      >
                        {item.title}
                      </div>

                      <div className="ecl-file__translation-meta">
                        {item.meta}
                      </div>
                    </div>
                    <Link
                      {...item.download}
                      icon={{
                        shape: 'ui--download',
                        size: 'fluid',
                      }}
                      href={item.download.href || download.href}
                      label={item.download.label || download.label}
                      {...(item.download.ariaLabel && {
                        ariaLabel: item.download.ariaLabel,
                      })}
                      variant="standalone"
                      className={classnames(
                        item.download.className,
                        'ecl-file__translation-download'
                      )}
                      download
                      {...(item.lang && { hrefLang: item.lang })}
                    />
                  </li>
                ))}
              </>
            )}
            <li className="ecl-file__translation-item ecl-file__translation-description">
              {translation.description}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

FileDownload.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  language: PropTypes.string,
  meta: PropTypes.string,
  download: PropTypes.shape(Link.propTypes),
  detailMeta: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  taxonomy: PropTypes.shape(DescriptionListWithData.propTypes),
  label: PropTypes.shape(Label.propTypes),
  translation: PropTypes.shape({
    toggle: PropTypes.shape(Button.propTypes),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        meta: PropTypes.string,
        lang: PropTypes.string,
        langFull: PropTypes.string,
        download: PropTypes.shape(Link.propTypes),
      })
    ),
    description: PropTypes.string,
  }),
  className: PropTypes.string,
};

FileDownload.defaultProps = {
  variant: '',
  icon: Icon.defaultProps,
  title: '',
  ariaLabel: '',
  language: '',
  meta: '',
  download: {},
  detailMeta: '',
  description: '',
  image: {},
  taxonomy: {},
  label: {},
  translation: {},
  className: '',
};

export default FileDownload;
