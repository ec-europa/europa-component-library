import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
// import PageHeader from '@ecl/ec-react-component-page-header';
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
  { label: 'Why this policy is necessary' },
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
  title: 'Why this policy is necessary',
};

const fileTranslations = {
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
};

const MainPolicyBackgroundPage = ({ siteHeader, footer, template }) => (
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
          <p className="ecl-u-type-paragraph ecl-u-mt-none">
            The human toll for poor air quality is worse than for road traffic
            accidents, making it the number one environmental cause of premature
            death in Europe, with over 390 000 premature deaths every years. It
            also impacts on quality of life by causing or exacerbating asthma
            and respiratory problems. Air pollution causes lost working days,
            and high healthcare costs, with vulnerable groups such as children,
            ashtmatics and the eldery the worst affected. It damages ecosystems
            through excess nitrogen pollution (eutrophication) and acid rain.
          </p>
          <p className="ecl-u-type-paragraph">
            To counter this, the European Union has set itself the goal to
            achieve levels of air quality that do not give rise to significant
            negative impacts on, and risks to, human health and the environment.
            Since the early 1970s, the EU has been working to improve air
            quality by controlling emissions of harmful substances into the
            atmosphere, improving fuel quality, and by integrating environmental
            protection requirements into the transport and energy sectors.
          </p>
          <p className="ecl-u-type-paragraph">
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
            className="ecl-u-mt-xl ecl-u-mt-lg-3xl"
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
          />

          <FileDownload
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
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
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
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
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title='"Cleaner air for all" - Factsheet about air pollution in the EU'
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
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Implementation of the HRAPIE Recommendations for European Air Pollution CBA work"
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
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Cost-benefit analysis of Final Policy Scenarios for the EU Clean Air Policy Package"
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
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Measures and costs for CH4 implementation by Member State"
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
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Cost-benefit Analysis of Scenarios for Cost-Effective Emission Controls after 2020"
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
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Costs, Benefits And Economic Impact Of The Eu Clean Air Strategy And Their Implications On Innovation And Competitiveness"
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
            translation={fileTranslations}
          />

          <h2 className="ecl-u-type-heading-2 ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            International air pollution policy
          </h2>

          <h3 className="ecl-u-type-heading-3 ecl-u-mt-l ecl-u-mb-none">
            Convention on Long Range Transboundary Air Pollution
          </h3>

          <p className="ecl-u-type-paragraph ecl-u-mt-m ecl-u-mt-lg-xs">
            In the international context, the EU Member States work closely
            together with other UNECE member countries to control international
            air pollution under the{' '}
            <Link
              href="/example"
              label="UNECE Convention on Long-Range Transboundary Air Pollution"
            />{' '}
            (the Air Convention). The Air Convention was adopted in 1979 and
            celebrates its 40th anniversary in 2019.
          </p>
          <p className="ecl-u-type-paragraph">
            Within the Air Convention framework, a number of task forces,
            centers and International Cooperative Programmes provide research,
            scientific assessments and dialogue on the common knowledge base on
            air quality issues.
          </p>
          <p className="ecl-u-type-paragraph">
            The Air Convention has been extended by{' '}
            <Link href="/example" label="eight Protocols" />. The European Union
            is party to seven of these Protocols. Notably, the original
            Gothenburg protocol was agreed in November 1999 and formed the basis
            for the original NEC Directive 2001/81/EC. The protocol was revised
            in 2012 and the reduction commitments established for 2020 for the
            new Directive on National Emission Reductions (Directive
            2016/2284/EU). The amended protocol was ratified by Council Decision
            (EU) 2017/1757in follow-up of the Commission Clean Air Policy
            Package.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-mb-none">
            The EU continues to work closely with the Air Convention to
            encourage ratification and implementation of the revised Protocol by
            the broadest range of parties, and to pursue further work on key
            areas such as Black Carbon and intercontinental transport of air
            pollution.
          </p>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-l ecl-u-mt-lg-3xl"
            title="United Nations Environment Assembly of the United Nations Environment Programme"
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
            translation={fileTranslations}
          />

          <h3 className="ecl-u-type-heading-3 ecl-u-mt-l ecl-u-mb-none">
            UNEA/UNEP
          </h3>

          <p className="ecl-u-type-paragraph ecl-u-mt-m ecl-u-mt-lg-xs">
            The European Commission and the EU Member States participated
            actively in the work on UN Environmental Assembly resolution
            UNEP/EA.3/Res.8 (December 2017) on Preventing and reducing air
            pollution to improve air quality globally.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-mb-none">
            Within the UN Environmental Programme, the Stockholm Convention on
            Persistent Organic Pollutants, adopted on 22 May 2001, also provides
            a complementing international framework of relevance for EU air
            quality.
          </p>

          <h3 className="ecl-u-type-heading-3 ecl-u-mt-l">
            UN Sustainable Development Goals (SDGs)
          </h3>

          <p className="ecl-u-type-paragraph ecl-u-mt-m ecl-u-mt-lg-xs ecl-u-mb-none">
            Several of the <Link href="/example" label="UN SDGs" /> are directly
            or indirectly linked to improvments in air quality.
          </p>

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

MainPolicyBackgroundPage.propTypes = {
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

MainPolicyBackgroundPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default MainPolicyBackgroundPage;
