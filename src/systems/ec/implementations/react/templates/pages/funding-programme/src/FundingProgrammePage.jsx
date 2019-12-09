import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
  { label: 'Funding, tenders', href: '/example' },
  { label: 'Funding opportunities', href: '/example' },
  { label: 'Overview of funding programmes', href: '/example' },
  { label: 'European structural and investment funds' },
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
  title: 'European structural and investment funds',
  description:
    'The European structural and investment funds are: European regional development fund, European social fund, Cohesion fund, European agricultural fund for rural development, European maritime and fisheries fund.',
};

const FundingProgrammePage = ({ siteHeader, footer, template }) => (
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
                    href: '#description',
                    label: 'Description',
                  },
                  {
                    href: '#latest',
                    label: 'Latest',
                  },
                  {
                    href: '#documents',
                    label: 'Documents',
                  },
                  {
                    href: '#contact',
                    label: 'Contact',
                  },
                  {
                    href: '#related',
                    label: 'Related',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="description"
              >
                Description
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tempus enim sed massa vulputate, id finibus nulla
                eleifend. Sed placerat ligula ut augue ultrices, non gravida
                odio mattis.
              </p>

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

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="documents"
              >
                Documents
              </h2>

              <FileDownload
                className="ecl-u-mt-m"
                title="Call for proposals - FISMA/2015/135/D"
                language="English"
                meta="(104.1 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <FileDownload
                className="ecl-u-mt-m"
                title="FISMA/2015/135/D - clarification"
                language="English"
                meta="(28.9 KB - PDF)"
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
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="contact"
              >
                Contact
              </h2>

              <DescriptionList variant="horizontal" className="ecl-u-mt-m">
                <DescriptionTerm>Name</DescriptionTerm>
                <DescriptionDefinition>Christian Windand</DescriptionDefinition>

                <DescriptionTerm>Email</DescriptionTerm>
                <DescriptionDefinition>
                  ecfin-pericles@ec.europa.eu
                </DescriptionDefinition>
              </DescriptionList>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="related"
              >
                Related
              </h2>

              <UnorderedList className="ecl-u-mt-m" variant="no-bullet">
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Economy, finance and the euro"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Economy, finance and the euro"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Economy, finance and the euro"
                  />
                </UnorderedListItem>
              </UnorderedList>

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

FundingProgrammePage.propTypes = {
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

FundingProgrammePage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default FundingProgrammePage;
