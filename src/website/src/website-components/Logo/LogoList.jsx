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
  if (path.includes('mute')) {
    return 'muted';
  }
  return path.split('--').pop().slice(0, 2);
}

function GetColor(path) {
  if (path.includes('negative')) return 'negative';
  return 'positive';
}

function GetLogos(logos, serie) {
  return logos.filter((logo) => {
    const languageId = GetLanguageId(logo);

    // Exclude Japanese logos with 'jp' language code
    if (languageId === 'jp') {
      return false;
    }

    if (serie === 'muted') {
      return languageId === 'muted';
    }
    if (serie === 'official') {
      return officialLanguages.includes(languageId);
    }
    return !officialLanguages.includes(languageId) && languageId !== 'muted';
  });
}

function LogoList({ system, set, color, language }) {
  let logosSet = [];

  // EU logos
  if (system === 'eu') {
    // Get logos in folder
    const logosEUMuted = require.context(
      '@ecl/preset-eu/dist/images/logo/',
      false,
      /\.svg$/,
    );
    const logosEUStandardPositive = require.context(
      '@ecl/preset-eu/dist/images/logo/standard-version/positive',
      false,
      /\.svg$/,
    );
    const logosEUCondensedPositive = require.context(
      '@ecl/preset-eu/dist/images/logo/condensed-version/positive',
      false,
      /\.svg$/,
    );
    const logosEUStandardNegative = require.context(
      '@ecl/preset-eu/dist/images/logo/standard-version/negative',
      false,
      /\.svg$/,
    );
    const logosEUCondensedNegative = require.context(
      '@ecl/preset-eu/dist/images/logo/condensed-version/negative',
      false,
      /\.svg$/,
    );

    // Check logo set
    const mapSet = (s) =>
      ({
        condensed:
          color === 'positive'
            ? logosEUCondensedPositive
            : logosEUCondensedNegative,
        standard:
          color === 'positive'
            ? logosEUStandardPositive
            : logosEUStandardNegative,
        muted: logosEUMuted,
      })[s];
    logosSet = mapSet(set);
  }
  // EC logos
  else {
    // Get logos in folder
    const logosECMuted = require.context(
      '@ecl/preset-ec/dist/images/logo/',
      true,
      /\.svg$/,
    );
    const logosECStandardPositive = require.context(
      '@ecl/preset-ec/dist/images/logo/positive',
      false,
      /\.svg$/,
    );
    const logosECStandardNegative = require.context(
      '@ecl/preset-ec/dist/images/logo/negative',
      false,
      /\.svg$/,
    );

    // Check logo set
    const mapSet = (s) =>
      ({
        standard:
          color === 'positive'
            ? logosECStandardPositive
            : logosECStandardNegative,
        muted: logosECMuted,
      })[s];
    logosSet = mapSet(set);
  }

  // Split by logo language
  const mapLanguage = (l) =>
    ({
      official: GetLogos(logosSet.keys(), 'official'),
      other: GetLogos(logosSet.keys(), 'other'),
      muted: GetLogos(logosSet.keys(), 'muted'),
    })[l];
  const logoFinal = mapLanguage(language);

  // For muted logo, check color

  return (
    <ul className={styles.logos}>
      {logoFinal.map((path) => (
        <LogoCard
          path={logosSet(path)}
          name={set === 'muted' ? set : GetLanguageId(path)}
          key={logosSet(path)}
          set={set}
          color={set === 'muted' ? GetColor(path) : color}
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
