import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import Select from '@ecl/ec-react-component-select';
import TextInput from '@ecl/ec-react-component-text-input';
import Link from '@ecl/ec-react-component-link';
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
  { label: 'The Commissioners', href: '/example' },
  { label: 'Vytenis Andriukaitis', href: '/example' },
  { label: "Vytenis Andriukaitis' team" },
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
  meta: 'TEAM',
  title: "Vytenis Andriukaitis' team",
  description: "Vytenis Andriukaitis' team supports him in his daily work.",
};

const PersonListPage = ({ siteHeader, footer, template }) => (
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
      <div className="ecl-container">
        <div className="ecl-row">
          <aside className="ecl-col-12 ecl-col-lg-3">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-lg-none ecl-u-mv-none">
              People (11)
            </h2>
            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-none">
              Filter by
            </h3>
            <form>
              <TextInput id="facet-name" label="Name" width="m" />
              <Select
                id="facet-team"
                groupClassName="ecl-u-mt-l"
                label="Team"
                width="m"
                options={[]}
              />
              <Select
                id="facet-portfolio"
                groupClassName="ecl-u-mt-l"
                label="Portfolio"
                width="m"
                options={[]}
              />

              <Button className="ecl-u-mt-l" label="Search" variant="search" />
              <br />
            </form>
          </aside>
          <main className="ecl-col-12 ecl-col-lg-9">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-none ecl-u-d-lg-block ecl-u-mv-none">
              People (11)
            </h2>

            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-l ecl-u-media-a-m"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  Arūnas Vinčiūnas
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-uppercase ecl-u-type-color-grey-75 ecl-u-mt-none ecl-u-type-s">
                  Head of Cabinet
                </p>
                <DescriptionList
                  variant="horizontal"
                  className="ecl-u-mb-l ecl-u-mb-lg-l"
                >
                  <DescriptionTerm>Email</DescriptionTerm>
                  <DescriptionDefinition>
                    <a
                      className="ecl-link"
                      href="mailto:cab-andriukatis-webpage@ec.europa.eu"
                    >
                      cab-andriukatis-webpage@ec.europa.eu
                    </a>
                  </DescriptionDefinition>
                  <DescriptionTerm>Responsibilities</DescriptionTerm>
                  <DescriptionDefinition>
                    <UnorderedList className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-l ecl-u-pl-s">
                      <UnorderedListItem>one</UnorderedListItem>
                      <UnorderedListItem>two</UnorderedListItem>
                      <UnorderedListItem>three</UnorderedListItem>
                    </UnorderedList>
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
              </div>
            </article>

            <SocialMediaShare
              className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
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

PersonListPage.propTypes = {
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

PersonListPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default PersonListPage;
