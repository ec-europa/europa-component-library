import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button';
import TextInput from '@ecl/eu-react-component-text-input';

const SearchForm = ({
  textInputId,
  inputLabel,
  buttonLabel,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-search-form');

  return (
    <form {...props} className={classNames} role="search">
      <TextInput
        id={textInputId}
        className="ecl-search-form__text-input"
        type="search"
        label={inputLabel}
        hideLabel
      />
      <Button
        variant="search"
        className="ecl-search-form__button"
        label={buttonLabel}
        icon={{
          shape: 'general--search',
          size: 'xs',
        }}
        aria-label={buttonLabel}
      />
    </form>
  );
};

SearchForm.propTypes = {
  textInputId: PropTypes.string,
  inputLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
};

SearchForm.defaultProps = {
  textInputId: '',
  inputLabel: '',
  buttonLabel: '',
  className: '',
};

export default SearchForm;
