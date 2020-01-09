/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import Button from '@ecl/ec-react-component-button';
import ContentItem from '@ecl/ec-react-composition-content-item';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
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
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
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
                groupClassName="ecl-u-mt-l"
                label="Issuing country"
                width="m"
                options={[]}
              />
              <Select
                id="facet-year"
                groupClassName="ecl-u-mt-l"
                label="Year of issue"
                width="m"
                options={[]}
              />
              <Select
                id="facet-collection"
                groupClassName="ecl-u-mt-l"
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

            <ContentItem
              className="ecl-u-mt-m ecl-u-mt-lg-l"
              meta={{
                label: parse(
                  "<span class='ecl-u-type-uppercase'>Greece</span> | <time dateTime='2019-06-01'>June 2019</time>"
                ),
              }}
              title={{
                href: '/example',
                label: 'Centenary of the birth of Manolis Andronicos',
                className: 'ecl-u-type-color-black',
              }}
              description={{
                label:
                  "Manolis Andronicos (1919-1992) was one of Greece's greatest archaelogists. His discovery of the royal tombs at Verginia in 1977 brought to light exquisite finds that attest to the splendour of ancient Macedonian civilisation.",
              }}
              images={{
                position: 'right',
                mobile: {
                  alt: 'Example image',
                  src:
                    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                },
                desktop: {
                  alt: 'Example image',
                  src:
                    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                },
              }}
            >
              <DescriptionList variant="horizontal" className="ecl-u-mt-m">
                <DescriptionTerm>Issuing volume</DescriptionTerm>
                <DescriptionDefinition>750.000 coins</DescriptionDefinition>
              </DescriptionList>
            </ContentItem>

            <ContentItem
              meta={{
                label: parse(
                  "<span class='ecl-u-type-uppercase'>Greece</span> | <time dateTime='2019-06-01'>June 2019</time>"
                ),
              }}
              title={{
                href: '/example',
                label: 'Andreas Kalvos - 150 years in memoriam',
                className: 'ecl-u-type-color-black',
              }}
              description={{
                label:
                  'Born in Zante, Andreas Kalvos (1792 - 1869) is one of the most important modern Greek poets. Combining a solid neo-classicist education with the high ideas of Romanticism and archaicising with demotic Greek, he expressed both the revolutionary ideas of his time and his personal vision.',
              }}
              images={{
                position: 'right',
                mobile: {
                  alt: 'Example image',
                  src:
                    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                },
                desktop: {
                  alt: 'Example image',
                  src:
                    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                },
              }}
            >
              <DescriptionList variant="horizontal" className="ecl-u-mt-m">
                <DescriptionTerm>Issuing volume</DescriptionTerm>
                <DescriptionDefinition>750.000 coins</DescriptionDefinition>
              </DescriptionList>
            </ContentItem>

            <ContentItem
              meta={{
                label: parse(
                  "<span class='ecl-u-type-uppercase'>Andora</span> | <time dateTime='2019-03-01'>March 2019</time>"
                ),
              }}
              title={{
                href: '/example',
                label: 'Ski World Cup Finals 2019',
                className: 'ecl-u-type-color-black',
              }}
              description={{
                label:
                  'The 2019 Ski World Cup Finals will be held in the Principality of Andorra from 11 to 17 March 2019. With this event, the Principality of Andorra will host one of the most important alpine skiing competition in the world.',
              }}
              images={{
                position: 'right',
                mobile: {
                  alt: 'Example image',
                  src:
                    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                },
                desktop: {
                  alt: 'Example image',
                  src:
                    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                },
              }}
            >
              <DescriptionList variant="horizontal" className="ecl-u-mt-m">
                <DescriptionTerm>Issuing volume</DescriptionTerm>
                <DescriptionDefinition>1.000.000 coins</DescriptionDefinition>
                <DescriptionTerm>Official journal</DescriptionTerm>
                <DescriptionDefinition>
                  <Link
                    href="/example"
                    variant="standalone"
                    label="2019/C 130/06"
                    icon={{
                      shape: 'ui--external',
                      size: 'xs',
                    }}
                  />
                </DescriptionDefinition>
              </DescriptionList>
            </ContentItem>

            <Pagination
              className="ecl-u-mt-xl ecl-u-mt-lg-3xl"
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
