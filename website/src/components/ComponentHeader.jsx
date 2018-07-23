import React from 'react';
import { NavLink } from 'react-router-dom';

import './ComponentHeader.css';

const ComponentHeader = ({ match, title }) => (
  <header className="tmp-component-header">
    <h3>Components</h3>
    <h1>{title}</h1>
    <ul className="tmp-component-header__tabs">
      <li>
        <NavLink
          to={`${match.url}/usage`}
          className="tmp-component-header__tabs-item"
          activeClassName="tmp-component-header__tabs-item--active"
        >
          Usage
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${match.url}/code`}
          className="tmp-component-header__tabs-item"
          activeClassName="tmp-component-header__tabs-item--active"
        >
          Code
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${match.url}/style`}
          className="tmp-component-header__tabs-item"
          activeClassName="tmp-component-header__tabs-item--active"
        >
          Style
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${match.url}/accessibility`}
          className="tmp-component-header__tabs-item"
          activeClassName="tmp-component-header__tabs-item--active"
        >
          Accessibility
        </NavLink>
      </li>
    </ul>
  </header>
);

export default ComponentHeader;
