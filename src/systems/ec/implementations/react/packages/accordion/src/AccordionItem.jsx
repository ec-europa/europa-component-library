import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';

const AccordionItem = ({ id, button, level, children }) => {
  return (
    <Fragment>
      {!!(button && button.label) && (
        <dt role="heading" {...level && { 'aria-level': level }}>
          <Button
            {...button}
            type="button"
            className={classnames(button.className, 'ecl-accordion__toggle')}
            data-ecl-accordion-toggle
            aria-controls={`${id}-content`}
          />
        </dt>
      )}

      <dd
        className="ecl-accordion__content"
        id={`${id}-content`}
        hidden
        role="region"
      >
        {children}
      </dd>
    </Fragment>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.string,
  button: PropTypes.shape(Button.propTypes),
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

AccordionItem.defaultProps = {
  id: '',
  button: {},
  level: null,
  children: null,
};

export default AccordionItem;
