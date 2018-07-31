import React from 'react';
import { NavLink } from 'react-router-dom';

import './ComponentHeader.css';

const ComponentHeader = ({ match, sectionTitle, pageTitle, tabs }) => (
  <header className="tmp-component-header">
    <div className="custom-container">
      <h3>{sectionTitle}</h3>
      <h1>{pageTitle}</h1>
      <ul className="tmp-component-header__tabs">
        {tabs &&
          tabs.map(tab => (
            <li key={tab.url}>
              <NavLink
                to={`${match.url}/${tab.url}`}
                className="tmp-component-header__tabs-item"
                activeClassName="tmp-component-header__tabs-item--active"
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  </header>
);

export default ComponentHeader;
