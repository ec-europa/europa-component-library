import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
  { label: 'Research and innovation', href: '/example' },
  { label: 'Research by area', href: '/example' },
  { label: 'Oceans and seas', href: '/example' },
  { label: 'Integrated Maritime Policy' },
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
  title: 'Integrated Maritime Policy',
  description:
    'Marine research and innovation is part of an integrated strategy which deals with 5 specific areas. These are detailed below.',
};

const ResearchAreaSpokePage = ({ siteHeader, footer, template }) => (
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
                    href: '#what',
                    label: 'What the Integrated Maritime policy is',
                  },
                  {
                    href: '#blue-growth',
                    label: 'Blue growth',
                  },
                  {
                    href: '#maritime-spatial-planning',
                    label: 'Maritime spatial planning',
                  },
                  {
                    href: '#integrated-maritime-surveillance',
                    label: 'Integrated maritime surveillance',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h3
                className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mv-none"
                id="what"
              >
                What the Integrated Maritime policy is
              </h3>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                The <Link href="/example" label="Integrated Maritime Policy" />{' '}
                seeks to provide a more coherent approach to maritime issue,
                which increased coordination between different policy areas.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                There are 5 cross-cutting policies in the Integrated Maritime
                Policy where research and innovation plays a large part - blue
                growth, marine data and knowledge, maritime spatial planning,
                integrated maritime suveillance, and sea basin strategies.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="blue-growth"
              >
                Blue growth
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                The policy is the marine and maritime contribution to achieving
                the <Link href="/example" label="Europe 2020 strategy" /> for
                smart, sustainable and inclusive growth.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Related to this is the Commission communication:{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="Innovation in the Blue Economy: realising the potential of our
                  seas and oceans for jobs and growth"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                <Link href="/example" label="Horizon 2020" /> has Blue Growth
                calls for proposal dedicated to implementing the strategy.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="maritime-spatial-planning"
              >
                Maritime spatial planning
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-l">
                There is an increasing demand for physical space for new
                maritime activities ranging from renewable energy to aquaculture
                installations.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Coherent planning and scientific knowledge are needed to support
                the development of stratetic plans for regulation, zoning,
                management, protection of the marine environment.
              </p>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                Some examples
              </h3>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  the interaction between aquaculture and the marine environment
                  and the resulting competition for space has been addressed in
                  the{' '}
                  <Link
                    href="/example"
                    variant="external"
                    label="COEXIST"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  project
                </UnorderedListItem>
                <UnorderedListItem>
                  similarly, the{' '}
                  <Link
                    href="/example"
                    variant="external"
                    label="PERSEUS"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  project helped to foster and strengthen cooperation and paved
                  the way to advance the work with international partners in the
                  Mediterranean, with the{' '}
                  <Link
                    href="/example"
                    variant="external"
                    label="BLUEMED initiative"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />
                  , and also the Black Sea.
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Read more about{' '}
                <Link href="/example" label="maritime spatial planning" />.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="integrated-maritime-surveillance"
              >
                Integrated maritime surveillance
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                Integrated maritime surveillance provides authorities interested
                or active in maritime surveillance with ways to exchange
                information and data. Sharing data makes surveillance cheaper
                and more effective.
              </p>

              <h2 className="ecl-u-type-heading-2 ecl-u-mt-l ecl-u-mb-none ecl-u-type-color-black">
                Atlantic Ocean
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                The EU pursued the implementation of activities under the{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="All Atlantic Ocean Research Alliance"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />{' '}
                with the
              </p>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  signing of the EU-USA-Canada{' '}
                  <Link href="/example" label="Galway Statement" /> on Atlantic
                  Ocean Cooperation in 2013.
                </UnorderedListItem>
                <UnorderedListItem>
                  signing of the EU-Brazil-South Africa{' '}
                  <Link href="/example" label="Belem Statement" /> on Atlantic
                  Ocean Cooperation in 2013.
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                There are now over 500 international research teams working
                together towards a healthy, productive, secure and resilient
                Atlantic Ocean.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                There are also wide-ranging cooperation agreements with other
                countries.
              </p>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  <Link
                    variant="external"
                    href="/example"
                    label="European Commission and Argentina"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  signed administrative agreement in marine research and
                  innovation cooperation.
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    variant="external"
                    href="/example"
                    label="European Commission and Cabo Verde"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  signed administrative agreement in marine research and
                  innovation cooperation.
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                The ambition is to have more than 1,000 research teams funded by
                Horizon 2020 working in Antractica to the Arctic by 2020.
              </p>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none">
                <UnorderedListItem>
                  <Link
                    href="/example"
                    label="EU funded research projects with Cabo Verde partners"
                  />{' '}
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="/example"
                    label="EU funded research projects on Atlantic Ocean"
                  />{' '}
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                The Galway and Belem Statements address the challenges put
                forward in the EU Atlantic Strategy and its associated action
                plan, and are recognised as a major achievements of both the
                strategy and the action plan.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-black ecl-u-mt-m ecl-u-mb-none">
                <Link href="/example" label="More information" /> about Atlantic
                Ocean sea basin strategies.
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

ResearchAreaSpokePage.propTypes = {
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

ResearchAreaSpokePage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default ResearchAreaSpokePage;
