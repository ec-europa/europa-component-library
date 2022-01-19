import React from 'react';
import PropTypes from 'prop-types';

import LogoCard from './LogoCard';
import styles from './LogoList.scss';

const officialLanguages = [
  'bg',
  'es',
  'cs',
  'da',
  'de',
  'et',
  'el',
  'en',
  'fr',
  'ga',
  'hr',
  'it',
  'lv',
  'lt',
  'hu',
  'mt',
  'nl',
  'pl',
  'pt',
  'ro',
  'sk',
  'sl',
  'fi',
  'sv',
];

function GetLanguageId(path) {
  return path.split('--').pop().slice(0, 2);
}

function GetOfficialLogos(logos, isOfficial) {
  if (isOfficial) {
    return logos.filter(
      (logo) => officialLanguages.indexOf(GetLanguageId(logo)) >= 0
    );
  }
  return logos.filter(
    (logo) => officialLanguages.indexOf(GetLanguageId(logo)) < 0
  );
}

function LogoList({ system, set, color, language }) {
  let logosSet = [];

  // EU logos
  if (system === 'eu') {
    // Get logos in folder
    const logosEUMuted = require.context(
      '@ecl/preset-eu/dist/images/logo/',
      false,
      /\.svg$/
    );
    const logosEUStandardPositive = require.context(
      '@ecl/preset-eu/dist/images/logo/standard-version/positive',
      false,
      /\.svg$/
    );
    const logosEUCondensedPositive = require.context(
      '@ecl/preset-eu/dist/images/logo/condensed-version/positive',
      false,
      /\.svg$/
    );

    // Check logo set
    const mapSet = (s) =>
      ({
        condensed: logosEUCondensedPositive,
        standard: logosEUStandardPositive,
        muted: logosEUMuted,
      }[s]);
    logosSet = mapSet(set);
  }
  // EC logos
  else {
    // Get logos in folder
    const logosECMuted = require.context(
      '@ecl/preset-ec/dist/images/logo/',
      false,
      /\.svg$/
    );
    const logosECStandardPositive = require.context(
      '@ecl/preset-ec/dist/images/logo/positive',
      false,
      /\.svg$/
    );
    const logosECStandardNegative = require.context(
      '@ecl/preset-ec/dist/images/logo/negative',
      false,
      /\.svg$/
    );

    // Check logo set
    const mapSet = (s) =>
      ({
        standard:
          color === 'positive'
            ? logosECStandardPositive
            : logosECStandardNegative,
        muted: logosECMuted,
      }[s]);
    logosSet = mapSet(set);
  }

  // Split by logo language
  const mapLanguage = (l) =>
    ({
      official: GetOfficialLogos(logosSet.keys(), true),
      other: GetOfficialLogos(logosSet.keys(), false),
      muted: logosSet.keys(),
    }[l]);
  const logoFinal = mapLanguage(language);

  return (
    <ul className={styles.logos}>
      {logoFinal.map((path) => (
        <LogoCard
          path={logosSet(path)}
          name={set === 'muted' ? set : GetLanguageId(path)}
          key={logosSet(path)}
          set={set}
          color={color}
        />
      ))}
    </ul>
  );
}

LogoList.propTypes = {
  system: PropTypes.string,
  set: PropTypes.string,
  color: PropTypes.string,
  language: PropTypes.string,
};

LogoList.defaultProps = {
  system: 'ec',
  set: 'standard',
  color: 'positive',
  language: 'official',
};

export default LogoList;
