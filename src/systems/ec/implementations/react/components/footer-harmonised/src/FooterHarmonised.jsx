import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FooterHarmonisedSection from './FooterHarmonisedSection';

const FooterHarmonised = ({ sections, className, ...props }) => (
  <footer {...props} className={classnames(className, 'ecl-footer-harmonised')}>
    <div className="ecl-container ecl-footer-harmonised__container">
      <FooterHarmonisedSection section={sections[0]} id="1" />
      <div className="ecl-footer-harmonised__section2">
        <FooterHarmonisedSection section={sections[1]} />
        <FooterHarmonisedSection section={sections[3]} />
      </div>
      <div className="ecl-footer-harmonised__section3">
        <FooterHarmonisedSection section={sections[2]} />
        <FooterHarmonisedSection section={sections[4]} />
      </div>
      <FooterHarmonisedSection section={sections[5]} id="6" />
      <FooterHarmonisedSection section={sections[6]} id="7" />
      <FooterHarmonisedSection section={sections[7]} id="8" />
      <FooterHarmonisedSection section={sections[8]} id="9" />
    </div>
  </footer>
);

FooterHarmonised.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape(FooterHarmonisedSection.propTypes)
  ),
  className: PropTypes.string,
};

FooterHarmonised.defaultProps = {
  sections: [],
  className: '',
};

export default FooterHarmonised;
