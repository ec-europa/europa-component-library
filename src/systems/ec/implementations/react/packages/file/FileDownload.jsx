import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaFileDownload from '@ecl/ec-component-file/ec-component-file';

import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';

export default class FileDownload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.fileDownload = null;
    this.fileDownloadRef = React.createRef();
  }

  componentDidMount() {
    this.fileDownload = new VanillaFileDownload(this.fileDownloadRef.current);
    this.fileDownload.init();
  }

  componentWillUnmount() {
    if (this.fileDownload) this.fileDownload.destroy();
  }

  render() {
    const {
      title,
      language,
      meta,
      icon,
      download,
      translation,
      className,
      ...props
    } = this.props;

    const classNames = classnames(className, 'ecl-file');

    return (
      <div {...props} className={classNames} ref={this.fileDownloadRef}>
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

        {!!(
          translation &&
          translation.items &&
          translation.items.length > 0
        ) && (
          <div
            className="ecl-file__translation-container"
            data-ecl-file-translation-container
          >
            <Link
              {...translation.toggle}
              variant="standalone"
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

                    <div className="ecl-file__translation-meta">
                      {item.meta}
                    </div>
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
  }
}

FileDownload.propTypes = {
  title: PropTypes.string,
  language: PropTypes.string,
  meta: PropTypes.string,
  download: PropTypes.shape(Link.propTypes),
  translation: PropTypes.shape({
    toggle: PropTypes.shape(Link.propTypes),
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
