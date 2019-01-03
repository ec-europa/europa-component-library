import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';
import Link from '@ecl/ec-react-component-link/Link';

const Expandable = ({
  id,
  button,
  link,
  labelCollapsed,
  labelExpanded,
  children,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-expandable');

  return (
    <div {...props} className={classNames} data-ecl-expandable>
      {!!(button && button.label) && (
        <Button
          {...button}
          type="button"
          className={classnames(button.className, 'ecl-expandable__toggle')}
          data-ecl-expandable-toggle
          data-ecl-label-expanded={labelExpanded}
          data-ecl-label-collapsed={labelCollapsed}
          aria-controls={`${id}-content`}
          id={`${id}-toggle`}
        />
      )}

      {!!(link && link.label) && (
        <Link
          {...link}
          className={classnames(button.className, 'ecl-expandable__toggle')}
          data-ecl-expandable-toggle
          data-ecl-label-expanded={labelExpanded}
          data-ecl-label-collapsed={labelCollapsed}
          aria-controls={`${id}-content`}
          id={`${id}-toggle`}
        />
      )}

      <div
        className="ecl-expandable__content"
        id={`${id}-content`}
        aria-labelledby={`${id}-toggle`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

Expandable.propTypes = {
  id: PropTypes.string,
  button: PropTypes.shape(Button.propTypes),
  link: PropTypes.shape(Link.propTypes),
  labelCollapsed: PropTypes.string,
  labelExpanded: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Expandable.defaultProps = {
  id: '',
  button: {},
  link: {},
  labelCollapsed: '',
  labelExpanded: '',
  children: null,
  className: '',
};

export default Expandable;
