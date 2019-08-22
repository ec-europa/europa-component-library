/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Col from '../../components/Grid/Col';
import Row from '../../components/Grid/Row';
import styles from './Anatomy.scss';

const Anatomy = ({ vertical, image, srcset, alt, legend }) => (
  <div
    className={classnames(styles.anatomy, {
      [styles[`anatomy--vertical`]]: vertical,
    })}
  >
    <Row>
      <Col col={vertical ? '12 md-9' : '12'}>
        <div className={styles['image-container']}>
          <img
            src={image}
            {...(srcset ? { srcSet: srcset } : {})}
            alt={alt}
            className={styles.image}
          />
        </div>
      </Col>
      <Col col={vertical ? '12 md-3' : '12'}>
        <div className={styles.container}>
          <ul className={styles.legend}>
            {legend.items.map(item => (
              <li className={styles.legend__item} key={item.label}>
                <div
                  className={styles.legend__color}
                  style={{ backgroundColor: item.color }}
                />
                <div className={styles.legend__label}>{item.label}</div>
              </li>
            ))}
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
};

Anatomy.defaultProps = {
  vertical: false,
  image: '',
  srcset: '',
  alt: '',
  legend: {},
};

export default Anatomy;
