import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SingleLink from '../Navigation/SingleLink';
import LinkGroup from '../Navigation/LinkGroup'; // eslint-disable-line import/no-cycle
import LinkSection from '../Navigation/LinkSection'; // eslint-disable-line import/no-cycle
import styles from './Stats.scss';

import metaEC from '../../preval/get-meta-ec';
import sortPages from '../../utils/nav-sort';

const Stats = React.memo(({ level, 'aria-hidden': ariaHidden }) => {
  const pagesEC = sortPages(metaEC)[0].children;
  const componentsEC = pagesEC.find(
    element => element.key === './components/index.mdx'
  );

  return (
    <ul className={styles.list} data-level={level} aria-hidden={ariaHidden}>
      {componentsEC.children
        .filter(p => p.attributes.hidden !== true)
        .filter(p => p.attributes.isTab !== true)
        .map(p => {
          const hasChildren =
            p.children &&
            p.children.length > 0 &&
            p.children.filter(childPage => childPage.attributes.isTab !== true)
              .length > 0;
          return (
            <li key={p.key}>
              {!hasChildren ? (
                <SingleLink page={p.attributes} level={level} />
              ) : (
                <Fragment>
                  {p.attributes.type === 'group' ? (
                    <LinkGroup
                      pages={p.children}
                      group={p.attributes.title}
                      level={level}
                    />
                  ) : (
                    <LinkSection
                      pages={p.children}
                      attributes={p.attributes}
                      section={p.attributes.title}
                      level={level}
                    />
                  )}
                </Fragment>
              )}
            </li>
          );
        })}
    </ul>
  );
});

Stats.propTypes = {
  level: PropTypes.number,
  'aria-hidden': PropTypes.bool,
};

Stats.defaultProps = {
  level: 0,
  'aria-hidden': false,
};

export default withRouter(Stats);
