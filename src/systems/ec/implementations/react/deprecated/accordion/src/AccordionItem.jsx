import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@ecl/ec-react-component-button';

export function AccordionItem({ id, toggle, level, children }) {
  const HeadingTag = `h${level || 3}`;

  return (
    <>
      {!!(toggle && toggle.label) && (
        <HeadingTag className="ecl-accordion__title">
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
        </HeadingTag>
      )}

      <div
        className="ecl-accordion__content"
        id={`${id}-content`}
        hidden
        role="region"
      >
        {children}
      </div>
    </>
  );
}

AccordionItem.propTypes = {
  id: PropTypes.string,
  toggle: PropTypes.shape({
    label: PropTypes.string,
    iconShape: PropTypes.string,
    className: PropTypes.string,
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
