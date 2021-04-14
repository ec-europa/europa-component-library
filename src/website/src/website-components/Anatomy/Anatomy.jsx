import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';

import Col from '../../components/Grid/Col';
import Row from '../../components/Grid/Row';
import styles from './Anatomy.scss';

const Anatomy = ({
  vertical,
  image,
  srcset,
  alt,
  legend,
  system,
  selectedKind,
  selectedStory,
  additionalLink,
}) => {
  const playgroundUrl =
    system && selectedKind && selectedStory
      ? encodeURI(
          `${process.env.PUBLIC_URL}/playground/${system}/${
            process.env.NODE_ENV === 'development' ? 'index.html' : ''
          }?path=/story/${selectedKind}--${selectedStory}`
        )
      : '';

  return (
    <div
      className={classnames(styles.anatomy, {
        [styles[`anatomy--vertical`]]: vertical,
      })}
    >
      <Row>
        <Col col={vertical ? '12 m-9' : '12'}>
          <div className={styles['image-container']}>
            <img
              src={image}
              {...(srcset ? { srcSet: srcset } : {})}
              alt={alt}
              className={styles.image}
            />
          </div>
        </Col>
        <Col col={vertical ? '12 m-3' : '12'}>
          <div className={styles.container}>
            <ul className={styles.legend}>
              {legend.items.map((item) => (
                <li className={styles.legend__item} key={item.label}>
                  <div
                    className={styles.legend__color}
                    style={{ backgroundColor: item.color }}
                  />
                  <div className={styles.legend__label}>{item.label}</div>
                </li>
              ))}
              {playgroundUrl && (
                <li
                  className={`${styles.legend__item} ${styles['legend__item-last']}`}
                >
                  <a
                    href={playgroundUrl}
                    className={`${styles.link} ${styles['link--icon']} ${styles['playground-link']}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.link__label}>Playground</span>
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      className={styles.link__icon}
                    >
                      <use xlinkHref={`${iconSprite}#corner-arrow`} />
                    </svg>
                  </a>
                </li>
              )}
              {!!(additionalLink && additionalLink.label) && (
                <li
                  className={`${styles.legend__item} ${styles['legend__item-last']}`}
                >
                  <Link
                    to={additionalLink.href}
                    className={`${styles.link} ${styles['link--icon']} ${styles['playground-link']}`}
                  >
                    <span className={styles.link__label}>
                      {additionalLink.label}
                    </span>
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      className={styles.link__icon}
                    >
                      <use xlinkHref={`${iconSprite}#corner-arrow`} />
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
            {legend.description && (
              <div className={styles.legend__description}>
                {legend.description}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

Anatomy.propTypes = {
  vertical: PropTypes.bool,
  image: PropTypes.string,
  srcset: PropTypes.string,
  alt: PropTypes.string,
  legend: PropTypes.shape({
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
  system: PropTypes.string,
  selectedKind: PropTypes.string,
  selectedStory: PropTypes.string,
  additionalLink: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
  }),
};

Anatomy.defaultProps = {
  vertical: false,
  image: '',
  srcset: '',
  alt: '',
  legend: {},
  system: '',
  selectedKind: '',
  selectedStory: '',
  additionalLink: {},
};

export default Anatomy;
