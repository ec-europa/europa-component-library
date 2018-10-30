import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SingleLink from './SingleLink';
import LinkGroup from './LinkGroup';
import LinkSection from './LinkSection';
import styles from './LinkList.scss';

const LinkList = React.memo(
  ({ pages, level, showStatus, 'aria-hidden': ariaHidden }) => {
    return (
      <ul className={styles.list} data-level={level} aria-hidden={ariaHidden}>
        {pages.filter(p => p.hidden !== true).map(p => (
          <li key={p.key}>
            {!p.children || p.children.length === 0 ? (
              <SingleLink
                page={p.attributes}
                showStatus={showStatus}
                level={level}
              />
            ) : (
              <Fragment>
                {p.attributes.type === 'group' ? (
                  <LinkGroup
                    pages={p.children}
                    group={p.attributes.title}
                    showStatus={showStatus}
                    level={level}
                  />
                ) : (
                  <LinkSection
                    pages={p.children}
                    attributes={p.attributes}
                    section={p.attributes.title}
                    showStatus={showStatus}
                    level={level}
                  />
                )}
              </Fragment>
            )}
          </li>
        ))}
      </ul>
    );
  }
);

LinkList.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  'aria-hidden': PropTypes.bool,
};

LinkList.defaultProps = {
  showStatus: false,
  level: 0,
  'aria-hidden': false,
};

export default withRouter(LinkList);
