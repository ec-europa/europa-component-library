import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DateBlock from '@ecl/ec-react-component-date-block';
import Link from '@ecl/ec-react-component-link';
import Icon from '@ecl/ec-react-component-icon';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
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

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                Achieve levels of air quality that do not give rise to
                significant negative impacts on, and risks to, human health and
                the environment. Since the Policy focus early 1970s, the EU has
                been working to improve air quality by controlling emissions of
                harmful substances into the atmosphere, improving fuel Funding
                opportunities quality, and by integrating environmental
                protection requirements into the Collaboration and jobs
                transport and energy sectors.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Marine and aquatic research and innovation is part of the
                EU&apos;s{' '}
                <a className="ecl-link" href="/example">
                  bioeconomy strategy
                </a>
                .
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="policy-focus"
              >
                Policy focus
              </h2>

              <UnorderedList className="ecl-u-mt-l" variant="no-bullet">
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
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="funding-opportunities"
              >
                Funding opportunities
              </h2>

              <div className="ecl-row ecl-u-mt-l">
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
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="collaboration-jobs"
              >
                Collaboration and jobs
              </h2>

              <div className="ecl-row ecl-u-mt-l">
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

              <div className="ecl-row ecl-u-mt-m">
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
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="projects-results"
              >
                Projects and results
              </h2>

              <div className="ecl-row ecl-u-mt-l">
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

              <div className="ecl-row ecl-u-mt-m">
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

              <div className="ecl-row ecl-u-mt-m">
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

              <div className="ecl-row ecl-u-mt-m">
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

              <div className="ecl-row ecl-u-mt-m">
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
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="tools"
              >
                Scientific publications, tools and databases
              </h2>

              <div className="ecl-row ecl-row ecl-u-mt-l">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Results Scientific publications"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Scientific publications produced by the European
                      Commission (JRC)
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Marine research tools and databases"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      The Commission&apos;s Joint Research Centre compiles
                      databases and develops software and modelling tools. You
                      can access marine related ones here.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row ecl-u-mt-m">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="EU Open Data Portal"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Single point of access to open data produced by the EU
                      institutions. All data free to use for commercial and
                      non-commercial purposes.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="OpenAIRE"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      You can access all scientific publications from Horizon
                      2020 via OpenAIRE.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row ecl-u-mt-m">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Copernicus"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Access to marine data from the Copernicus programme.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="iMarine"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Data e-Infrastructure initiative for fishieries management
                      and conservation.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row ecl-u-mt-m">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Pangaea"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Data publisher for earth and environmental science.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="SeaDataNet"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Ocean and marine data management Infrastructure.
                    </p>
                  </article>
                </div>
              </div>

              <div className="ecl-row ecl-u-mt-m">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="EMODnet"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Access to marine data in Europe.
                    </p>
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                      <Link
                        href="/example"
                        variant="standalone"
                        label="Fisheries data collection"
                      />
                    </div>
                    <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                      Commission (JRC) data collection on fishieries.
                    </p>
                  </article>
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="news"
              >
                News
              </h2>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-mt-l">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">Press release</span> |{' '}
                  <time dateTime="2019-10-17">25 September 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Commissioners Miguel Arias, Karmenu Vella and Carlos Moedas welcome the UN report on oceans and climate change"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">News</span> |{' '}
                  <time dateTime="2019-10-17">19 September 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Ocean plastic lab returns to Brussels to tackle ocean pollution"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  Back in Brussels from 19 to 30 September 2019, in the
                  framework of the Research and Innovation Days organised by the
                  European Commission
                </p>
              </article>

              <Link
                className="ecl-u-mt-l ecl-u-type-bold"
                variant="standalone"
                label="More news"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'xs',
                  transform: 'rotate-90',
                }}
              />

              <SocialMediaFollow
                className="ecl-u-mt-l ecl-u-mb-none"
                description="Follow the latest progress and learn more about getting involved."
                links={[
                  {
                    href: '/example',
                    label: 'Twitter',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'twitter',
                        size: 'xl',
                      },
                      {
                        shape: 'twitter_hover',
                        size: 'xl',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Facebook',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'facebook',
                        size: 'xl',
                      },
                      {
                        shape: 'facebook_hover',
                        size: 'xl',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Instagram',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'instagram',
                        size: 'xl',
                      },
                      {
                        shape: 'instagram_hover',
                        size: 'xl',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'LinkedinIn',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'linkedin',
                        size: 'xl',
                      },
                      {
                        shape: 'linkedin_hover',
                        size: 'xl',
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

              <h2
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="events"
              >
                Related events
              </h2>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-d-flex ecl-u-mt-l ecl-u-pv-m">
                <div className="ecl-u-flex-grow-0 ecl-u-mr-m">
                  <DateBlock
                    dateTime="2020-02-06"
                    day="06"
                    month="Feb"
                    monthFull="February"
                    year="2020"
                  />
                </div>
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-d-inline-block ecl-u-type-s ecl-u-bg-yellow-25 ecl-u-pa-2xs">
                    Upcoming
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Save the date for All-Atlantic Ocean Research Forum"
                    />
                  </div>
                  <UnorderedList
                    variant="no-bullet"
                    className="ecl-u-mt-s ecl-u-type-color-grey-75"
                  >
                    <UnorderedListItem className="ecl-u-d-flex ecl-u-align-items-center">
                      <Icon shape="general--location" size="m" />
                      <span className="ecl-u-type-s ecl-u-ml-s">
                        Brussels, Belgium
                      </span>
                    </UnorderedListItem>
                  </UnorderedList>
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-d-flex ecl-u-pv-m">
                <div className="ecl-u-flex-grow-0 ecl-u-mr-m">
                  <DateBlock
                    variant="past"
                    dateTime="2019-11-13"
                    day="13"
                    month="Nov"
                    monthFull="November"
                    year="2019"
                  />
                </div>
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-d-inline-block ecl-u-type-s ecl-u-bg-grey-25 ecl-u-pa-2xs">
                    Past
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="2019 Global Ocean Science Education Workshop"
                    />
                  </div>
                  <UnorderedList
                    variant="no-bullet"
                    className="ecl-u-mt-s ecl-u-type-color-grey-75"
                  >
                    <UnorderedListItem className="ecl-u-d-flex ecl-u-align-items-center">
                      <Icon shape="general--location" size="m" />
                      <span className="ecl-u-type-s ecl-u-ml-s">
                        Washington, United States
                      </span>
                    </UnorderedListItem>
                    <UnorderedListItem className="ecl-u-d-flex ecl-u-align-items-center">
                      <Icon shape="ui--external" size="m" />
                      <span className="ecl-u-type-s ecl-u-ml-s">
                        External event
                      </span>
                    </UnorderedListItem>
                  </UnorderedList>
                </div>
              </article>

              <Link
                className="ecl-u-mt-l ecl-u-type-bold"
                variant="standalone"
                label="More events"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'xs',
                  transform: 'rotate-90',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-lg-3xl ecl-u-type-color-black"
                id="contact"
              >
                Contact
              </h2>

              <div className="ecl-row ecl-u-mt-l">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-height-100 ecl-u-box-sizing-border">
                    <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
                      Research Enquiry Service
                    </h2>

                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-m ecl-u-mb-none">
                      You can contact the Research Enquiry Service to find out
                      more about research in Europe, the EU&apos;s research and
                      innovation funding programmes as well as calls for
                      proposals and project funding.
                    </p>

                    <Link
                      className="ecl-u-mt-m ecl-u-type-bold"
                      variant="standalone"
                      label="Ask a question"
                      href="/example"
                      icon={{
                        shape: 'ui--corner-arrow',
                        size: 'xs',
                        transform: 'rotate-90',
                      }}
                    />
                  </article>
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-height-100 ecl-u-box-sizing-border">
                    <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
                      National Contact Points (NCPs)
                    </h2>

                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-m ecl-u-mb-none">
                      The NCP network gives guidance and information on
                      participating in Horizon 2020. NCPs are established in all
                      EU countries and many non-EU countries.
                    </p>

                    <Link
                      className="ecl-u-mt-m ecl-u-type-bold"
                      variant="standalone"
                      label="Find your national contact point"
                      href="/example"
                      icon={{
                        shape: 'ui--corner-arrow',
                        size: 'xs',
                        transform: 'rotate-90',
                      }}
                    />
                  </article>
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-mb-none ecl-u-mt-l ecl-u-type-color-black"
                id="departments"
              >
                Related Commission departments
              </h2>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-mt-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | RTD
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Research and Innovation"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | JRC
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Joint Research Centre"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | MARE
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Maritime Affairs and Fisheries"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | ENV
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Environment"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | NEAR
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="European Neighbourhood Policy and Enlargement Negotiations"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | EEAS
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="European External Action Service (EEAS)"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | INEA
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Innovation and Networks Executive Agency"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | EASME
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Executive Agency for Small and Medium-sized Enterprises"
                  />
                </div>
              </article>

              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">
                    Directorate-general | REA
                  </span>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Research Executive Agency"
                  />
                </div>
              </article>

              <SocialMediaShare
                className="ecl-u-mv-3xl"
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
