import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';

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
  { label: 'Clean air', href: '/example' },
  { label: 'Resources' },
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
  title: 'Resources',
};

const MainPolicyResourcesPage = ({ siteHeader, footer, template }) => (
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
        <main>
          <p className="ecl-u-type-paragraph ecl-u-mv-none">
            The European Environment Agency&apos;s &apos;European Air Quality
            Index&apos; informs citizens about air quality levels based on data
            reported by Member States, and an &apos;Urban PM2.5 Atlas&apos; from
            the Joint Research Centre of the European Commission illustrates the
            main sources of particulate matter pollution for 150 cities across
            Europe will make.
          </p>
          <Link
            className="ecl-u-mt-l"
            href="/example"
            label="Connected results"
            variant="standalone"
            icon={{
              shape: 'ui--corner-arrow',
              transform: 'rotate-90',
              size: 'fluid',
            }}
          />
          <br />
          <Link
            className="ecl-u-mt-l"
            href="/example"
            label="Connected objectives"
            variant="standalone"
            icon={{
              shape: 'ui--corner-arrow',
              transform: 'rotate-90',
              size: 'fluid',
            }}
          />

          <h2 className="ecl-u-type-heading-2 ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Databases and other resources
          </h2>

          <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m ecl-u-mt-m ecl-u-mt-lg-l">
            <div className="ecl-u-flex-grow-1">
              <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
                <Link
                  href="/example"
                  variant="standalone"
                  label="European Air Quality Index"
                />
              </div>
              <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                The European Environment Agency now offers an Air Quality Index
                that allows citizens to monitor air quality in real time.
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

          <h2 className="ecl-u-type-heading-2 ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Report
          </h2>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-l"
            title="Services to develop an EU Air Quality Index"
            language="English"
            meta="(392 KB - PDF - 2 pages)"
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

MainPolicyResourcesPage.propTypes = {
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

MainPolicyResourcesPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default MainPolicyResourcesPage;
