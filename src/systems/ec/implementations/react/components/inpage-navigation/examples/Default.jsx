import React from 'react';
import VanillaInpageNavigation from '@ecl/ec-component-inpage-navigation';
import demoContent from '@ecl/ec-specs-inpage-navigation/demo/data';
import { loremIpsum } from 'lorem-ipsum';
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import FooterCore from '@ecl/ec-react-component-footer-core';
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-core/demo/data--simple';
import siteHeaderContent from '@ecl/ec-specs-site-header-core/demo/data--en';
import footerContent from '@ecl/ec-specs-footer-core/demo/data';

import { InpageNavigation } from '../src/InpageNavigation';

export default class DefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.vanillaInpageNavigation = null;
  }

  componentDidMount() {
    const element = document.querySelector('[data-ecl-inpage-navigation]');
    this.vanillaInpageNavigation = new VanillaInpageNavigation(element);
    this.vanillaInpageNavigation.init();
  }

  componentWillUnmount() {
    if (this.vanillaInpageNavigation) {
      this.vanillaInpageNavigation.destroy();
    }
  }

  render() {
    const demoText = loremIpsum({ count: 25 });
    const { items, ...breadcrumbProps } = breadcrumbContent;
    const breadcrumb = (
      <BreadcrumbCore {...breadcrumbProps} data-ecl-auto-init="BreadcrumbCore">
        {items.map((item) => (
          <BreadcrumbCoreItem {...item} key={item.label} />
        ))}
      </BreadcrumbCore>
    );

    return (
      <>
        <SiteHeaderCore
          {...siteHeaderContent}
          data-ecl-auto-init="SiteHeaderCore"
        />
        <PageHeaderCore breadcrumb={breadcrumb} title="A demo page" />
        <div className="ecl-container">
          <div
            className="ecl-row ecl-u-mt-l"
            data-ecl-inpage-navigation-container
          >
            <div className="ecl-col-lg-3">
              <InpageNavigation
                {...demoContent}
                data-ecl-auto-init="InpageNavigation"
              />
            </div>
            <div className="ecl-col-lg-9">
              <h2 className="ecl-u-type-heading-2" id="inline-nav-1">
                Heading 1
              </h2>
              <p className="ecl-u-type-paragraph-m">{demoText}</p>
              <h2 className="ecl-u-type-heading-2" id="inline-nav-2">
                Heading 2 with a long title going on several lines
              </h2>
              <p className="ecl-u-type-paragraph-m">{demoText}</p>
              <h2 className="ecl-u-type-heading-2" id="inline-nav-3">
                Heading 3
              </h2>
              <p className="ecl-u-type-paragraph-m">{demoText}</p>
              <h2 className="ecl-u-type-heading-2" id="inline-nav-4">
                Heading 4
              </h2>
              <p className="ecl-u-type-paragraph-m">{demoText}</p>
            </div>
          </div>
        </div>
        <FooterCore {...footerContent} />
      </>
    );
  }
}
