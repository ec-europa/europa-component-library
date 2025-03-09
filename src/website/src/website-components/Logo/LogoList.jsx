import React from 'react';
import PropTypes from 'prop-types';
import LogoCard from './LogoCard';
import styles from './LogoList.module.scss';

// EC logo exports—standard only
import * as ecPositiveLogos from '@ecl/resources-ec-logo/dist/positive/esm-export.js';
import * as ecNegativeLogos from '@ecl/resources-ec-logo/dist/negative/esm-export.js';

// EU logo exports—standard, condensed
import * as euStandardPositiveLogos from '@ecl/resources-eu-logo/dist/standard-version/positive/esm-export.js';
import * as euStandardNegativeLogos from '@ecl/resources-eu-logo/dist/standard-version/negative/esm-export.js';
import * as euCondensedPositiveLogos from '@ecl/resources-eu-logo/dist/condensed-version/positive/esm-export.js';
import * as euCondensedNegativeLogos from '@ecl/resources-eu-logo/dist/condensed-version/negative/esm-export.js';

const officialLanguages = ['bg', 'es', 'cs', 'da', 'de', 'et', 'el', 'en', 'fr', 'ga', 'hr', 'it', 'lv', 'lt', 'hu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'fi', 'sv'];

function GetLanguageId(key) {
  if (key.includes('mute')) return 'muted';
  return key.replace('logoEc', '').replace('logoEu', '').slice(0, 2).toLowerCase();
}

function GetColor(key) {
  if (key.includes('negative')) return 'negative';
  return 'positive';
}

function GetLogos(logos, serie) {
  return Object.keys(logos).filter((key) => {
    const languageId = GetLanguageId(key);
    if (languageId === 'jp') return false;
    if (serie === 'muted') return languageId === 'muted';
    if (serie === 'official') return officialLanguages.includes(languageId);
    return !officialLanguages.includes(languageId) && languageId !== 'muted';
  });
}

function LogoList({ system, set, color, language }) {
  const logoSets = {
    ec: {
      standard: color === 'positive' ? ecPositiveLogos : ecNegativeLogos,
      muted: {}, // Empty—muted unsupported for now
    },
    eu: {
      standard: color === 'positive' ? euStandardPositiveLogos : euStandardNegativeLogos,
      condensed: color === 'positive' ? euCondensedPositiveLogos : euCondensedNegativeLogos,
      muted: {}, // Empty—muted unsupported for now
    },
  };

  const selectedLogos = logoSets[system][set] || {};
  const logoFinal = GetLogos(selectedLogos, language);

  return (
    <ul className={styles.logos}>
      {logoFinal.map((key) => (
        <LogoCard
          markup={selectedLogos[key]} // SVG string from ESM
          name={set === 'muted' ? set : GetLanguageId(key)}
          key={key}
          set={set}
          color={set === 'muted' ? GetColor(key) : color}
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