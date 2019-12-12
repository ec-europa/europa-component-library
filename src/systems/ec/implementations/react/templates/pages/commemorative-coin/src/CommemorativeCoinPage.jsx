import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import Link from '@ecl/ec-react-component-link';
import Pagination from '@ecl/ec-react-component-pagination';
import Select from '@ecl/ec-react-component-select';
import TextInput from '@ecl/ec-react-component-text-input';

// Templates
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import PageHeaderStandardised from '@ecl/ec-react-component-page-header-standardised';
import FooterCore from '@ecl/ec-react-component-footer-core';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';

const CommemorativeCoinPage = ({
  siteHeader,
  pageHeader,
  footer,
  template,
}) => (
  <Fragment>
    {template === 'core' && (
      <Fragment>
        <SiteHeaderCore {...siteHeader} data-ecl-auto-init="SiteHeaderCore" />
        <PageHeaderCore {...pageHeader} />
      </Fragment>
    )}
    {template === 'standardised' && (
      <Fragment>
        <SiteHeaderStandardised
          {...siteHeader}
          data-ecl-auto-init="SiteHeaderStandardised"
        />
        <PageHeaderStandardised {...pageHeader} />
      </Fragment>
    )}
    {template === 'harmonised-g1' && (
      <Fragment>
        <SiteHeaderHarmonised
          {...siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group1"
        />
        <PageHeaderHarmonised {...pageHeader} />
      </Fragment>
    )}
    {template === 'harmonised-g2' && (
      <Fragment>
        <SiteHeaderHarmonised
          {...siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group2"
        />
        <PageHeaderHarmonised {...pageHeader} />
      </Fragment>
    )}
    <div className="ecl-u-pv-3xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <aside className="ecl-col-12 ecl-col-lg-3">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-lg-none ecl-u-mv-none">
              Coins (324)
            </h2>
            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-none">
              Filter by
            </h3>
            <form>
              <TextInput id="facet-keywords" label="Keywords" width="m" />
              <Select
                id="facet-countries"
                groupClassName="ecl-u-mt-m"
                label="Issuing country"
                width="m"
                options={[]}
              />
              <Select
                id="facet-year"
                groupClassName="ecl-u-mt-m"
                label="Year of issue"
                width="m"
                options={[]}
              />
              <Select
                id="facet-collection"
                groupClassName="ecl-u-mt-m"
                label="Collection"
                width="m"
                options={[]}
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
            </form>
          </aside>
          <main className="ecl-col-12 ecl-col-lg-9">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-none ecl-u-d-lg-block ecl-u-mv-none">
              Coins (324)
            </h2>

            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-mt-m ecl-u-mt-lg-l">
              <div className="ecl-u-flex-grow-1">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-type-uppercase">
                  Greece | <time dateTime="2019-06-01">June 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    className="ecl-u-type-color-black"
                    href="/example"
                    variant="standalone"
                    label="Centenary of the birth of Manolis Andronicos"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                  Manolis Andronicos (1919-1992) was one of Greece&apos;s
                  greatest archaelogists. His discovery of the royal tombs at
                  Verginia in 1977 brought to light exquisite finds that attest
                  to the splendour of ancient Macedonian civilisation.
                </p>
              </div>

              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-media-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                style={{
                  backgroundImage:
                    'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '7.5rem',
                }}
              />

              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-media-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                style={{
                  backgroundImage:
                    'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '13.125rem',
                }}
              />
            </article>

            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
              <div className="ecl-u-flex-grow-1">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  NEWS ARTICLE |{' '}
                  <time dateTime="2019-10-17">17 October 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Article title"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed
                  vehicula lorem non nunc tincidunt hendrerit. Nunc tristique
                  ante et fringilla fermentum.
                </p>
              </div>

              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-media-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                style={{
                  backgroundImage:
                    'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '7.5rem',
                }}
              />

              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-media-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                style={{
                  backgroundImage:
                    'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '13.125rem',
                }}
              />
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
          </main>
        </div>
      </div>
    </div>
    {template === 'core' && <FooterCore {...footer} />}
    {template === 'standardised' && <FooterStandardised {...footer} />}
    {template === 'harmonised-g1' && (
      <FooterHarmonised {...footer} className="ecl-footer-harmonised--group1" />
    )}
    {template === 'harmonised-g2' && (
      <FooterHarmonised {...footer} className="ecl-footer-harmonised--group2" />
    )}
  </Fragment>
);

CommemorativeCoinPage.propTypes = {
  siteHeader: PropTypes.oneOfType([
    PropTypes.shape(SiteHeaderCore.propTypes),
    PropTypes.shape(SiteHeaderHarmonised.propTypes),
    PropTypes.shape(SiteHeaderStandardised.propTypes),
  ]),
  pageHeader: PropTypes.oneOfType([
    PropTypes.shape(PageHeaderCore.propTypes),
    PropTypes.shape(PageHeaderHarmonised.propTypes),
    PropTypes.shape(PageHeaderStandardised.propTypes),
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.shape(FooterCore.propTypes),
    PropTypes.shape(FooterHarmonised.propTypes),
    PropTypes.shape(FooterStandardised.propTypes),
  ]),
  template: PropTypes.string,
};

CommemorativeCoinPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  footer: {},
  template: '',
};

export default CommemorativeCoinPage;
