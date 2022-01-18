import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

function Footer({
  backToTop,
  identity,
  sections,
  common,
  className,
  ...props
}) {
  return (
    <footer
      {...props}
      className={classnames(className, 'ecl-footer', {
        'ecl-footer--custom': identity && identity.title,
      })}
    >
      {/* Back to top */}
      {/*
    {!!(backToTop && backToTop.label) && (
      <Link
        {...backToTop}
        className={classnames(backToTop.className, 'ecl-footer__back-to-top')}
      />
    )}
    */}

      {/* Site identity */}
      {!!(identity && identity.title) && (
        <section className="ecl-footer__identity">
          <div className="ecl-container">
            <div className="ecl-row">
              <div className="ecl-col-12 ecl-col-md-4">
                <h1 className="ecl-footer__identity-title">{identity.title}</h1>
              </div>

              <div className="ecl-footer__identity-follow ecl-col-12 ecl-col-md-4">
                <span className="ecl-footer__identity-label">
                  {identity.follow.label}
                </span>
                {identity.follow.links.map((link) => (
                  <Link
                    {...link}
                    key={link.label}
                    className={classnames(
                      link.className,
                      'ecl-footer__identity-link'
                    )}
                  />
                ))}
              </div>

              <div className="ecl-footer__identity-info ecl-col-12 ecl-col-md-4">
                {identity.info.map((link) => (
                  <Link
                    {...link}
                    key={link.label}
                    className={classnames(
                      link.className,
                      'ecl-footer__identity-link'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* European Commission */}
      <div className="ecl-footer__sections">
        <div className="ecl-container">
          <div className="ecl-row">
            <section className="ecl-footer__section ecl-col-12 ecl-col-md-4">
              <h1 className="ecl-footer__section-title">{sections[0].title}</h1>

              <ul className="ecl-footer__section-list">
                {sections[0].links.map((link) => (
                  <li className="ecl-footer__section-item" key={link.label}>
                    <Link
                      {...link}
                      className={classnames(
                        link.className,
                        'ecl-footer__section-link'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="ecl-footer__section ecl-col-12 ecl-col-md-4">
              <h1 className="ecl-footer__section-title">{sections[1].title}</h1>

              <ul className="ecl-footer__section-list ecl-footer__section-list--inline">
                {sections[1].links.map((link) => (
                  <li className="ecl-footer__section-item" key={link.label}>
                    <Link
                      {...link}
                      className={classnames(
                        link.className,
                        'ecl-footer__section-link'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="ecl-footer__section ecl-col-12 ecl-col-md-4">
              <h1 className="ecl-footer__section-title">{sections[2].title}</h1>

              <ul className="ecl-footer__section-list">
                {sections[2].links.map((link) => (
                  <li className="ecl-footer__section-item" key={link.label}>
                    <Link
                      {...link}
                      className={classnames(
                        link.className,
                        'ecl-footer__section-link'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Common */}
      <div className="ecl-footer__common">
        <div className="ecl-container ecl-footer__common-container">
          {common.map((link) => (
            <Link
              {...link}
              key={link.label}
              className={classnames(link.className, 'ecl-footer__common-link')}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  backToTop: PropTypes.shape(Link.propTypes),
  identity: PropTypes.shape({
    title: PropTypes.string,
    follow: PropTypes.shape({
      label: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
    }),
    info: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  }),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
    })
  ),
  common: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  className: PropTypes.string,
};

Footer.defaultProps = {
  backToTop: {},
  identity: {},
  sections: [],
  common: [],
  className: '',
};

export default Footer;
