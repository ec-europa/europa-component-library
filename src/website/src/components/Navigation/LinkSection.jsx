import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import icons from '@ecl/resources-icons/dist/sprites/icons.svg';
import styles from './LinkSection.module.scss';
import LinkList from './LinkList'; // eslint-disable-line import/no-cycle

const LinkSection = ({ pages, level, showStatus, section, attributes }) => {
  const location = useLocation(); // Get the location object from the hook
  const [isOpen, setIsOpen] = useState(location.pathname.indexOf(attributes.url) === 0);

  useEffect(() => {
    setIsOpen(location.pathname.indexOf(attributes.url) === 0);
  }, [location.pathname, attributes.url]);

  const toggleSection = () => {
    setIsOpen((prevState) => !prevState);
  };

  const to = attributes.defaultTab
    ? `${attributes.url}${attributes.defaultTab}/`
    : attributes.url;

  return (
    <>
      <span className={styles['group-list-parent']}>
        <Link
          to={to}
          className={`${styles['group-list-item']} ${styles[`level-${level}`]}`}
        >
          {section}
        </Link>
        <button
          className={styles.button}
          type="button"
          onClick={toggleSection}
          aria-label={`Click to expand the section ${section}`}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            className={classnames(styles.icon, {
              [styles['icon-rotate-90']]: !isOpen,
              [styles['icon-rotate-180']]: isOpen,
            })}
          >
            <use xlinkHref={`${icons}#corner-arrow`} />
          </svg>
        </button>
      </span>
      <LinkList
        pages={pages}
        level={level + 1}
        aria-hidden={!isOpen}
        showStatus={showStatus}
      />
    </>
  );
};

LinkSection.propTypes = {
  attributes: PropTypes.shape({
    url: PropTypes.string,
    defaultTab: PropTypes.string,
  }).isRequired,
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  section: PropTypes.string,
};

LinkSection.defaultProps = {
  showStatus: false,
  level: 0,
  section: '',
};

export default LinkSection;
