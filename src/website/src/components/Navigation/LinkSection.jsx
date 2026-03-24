import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router';

import styles from './LinkSection.module.scss';
import LinkList from './LinkList';

function LinkSection({ pages, level, showStatus, section, attributes }) {
  const location = useLocation(); // Get the location object from the hook
  const [isOpen, setIsOpen] = useState(
    location.pathname.indexOf(attributes.url) === 0,
  );

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
          aria-expanded={isOpen}
        >
          <span className={`wt-icon--corner-arrow ${styles.icon}`} />
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
}

LinkSection.propTypes = {
  attributes: PropTypes.shape({
    url: PropTypes.string,
    defaultTab: PropTypes.string,
  }).isRequired,
  pages: PropTypes.array.isRequired,
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
