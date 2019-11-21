import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';
import Link from '@ecl/ec-react-component-link';
import RadioGroup from '@ecl/ec-react-component-radio';
import Select from '@ecl/ec-react-component-select';
import TextArea from '@ecl/ec-react-component-text-area';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

const FeedbackForm = ({ state, className, ...props }) => {
  let radioItems = [];
  if (state === 'translation') {
    radioItems = [
      {
        id: 'feedback-translation',
        value: 'translation',
        label: 'This page is not translated',
        checked: true,
      },
      {
        id: 'feedback-information',
        value: 'information',
        label: "I can't find the information that I need",
      },
      {
        id: 'feedback-technical',
        value: 'technical',
        label: "There's a technical issue",
      },
    ];
  }
  if (state === 'information') {
    radioItems = [
      {
        id: 'feedback-translation',
        value: 'translation',
        label: 'This page is not translated',
      },
      {
        id: 'feedback-information',
        value: 'information',
        label: "I can't find the information that I need",
        checked: true,
      },
      {
        id: 'feedback-technical',
        value: 'technical',
        label: "There's a technical issue",
      },
    ];
  }
  if (state === 'technical') {
    radioItems = [
      {
        id: 'feedback-translation',
        value: 'translation',
        label: 'This page is not translated',
      },
      {
        id: 'feedback-information',
        value: 'information',
        label: "I can't find the information that I need",
      },
      {
        id: 'feedback-technical',
        value: 'technical',
        label: "There's a technical issue",
        checked: true,
      },
    ];
  }

  return (
    <section
      {...props}
      className={classnames(className, 'ecl-u-type-m ecl-u-type-color-grey')}
    >
      <div className="ecl-u-bg-blue-5 ecl-u-border-top ecl-u-border-color-blue-25 ecl-u-pv-l ecl-u-pv-md-m ecl-u-d-inline-flex ecl-u-width-100">
        <div className="ecl-container">
          <div className="ecl-u-type-bold ecl-u-d-lg-inline-block ecl-u-mb-s ecl-u-mb-lg-none">
            Did this page meet your expectations?
          </div>
          <Button
            variant="primary"
            type="button"
            label="Yes"
            className="ecl-u-ml-md-m"
          />
          <Button
            variant="primary"
            type="button"
            label="No"
            className="ecl-u-ml-m"
            {...(state !== 'default' ? { disabled: true } : {})}
          />
        </div>
      </div>

      {state !== 'default' && (
        <div className="ecl-u-bg-blue-5 ecl-u-border-top ecl-u-border-color-blue-25 ecl-u-pv-xl ecl-u-width-100">
          <div className="ecl-container">
            {/* Radio buttons */}
            <RadioGroup
              legend="Help us to improve your experience by sharing any problem you encountered."
              name="feedback-form-radios"
              items={radioItems}
            />

            {/* Page not translated */}
            {state === 'translation' && (
              <div className="ecl-u-border-top ecl-u-border-color-blue-25 ecl-u-pt-xl ecl-u-mt-xl">
                <Select
                  id="feedback-language"
                  label="Please select the missing language"
                  width="m"
                  options={[
                    { value: 'bg', label: 'български' },
                    { value: 'es', label: 'español' },
                    { value: 'cs', label: 'čeština' },
                    { value: 'da', label: 'dansk' },
                    { value: 'de', label: 'Deutsch' },
                    { value: 'et', label: 'eesti' },
                    { value: 'el', label: 'ελληνικά' },
                    { value: 'en', label: 'English' },
                    { value: 'fr', label: 'français' },
                    { value: 'ga', label: 'Gaeilge' },
                    { value: 'hr', label: 'hrvatski' },
                    { value: 'it', label: 'italiano' },
                    { value: 'lv', label: 'latviešu' },
                    { value: 'lt', label: 'lietuvių' },
                    { value: 'hu', label: 'magyar' },
                    { value: 'mt', label: 'Malti' },
                    { value: 'nl', label: 'Nederlands' },
                    { value: 'pl', label: 'polski' },
                    { value: 'pt', label: 'português' },
                    { value: 'ro', label: 'română' },
                    { value: 'sk', label: 'slovenčina' },
                    { value: 'sl', label: 'slovenščina' },
                    { value: 'fi', label: 'suomi' },
                    { value: 'sv', label: 'svenska' },
                  ]}
                />

                <Button
                  variant="primary"
                  type="submit"
                  label="Send feedback"
                  className="ecl-u-mt-l"
                />
              </div>
            )}

            {/* Missing information */}
            {state === 'information' && (
              <div className="ecl-u-border-top ecl-u-border-color-blue-25 ecl-u-pt-xl ecl-u-mt-xl">
                <div className="ecl-u-type-bold">
                  Question about the EU? Europe Direct can help.
                </div>
                <p className="ecl-u-paragraph ecl-u-mt-s ecl-u-mb-none">
                  Europe Direct does not comment on EU policy issues or
                  positions, or handle or forward complaints (though it can tell
                  you who to contact)
                </p>
                <div className="ecl-u-type-bold ecl-u-mt-l">Telephone</div>
                <p className="ecl-u-paragraph ecl-u-mv-s">
                  Call Freephone 00 800 6 7 8 9 10 11
                </p>
                <UnorderedList>
                  <UnorderedListItem>from anywhere in the EU</UnorderedListItem>
                  <UnorderedListItem>
                    weekdays 09:00 - 18:00 CET
                  </UnorderedListItem>
                  <UnorderedListItem>
                    in any official EU language
                  </UnorderedListItem>
                </UnorderedList>
                <div className="ecl-u-type-bold ecl-u-mt-l">Write to us</div>
                <p className="ecl-u-paragraph ecl-u-mt-s ecl-u-mb-none">
                  You should recieve an answer within 3 working days, though
                  more complex questions may take longer.
                  <br />
                  <Link href="/example" label="Go to Europe Direct" />
                </p>
              </div>
            )}

            {/* Technical issue */}
            {state === 'technical' && (
              <div className="ecl-u-border-top ecl-u-border-color-blue-25 ecl-u-pt-xl ecl-u-mt-xl">
                <Select
                  id="feedback-problem-category"
                  label="What seems to be the problem?"
                  optionalText=" (optional)"
                  width="m"
                  options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' },
                    { value: '4', label: 'Option 4' },
                  ]}
                />
                <TextArea
                  id="feedback-problem-description"
                  groupClassName="ecl-u-mt-l"
                  label="Please describe the problem"
                  helperText="300 Characters remaning"
                  width="l"
                />
                <Button
                  variant="primary"
                  type="submit"
                  label="Send feedback"
                  className="ecl-u-mt-l"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

FeedbackForm.propTypes = {
  state: PropTypes.string,
  className: PropTypes.string,
};

FeedbackForm.defaultProps = {
  state: 'default',
  className: '',
};

export default FeedbackForm;
