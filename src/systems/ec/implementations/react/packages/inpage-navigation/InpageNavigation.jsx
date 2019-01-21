/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from '@ecl/ec-react-component-link/Link';
import Icon from '@ecl/ec-react-component-icon/Icon';
import VanillaInpageNavigation from '@ecl/ec-component-inpage-navigation/ec-component-inpage-navigation';

export default class InpageNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.InpageNavigation = null;
    this.InpageNavigationRef = React.createRef();
  }

  componentDidMount() {
    this.InpageNavigation = new VanillaInpageNavigation(
      this.InpageNavigationRef.current
    );
    this.InpageNavigation.init();
  }

  componentWillUnmount() {
    if (this.InpageNavigation) this.InpageNavigation.destroy();
  }

  render() {
    const { className, links, title, ...props } = this.props;
    const classNames = classnames(className, 'ecl-inpage-navigation');

    return (
      <nav
        {...props}
        className={classNames}
        ref={this.InpageNavigationRef}
        data-ecl-inpage-navigation-sticky
      >
        <div className="ecl-inpage-navigation__title">{title}</div>
        <div className="ecl-inpage-navigation__body">
          <button
            type="button"
            className="ecl-inpage-navigation__trigger"
            id="ecl-inpage-navigation-trigger"
            data-ecl-inpage-navigation-trigger
            aria-controls="ecl-inpage-navigation-list"
            aria-expanded="false"
          >
            <span
              className="ecl-inpage-navigation__trigger-current"
              data-ecl-inpage-navigation-trigger-current
            >
              &nbsp;
            </span>
            <Icon
              className="ecl-inpage-navigation__trigger-icon"
              shape="ui--corner-arrow"
              size="s"
              transform="rotate-180"
            />
          </button>
          <ul
            className="ecl-inpage-navigation__list"
            aria-hidden="true"
            aria-labelledby="ecl-inpage-navigation-trigger"
            data-ecl-inpage-navigation-list
            id="ecl-inpage-navigation-list"
          >
            {links.map(link => (
              <li key={link.label} className="ecl-inpage-navigation__item">
                <Link
                  {...link}
                  className={classnames('ecl-inpage-navigation__link')}
                  data-ecl-inpage-navigation-link
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

InpageNavigation.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  title: PropTypes.string,
};

InpageNavigation.defaultProps = {
  className: '',
  links: [],
  title: 'Page contents',
};
