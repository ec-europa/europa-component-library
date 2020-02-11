import React from 'react';
import { withRouter, Route } from 'react-router-dom';

// Layout
import Skeleton from '../../routes/Skeleton';

// Static routes
import HomePage from '../../pages/ec/index.mdx';

import mdStyles from '../../styles/markdown.scss';
import styles from './Stats.scss';

import metaEC from '../../preval/get-meta-ec';
import sortPages from '../../utils/nav-sort';

const GetComponentsByStatus = (components, status) => {
  return components
    .filter(p => !p.attributes.status || p.attributes.status === status)
    .map(p => {
      const hasChildren =
        p.children &&
        p.children.length > 0 &&
        p.children.filter(childPage => childPage.attributes.isTab !== true)
          .length > 0;
      if (hasChildren) {
        return GetComponentsByStatus(p.children, status);
      }
      return p.attributes;
    });
};

const Stats = React.memo(() => {
  // Get components
  const sortedPagesEC = sortPages(metaEC);
  const componentsEC = sortedPagesEC[0].children.find(
    element => element.key === './components/index.mdx'
  );
  const componentsECReady = GetComponentsByStatus(
    componentsEC.children,
    'ready'
  )
    .flat()
    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  const componentsECWip = GetComponentsByStatus(componentsEC.children, 'wip')
    .flat()
    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  const componentsECPlanned = GetComponentsByStatus(
    componentsEC.children,
    'planned'
  )
    .flat()
    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));

  return (
    <Skeleton
      HomePage={HomePage}
      prefix="/ec"
      title="EC Homepage"
      system="ec"
      pages={sortedPagesEC[0].children}
      routes={<Route component={null} />}
    >
      <h2 className={mdStyles.h2}>EC components</h2>

      <h3 className={mdStyles.h3}>Ready ({componentsECReady.length})</h3>
      <ul className={styles.list}>
        {componentsECReady &&
          componentsECReady.map(p => (
            <li key={p.title} className={styles['list-item']}>
              <a href={p.url}>{p.title}</a>
            </li>
          ))}
      </ul>

      <h3 className={mdStyles.h3}>
        Work in progress ({componentsECWip.length})
      </h3>
      <ul className={styles.list}>
        {componentsECWip &&
          componentsECWip.map(p => (
            <li key={p.title} className={styles['list-item']}>
              <a href={p.url}>{p.title}</a>
            </li>
          ))}
      </ul>

      <h3 className={mdStyles.h3}>Planned ({componentsECPlanned.length})</h3>
      <ul className={styles.list}>
        {componentsECPlanned &&
          componentsECPlanned.map(p => (
            <li key={p.title} className={styles['list-item']}>
              <a href={p.url}>{p.title}</a>
            </li>
          ))}
      </ul>
    </Skeleton>
  );
});

export default withRouter(Stats);
