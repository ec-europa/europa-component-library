import React from 'react';
import styles from '../../styles/markdown.scss';

const ComponentStatus = React.memo(() => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th} aria-label="Visual" />
        <th className={styles.th}>Label</th>
        <th className={styles.th}>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={styles.td}>
          <span
            style={{
              backgroundColor: '#467a39',
              borderRadius: '50%',
              boxSizing: 'border-box',
              display: 'block',
              height: '1rem',
              width: '1rem',
            }}
          />
        </td>
        <td className={styles.td}>Ready</td>
        <td className={styles.td}>Can be used in production.</td>
      </tr>
      <tr>
        <td className={styles.td}>
          <span
            style={{
              backgroundColor: '#f29527',
              borderRadius: '50%',
              boxSizing: 'border-box',
              display: 'block',
              height: '1rem',
              width: '1rem',
            }}
          />
        </td>
        <td className={styles.td}>Not ready</td>
        <td className={styles.td}>
          Not to be used on new applications. Kept temporarily.
        </td>
      </tr>
    </tbody>
  </table>
));

export default ComponentStatus;
