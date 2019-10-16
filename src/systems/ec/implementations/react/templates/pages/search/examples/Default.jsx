/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import getData from '@ecl/ec-specs-search-page/demo/data';

// import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';
import SearchPage from '../src/SearchPage';

class SearchExample extends React.Component {
  constructor(props) {
    super(props);
    this.components = null;
  }

  componentDidMount() {
    if (!window.ECL) return;
    this.components = window.ECL.autoInit();
  }

  componentDidUpdate() {
    if (!window.ECL) return;

    if (this.components) {
      this.components.forEach(c => c.destroy());
    }

    this.components = window.ECL.autoInit();
  }

  componentWillUnmount() {
    if (!window.ECL) return;

    if (this.components) {
      this.components.forEach(c => c.destroy());
    }
  }

  render() {
    const { template } = this.props;
    const data = getData(template);

    /*
    const { items, ...breadcrumbProps } = data.breadcrumb;
    const breadcrumb = (
      <Breadcrumb {...breadcrumbProps}>
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
    data.pageHeader.breadcrumb = breadcrumb;
    */

    return (
      <SearchPage
        siteHeader={data.siteHeader}
        // pageHeader={data.pageHeader}
        footer={data.footer}
        template={template}
      />
    );
  }
}

SearchExample.propTypes = {
  template: PropTypes.string.isRequired,
};

export default SearchExample;
