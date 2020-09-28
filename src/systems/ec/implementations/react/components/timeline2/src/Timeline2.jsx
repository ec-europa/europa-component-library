import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@ecl/ec-react-component-button';
import { Timeline2Item } from './Timeline2Item';

export const Timeline2 = ({
  items,
  toggleCollapsed,
  toggleExpanded,
  button,
  children,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-timeline2');

  // Calculate collapse threshold
  const threshold =
    items.length > 12
      ? Math.min(Math.floor(items.length * 0.2), 3)
      : items.length;
  const hidenItemsLength = items.length - threshold - 2;

  const toggleLabelCollapsed = toggleCollapsed
    ? toggleCollapsed.replace('%d', hidenItemsLength)
    : button.label;
  const toggleLabelExpanded = toggleExpanded
    ? toggleExpanded.replace('%d', hidenItemsLength)
    : button.label;
  const showAllButton = (
    <li className="ecl-timeline2__item ecl-timeline2__item--toggle">
      <Button
        {...button}
        label={toggleLabelCollapsed}
        className={classnames(button.className, 'ecl-timeline2__toggle')}
        data-ecl-timeline-button
        data-ecl-label-collapsed={toggleLabelCollapsed}
        data-ecl-label-expanded={toggleLabelExpanded}
      />
    </li>
  );

  return (
    <ol {...props} className={classNames} data-ecl-timeline>
      {items &&
        items.map(
          ({ id: itemId, content: itemContent, ...itemProps }, index) => (
            <React.Fragment key={itemId}>
              <Timeline2Item
                {...itemProps}
                className={classnames({
                  [`ecl-timeline2__item--collapsed`]:
                    index >= threshold && index < items.length - 2,
                })}
              >
                {itemContent}
              </Timeline2Item>
              {threshold < items.length &&
                index === items.length - 3 &&
                showAllButton}
            </React.Fragment>
          )
        )}
      {children && children}
    </ol>
  );
};

Timeline2.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  toggleCollapsed: PropTypes.string,
  toggleExpanded: PropTypes.string,
  children: PropTypes.node,
  button: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

Timeline2.defaultProps = {
  items: [],
  toggleCollapsed: '',
  toggleExpanded: '',
  children: null,
  button: {},
  className: '',
};

export default Timeline2;
