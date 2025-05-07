import React from 'react';
import PropTypes from 'prop-types';

import SingleLink from './SingleLink';
import LinkGroup from './LinkGroup';
import LinkSection from './LinkSection';
import styles from './LinkList.module.scss';

const LinkList = React.memo(
  ({ pages, level, showStatus, 'aria-hidden': ariaHidden }) => (
    <ul className={styles.list} data-level={level} aria-hidden={ariaHidden}>
      {pages
        .filter((p) => p.attributes.hidden !== true)
        .filter((p) => p.attributes.isTab !== true)
        .map((p) => {
          const hasChildren =
            p.children &&
            p.children.length > 0 &&
            p.children.filter(
              (childPage) => childPage.attributes.isTab !== true,
            ).length > 0;
          return (
            <li key={p.key}>
              {!hasChildren ? (
                <SingleLink
                  page={p.attributes}
                  showStatus={showStatus}
                  level={level}
                />
              ) : (
                <>
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
                </>
              )}
            </li>
          );
        })}
    </ul>
  ),
);

LinkList.propTypes = {
  pages: PropTypes.array.isRequired,
  showStatus: PropTypes.bool,
  level: PropTypes.number,
  'aria-hidden': PropTypes.bool,
};

LinkList.defaultProps = {
  showStatus: false,
  level: 0,
  'aria-hidden': false,
};

export default LinkList;
