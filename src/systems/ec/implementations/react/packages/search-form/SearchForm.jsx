/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/ec-react-component-button/Button';
import Icon from '@ecl/ec-react-component-icon/Icon';
import TextInput from '@ecl/ec-react-component-text-input/TextInput';

const SearchForm = ({ textInputId, buttonLabel, className, ...props }) => {
  const classNames = classnames(className, {
    'ecl-search-form': true,
  });
  const searchTextInput = {
    id: textInputId,
    className: 'ecl-search-form__text-input',
  };
  const searchIcon = {
    className: 'ecl-search-form__icon',
    icon: 'Icon_Search',
    size: 'xs',
  };
  const searchButton = {
    variant: 'search',
    className: 'ecl-search-form__button',
    label: buttonLabel,
    icon: {
      icon: 'Icon_Search',
      size: 'xs',
    },
  };

  return (
    <form {...props} className={classNames}>
      <TextInput {...searchTextInput} />
      <Icon {...searchIcon} />
      <Button {...searchButton} />
    </form>
  );
};

SearchForm.propTypes = {
  textInputId: PropTypes.string,
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
};

SearchForm.defaultProps = {
  textInputId: '',
  buttonLabel: '',
  className: '',
};

export default SearchForm;
