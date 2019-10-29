import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
// import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
// import SocialMediaShare from '@ecl/ec-react-component-social-media-share';

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

    <div className="ecl-u-pv-3xl">
      <main>
        <div className="ecl-container">
          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-6">
              <p className="ecl-u-type-paragraph">
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

              <h2 className="ecl-u-type-heading-2 ecl-u-mt-3xl ecl-u-mb-none">
                Objectives
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-mt-l">
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
              <div className="ecl-u-bg-blue-5 ecl-u-border-all ecl-u-border-color-blue-25 ecl-u-pv-l ecl-u-ph-s">
                <DescriptionList variant="horizontal">
                  <DescriptionTerm>Policy period</DescriptionTerm>
                  <DescriptionDefinition>
                    01.01.2015 - 01.01.2030
                  </DescriptionDefinition>

                  <DescriptionTerm>Connected topics</DescriptionTerm>
                  <DescriptionDefinition>
                    <link
                      href="/example"
                      label="Environment"
                      variant="standalone"
                    />
                  </DescriptionDefinition>

                  <DescriptionTerm>
                    Connected Commission priorities
                  </DescriptionTerm>
                  <DescriptionDefinition>
                    <Link
                      href="/example"
                      label="Energy union and climate"
                      variant="standalone"
                    />
                  </DescriptionDefinition>

                  <DescriptionTerm>Previous version</DescriptionTerm>
                  <DescriptionDefinition>
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
