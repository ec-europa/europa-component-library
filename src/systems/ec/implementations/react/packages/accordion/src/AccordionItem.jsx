import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button';

const AccordionItem = ({ id, toggle, level, children }) => {
  return (
    <Fragment>
      {!!(toggle && toggle.label) && (
        <dt role="heading" {...level && { 'aria-level': level }}>
          <Button
            type="button"
            className={classnames(toggle.className, 'ecl-accordion__toggle')}
            data-ecl-accordion-toggle
            aria-controls={`${id}-content`}
            variant="ghost"
            icon={{ shape: toggle.iconShape, size: 's' }}
            iconPosition="before"
            label={toggle.label}
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
  toggle: PropTypes.shape({
    label: PropTypes.string,
    iconShape: PropTypes.string,
  }),
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

AccordionItem.defaultProps = {
  id: '',
  toggle: {},
  level: null,
  children: null,
};

export default AccordionItem;
