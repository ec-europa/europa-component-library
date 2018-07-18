import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <div class="ecl-page-header">
    <div class="ecl-container">
      <nav class="ecl-breadcrumb " aria-label="breadcrumb">
        <span class="ecl-u-sr-only">You are here:</span>
        <ol class="ecl-breadcrumb__segments-wrapper">
          <li class="ecl-breadcrumb__segment ecl-breadcrumb__segment--first">
            <a
              href="https://ec.europa.eu/commission/index_en"
              class="ecl-link ecl-link--inverted ecl-link--standalone ecl-breadcrumb__link"
            >
              Home
            </a>
          </li>
          <li class="ecl-breadcrumb__segment ecl-breadcrumb__segment--last">
            <Link
              to="/"
              className="ecl-link ecl-link--inverted ecl-link--standalone ecl-breadcrumb__link"
            >
              Europa Component Library
            </Link>
          </li>
        </ol>
      </nav>
      <div class="ecl-page-header__body">
        <div class="ecl-page-header__identity">Europa Component Library</div>
      </div>
    </div>
  </div>
);

export default PageHeader;
