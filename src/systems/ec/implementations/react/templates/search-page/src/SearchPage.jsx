import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import Footer from '@ecl/ec-react-component-footer';
import Link from '@ecl/ec-react-component-link';
import PageHeader from '@ecl/ec-react-component-page-header';
import Pagination from '@ecl/ec-react-component-pagination';
import Select from '@ecl/ec-react-component-select';
import SiteHeader from '@ecl/ec-react-component-site-header';
import SiteSwitcher from '@ecl/ec-react-component-site-switcher';
import Tag from '@ecl/ec-react-component-tag';

const SearchPage = ({ siteSwitcher, siteHeader, pageHeader, footer }) => (
  <Fragment>
    <SiteSwitcher {...siteSwitcher} />
    <SiteHeader {...siteHeader} />
    <PageHeader {...pageHeader} />
    <main className="ecl-u-pv-3xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <aside className="ecl-col-12 ecl-col-lg-3">
            <h2 className="ecl-u-type-heading-2 ecl-u-d-lg-none ecl-u-mv-none">
              Search results (65)
            </h2>
            <h3 className="ecl-u-type-heading-3 ecl-u-mb-none ecl-u-mt-l ecl-u-mt-lg-none">
              Search options
            </h3>

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

            <Button
              className="ecl-u-mt-l"
              label="Refine results"
              variant="primary"
            />
            <br />
            <Button
              className="ecl-u-mt-m ecl-u-mt-lg-l"
              label="Clear all"
              variant="secondary"
            />
          </aside>

          <section className="ecl-col-12 ecl-col-lg-9">
            <h2 className="ecl-u-type-heading-2 ecl-u-d-none ecl-u-d-lg-block ecl-u-mv-none">
              Search results (65)
            </h2>

            <h3 className="ecl-u-type-heading-3 ecl-u-mb-none ecl-u-mt-3xl ecl-u-mt-lg-l">
              Showing results 11 to 20
            </h3>

            <div className="ecl-u-mt-l ecl-u-d-flex ecl-u-flex-column ecl-u-flex-lg-row ecl-u-align-items-lg-center">
              <span>
                <span className="ecl-u-type-m">SOURCE</span>
                <Tag
                  className="ecl-u-ml-s"
                  label="DG Trad"
                  variant="removable"
                />
              </span>
              <span className="ecl-u-ml-lg-m ecl-u-mt-m ecl-u-mt-lg-none">
                <span className="ecl-u-type-m">TOPICS</span>
                <Tag
                  className="ecl-u-ml-s"
                  label="Health, well-being & Consumer protection"
                  variant="removable"
                />
              </span>
            </div>

            <article className="ecl-u-mt-l ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Jobs, growth and investment"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                Since the global economic and financial crisis, the EU has been
                suffering from low levels of investment. Coordinated efforts at
                European level are needed to put Europe on the path of economic
                recovery.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Digital single market"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                The internet and digital technologies are transforming our
                world. But existing barriers online mean citizens miss out on
                goods and services, internet companies and start-ups have their
                horizons limited, and businesses and governments cannot fully
                benefit from digital tools.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Energy union and climate"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                The EU is building an energy union that ensures Europe’s energy
                supply is safe, viable and accessible to all. In doing so, it
                can boost the economy and attract investments that can create
                new jobs opportunities.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Internal market"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                The single market is one of Europe’s major achievements and its
                best asset in times of increasing globalisation. It is an engine
                for building a stronger and fairer EU economy.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="A deeper and fairer economic and monetary union"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                Within the Economic and Monetary Union (EMU), EU countries’
                economic policies are coordinated to: ensure EU countries can
                withstand future crises through economic and social reforms and
                responsible fiscal policies, encourage investment and enhance
                competitiveness, deliver more job opportunities and better
                living standards
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="A balanced and progressive trade policy to harness globalisation"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                In the modern global economy trade is essential for growth, jobs
                and competiveness, and the EU is committed to maintaining an
                open and rules-based trading system.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Justice and fundamental rights"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                Every EU citizen enjoys the same fundamental rights based on the
                values of equality, non-discrimination, inclusion, human
                dignity, freedom and democracy.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Migration"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                The plight of thousands of migrants putting their lives in peril
                to cross the Mediterranean has shocked. It is clear that no EU
                country can or should be left alone to address huge migratory
                pressures.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="A stronger global actor"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                The EU needs a strong common foreign policy to respond
                efficiently to global challenges, including the crises in its
                neighbourhood, project its values, reject protectionism and keep
                EU trade standards and contribute to peace and prosperity in the
                world.
              </p>
            </article>
            <hr className="ecl-u-mv-none" />
            <article className="ecl-u-mt-l ecl-u-mt-lg-m ecl-u-pb-l ecl-u-pb-lg-m">
              <Link
                href="/example"
                label="Democratic change"
                className="ecl-u-type-prolonged-m ecl-u-type-bold"
              />
              <p className="ecl-u-type-paragraph-m ecl-u-mv-none">
                For the first time, in 2014, EU countries had to take the
                results of the elections into account when proposing a candidate
                for European Commission President.
              </p>
            </article>

            <Pagination
              className="ecl-u-mt-l"
              items={[
                {
                  isPrevious: true,
                  ariaLabel: 'Go to previous page',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: 'Previous',
                    iconPosition: 'before',
                    icon: {
                      shape: 'ui--corner-arrow',
                      size: 'xs',
                      transform: 'rotate-270',
                    },
                  },
                },
                {
                  ariaLabel: 'Go to page 1',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: '1',
                  },
                },
                {
                  isCurrent: true,
                  ariaLabel: 'Page 2',
                  label: '2',
                },
                {
                  ariaLabel: 'Go to page 3',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: '3',
                  },
                },
                {
                  ariaLabel: 'Go to page 4',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: '4',
                  },
                },
                {
                  isNext: true,
                  ariaLabel: 'Go to next page',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: 'Next',
                    iconPosition: 'after',
                    icon: {
                      shape: 'ui--corner-arrow',
                      size: 'xs',
                      transform: 'rotate-90',
                    },
                  },
                },
              ]}
            />
          </section>
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
