import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import Footer from '@ecl/ec-react-component-footer';
import Link from '@ecl/ec-react-component-link';
import Select from '@ecl/ec-react-component-select';
import TextArea from '@ecl/ec-react-component-text-area';

const FeedbackForm = ({ footer, isExpanded }) => (
  <Fragment>
    <section className="ecl-u-bg-grey-10 ecl-u-type-m">
      <div className="ecl-container ecl-u-pv-m ecl-u-d-flex ecl-u-flex-wrap ecl-u-align-items-center">
        <span className="ecl-u-flex-basis-100 ecl-u-flex-basis-md-auto">
          Was this page useful?
          <Button className="ecl-u-ml-s" label="Yes" variant="secondary" />
          <Button className="ecl-u-ml-xs" label="No" variant="secondary" />
        </span>
        <span className="ecl-u-ml-md-auto">
          <Link
            href="/example"
            label="Is there an issue with this page?"
            icon={{
              shape: 'ui--corner-arrow',
              transform: 'rotate-180',
              size: 'fluid',
            }}
          />
        </span>
      </div>

      <div
        className="ecl-container ecl-u-pv-xl"
        {...(!isExpanded ? { hidden: true } : {})}
      >
        <Select
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
          label="Please describe the issue"
          placeholder="Please do not include any personal information."
        />
        <Button label="Submit" variant="primary" />
      </div>
    </section>
    <Footer {...footer} />
  </Fragment>
);

FeedbackForm.propTypes = {
  footer: PropTypes.shape(Footer.propTypes),
  isExpanded: PropTypes.bool,
};

FeedbackForm.defaultProps = {
  footer: {},
  isExpanded: false,
};

export default FeedbackForm;
