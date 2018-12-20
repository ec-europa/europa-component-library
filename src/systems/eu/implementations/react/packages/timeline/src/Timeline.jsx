/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaTimeline from '@ecl/eu-component-timeline/eu-component-timeline';
import Button from '@ecl/eu-react-component-button/Button';

import TimelineItem from './TimelineItem';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.timeline = null;
    this.timelineRef = React.createRef();
  }

  componentDidMount() {
    this.timeline = new VanillaTimeline(this.timelineRef.current);
    this.timeline.init();
  }

  componentWillUnmount() {
    if (this.timeline) this.timeline.destroy();
  }

  render() {
    const { items, button, className, ...props } = this.props;

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
      <ol
        {...props}
        className={classNames}
        ref={this.timelineRef}
        data-ecl-timeline
      >
        {items.map((item, index) => (
          <Fragment key={item.label}>
            <TimelineItem
              label={item.label}
              className={classnames({
                [`ecl-timeline__item--collapsed`]: index > 2,
              })}
            >
              {item.content}
            </TimelineItem>

            {index === 2 && showAllButton}
          </Fragment>
        ))}
      </ol>
    );
  }
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
