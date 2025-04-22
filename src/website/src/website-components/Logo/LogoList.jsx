import React from 'react';
import PropTypes from 'prop-types';
// Importing JSON lists
import ecLogoPositiveAll from '@ecl/resources-ec-logo/dist/positive/all.json';
import ecLogoNegativeAll from '@ecl/resources-ec-logo/dist/negative/all.json';
import euLogoStandardPositiveAll from '@ecl/resources-eu-logo/dist/standard-version/positive/all.json';
import euLogoStandardNegativeAll from '@ecl/resources-eu-logo/dist/standard-version/negative/all.json';
import euLogoCondensedPositiveAll from '@ecl/resources-eu-logo/dist/condensed-version/positive/all.json';
import euLogoCondensedNegativeAll from '@ecl/resources-eu-logo/dist/condensed-version/negative/all.json';

import LogoCard from './LogoCard';
import styles from './LogoList.module.scss';

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

const mutedLogos = {
  ec: {
    positive: 'logo-ec--mute.svg',
    negative: 'logo-ec--mute-negative.svg',
  },
  eu: {
    positive: 'logo-eu--mute.svg',
  },
};

function GetLanguageId(key) {
  if (key.includes('mute')) return 'muted';
  return key.replace('logo-ec--', '').replace('logo-eu--', '').toLowerCase();
}

function GetLogos(logos, serie) {
  return logos.filter((key) => {
    const languageId = GetLanguageId(key);
    if (languageId === 'jp') return false;
    if (serie === 'muted') return key.includes('mute');
    if (serie === 'official') return officialLanguages.includes(languageId);
    return !officialLanguages.includes(languageId) && languageId !== 'muted';
  });
}

function LogoList({ system, set, color, language }) {
  const logoSets = {
    ec: {
      standard: color === 'positive' ? ecLogoPositiveAll : ecLogoNegativeAll,
      muted: mutedLogos.ec[color],
    },
    eu: {
      'standard-version':
        color === 'positive'
          ? euLogoStandardPositiveAll
          : euLogoStandardNegativeAll,
      'condensed-version':
        color === 'positive'
          ? euLogoCondensedPositiveAll
          : euLogoCondensedNegativeAll,
      muted: mutedLogos.eu[color],
    },
  };

  const selectedLogos = logoSets[system][set] || [];
  const logoFinal = GetLogos(selectedLogos, language);

  return (
    <ul className={styles.logos}>
      {set === 'muted' ? (
        <>
          <LogoCard
            path={`/packages/${system}/images/logo/${mutedLogos[system].positive}`}
            name="muted"
            key="muted-positive"
            set={set}
            color="positive"
          />
          {system === 'ec' && (
            <LogoCard
              path={`/packages/${system}/images/logo/${mutedLogos[system].negative}`}
              name="muted"
              key="muted-negative"
              set={set}
              color="negative"
            />
          )}
        </>
      ) : (
        logoFinal.map((logoName) => (
          <LogoCard
            path={
              system === 'ec'
                ? `/packages/${system}/images/logo/${color}/${logoName}.svg`
                : `/packages/${system}/images/logo/${set}/${color}/${logoName}.svg`
            }
            name={GetLanguageId(logoName)}
            key={logoName}
            set={set}
            color={color}
          />
        ))
      )}
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
