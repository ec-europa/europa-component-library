/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import getData from '@ecl/ec-specs-funding-programme-page/demo/data';

import EventSpeakerPage from '../src/EventSpeakerPage';

class EventSpeakerExample extends React.Component {
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

    return (
      <EventSpeakerPage
        siteHeader={data.siteHeader}
        footer={data.footer}
        template={template}
      />
    );
  }
}

EventSpeakerExample.propTypes = {
  template: PropTypes.string.isRequired,
};

export default EventSpeakerExample;
