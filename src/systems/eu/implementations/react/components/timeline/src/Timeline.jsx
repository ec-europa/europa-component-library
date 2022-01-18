import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@ecl/eu-react-component-button';
import { TimelineItem } from './TimelineItem';

export function Timeline({ items, button, className, ...props }) {
  const classNames = classnames(className, 'ecl-timeline');

  const showAllButton = (
    <li className="ecl-timeline__item ecl-timeline__item--toggle">
      <Button
        {...button}
        className={classnames(button.className, 'ecl-timeline__button')}
        data-ecl-timeline-button
      />
    </li>
  );

  return (
    <ol {...props} className={classNames} data-ecl-timeline>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <TimelineItem
            label={item.label}
            className={classnames({
              [`ecl-timeline__item--collapsed`]: index > 2,
            })}
          >
            {item.content}
          </TimelineItem>
          {index === 2 && showAllButton}
        </React.Fragment>
      ))}
    </ol>
  );
}

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  button: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

Timeline.defaultProps = {
  items: [],
  button: {},
  className: '',
};

export default Timeline;
