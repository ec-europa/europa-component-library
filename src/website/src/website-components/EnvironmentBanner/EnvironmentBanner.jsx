import React, { useEffect, useState } from 'react';
import styles from './EnvironmentBanner.module.scss';

const PROD_HOSTNAME = 'ec.europa.eu';
const PROD_URL = 'https://ec.europa.eu/component-library/';
const ARCHIVE_PATH_RE = /\/component-library\/(v\d+\.\d+\.\d+)(\/|$)/;
const DISMISS_KEY_PREFIX = 'eclEnvironmentBannerDismissed:';

function getEnvironmentInfo() {
  const { hostname, pathname } = window.location;

  if (hostname === PROD_HOSTNAME) {
    const match = pathname.match(ARCHIVE_PATH_RE);
    if (match) {
      return { type: 'archive', version: match[1] };
    }
    return null;
  }

  return { type: 'non-production' };
}

const EnvironmentBanner = React.memo(() => {
  const [info, setInfo] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const environmentInfo = getEnvironmentInfo();
    if (!environmentInfo) return;

    const dismissKey = `${DISMISS_KEY_PREFIX}${environmentInfo.type}:${environmentInfo.version || ''}`;
    let alreadyDismissed = false;
    try {
      alreadyDismissed = window.sessionStorage.getItem(dismissKey) === '1';
    } catch {
      // sessionStorage unavailable (e.g. blocked), ignore.
    }

    setInfo(environmentInfo);
    setDismissed(alreadyDismissed);
  }, []);

  if (!info || dismissed) return null;

  const dismissKey = `${DISMISS_KEY_PREFIX}${info.type}:${info.version || ''}`;

  const handleDismiss = () => {
    try {
      window.sessionStorage.setItem(dismissKey, '1');
    } catch {
      // sessionStorage unavailable, ignore.
    }
    setDismissed(true);
  };

  return (
    <div className={styles.banner} role="status">
      <div className={styles.text}>
        {info.type === 'archive' ? (
          <>
            You&apos;re viewing an archived version ({info.version}) of the ECL
            website.{' '}
            <a href={PROD_URL} className={styles.link}>
              Go to the latest version
            </a>
          </>
        ) : (
          <>
            You&apos;re viewing a non-production build of the ECL website,
            content may not reflect the current release.{' '}
            <a href={PROD_URL} className={styles.link}>
              Go to the official site
            </a>
          </>
        )}
      </div>
      <button
        type="button"
        className={styles.close}
        onClick={handleDismiss}
        aria-label="Dismiss this message"
      >
        &times;
      </button>
    </div>
  );
});

export default EnvironmentBanner;
