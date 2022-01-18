import React from 'react';
import parse from 'html-react-parser';

import ContentItem from '@ecl/ec-react-composition-content-item';
import Link from '@ecl/ec-react-component-link';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

function ResearchAreaHubPage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
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

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-l">
                Achieve levels of air quality that do not give rise to
                significant negative impacts on, and risks to, human health and
                the environment. Since the Policy focus early 1970s, the EU has
                been working to improve air quality by controlling emissions of
                harmful substances into the atmosphere, improving fuel Funding
                opportunities quality, and by integrating environmental
                protection requirements into the Collaboration and jobs
                transport and energy sectors.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                Marine and aquatic research and innovation is part of the
                EU&apos;s{' '}
                <a className="ecl-link" href="/example">
                  bioeconomy strategy
                </a>
                .
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
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
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="funding-opportunities"
              >
                Funding opportunities
              </h2>

              <div className="ecl-row ecl-u-mt-l">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Horizon 2020',
                    }}
                    description={{
                      label:
                        'Calls for proposal related to marine resources are spread across numerous schemes in Horizon 2020. This page lists them and explains how you can apply.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'European structural and investment funds',
                    }}
                    description={{
                      label:
                        'Marine research related calls may be found in this programme, particularly in the European maritine and fishieries fund.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'LIFE programme',
                    }}
                    description={{
                      label:
                        'Some maritine research related calls may be found in this programme.',
                    }}
                  />
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="collaboration-jobs"
              >
                Collaboration and jobs
              </h2>

              <div className="ecl-row ecl-u-mt-l">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Find project partners',
                    }}
                    description={{
                      label:
                        'Search and view profiles of all organisations that have received funding via the funding and tender opportunities portal.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Joint programming initiatives',
                    }}
                    description={{
                      label:
                        'Partnerships with EU countries on marine research programmes.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Research infrastructures',
                    }}
                    description={{
                      label:
                        'Major facilities, resources and services used by the science community.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Jobs (EURAXESS)',
                    }}
                    description={{
                      label: 'Researcher jobs in related fields.',
                    }}
                  />
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="projects-results"
              >
                Projects and results
              </h2>

              <div className="ecl-row ecl-u-mt-l">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Research project database (CORDIS)',
                    }}
                    description={{
                      label:
                        'The Commission&apos;s primary portal for results of EU-funded research projects.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Project success stories',
                    }}
                    description={{
                      label:
                        'Stories of particularly successful EU-funded research projects.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label:
                        'Information sharing platform on marine and maritine research',
                    }}
                    description={{
                      label:
                        'The platform, currently in its pilot stage, shares available research data and key results from EU funded projects related to the marine and maritine research sectors.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Project for policy - Blue Economy',
                    }}
                    description={{
                      label:
                        'Blue Economy was one of the first three P4P pilot showcasting how research and innovation project results shape policy making.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Results pack on ocean plastics',
                    }}
                    description={{
                      label:
                        'A thematic collection of innovative EU-funded research results.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Results pack on seafood',
                    }}
                    description={{
                      label:
                        'A thematic collection of innovative EU-funded research results.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Results pack on algae',
                    }}
                    description={{
                      label:
                        'A thematic collection of innovative EU-funded research results.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Results pack on better marine stewardship',
                    }}
                    description={{
                      label:
                        'A thematic collection of innovative EU-funded research results.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Results pack on microbiome research',
                    }}
                    description={{
                      label:
                        'A thematic collection of innovative EU-funded research results.',
                    }}
                  />
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="tools"
              >
                Scientific publications, tools and databases
              </h2>

              <div className="ecl-row ecl-row ecl-u-mt-l">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Results Scientific publications',
                    }}
                    description={{
                      label:
                        'Scientific publications produced by the European Commission (JRC)',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Marine research tools and databases',
                    }}
                    description={{
                      label:
                        "The Commission's Joint Research Centre compilesdatabases and develops software and modelling tools. You can access marine related ones here.",
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'EU Open Data Portal',
                    }}
                    description={{
                      label:
                        'Single point of access to open data produced by the EU institutions. All data free to use for commercial and non-commercial purposes.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'OpenAIRE',
                    }}
                    description={{
                      label:
                        'You can access all scientific publications from Horizon 2020 via OpenAIRE.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Copernicus',
                    }}
                    description={{
                      label:
                        'Access to marine data from the Copernicus programme.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'iMarine',
                    }}
                    description={{
                      label:
                        'Data e-Infrastructure initiative for fishieries management and conservation.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Pangaea',
                    }}
                    description={{
                      label:
                        'Data publisher for earth and environmental science.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'SeaDataNet',
                    }}
                    description={{
                      label: 'Ocean and marine data management Infrastructure.',
                    }}
                  />
                </div>
              </div>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'EMODnet',
                    }}
                    description={{
                      label: 'Access to marine data in Europe.',
                    }}
                  />
                </div>

                <div className="ecl-col-12 ecl-col-md-6">
                  <ContentItem
                    className="ecl-u-height-100 ecl-u-box-sizing-border"
                    title={{
                      href: '/example',
                      label: 'Fisheries data collection',
                    }}
                    description={{
                      label: 'Commission (JRC) data collection on fishieries.',
                    }}
                  />
                </div>
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="news"
              >
                News
              </h2>

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Press release</span> | <time dateTime='2019-09-25'>25 September 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Commissioners Miguel Arias, Karmenu Vella and Carlos Moedas welcome the UN report on oceans and climate change',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>News</span> | <time dateTime='2019-09-19'>19 September 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Ocean plastic lab returns to Brussels to tackle ocean pollution',
                }}
                description={{
                  label:
                    'Back in Brussels from 19 to 30 September 2019, in the framework of the Research and Innovation Days organised by the European Commission',
                }}
              />

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
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="events"
              >
                Related events
              </h2>

              <ContentItem
                meta={{
                  label: parse(
                    "<div class='ecl-u-d-inline-block ecl-u-bg-yellow-25 ecl-u-type-color-black ecl-u-pa-2xs'>Upcoming</div>"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Save the date for All-Atlantic Ocean Research Forum',
                }}
                date={{
                  dateTime: '2020-02-06',
                  day: '06',
                  month: 'Feb',
                  monthFull: 'February',
                  year: '2020',
                }}
                information={{
                  items: [
                    {
                      icon: {
                        shape: 'general--location',
                        size: 'm',
                      },
                      label: 'Brussels, Belgium',
                    },
                  ],
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<div class='ecl-u-d-inline-block ecl-u-bg-grey-25 ecl-u-type-color-black ecl-u-pa-2xs'>Past</div>"
                  ),
                }}
                title={{
                  href: '/example',
                  label: '2019 Global Ocean Science Education Workshop',
                }}
                date={{
                  variant: 'past',
                  dateTime: '2019-11-13',
                  day: '13',
                  month: 'Nov',
                  monthFull: 'November',
                  year: '2019',
                }}
                information={{
                  items: [
                    {
                      icon: {
                        shape: 'general--location',
                        size: 'm',
                      },
                      label: 'Washington, United States',
                    },
                    {
                      icon: {
                        shape: 'ui--external',
                        size: 'm',
                      },
                      label: 'External event',
                    },
                  ],
                }}
              />

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
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="contact"
              >
                Contact
              </h2>

              <div className="ecl-row">
                <div className="ecl-col-12 ecl-col-md-6">
                  <article className="ecl-u-height-100 ecl-u-box-sizing-border">
                    <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                      Research Enquiry Service
                    </h3>

                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
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
                    <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                      National Contact Points (NCPs)
                    </h3>

                    <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
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
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="departments"
              >
                Related Commission departments
              </h2>

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | RTD"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Research and Innovation',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | JRC"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Joint Research Centre',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | MARE"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Maritime Affairs and Fisheries',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | ENV"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Environment',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | NEAR"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'European Neighbourhood Policy and Enlargement Negotiations',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | EEAS"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'European External Action Service (EEAS)',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | INEA"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Innovation and Networks Executive Agency',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | EASME"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Executive Agency for Small and Medium-sized Enterprises',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Directorate-general</span> | REA"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Research Executive Agency',
                }}
              />

              <SocialMediaShare
                className="ecl-u-mt-xl ecl-u-mt-lg-3xl"
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
  );
}

export default ResearchAreaHubPage;
