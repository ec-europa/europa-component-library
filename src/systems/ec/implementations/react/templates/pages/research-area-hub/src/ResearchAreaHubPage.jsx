import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/ec-react-component-link';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

// Templates
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import PageHeaderStandardised from '@ecl/ec-react-component-page-header-standardised';
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';
import FooterCore from '@ecl/ec-react-component-footer-core';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';

const breadcrumbContent = {
  label: 'You are here:',
};
const breadcrumbItems = [
  { label: 'Home', href: '/example' },
  { label: 'Research and innovation', href: '/example' },
  { label: 'Research by area', href: '/example' },
  { label: 'Oceans and seas' },
];
const breadcrumbCore = (
  <BreadcrumbCore {...breadcrumbContent} data-ecl-auto-init="BreadcrumbCore">
    {breadcrumbItems.map(item => (
      <BreadcrumbCoreItem {...item} key={item.label} />
    ))}
  </BreadcrumbCore>
);
const breadcrumbStandardised = (
  <BreadcrumbStandardised
    {...breadcrumbContent}
    data-ecl-auto-init="BreadcrumbStandardised"
  >
    {breadcrumbItems.map(item => (
      <BreadcrumbStandardisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbStandardised>
);
const breadcrumbHarmonised1 = (
  <BreadcrumbHarmonised
    {...breadcrumbContent}
    className="ecl-breadcrumb-harmonised--group1"
    data-ecl-auto-init="BreadcrumbHarmonised"
  >
    {breadcrumbItems.map(item => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);
const breadcrumbHarmonised2 = (
  <BreadcrumbHarmonised
    {...breadcrumbContent}
    className="ecl-breadcrumb-harmonised--group2"
    data-ecl-auto-init="BreadcrumbHarmonised"
  >
    {breadcrumbItems.map(item => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);

const pageHeaderContent = {
  title: 'Oceans and seas',
};

const ResearchAreaHubPage = ({ siteHeader, footer, template }) => (
  <Fragment>
    {template === 'core' && (
      <SiteHeaderCore {...siteHeader} data-ecl-auto-init="SiteHeaderCore" />
    )}
    {template === 'standardised' && (
      <SiteHeaderStandardised
        {...siteHeader}
        data-ecl-auto-init="SiteHeaderStandardised"
      />
    )}
    {template === 'harmonised-g1' && (
      <SiteHeaderHarmonised
        {...siteHeader}
        data-ecl-auto-init="SiteHeaderHarmonised"
        className="ecl-site-header-harmonised--group1"
      />
    )}
    {template === 'harmonised-g2' && (
      <SiteHeaderHarmonised
        {...siteHeader}
        data-ecl-auto-init="SiteHeaderHarmonised"
        className="ecl-site-header-harmonised--group2"
      />
    )}

    {template === 'core' && (
      <PageHeaderCore {...pageHeaderContent} breadcrumb={breadcrumbCore} />
    )}
    {template === 'standardised' && (
      <PageHeaderStandardised
        {...pageHeaderContent}
        breadcrumb={breadcrumbStandardised}
      />
    )}
    {template === 'harmonised-g1' && (
      <PageHeaderHarmonised
        {...pageHeaderContent}
        breadcrumb={breadcrumbHarmonised1}
        className="ecl-page-header-harmonised--group1"
      />
    )}
    {template === 'harmonised-g2' && (
      <PageHeaderHarmonised
        {...pageHeaderContent}
        breadcrumb={breadcrumbHarmonised2}
        className="ecl-page-header-harmonised--group2"
      />
    )}

    <div className="ecl-u-pv-3xl ecl-u-pv-lg-4xl">
      <div className="ecl-container ecl-u-type-m">
        <div className="ecl-row" data-ecl-inpage-navigation-container>
          <div className="ecl-col-12 ecl-col-lg-3">
            <aside className="ecl-u-height-100">
              <InpageNavigation
                data-ecl-auto-init="InpageNavigation"
                title="Page contents"
                links={[
                  {
                    href: '#why-eu',
                    label: 'Why the EU supports innovation in oceans and seas',
                  },
                  {
                    href: '#policy-focus',
                    label: 'Policy focus',
                  },
                  {
                    href: '#funding-opportunities',
                    label: 'Funding opportunities',
                  },
                  {
                    href: '#collaboration-jobs',
                    label: 'Collaboration and jobs',
                  },
                  {
                    href: '#projects-results',
                    label: 'Projects and results',
                  },
                  {
                    href: '#tools',
                    label: 'Scientific publications, tools and databases',
                  },
                  {
                    href: '#news',
                    label: 'News',
                  },
                  {
                    href: '#events',
                    label: 'Related events',
                  },
                  {
                    href: '#contact',
                    label: 'Contact',
                  },
                  {
                    href: '#departments',
                    label: 'Related Commission departments',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="why-eu"
              >
                Why the EU supports innovation in oceans and seas
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Achieve levels of air quality that do not give rise to
                significant negative impacts on, and risks to, human health and
                the environment. Since the Policy focus early 1970s, the EU has
                been working to improve air quality by controlling . emissions
                of harmful substances into the atmosphere, improving fuel
                Funding opportunities quality, and by integrating environmental
                protection requirements into the Collaboration and jobs
                transport and energy sectors.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Marine and aquatic research and innovation is part of the
                EU&apos;s <a href="/example">bioeconomy strategy</a>.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="policy-focus"
              >
                Policy focus
              </h2>

              <UnorderedList className="ecl-u-mt-m" variant="no-bullet">
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Integrated Maritime Policy"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="International policy"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Plastics in a circular economy"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="EU Common Fisheries Policy"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="EU Marine Strategy Framework Directive"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Food 2030"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Bioeconomy strategy"
                  />
                </UnorderedListItem>
              </UnorderedList>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="funding-opportunities"
              >
                Funding opportunities
              </h2>

              <div className="ecl-row ecl-u-mt-xs">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Horizon 2020"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Calls for proposal related to marine resources are spread
                      across numerous schemes in Horizon 2020. This page lists
                      them and explains how you can apply.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="European structural and investment funds"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Marine research related calls may be found in this
                      programme, particularly in the European maritine and
                      fishieries fund.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="LIFE programme"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Some maritine research related calls may be found in this
                      programme.
                    </p>
                  </article>
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="collaboration-jobs"
              >
                Collaboration and jobs
              </h2>

              <div className="ecl-row ecl-u-mt-xs">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Find project partners"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Search and view profiles of all organisations that have
                      received funding via the funding and tender opportunities
                      portal.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Joint programming initiatives"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Partnerships with EU countries on marine research
                      programmes.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Research infrastructures"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Major facilities, resources and services used by the
                      science community.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Jobs (EURAXESS)"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Researcher jobs in related fields.
                    </p>
                  </article>
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="projects-results"
              >
                Projects and results
              </h2>

              <div className="ecl-row ecl-u-mt-xs">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Research project database (CORDIS)"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      The Commission&apos;s primary portal for results of
                      EU-funded research projects.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Project success stories"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Stories of particularly successful EU-funded research
                      projects.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Information sharing platform on marine and maritine research"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      The platform, currently in its pilot stage, shares
                      available research data and key results from EU funded
                      projects related to the marine and maritine research
                      sectors.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Project for policy - Blue Economy"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Blue Economy was one of the first three P4P pilot
                      showcasting how research and innovation project results
                      shape policy making.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Results pack on ocean plastics"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      A thematic collection of innovative EU-funded research
                      results.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Results pack on seafood"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      A thematic collection of innovative EU-funded research
                      results.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Results pack on algae"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      A thematic collection of innovative EU-funded research
                      results.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Results pack on better marine stewardship"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      A thematic collection of innovative EU-funded research
                      results.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Results pack on microbiome research"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      A thematic collection of innovative EU-funded research
                      results.
                    </p>
                  </article>
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="latest"
              >
                Latest
              </h2>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-mt-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">News article</span> |{' '}
                  <time dateTime="2019-10-17">17 October 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="EU funded Ebola treatment"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed
                  vehicula lorem non nunc tincidunt hendrerit. Nunc tristique
                  ante et fringilla fermentum.
                </p>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">News article</span> |{' '}
                  <time dateTime="2019-10-17">17 October 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="EU funded Ebola treatment"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed
                  vehicula lorem non nunc tincidunt hendrerit. Nunc tristique
                  ante et fringilla fermentum.
                </p>
              </article>

              <SocialMediaShare
                className="ecl-u-mt-xl ecl-u-mt-lg-4xl"
                description="Share this page"
                links={[
                  {
                    href: '/example',
                    label: 'Twitter',
                    className: 'ecl-social-media-share__link--twitter',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'twitter',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'twitter_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Facebook',
                    className: 'ecl-social-media-share__link--facebook',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'facebook',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'facebook_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Linkedin',
                    className: 'ecl-social-media-share__link--linkedin',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'linkedin',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'linkedin_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'E-mail',
                    className: 'ecl-social-media-share__link--email',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'email',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'email_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Other social networks',
                    variant: 'standalone',
                  },
                ]}
              />
            </main>
          </div>
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

ResearchAreaHubPage.propTypes = {
  siteHeader: PropTypes.oneOfType([
    PropTypes.shape(SiteHeaderCore.propTypes),
    PropTypes.shape(SiteHeaderHarmonised.propTypes),
    PropTypes.shape(SiteHeaderStandardised.propTypes),
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.shape(FooterCore.propTypes),
    PropTypes.shape(FooterHarmonised.propTypes),
    PropTypes.shape(FooterStandardised.propTypes),
  ]),
  template: PropTypes.string,
};

ResearchAreaHubPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default ResearchAreaHubPage;
