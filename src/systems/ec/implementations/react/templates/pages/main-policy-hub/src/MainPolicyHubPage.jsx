import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DateBlock from '@ecl/ec-react-component-date-block';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import Link from '@ecl/ec-react-component-link';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import Timeline2 from '@ecl/ec-react-component-timeline2';

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
  { label: 'Policies', href: '/example' },
  { label: 'Environment', href: '/example' },
  { label: 'Clean air' },
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
  title: 'Clean air',
};

const MainPolicyHubPage = ({ siteHeader, footer, template }) => (
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

    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <main>
        <div className="ecl-container ecl-u-type-m">
          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-6">
              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mv-none">
                Clean air is essential to our health and to the environment. But
                since the industrial revolution, the qulity of the air we
                breathe ha deteriorated considerably - mainly as a result of
                human activites.
              </p>
              <Link
                className="ecl-u-mt-l"
                href="/example"
                label="Why is this policy necessary"
                variant="standalone"
                icon={{
                  shape: 'ui--corner-arrow',
                  transform: 'rotate-90',
                  size: 'fluid',
                }}
              />

              <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
                Objectives
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-mt-l ecl-u-mb-none">
                Achieve levels of air quality that do not give rise to
                significant negative eimpacts on, and risks to, human health and
                the environment. Since the early 1970s, the EU has been working
                to improve air quality by controlling emissions of harmful
                substances into the atmosphere, improving fuel quality, and by
                integrating environmental protection requirements into the
                transport and energy sectors.
              </p>
            </div>

            <div className="ecl-col-12 ecl-col-md-6">
              <div className="ecl-u-bg-blue-5 ecl-u-border-all ecl-u-border-width-2 ecl-u-border-color-blue-25 ecl-u-pv-l ecl-u-mt-l ecl-u-mt-md-none">
                <DescriptionList variant="horizontal">
                  <DescriptionTerm className="ecl-u-pl-s ecl-u-box-sizing-border">
                    Policy period
                  </DescriptionTerm>
                  <DescriptionDefinition className="ecl-u-pl-s ecl-u-pl-lg-none">
                    01.01.2015 - 01.01.2030
                  </DescriptionDefinition>

                  <DescriptionTerm className="ecl-u-pl-s ecl-u-box-sizing-border">
                    Connected topics
                  </DescriptionTerm>
                  <DescriptionDefinition className="ecl-u-pl-s ecl-u-pl-lg-none">
                    <Link
                      href="/example"
                      label="Environment"
                      variant="standalone"
                    />
                  </DescriptionDefinition>

                  <DescriptionTerm className="ecl-u-pl-s ecl-u-box-sizing-border">
                    Connected Commission priorities
                  </DescriptionTerm>
                  <DescriptionDefinition className="ecl-u-pl-s ecl-u-pl-lg-none">
                    <Link
                      href="/example"
                      label="Energy union and climate"
                      variant="standalone"
                    />
                  </DescriptionDefinition>

                  <DescriptionTerm className="ecl-u-pl-s ecl-u-box-sizing-border">
                    Previous version
                  </DescriptionTerm>
                  <DescriptionDefinition className="ecl-u-pl-s ecl-u-pl-lg-none">
                    <Link
                      href="/example"
                      label="The CAFE Programme (2001 - 2015)"
                      variant="standalone"
                    />
                  </DescriptionDefinition>
                </DescriptionList>
              </div>
            </div>
          </div>
        </div>

        <div className="ecl-u-mt-l ecl-u-mt-lg-3xl ecl-u-pv-l ecl-u-bg-blue-5">
          <div className="ecl-container ecl-u-type-m">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
              Supporting policies
            </h2>

            <div className="ecl-row ecl-u-mt-xs">
              <div className="ecl-col-12 ecl-col-md-6">
                <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Air quality"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                    European Union policy on air quality aims to develop and
                    implement appropriate instruments to improve air quality.
                  </p>
                </article>
              </div>

              <div className="ecl-col-12 ecl-col-md-6">
                <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Reduction of National Emissions"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                    EU has policies in place limiting individual sources but
                    also national totals of atmospheric emissions of key
                    polluants.
                  </p>
                </article>
              </div>
            </div>

            <div className="ecl-row">
              <div className="ecl-col-12 ecl-col-md-6">
                <article className="ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs ">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Air pollution from the main sources"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                    Main sources of problems regarding European Union&apos;air
                    pollution.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="ecl-container ecl-u-type-m">
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Actions
          </h2>

          <div className="ecl-row ecl-u-mt-xs">
            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Legislation"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  &quot;A Europe that protects: Clean air for all&quot; provides
                  national, regional and local actors practical help to improve
                  air quality in Europe.
                </p>
              </article>
            </div>

            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Consultation and cooperation"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  Clean Air Country Dialogues foster the collaborative approach
                  required to deliver actions for enhancing air quality and
                  reducing air pollution in the future.
                </p>
              </article>
            </div>
          </div>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-border-bottom ecl-u-border-color-grey-15  ecl-u-border-width-md-0 ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Resources"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  The European Environment Agency&apos;s &apos;European Air
                  Quality Index&apos; informs citizens about air quality levels
                  based on Member States data.
                </p>
              </article>
            </div>

            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-pv-m ecl-u-height-100 ecl-u-box-sizing-border">
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Raising awareness"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  Public relations campaigns that aim to increase public
                  awareness towards the problem Europe enounters when it comes
                  to air pollution.
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-pv-l ecl-u-bg-blue-5">
          <div className="ecl-container ecl-u-type-m">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
              Outcome
            </h2>

            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
              Results
            </h3>

            <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
              As a result, much progress has been made in tackling air polluants
              such as sulphur dioxide, lead, nitrogen oxides, carbon monoxide
              and benzene. Yet, and despite the progressmade to date, poor air
              quality continues to cause serious and avoidable problems. As a
              next step towards improving air quality, the European Commission
              adopted in 2013 a Clean Air Policy Package, including a Clean Air
              Programme for Europe setting objectives for 2020 and 2030, and
              accompanying legislative measures.
            </p>

            <Link
              className="ecl-u-mt-l"
              href="/example"
              label="Policy impact"
              variant="standalone"
              icon={{
                shape: 'ui--corner-arrow',
                transform: 'rotate-90',
                size: 'fluid',
              }}
            />

            <div className="ecl-row ecl-u-mt-m ecl-u-mt-lg-l ecl-u-border-top ecl-u-border-color-grey-25">
              <div className="ecl-col-12 ecl-col-md-6 ecl-u-border-bottom ecl-u-border-color-grey-25 ecl-u-border-width-md-0 ecl-u-pb-l ecl-u-pb-md-none">
                <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                  Monitoring
                </h3>

                <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m">
                  The new PRIMES 2016 reference scenario and any developments in
                  the CAPRI and TREMOVE modelling frameworks.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mb-none">
                  The impacts of Climate and Energy Policy as finally proposed
                  by the Commission
                </p>

                <Link
                  className="ecl-u-mt-l"
                  href="/example"
                  label="How we measure policy impact"
                  variant="standalone"
                  icon={{
                    shape: 'ui--corner-arrow',
                    transform: 'rotate-90',
                    size: 'fluid',
                  }}
                />
              </div>

              <div className="ecl-col-12 ecl-col-md-6">
                <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                  Evaluation
                </h3>

                <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                  This review will build on and reinforce the objectives of the
                  Europe 2030 strategy for smart, sustainable and inclusive
                  growth and involve all relevant stakeholders. Meanwhile,
                  important emission abatement measures will continue to be
                  implemented.
                </p>

                <Link
                  className="ecl-u-mt-l"
                  href="/example"
                  label="Policy evaluation"
                  variant="standalone"
                  icon={{
                    shape: 'ui--corner-arrow',
                    transform: 'rotate-90',
                    size: 'fluid',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ecl-container ecl-u-type-m">
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Policy timeline
          </h2>

          <article className="ecl-u-d-inline-block ecl-u-bg-blue-5 ecl-u-border-all ecl-u-border-width-2 ecl-u-border-color-blue-25 ecl-u-pv-l ecl-u-ph-s ecl-u-mt-l">
            <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
              <Link
                href="/example"
                variant="standalone"
                label="Review of the Clean air policy"
              />
            </div>
            <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
              This package was based on an extensive review of the EU air policy
              to date.
            </p>
          </article>

          <Timeline2
            data-ecl-auto-init="Timeline2"
            className="ecl-u-mt-l"
            toggleCollapsed="Show %d more items"
            toggleExpanded="Hide %d items"
            button={{
              label: 'Show all timeline',
              icon: {
                shape: 'ui--corner-arrow',
                size: 'xs',
                transform: 'rotate-180',
              },
              variant: 'secondary',
              type: 'button',
            }}
            items={[
              {
                id: '0',
                label: '18 Dec 2013',
                title: 'New Clean Air Policy Package',
                content:
                  'On 18 December 2013, the European Commission adopted a Clean Air Policy Package. This package was based on an extensive review of the EU air policy to date. This policy package includes a Clean Air Programme for Europe, as well as a proposal for Directives on the reduction of nation emissions of certain atmospheric pollutants (the NEC Directive) and on limitation of emissions of certain pollutants into the air from medium combustion plants (the MCP Directive).',
              },
              {
                id: '1',
                label: '1-2 Mar 2017',
                title: 'Clean Air Dialogue with Ireland',
                content:
                  'In 2015, the Commission proposed, in an orienation paper for the Ambient Air Quality Export Group, setting up bilateral structured Clean Air Country Dialogues to help foster the collaborative approach required to deliver actions for enhancing air quality and reducing air pollution in the future.',
              },
              {
                id: '2',
                label: '29-30 June 2017',
                title: 'Clean Air Dialogue with Luxembourg',
                content:
                  'In 2015, the Commission proposed, in an orienation paper for the Ambient Air Quality Export Group, setting up bilateral structured Clean Air Country Dialogues to help foster the collaborative approach required to deliver actions for enhancing air quality and reducing air pollution in the future.',
              },
              {
                id: '3',
                label: '12 Sep 2017',
                title: 'European Air Quality Index',
                content:
                  'The European Environmental Agency now offers an Air Quality Index that allows citizens to monitor air quality in real time.',
              },
              {
                id: '4',
                label: '01 Oct 2017',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '5',
                label: '31 Dec 2017',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '6',
                label: '05 Apr 2018',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '7',
                label: '17 Jul 2018',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '8',
                label: '22 Oct 2018',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '9',
                label: '25 Mar 2019',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '10',
                label: '5 Jul 2019',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '11',
                label: '12 Sep 2019',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '12',
                label: '3 Oct 2019',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '13',
                label: '22 Oct 2019',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: '14',
                label: '10 Nov 2019',
                title:
                  'Fitness check of the EU Ambient Air Quality Directives (Report)',
                content:
                  'The results of the on-going fitness check are expected to be published by end of 2019',
              },
              {
                id: '15',
                label: '28-29 Nov 2019',
                title: '2nd EU Clean Air Forum',
                content:
                  'The European Commission is organising, in close cooperation with the Ministry of Environment of the Slovak Republic, a second EU Clean Air Forum that will take place in Bratislava (Slovakia).',
              },
            ]}
          />

          <article className="ecl-u-pv-m ecl-u-mt-l">
            <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
              <Link
                href="/example"
                variant="standalone"
                label="EC policy process"
              />
            </div>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
              Get more information about how decisions are made in the policy
              process.
            </p>
          </article>
        </div>

        <div className="ecl-u-bg-blue-5 ecl-u-pv-l ecl-u-mt-xl ecl-u-mt-lg-3xl">
          <div className="ecl-container ecl-u-type-m">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
              News
            </h2>

            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-mt-m ecl-u-mt-lg-l">
              <div className="ecl-u-flex-grow-1">
                <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                  <span className="ecl-u-type-uppercase">News article</span> |{' '}
                  <time dateTime="2019-05-06">06 May 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="EEA reports on cleaner EU environment and challenges ahead"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  A new report published today by the European Environment
                  Agency shows that a coordinated EU environment policy has
                  delivered substantial benefits for citizens over the past 5
                  years.
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
                  <span className="ecl-u-type-uppercase">News article</span> |{' '}
                  <time dateTime="2019-03-23">23 March 2019</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Paris Climate Agreement to enter into force as EU agrees ratification"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  The European Parliament has today approved the EU ratification
                  of the Paris Agreement in the presence of Commission President
                  Jean-Claude Juncker.
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
                  <span className="ecl-u-type-uppercase">News article</span> |{' '}
                  <time dateTime="2015-10-17">17 October 2015</time>
                </div>
                <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="The 6th meeting of the Urban Partnership on Air QUality focuses on the implementation of actions"
                  />
                </div>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-mb-none">
                  After the presentation of the Draft Action Plan and the
                  corresponding period for analysis of the Public Feedback
                  results, the Urban Partnership Air Quality.
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

            <Link
              className="ecl-u-mt-l"
              href="/example"
              label="All news"
              variant="standalone"
              icon={{
                shape: 'ui--corner-arrow',
                transform: 'rotate-90',
                size: 'fluid',
              }}
            />
          </div>
        </div>

        <div className="ecl-container ecl-u-type-m">
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Events
          </h2>

          <article className="ecl-u-d-flex ecl-u-pv-m ecl-u-mt-l">
            <div className="ecl-u-flex-grow-0 ecl-u-mr-m">
              <DateBlock
                dateTime="2019-11-28"
                day="28"
                month="Nov"
                monthFull="November"
                year="2019"
              />
            </div>
            <div className="ecl-u-flex-grow-1">
              <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                <span className="ecl-u-type-uppercase">
                  Forum | <time dateTime="2019-11-28">28-29 Nov 2019</time>
                </span>
              </div>
              <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                <Link
                  href="/example"
                  variant="standalone"
                  label="EU Clean Air"
                />
              </div>
              <p className="ecl-u-type-paragraph-s ecl-u-type-color-grey ecl-u-mt-xs">
                With: Daniel Calleja Crespo
              </p>
            </div>
          </article>

          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Stakeholders
          </h2>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none"
                  style={{
                    backgroundImage:
                      'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  }}
                />

                <div className="ecl-u-flex-grow-1">
                  <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Aurel CIOBANU-DORDEA"
                    />
                  </h2>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                    Director
                  </p>
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                    DG Environment
                  </div>
                </div>
              </article>
            </div>

            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none"
                  style={{
                    backgroundImage:
                      'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  }}
                />

                <div className="ecl-u-flex-grow-1">
                  <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="T. W. SALMONOWICZ"
                    />
                  </h2>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                    Administrative Assistant
                  </p>
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                    DG Environment
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s ecl-u-media-bg-size-contain ecl-u-media-bg-repeat-none"
                  style={{
                    backgroundImage:
                      'url("https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg")',
                  }}
                />

                <div className="ecl-u-flex-grow-1">
                  <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Mr C. SOBOTTA"
                    />
                  </h2>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                    Policy Officer
                  </p>
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                    DG Environment
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="ecl-u-bg-blue-5 ecl-u-pv-l ecl-u-mt-xl ecl-u-mt-lg-3xl">
          <div className="ecl-container ecl-u-type-m">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
              Contact
            </h2>

            <div className="ecl-row">
              <div className="ecl-col-12 ecl-col-md-6">
                <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                  General contact
                </h3>

                <DescriptionList variant="horizontal" className="ecl-u-mt-l">
                  <DescriptionTerm>Name</DescriptionTerm>
                  <DescriptionDefinition>
                    Roberto Fallieri
                  </DescriptionDefinition>

                  <DescriptionTerm>Mobile phone</DescriptionTerm>
                  <DescriptionDefinition>
                    (0)2 44224411 (Comission switchboard)
                  </DescriptionDefinition>

                  <DescriptionTerm>Fixed phone</DescriptionTerm>
                  <DescriptionDefinition>
                    (0)2 00323311 (Commission switchboard)
                  </DescriptionDefinition>

                  <DescriptionTerm>Postal address</DescriptionTerm>
                  <DescriptionDefinition>
                    Directorate General for Environment
                    <br />
                    European Commission
                    <br />
                    DG ENV
                    <br />
                    B-1049 Brussels
                    <br />
                    Belgium
                  </DescriptionDefinition>

                  <DescriptionTerm>Building code</DescriptionTerm>
                  <DescriptionDefinition>L-56</DescriptionDefinition>

                  <DescriptionTerm>Room code</DescriptionTerm>
                  <DescriptionDefinition>08/4A</DescriptionDefinition>

                  <DescriptionTerm>Email</DescriptionTerm>
                  <DescriptionDefinition>
                    <Link
                      href="/example"
                      label="roberto.fallieri@europa.eu"
                      variant="standalone"
                    />
                  </DescriptionDefinition>
                </DescriptionList>

                <SocialMediaFollow
                  description="Social Media"
                  links={[
                    {
                      href: '/example',
                      label: 'Linkedin',
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
                  ]}
                />
              </div>

              <div className="ecl-col-12 ecl-col-md-6">
                <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                  Press contact
                </h3>

                <DescriptionList variant="horizontal" className="ecl-u-mt-l">
                  <DescriptionTerm>Name</DescriptionTerm>
                  <DescriptionDefinition>David Higgins</DescriptionDefinition>

                  <DescriptionTerm>Mobile phone</DescriptionTerm>
                  <DescriptionDefinition>
                    (0)2 12312331 (Comission switchboard)
                  </DescriptionDefinition>

                  <DescriptionTerm>Fixed phone</DescriptionTerm>
                  <DescriptionDefinition>
                    (0)2 12345678 (Commission switchboard)
                  </DescriptionDefinition>

                  <DescriptionTerm>Postal address</DescriptionTerm>
                  <DescriptionDefinition>
                    Directorate General for Environment
                    <br />
                    European Commission
                    <br />
                    DG ENV
                    <br />
                    B-1049 Brussels
                    <br />
                    Belgium
                  </DescriptionDefinition>

                  <DescriptionTerm>Building code</DescriptionTerm>
                  <DescriptionDefinition>L-56</DescriptionDefinition>

                  <DescriptionTerm>Room code</DescriptionTerm>
                  <DescriptionDefinition>08/4A</DescriptionDefinition>

                  <DescriptionTerm>Email</DescriptionTerm>
                  <DescriptionDefinition>
                    <Link
                      href="/example"
                      label="david.higgins@europa.eu"
                      variant="standalone"
                    />
                  </DescriptionDefinition>
                </DescriptionList>

                <SocialMediaFollow
                  description="Social Media"
                  links={[
                    {
                      href: '/example',
                      label: 'Linkedin',
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
                  ]}
                />
              </div>
            </div>

            <Link
              className="ecl-u-mt-l"
              href="/example"
              label="Ask a question"
              variant="standalone"
              icon={{
                shape: 'ui--corner-arrow',
                transform: 'rotate-90',
                size: 'fluid',
              }}
            />
          </div>
        </div>

        <div className="ecl-container ecl-u-type-m">
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
        </div>
      </main>
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

MainPolicyHubPage.propTypes = {
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

MainPolicyHubPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default MainPolicyHubPage;
