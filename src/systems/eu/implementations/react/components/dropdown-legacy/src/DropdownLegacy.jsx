import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@ecl/eu-react-component-button';

export function DropdownLegacy({
  id,
  button,
  variant,
  children,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-dropdown-legacy', {
    [`ecl-dropdown-legacy--${variant}`]: variant,
  });

  return (
    <div {...props} className={classNames} data-ecl-dropdown-legacy>
      {!!(button && button.label) && (
        <Button
          {...button}
          type="button"
          className={classnames(
            button.className,
            'ecl-dropdown-legacy__toggle'
          )}
          data-ecl-dropdown-legacy-toggle
          aria-controls={`${id}-content`}
        />
      )}

      <div className="ecl-dropdown-legacy__content" id={`${id}-content`} hidden>
        {children}
      </div>
    </div>
  );
}

DropdownLegacy.propTypes = {
  id: PropTypes.string,
  button: PropTypes.shape(Button.propTypes),
  variant: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownLegacy.defaultProps = {
  id: '',
  button: {},
  variant: '',
  children: null,
  className: '',
};

export default DropdownLegacy;
