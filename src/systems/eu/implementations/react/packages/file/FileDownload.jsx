import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button/Button';
import Icon from '@ecl/eu-react-component-icon/Icon';
import Link from '@ecl/eu-react-component-link/Link';

const FileDownload = ({
  title,
  language,
  meta,
  icon,
  download,
  translation,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-file');

  return (
    <div {...props} className={classNames} data-ecl-file>
      <div className="ecl-file__container">
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
          variant="standalone"
          className={classnames(
            download.className,
            'ecl-file__download',
            'ecl-button',
            'ecl-button--secondary'
          )}
        />
      </div>

      {!!(translation && translation.items && translation.items.length > 0) && (
        <div
          className="ecl-file__translation-container"
          data-ecl-file-translation-container
        >
          <Button
            {...translation.toggle}
            variant="ghost"
            className={classnames(
              translation.toggle.className,
              'ecl-file__translation-toggle'
            )}
            data-ecl-file-translation-toggle
          />

          <ul className="ecl-file__translation-list">
            {translation.items.map(item => (
              <li
                className={classnames(
                  item.className,
                  'ecl-file__translation-item'
                )}
                key={item.title}
              >
                <div className="ecl-file__translation-info">
                  <div className="ecl-file__translation-title">
                    {item.title}
                  </div>

                  <div className="ecl-file__translation-meta">{item.meta}</div>
                </div>

                <Link
                  {...download}
                  variant="standalone"
                  className={classnames(
                    download.className,
                    'ecl-file__translation-download'
                  )}
                />
              </li>
            ))}

            <li className="ecl-file__translation-item ecl-file__translation-description">
              {translation.description}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

FileDownload.propTypes = {
  title: PropTypes.string,
  language: PropTypes.string,
  meta: PropTypes.string,
  download: PropTypes.shape(Link.propTypes),
  translation: PropTypes.shape({
    toggle: PropTypes.shape(Button.propTypes),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        meta: PropTypes.string,
      })
    ),
    description: PropTypes.string,
  }),
  className: PropTypes.string,
};

FileDownload.defaultProps = {
  title: '',
  language: '',
  meta: '',
  download: {},
  translation: {},
  className: '',
};

export default FileDownload;
