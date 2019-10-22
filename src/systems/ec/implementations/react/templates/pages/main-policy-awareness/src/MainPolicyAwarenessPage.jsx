import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DateBlock from '@ecl/ec-react-component-date-block';
import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
// import PageHeader from '@ecl/ec-react-component-page-header';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';

// Templates
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';
import FooterCore from '@ecl/ec-react-component-footer-core';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';

const MainPolicyAwarenessPage = ({
  siteHeader,
  /* pageHeader, */ footer,
  template,
}) => (
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
    {/* <PageHeader {...pageHeader} /> */}
    <div className="ecl-u-pv-3xl">
      <div className="ecl-container">
        <main>
          <p className="ecl-u-type-paragraph ecl-u-mv-none">
            Public relations campaings that aim to increase public awareness
            towards the problems Europe encounters when it comes to air
            pollution. The campain offers the solution incorporated in the new
            policy package to clean up Europe&apos;s air on multiple levels.
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

          <h2 className="ecl-u-type-heading-2 ecl-u-mt-3xl ecl-u-mb-none">
            Events, communication and awareness-rising
          </h2>

          <h3 className="ecl-u-type-heading-3 ecl-u-mt-l ecl-u-mb-none">
            Websites
          </h3>

          <article className="ecl-u-pv-m">
            <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
              <Link
                href="/example"
                variant="standalone"
                label="New policy package to clean up Europe's air"
              />
            </div>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-xs">
              LIVE EC press conference on Environment. The new policy package to
              clean up Europe&apos;s air.
            </p>
          </article>

          <h3 className="ecl-u-type-heading-3 ecl-u-mt-3xl ecl-u-mb-none">
            Events related to this action
          </h3>

          <article className="ecl-u-d-flex ecl-u-pv-m">
            <div className="ecl-u-flex-grow-0 ecl-u-mr-m">
              <DateBlock
                dateTime="2019-05-26"
                day="26"
                month="May"
                monthFull="May"
                year="2019"
              />
            </div>
            <div className="ecl-u-flex-grow-1">
              <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                ONLINE PRESS CONFERENCE |{' '}
                <time dateTime="2019-05-26">26 MAY</time>
                {' - '}
                <time dateTime="2019-06-20">20 JUN</time>
              </div>
              <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                <Link
                  href="/example"
                  variant="standalone"
                  label="New policy package to clean up Europe's air"
                />
              </div>
              <p className="ecl-u-type-paragraph-s ecl-u-type-color-grey ecl-u-mt-xs">
                With: Jean-Claude Juncker
              </p>
            </div>
          </article>

          <h3 className="ecl-u-type-heading-3 ecl-u-mt-3xl ecl-u-mb-none">
            Communication material
          </h3>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-l"
            title="Air quality press release: Commission takes action to protect citizens from air pollution"
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
                label: 'Other languages (22)',
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

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-3xl"
            title="Environment press release: New policy package to clean up Europe's air"
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
                label: 'Other languages (22)',
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

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-3xl"
            title="Questions and answers on the EU Clean Air Policy Package"
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
                label: 'Other languages (22)',
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

MainPolicyAwarenessPage.propTypes = {
  siteHeader: PropTypes.oneOfType([
    PropTypes.shape(SiteHeaderCore.propTypes),
    PropTypes.shape(SiteHeaderHarmonised.propTypes),
    PropTypes.shape(SiteHeaderStandardised.propTypes),
  ]),
  // pageHeader: PropTypes.shape(PageHeader.propTypes),
  footer: PropTypes.oneOfType([
    PropTypes.shape(FooterCore.propTypes),
    PropTypes.shape(FooterHarmonised.propTypes),
    PropTypes.shape(FooterStandardised.propTypes),
  ]),
  template: PropTypes.string,
};

MainPolicyAwarenessPage.defaultProps = {
  siteHeader: {},
  // pageHeader: {},
  footer: {},
  template: '',
};

export default MainPolicyAwarenessPage;
