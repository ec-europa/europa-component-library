import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '../Grid/Container';
import styles from './Header.scss';

const Header = ({ component, sectionTitle, pageTitle, tabs }) => (
  <header className={styles.header}>
    <Container>
      <h3 className={styles['header__section-header']}>
        {sectionTitle.split('/').slice(-1)}
      </h3>
      <h1 className={styles['header__page-title']}>{pageTitle}</h1>
      <ul className={styles.header__tabs}>
        {tabs &&
          tabs.map(tab => (
            <li key={tab.url}>
              <NavLink
                to={`${component.url}/${tab.url}/`}
                strict
                className={styles['header__tabs-item']}
                activeClassName={styles['header__tabs-item--active']}
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </Container>
  </header>
);

Header.propTypes = {
  component: PropTypes.shape({
    url: PropTypes.string,
  }),
  sectionTitle: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

Header.defaultProps = {
  component: {
    url: '',
  },
  sectionTitle: '',
  tabs: [],
};

export default Header;
