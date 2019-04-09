import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import Footer from '@ecl/ec-react-component-footer';
import Link from '@ecl/ec-react-component-link';
import Select from '@ecl/ec-react-component-select';
import TextArea from '@ecl/ec-react-component-text-area';

const FeedbackForm = ({ footer }) => (
  <Fragment>
    <section className="ecl-u-bg-grey-10 ecl-u-type-m">
      <div className="ecl-container ecl-u-pv-m ecl-u-d-flex ecl-u-flex-wrap ecl-u-align-items-center">
        <span className="ecl-u-ml-md-auto">
          <Link
            href="/example"
            label="Is there an issue with this page?"
            icon={{
              shape: 'ui--corner-arrow',
              size: 'fluid',
            }}
          />
        </span>
      </div>
      <hr />
      <div className="ecl-container ecl-u-pv-xl">
        <Select
          id="feedback-form-type"
          label="What type of issue would you like to report?"
          options={[
            {
              value: '1',
              label: 'There is a technical problem with this page',
            },
            {
              value: '2',
              label: "I can't find the information I am looking for",
            },
            {
              value: '3',
              label: 'Other',
            },
          ]}
        />
        <TextArea
          id="feedback-form-issue"
          label="Please describe the issue"
          placeholder="Please do not include any personal information."
        />
        <Button className="ecl-u-mt-l" label="Submit" variant="primary" />
      </div>
    </section>
    <Footer {...footer} />
  </Fragment>
);

FeedbackForm.propTypes = {
  footer: PropTypes.shape(Footer.propTypes),
};

FeedbackForm.defaultProps = {
  footer: {},
};

export default FeedbackForm;
