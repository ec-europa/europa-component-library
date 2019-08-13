/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import VanillaInpageNavigation from '@ecl/eu-component-inpage-navigation';
import demoContent from '@ecl/eu-specs-inpage-navigation/demo/data';
import { loremIpsum } from 'lorem-ipsum';
import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';
import Footer from '@ecl/eu-react-component-footer';
import SiteHeader from '@ecl/eu-react-component-site-header';
import PageHeader from '@ecl/eu-react-component-page-header';
import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data-simple';
import demoContentEn from '@ecl/eu-specs-site-header/demo/data--en';
import demoContentCorporate from '@ecl/eu-specs-footer/demo/data--corporate';
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
      <Breadcrumb {...breadcrumbProps}>
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
    return (
      <Fragment>
        <SiteHeader {...demoContentEn} />
        <PageHeader breadcrumb={breadcrumb} title="A demo page" />
        <div className="ecl-container">
          <div className="ecl-row ecl-u-mt-l">
            <div className="ecl-col-lg-3">
              <InpageNavigation {...demoContent} />
            </div>
            <div className="ecl-col-lg-9">
              <h2 className="ecl-u-type-heading-2" id="inline-nav-1">
                Heading 1
              </h2>
              <p className="ecl-u-type-paragraph-m">{demoText}</p>
              <h2 className="ecl-u-type-heading-2" id="inline-nav-2">
                Heading 2
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
        <Footer {...demoContentCorporate} />
      </Fragment>
    );
  }
}
