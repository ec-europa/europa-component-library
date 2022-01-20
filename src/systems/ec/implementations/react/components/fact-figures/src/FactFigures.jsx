import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@ecl/ec-react-component-link';
import { FactFiguresItem } from './FactFiguresItem';

export function FactFigures({ column, items, viewAll, className, ...props }) {
  return (
    <div
      {...props}
      className={classnames(className, 'ecl-fact-figures', {
        [`ecl-fact-figures--col-${column}`]: column,
      })}
    >
      <div className="ecl-fact-figures__items">
        {items &&
          items.map((item) => <FactFiguresItem key={item.title} {...item} />)}
      </div>

      {!!(viewAll && Object.keys(viewAll).length >= 1) && (
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
}

FactFigures.propTypes = {
  column: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape(FactFiguresItem.propTypes)),
  viewAll: PropTypes.shape(Link.PropTypes),
  className: PropTypes.string,
};

FactFigures.defaultProps = {
  column: 3,
  items: [],
  viewAll: {},
  className: '',
};

export default FactFigures;
