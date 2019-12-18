import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import FileDownload from '@ecl/ec-react-component-file';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import Link from '@ecl/ec-react-component-link';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import Timeline2 from '@ecl/ec-react-component-timeline2';
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
  { label: 'The Commissioners', href: '/example' },
  { label: 'Vytenis Andriukaitis' },
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
  meta: 'Commissioner (2014 - 2019)',
  title: 'Vytenis Andriukaitis',
  description: 'Health & Food Safety',
};

const PersonPage = ({ siteHeader, footer, template }) => (
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
            <img
              className="ecl-u-width-100"
              alt="example"
              src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            />
            <aside className="ecl-u-height-100">
              <InpageNavigation
                data-ecl-auto-init="InpageNavigation"
                title="Page contents"
                links={[
                  {
                    href: '#contact',
                    label: 'Contact',
                  },
                  {
                    href: '#biography',
                    label: 'Biography',
                  },
                  {
                    href: '#responsibilities',
                    label: 'Responsibilities',
                  },
                  {
                    href: '#events',
                    label: 'Events',
                  },
                  {
                    href: '#media',
                    label: 'Media',
                  },
                  {
                    href: '#news',
                    label: 'News',
                  },
                  {
                    href: '#team',
                    label: 'Team',
                  },
                  {
                    href: '#hearings',
                    label: 'European Parliament hearings',
                  },
                  {
                    href: '#declaration',
                    label: 'Declaration of interests',
                  },
                  {
                    href: '#transparency',
                    label: 'Transparency',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <img
                className="ecl-u-width-100"
                alt="example"
                src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              />
              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="contact"
              >
                Contact
              </h2>
              <DescriptionList variant="horizontal">
                <DescriptionTerm>Name</DescriptionTerm>
                <DescriptionDefinition>
                  Vytenis Andriukaitis
                </DescriptionDefinition>
                <DescriptionTerm>Title</DescriptionTerm>
                <DescriptionDefinition>
                  Commissioner (2014 - 2019)
                </DescriptionDefinition>
                <DescriptionTerm>Organization</DescriptionTerm>
                <DescriptionDefinition>
                  Health & Food Safety
                </DescriptionDefinition>
              </DescriptionList>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mv-none">
                General contact
              </h3>

              <DescriptionList variant="horizontal">
                <DescriptionTerm>Email</DescriptionTerm>
                <DescriptionDefinition>
                  <a
                    className="ecl-link"
                    href="mailto:cab-andriukatis-webpage@ec.europa.eu"
                  >
                    cab-andriukatis-webpage@ec.europa.eu
                  </a>
                </DescriptionDefinition>
                <DescriptionTerm>Address</DescriptionTerm>
                <DescriptionDefinition>
                  European Commission
                  <br />
                  Rue de la Loi / Wetstraat 200
                  <br />
                  1049 Brussels
                  <br />
                  Belgium
                </DescriptionDefinition>
                <DescriptionTerm>Social media</DescriptionTerm>
                <DescriptionDefinition className="ecl-u-mv-none ecl-u-pv-none">
                  <SocialMediaFollow
                    className="ecl-u-mt-m ecl-u-pa-none ecl-u-bg-white"
                    links={[
                      {
                        href: '/example',
                        label: 'Twitter',
                        variant: 'standalone',
                        iconPosition: 'before',
                        icon: [
                          {
                            shape: 'twitter',
                            size: 's',
                          },
                          {
                            shape: 'twitter_hover',
                            size: 's',
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
                            size: 's',
                          },
                          {
                            shape: 'facebook_hover',
                            size: 's',
                          },
                        ],
                      },
                    ]}
                  />
                </DescriptionDefinition>
              </DescriptionList>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mv-none">
                Press contact
              </h3>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                Media enquiries should be directed to the{' '}
                <Link
                  href="/example"
                  label="European Commission press service"
                />
                .
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="biography"
              >
                Biography
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                Lithuanian nationality. Married with three children.
              </p>

              <Timeline2
                id="timeline"
                data-ecl-template-timeline
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
                    id: 0,
                    label: '2014 - present',
                    title: 'Commissioner for Health and Food Safety',
                  },
                  {
                    id: 1,
                    label: '2014',
                    title: 'Vice-President of the World Health Assembly',
                  },
                  {
                    id: 2,
                    label: '2012 - 2014',
                    title: 'Minister for Health',
                  },
                  {
                    id: 3,
                    label: '2001 - 2004',
                    title: 'Deputy Speaker of the Lithuanian Parliament',
                  },
                  {
                    id: 4,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 5,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 6,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 7,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 8,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 9,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 10,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 11,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 12,
                    label: '1984',
                    title: "Master's degree in History, Vilnius University",
                  },
                  {
                    id: 13,
                    label: '1975',
                    title:
                      "Medical doctor's degree, Kaunas Institute of Medicine",
                  },
                ]}
              />

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-l"
                title="Vytenis Andriukaitis' CV"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-ma-none"
                id="responsibilities"
              >
                Responsibilities
              </h2>

              <UnorderedList>
                <UnorderedListItem>
                  modernising and simplifying EU food safety policy while
                  keeping the current high level of safety and ensuring existing
                  policies have maximum effect.
                </UnorderedListItem>
                <UnorderedListItem>
                  ensuring the Commission is ready in supporting the EU&apos;s
                  capacity to deal with crisis situations in food safety or
                  pandemics
                </UnorderedListItem>
                <UnorderedListItem>
                  reviewing the laws that oblige the Commission to authorise
                  genetically modified organisms (GMOs), even when a majority of
                  national governments oppose them.
                </UnorderedListItem>
              </UnorderedList>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mv-none">
                Mission letter
              </h3>
              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                Ursula von der Leyen&apos;s personal letter to Vytenis
                Andriukaitis, outlining his role in the Commission.
              </p>
              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-l"
                title="President Junker's Mission Letter to Vytenis Andriukaitis"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
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

PersonPage.propTypes = {
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

PersonPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default PersonPage;
