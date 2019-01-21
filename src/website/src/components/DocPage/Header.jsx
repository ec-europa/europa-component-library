import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '../Grid/Container';
import styles from './Header.scss';

const getTitle = component => {
  if (
    component &&
    component.attributes &&
    component.attributes.level > 0 &&
    component.attributes.title
  ) {
    return component.attributes.title;
  }

  return '';
};

const getPageTitle = component => {
  if (component.attributes.isTab) {
    if (component.parent) {
      return getTitle(component.parent);
    }

    return '';
  }

  return getTitle(component);
};

const getSectionTitle = component => {
  if (component.attributes.isTab) {
    if (component.parent && component.parent.parent) {
      return getTitle(component.parent.parent);
    }

    return '';
  }

  if (component.parent) {
    return getTitle(component.parent);
  }

  return getTitle(component);
};

const navigateTab = (e, history) => {
  history.push(e.target.value);
};

const Header = React.memo(({ component, ...props }) => {
  if (!component || !component.attributes) return null;

  const pageTitle = getPageTitle(component);
  const sectionTitle = getSectionTitle(component);

  return (
    <header className={styles.header}>
      <Container>
        {sectionTitle && (
          <h3 className={styles['header__section-header']}>{sectionTitle}</h3>
        )}
        <h1 className={styles['header__page-title']}>{pageTitle}</h1>
        {component.attributes.isTab && (
          <Fragment>
            <ul className={styles.header__tabs}>
              {component.parent.children.map(tab => (
                <li key={tab.attributes.url}>
                  <NavLink
                    to={tab.attributes.url}
                    strict
                    className={styles['header__tabs-item']}
                    activeClassName={styles['header__tabs-item--active']}
                  >
                    {tab.attributes.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <select
              id="header-tabs"
              className={styles['header__tabs-select']}
              onChange={e => navigateTab(e, props.history)}
              defaultValue={props.location.pathname}
            >
              {component.parent.children.map(tab => (
                <option key={tab.attributes.url} value={tab.attributes.url}>
                  {tab.attributes.title}
                </option>
              ))}
            </select>
          </Fragment>
        )}
      </Container>
    </header>
  );
});

Header.propTypes = {
  component: PropTypes.shape({
    attributes: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  history: PropTypes.history.isRequired,
  location: PropTypes.string.isRequired,
};

Header.defaultProps = {
  component: {
    attributes: {
      url: '',
      title: '',
    },
  },
};

export default withRouter(Header);
