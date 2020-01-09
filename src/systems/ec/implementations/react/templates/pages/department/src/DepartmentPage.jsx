/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import ContentItem from '@ecl/ec-react-composition-content-item';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import FileDownload from '@ecl/ec-react-component-file';
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
  { label: 'Departments and executive agencies', href: '/example' },
  { label: 'Communication' },
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
  meta: 'Directorate-general | COMM',
  title: 'Communication',
  description:
    'The Directorate-General for Communication is the Commission department responsible for explaining EU policies to outside audiences. It keeps the Commission abreast of political developments and of trends in public opinion and the media. It also coordinates communication campains within the Commission.',
};

const DepartmentPage = ({ siteHeader, footer, template }) => (
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
      <div className="ecl-container ecl-u-type-m">
        <div className="ecl-row" data-ecl-inpage-navigation-container>
          <div className="ecl-col-12 ecl-col-lg-3">
            <aside className="ecl-u-height-100">
              <InpageNavigation
                data-ecl-auto-init="InpageNavigation"
                title="Page contents"
                links={[
                  {
                    href: '#responsibilities',
                    label: 'Responsibilities',
                  },
                  {
                    href: '#plans-reports',
                    label: 'Plans and reports',
                  },
                  {
                    href: '#europe-direct',
                    label: 'Europe direct',
                  },
                  {
                    href: '#leadership-organisation',
                    label: 'Leadership and organization',
                  },
                  {
                    href: '#news',
                    label: 'News',
                  },
                  {
                    href: '#contact',
                    label: 'Contact',
                  },
                  {
                    href: '#related',
                    label: 'Related links',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="responsibilities"
              >
                Responsibilities
              </h2>

              <UnorderedList className="ecl-u-mt-l">
                <UnorderedListItem>
                  define and monitor the Commission&apos;s{' '}
                  <Link href="/example" label="corporate image" />
                </UnorderedListItem>
                <UnorderedListItem>
                  communication to the media and public on{' '}
                  <Link href="/example" label="political priorites" /> and{' '}
                  <Link href="/example" label="topics" /> of political
                  importance and/or public interest
                </UnorderedListItem>
                <UnorderedListItem>
                  provide{' '}
                  <Link
                    href="/example"
                    label="corporate communication tools and expertise"
                  />{' '}
                  to other{' '}
                  <Link href="/example" label="Commission departments" />
                </UnorderedListItem>
                <UnorderedListItem>
                  un pan-European campains on the priorities of the European
                  Union (eg: <Link href="/example" label="InvestEU" />,{' '}
                  <Link href="/example" label="EUandME" /> and{' '}
                  <Link href="/example" label="EU Protects" />)
                </UnorderedListItem>
                <UnorderedListItem>
                  coordinate projects with other EU institutions and national
                  governments
                </UnorderedListItem>
                <UnorderedListItem>
                  inform the Commission about{' '}
                  <Link href="/example" label="public opinion" /> and
                  reputational risks in EU countries
                </UnorderedListItem>
                <UnorderedListItem>
                  report to the Commission on politiacl developments accross the
                  EU
                </UnorderedListItem>
                <UnorderedListItem>
                  help evaluate the Commission&apos;s{' '}
                  <Link href="/example" label="communication activities" />
                </UnorderedListItem>
                <UnorderedListItem>
                  provide the{' '}
                  <Link href="/example" label="Spokesperson's Service" />
                </UnorderedListItem>
              </UnorderedList>

              <div className="ecl-u-mt-m ecl-u-mt-lg-l ecl-u-pv-m ecl-u-pv-lg-l ecl-u-border-top ecl-u-border-bottom ecl-u-border-color-grey-25">
                <Link
                  variant="standalone"
                  label="Mission statement"
                  href="/example"
                  icon={{
                    shape: 'ui--corner-arrow',
                    size: 'm',
                    transform: 'rotate-90',
                  }}
                />
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="plans-reports"
              >
                Plans and reports
              </h2>

              <ContentItem
                className="ecl-u-mt-l"
                title={{
                  href: '/example',
                  label: 'Commission work programme',
                }}
                description={{
                  label:
                    'Overview of institution-wide deliverables for current year',
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Strategic plan',
                }}
                description={{
                  label: 'Department strategy, objectives for 2016-2020',
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Management plan',
                }}
                description={{
                  label:
                    'Department forecasted outputs, activities, resources for current year',
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Annual activity report',
                }}
                description={{
                  label:
                    'Department achievements, resources used during previous year',
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Annual work programme',
                }}
                description={{
                  label:
                    'Budget line for certain policies and funding programmes for current year',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="europe-direct"
              >
                Europe direct
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                Budget line for certain policies and funding programmes for
                current year
              </p>

              <FileDownload
                className="ecl-u-mt-l"
                title="Europe Direct - Annual activity report 2017"
                language="English"
                meta="(571.7 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <Link
                className="ecl-u-mt-l"
                variant="standalone"
                label="Europe Direct - Annual activity reports"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'm',
                  transform: 'rotate-90',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="leadership-organisation"
              >
                Leadership and organisation
              </h2>

              <ContentItem
                className="ecl-u-mt-l"
                title={{
                  href: '/example',
                  label: 'Jean-Claude Juncker',
                }}
                description={{
                  className: 'ecl-u-type-uppercase ecl-u-type-s',
                  label: 'President',
                }}
                images={{
                  position: 'left',
                  mobile: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                  desktop: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Pia Ahrenkilde Hansen',
                }}
                description={{
                  className: 'ecl-u-type-uppercase ecl-u-type-s',
                  label: 'Director-general',
                }}
                images={{
                  position: 'left',
                  mobile: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                  desktop: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Sixtine Bouygues',
                }}
                description={{
                  className: 'ecl-u-type-uppercase ecl-u-type-s',
                  label: 'Deputy Director-general',
                }}
                images={{
                  position: 'left',
                  mobile: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                  desktop: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                }}
              />

              <ContentItem
                title={{
                  href: '/example',
                  label: 'Margaritis Schinas',
                }}
                description={{
                  className: 'ecl-u-type-uppercase ecl-u-type-s',
                  label: 'Deputy Director-general',
                }}
                images={{
                  position: 'left',
                  mobile: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                  desktop: {
                    alt: 'Example image',
                    src:
                      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
                  },
                }}
              />

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-l"
                title="Communication - Organisation chart"
                language="English"
                meta="(1.4 Mb - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
                translation={{
                  toggle: {
                    label: 'Other languages (3)',
                  },
                  items: [
                    {
                      title: 'български',
                      meta: '(392 KB - PDF - 2 pages)',
                      lang: 'bg',
                      download: {
                        label: 'Download',
                        href: '/example#bg',
                      },
                    },
                    {
                      title: 'español',
                      meta: '(392 KB - PDF - 2 pages)',
                      lang: 'es',
                      download: {
                        label: 'Download',
                        href: '/example#es',
                      },
                    },
                    {
                      title: 'français',
                      meta: '(392 KB - PDF - 2 pages)',
                      lang: 'fr',
                      download: {
                        label: 'Download',
                        href: '/example#fr',
                      },
                    },
                  ],
                }}
              />

              <Link
                className="ecl-u-mt-l"
                variant="standalone"
                label="Search for staff"
                href="/example"
                icon={{
                  shape: 'ui--external',
                  size: 's',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="news"
              >
                News
              </h2>

              <ContentItem
                className="ecl-u-mt-l"
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>News article</span> | <time dateTime='2019-12-15'>15 December 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'New stockshot: Vocational education and training accross the EU',
                }}
                description={{
                  label:
                    'New stockshot: Vocational education and training accross the EU',
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
              />

              <ContentItem
                className="ecl-u-mt-l"
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>News article</span> | <time dateTime='2019-02-01'>1 February 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Understanding the EU - promotional material for publications',
                }}
                description={{
                  label:
                    'The "Citizens information" unit of DG COMM has produced some promotional items that might help you publicise EU publications. We have in particual bookmarks, but also pens, bags ans other goodies.',
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
              />

              <ContentItem
                className="ecl-u-mt-l"
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>News article</span> | <time dateTime='2015-12-02'>2 December 2015</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Juncker talks to citizens, DG COMM backs up with solid reading matter',
                }}
                description={{
                  label:
                    "Jean-Clause Juncker was seemingly not afraid of anything: just three days after the terrorist attacks in Paris, the Commission President honoured his commitment to attend a Citizens' Dialogue in central Brussels. For one hour, President Jucker listened to the audience, answered their questions and had a frank and forthright exchange of views on the issues of most concern to the majority on Europeans. In the city's beautiful 'Bozar' concert hall, designed by Belgium's famous architect Victor Horta, around 850 citizens were given the opportunity to meet the Commission's highest respresentative. Out in the lobby, DG COMM' Citizens' Information Unit handed out some of the Commission's publications to participants.",
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
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="contact"
              >
                Contact
              </h2>

              <div className="ecl-u-pv-m ecl-u-pv-lg-l">
                <Link
                  variant="standalone"
                  label="Find a Commission building"
                  href="/example"
                  icon={{
                    shape: 'ui--corner-arrow',
                    size: 'm',
                    transform: 'rotate-90',
                  }}
                />
              </div>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mv-none">
                General contact
              </h3>

              <DescriptionList variant="horizontal" className="ecl-u-mt-l">
                <DescriptionTerm>Fixed phone</DescriptionTerm>
                <DescriptionDefinition>
                  +32 2 299 11 11 (Commission switchboard)
                </DescriptionDefinition>

                <DescriptionTerm>Postal address</DescriptionTerm>
                <DescriptionDefinition>
                  Directorate-General for Communication
                  <br />
                  European Commission
                  <br />
                  1049 Bruxelles/Brussel
                  <br />
                  Belgium
                </DescriptionDefinition>
              </DescriptionList>

              <div className="ecl-u-pv-m ecl-u-pv-lg-l ecl-u-border-bottom ecl-u-border-color-grey-25">
                <Link
                  variant="standalone"
                  label="Find press contacts"
                  href="/example"
                  icon={{
                    shape: 'ui--corner-arrow',
                    size: 'm',
                    transform: 'rotate-90',
                  }}
                />
              </div>

              <div className="ecl-u-pv-m ecl-u-pv-lg-l ecl-u-border-bottom ecl-u-border-color-grey-25">
                <Link
                  variant="standalone"
                  label="Ask a question"
                  href="/example"
                  icon={{
                    shape: 'ui--corner-arrow',
                    size: 'm',
                    transform: 'rotate-90',
                  }}
                />
              </div>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="related"
              >
                Related links
              </h2>

              <UnorderedList className="ecl-u-mt-l" variant="no-bullet">
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Press service"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Tender opportunities"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Funding opportunities"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Evaluations of European Commission activities"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Consultations on communication activities"
                  />
                </UnorderedListItem>
              </UnorderedList>

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

DepartmentPage.propTypes = {
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

DepartmentPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default DepartmentPage;
