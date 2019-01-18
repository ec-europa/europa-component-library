import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button/Button';

const Accordion = ({ id, button, children, className, ...props }) => {
  const classNames = classnames(className, 'ecl-accordion');

  return (
    <div {...props} className={classNames} data-ecl-accordion>
      {!!(button && button.label) && (
        <Button
          {...button}
          type="button"
          className={classnames(button.className, 'ecl-accordion__toggle')}
          data-ecl-accordion-toggle
          aria-controls={`${id}-content`}
        />
      )}

      <div className="ecl-accordion__content" id={`${id}-content`} hidden>
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  id: PropTypes.string,
  button: PropTypes.shape(Button.propTypes),
  children: PropTypes.node,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  id: '',
  button: {},
  children: null,
  className: '',
};

export default Accordion;
