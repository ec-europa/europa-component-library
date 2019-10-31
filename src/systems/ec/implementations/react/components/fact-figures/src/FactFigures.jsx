/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@ecl/ec-react-component-link';
import { FactFiguresItem } from './FactFiguresItem';

export const FactFigures = ({ items, viewAll, className, ...props }) => {
  return (
    <div {...props} className={classnames(className, 'ecl-fact-figures')}>
      {items &&
        items.map(item => <FactFiguresItem key={item.title} {...item} />)}
      {!!(viewAll && Object.values(viewAll).length >= 1) && (
        <div className="ecl-fact-figures__view-all">
          <Link
            className={classnames(
              viewAll.className,
              'ecl-fact-figures__view-all-link'
            )}
            {...viewAll}
            variant="standalone"
          />
        </div>
      )}
    </div>
  );
};

FactFigures.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(FactFiguresItem.propTypes)),
  viewAll: PropTypes.shape(Link.PropTypes),
  className: PropTypes.string,
};

FactFigures.defaultProps = {
  items: [],
  viewAll: {},
  className: '',
};

export default FactFigures;
