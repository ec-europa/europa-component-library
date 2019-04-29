import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ label }) => <li>List item {label}</li>;

ListItem.propTypes = {
  label: PropTypes.string,
};

ListItem.defaultProps = {
  label: '',
};

export default ListItem;
