import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
// import PageHeader from '@ecl/ec-react-component-page-header';

// Templates
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';
import FooterCore from '@ecl/ec-react-component-footer-core';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';

const MainPolicyBackgroundPage = ({
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
            The human toll for poor air quality is worse than for road traffic
            accidents, making it the number one environmental cause of premature
            death in Europe, with over 390 000 premature deaths every years. It
            also impacts on quality of life by causing or exacerbating asthma
            and respiratory problems. Air pollution causes lost working days,
            and high healthcare costs, with vulnerable groups such as children,
            ashtmatics and the eldery the worst affected. It damages ecosystems
            through excess nitrogen pollution (eutrophication) and acid rain.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-mb-none">
            To counter this, the European Union has set itself the goal to
            achieve levels of air quality that do not give rise to significant
            negative impacts on, and risks to, human health and the environment.
            Since the early 1970s, the EU has been working to improve air
            quality by controlling emissions of harmful substances into the
            atmosphere, improving fuel quality, and by integrating environmental
            protection requirements into the transport and energy sectors.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-mb-none">
            As a result, much progress has been made in tackling air polluants
            such as sulphur dioxide, lead, nitrogen oxides, carbon monoxide and
            benzene. Yet, and despite the progress made to date, poor air
            quality continues to cause serious and avoidable problems. As a next
            step towards improving air quality, the European Commission adpoted
            in 2013 a Clear Air Policy Package, including a Clean Air Programme
            for Europe setting objectives for 2020 and 2030, and accompanying
            legislative measures.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-mb-none">
            <Link
              href="/example"
              label="Cleaner air for all facts and figures"
            />{' '}
            is a dynamic page with animations that present general facts and
            figures about the clean air policy.
          </p>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-3xl"
            title='"Clean air for all" - General information'
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
            title="Brochure in lower-cost sensors for mesuring air quality"
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
            title="Citizen's summary on a New Air Policy for the EU"
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

MainPolicyBackgroundPage.propTypes = {
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

MainPolicyBackgroundPage.defaultProps = {
  siteHeader: {},
  // pageHeader: {},
  footer: {},
  template: '',
};

export default MainPolicyBackgroundPage;
