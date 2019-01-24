import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button/Button';
import Footer from '@ecl/ec-react-component-footer/Footer';
import PageHeader from '@ecl/ec-react-component-page-header/PageHeader';
import Select from '@ecl/ec-react-component-select/Select';
import SiteHeader from '@ecl/ec-react-component-site-header/SiteHeader';
import SiteSwitcher from '@ecl/ec-react-component-site-switcher/SiteSwitcher';

const SearchPage = ({ siteSwitcher, siteHeader, pageHeader, footer }) => (
  <Fragment>
    <SiteSwitcher {...siteSwitcher} />
    <SiteHeader {...siteHeader} />
    <PageHeader {...pageHeader} />
    <main className="ecl-u-pv-3xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-lg-4">
            <h2 className="ecl-u-type-heading-2 ecl-u-d-lg-none">
              Search results (65)
            </h2>
            <h3 className="ecl-u-type-heading-3">Search options</h3>

            <Select
              id="facet-source"
              label="Source"
              options={[
                {
                  value: '1',
                  label: 'All sources',
                },
                {
                  value: '2',
                  label: 'DG Trade',
                },
                {
                  value: '3',
                  label: 'DG Digit',
                },
              ]}
            />

            <Select
              id="facet-date"
              label="Date"
              options={[
                {
                  value: '1',
                  label: 'All dates',
                },
                {
                  value: '2',
                  label: '2019',
                },
                {
                  value: '3',
                  label: '2018',
                },
              ]}
            />

            <Select
              id="facet-language"
              label="Language"
              options={[
                {
                  value: '1',
                  label: 'English',
                },
                {
                  value: '2',
                  label: 'French',
                },
                {
                  value: '3',
                  label: 'German',
                },
                {
                  value: '3',
                  label: 'Bulgarian',
                },
              ]}
            />

            <Select
              id="facet-format"
              label="File format"
              options={[
                {
                  value: '1',
                  label: 'All formats',
                },
                {
                  value: '2',
                  label: 'PDF',
                },
                {
                  value: '3',
                  label: 'DOC',
                },
              ]}
            />

            <Button label="Refine results" variant="primary" />
            <Button label="Clear all" variant="secondary" />
          </div>

          <div className="ecl-col-12 ecl-col-lg-8">
            <h2 className="ecl-u-type-heading-2 ecl-u-d-none ecl-u-d-lg-block">
              Search results (65)
            </h2>
          </div>
        </div>
      </div>
    </main>
    <Footer {...footer} />
  </Fragment>
);

SearchPage.propTypes = {
  siteSwitcher: PropTypes.shape(SiteSwitcher.propTypes),
  siteHeader: PropTypes.shape(SiteHeader.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  footer: PropTypes.shape(Footer.propTypes),
};

SearchPage.defaultProps = {
  siteSwitcher: {},
  siteHeader: {},
  pageHeader: {},
  footer: {},
};

export default SearchPage;
