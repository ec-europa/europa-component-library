import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';

const AccordionItem = ({ id, button, children, className, ...props }) => {
  return (
    <Fragment {...props}>
      {!!(button && button.label) && (
        <dt>
          <Button
            {...button}
            type="button"
            className={classnames(button.className, 'ecl-accordion__toggle')}
            data-ecl-accordion-toggle
            aria-controls={`${id}-content`}
          />
        </dt>
      )}

      <dd className="ecl-accordion__content" id={`${id}-content`} hidden>
        {children}
      </dd>
    </Fragment>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.string,
  button: PropTypes.shape(Button.propTypes),
  children: PropTypes.node,
  className: PropTypes.string,
};

AccordionItem.defaultProps = {
  id: '',
  button: {},
  children: null,
  className: '',
};

export default AccordionItem;
