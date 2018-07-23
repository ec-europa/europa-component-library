import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <div className="ecl-page-header">
    <div className="ecl-container">
      <nav className="ecl-breadcrumb " aria-label="breadcrumb">
        <span className="ecl-u-sr-only">You are here:</span>
        <ol className="ecl-breadcrumb__segments-wrapper">
          <li className="ecl-breadcrumb__segment ecl-breadcrumb__segment--first">
            <a
              href="https://ec.europa.eu/commission/index_en"
              className="ecl-link ecl-link--inverted ecl-link--standalone ecl-breadcrumb__link"
            >
              Home
            </a>
          </li>
          <li className="ecl-breadcrumb__segment ecl-breadcrumb__segment--last">
            <Link
              to="/"
              className="ecl-link ecl-link--inverted ecl-link--standalone ecl-breadcrumb__link"
            >
              Europa Component Library
            </Link>
          </li>
        </ol>
      </nav>
      <div className="ecl-page-header__body">
        <div className="ecl-page-header__identity">Europa Component Library</div>
      </div>
    </div>
  </div>
);

export default PageHeader;
