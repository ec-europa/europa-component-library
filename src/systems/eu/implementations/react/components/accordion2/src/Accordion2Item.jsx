import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@ecl/eu-react-component-icon';

export function Accordion2Item({ id, toggle, level, children }) {
  const HeadingTag = `h${level || 3}`;

  return (
    <div className="ecl-accordion2__item">
      {!!(toggle && toggle.label) && (
        <HeadingTag className="ecl-accordion2__title">
          <button
            type="button"
            className={classnames(toggle.className, 'ecl-accordion2__toggle')}
            data-ecl-accordion2-toggle
            aria-controls={`${id}-content`}
          >
            <span className="ecl-accordion2__toggle-flex">
              <Icon
                className="ecl-accordion2__toggle-icon"
                shape="ui--plus"
                size="m"
                data-ecl-accordion2-icon
              />
              <span className="ecl-accordion2__toggle-title">
                {toggle.label}
              </span>
            </span>
          </button>
        </HeadingTag>
      )}

      <div
        className="ecl-accordion2__content"
        id={`${id}-content`}
        hidden
        role="region"
      >
        {children}
      </div>
    </div>
  );
}

Accordion2Item.propTypes = {
  id: PropTypes.string,
  toggle: PropTypes.shape({
    label: PropTypes.string,
    className: PropTypes.string,
  }),
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

Accordion2Item.defaultProps = {
  id: '',
  toggle: {},
  level: null,
  children: null,
};

export default Accordion2Item;
