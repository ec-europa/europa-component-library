import React from 'react';
import PropTypes from 'prop-types';

import FooterSection from './FooterSection';

const Footer = ({ sections }) => (
  <div className="ecl-footer">
    {sections.map(section => (
      <FooterSection key={section.title} {...section} />
    ))}
  </div>
);

Footer.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

Footer.defaultProps = {
  sections: [],
};

export default Footer;
