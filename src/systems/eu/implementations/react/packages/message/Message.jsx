import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button/Button';
import Icon from '@ecl/eu-react-component-icon/Icon';

const Message = ({
  variant,
  icon,
  title,
  description,
  close,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-message', {
    [`ecl-message--${variant}`]: variant,
  });

  return (
    <div {...props} role="alert" className={classNames}>
      <Icon
        {...icon}
        className={classnames(icon.className, 'ecl-message__icon')}
      />
      <div className="ecl-message__content">
        <Button
          {...close}
          className={classnames(close.className, 'ecl-message__close')}
        />
        <div className="ecl-message__title">{title}</div>
        <p className="ecl-message__description">{description}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  title: PropTypes.string,
  description: PropTypes.string,
  close: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

Message.defaultProps = {
  variant: '',
  icon: {},
  title: '',
  description: '',
  close: '',
  className: '',
};

export default Message;
