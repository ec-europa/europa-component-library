import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaMessage from '@ecl/eu-component-message/eu-component-message';

import Button from '@ecl/eu-react-component-button/Button';
import Icon from '@ecl/eu-react-component-icon/Icon';

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.message = null;
    this.messageRef = React.createRef();
  }

  componentDidMount() {
    this.message = new VanillaMessage(this.messageRef.current);
    this.message.init();
  }

  componentWillUnmount() {
    if (this.message) this.message.destroy();
  }

  render() {
    const {
      variant,
      icon,
      title,
      description,
      close,
      className,
      ...props
    } = this.props;

    const classNames = classnames(className, 'ecl-message', {
      [`ecl-message--${variant}`]: variant,
    });

    return (
      <div {...props} role="alert" className={classNames} ref={this.messageRef}>
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
          />
          <div className="ecl-message__title">{title}</div>
          <p className="ecl-message__description">{description}</p>
        </div>
      </div>
    );
  }
}

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
