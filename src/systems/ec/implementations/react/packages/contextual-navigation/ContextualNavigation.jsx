import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaContextualNavigation from '@ecl/ec-component-contextual-navigation/ec-component-contextual-navigation';
import Link from '@ecl/ec-react-component-link/Link';

export default class ContextualNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.contextualNavigation = null;
    this.contextualNavigationRef = React.createRef();
  }

  componentDidMount() {
    this.contextualNavigation = new VanillaContextualNavigation(
      this.contextualNavigationRef.current
    );
    this.contextualNavigation.init();
  }

  componentWillUnmount() {
    if (this.contextualNavigation) this.contextualNavigation.destroy();
  }

  render() {
    const { label, itemMore, items, className, ...props } = this.props;

    const classNames = classnames(className, 'ecl-contextual-navigation');

    const itemMoreMarkup = (
      <li className="ecl-contextual-navigation__item ecl-contextual-navigation__item--more">
        <Link
          {...itemMore}
          className={classnames(
            itemMore.className,
            'ecl-contextual-navigation__link'
          )}
          data-ecl-contextual-navigation-more
        />
      </li>
    );

    return (
      <nav {...props} className={classNames} ref={this.contextualNavigationRef}>
        <div className="ecl-contextual-navigation__label">{label}</div>
        <ul
          className="ecl-contextual-navigation__list"
          data-ecl-contextual-navigation-list
        >
          {items.map((item, key) => (
            <li
              className={classnames(
                item.className,
                'ecl-contextual-navigation__item',
                {
                  'ecl-contextual-navigation__item--collapsed': key > 3,
                }
              )}
              key={item.label}
            >
              <Link
                {...item}
                className={classnames(
                  item.className,
                  'ecl-contextual-navigation__link'
                )}
              />
            </li>
          ))}

          {items.length > 3 && itemMoreMarkup}
        </ul>
      </nav>
    );
  }
}

ContextualNavigation.propTypes = {
  author: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  itemMore: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
};

ContextualNavigation.defaultProps = {
  author: '',
  items: [],
  itemMore: {},
  className: '',
};
