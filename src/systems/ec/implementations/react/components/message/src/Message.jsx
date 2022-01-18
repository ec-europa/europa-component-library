import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@ecl/ec-react-component-button';
import Icon from '@ecl/ec-react-component-icon';

export function Message({
  variant,
  icon,
  title,
  description,
  close,
  onClose,
  className,
  ...props
}) {
  const classNames = classnames(className, 'ecl-message', {
    [`ecl-message--${variant}`]: variant,
  });

  return (
    <div {...props} role="alert" className={classNames} data-ecl-message>
      <Icon
        {...icon}
        className={classnames(icon.className, 'ecl-message__icon')}
      />
      <div className="ecl-message__content">
        <Button
          {...close}
          type="button"
          className={classnames(close.className, 'ecl-message__close')}
          data-ecl-message-close
          onClick={onClose}
        />
        <div className="ecl-message__title">{title}</div>
        <p className="ecl-message__description">{description}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.shape(Icon.propTypes),
  title: PropTypes.string,
  description: PropTypes.string,
  close: PropTypes.shape(Button.propTypes),
  onClose: PropTypes.func,
  className: PropTypes.string,
};

Message.defaultProps = {
  variant: '',
  icon: {},
  title: '',
  description: '',
  close: '',
  onClose: () => {},
  className: '',
};

export default Message;
