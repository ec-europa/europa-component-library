/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FactFiguresItem } from './FactFiguresItem';

export const FactFigures = ({ className, ...props }) => {
  return (
    <div {...props} className={classnames(className, 'ecl-fact-figures')}>
      <FactFiguresItem />
    </div>
  );
};

FactFigures.propTypes = {
  className: PropTypes.string,
};

FactFigures.defaultProps = {
  className: '',
};

export default FactFigures;
