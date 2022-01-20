import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/eu-react-component-link';

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
      className={classnames(className, 'ecl-footer ecl-footer--updated', {
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
            <h1 className="ecl-footer__identity-title">{identity.title}</h1>
            <div className="ecl-row">
              <div className="ecl-footer__identity-follow ecl-col-12 ecl-col-md-6">
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
              <div className="ecl-footer__identity-info ecl-col-12 ecl-col-md-6">
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
      {/* Contact and social media */}
      <div className="ecl-footer__sections">
        <div className="ecl-container">
          <div className="ecl-row">
            <section className="ecl-footer__section ecl-col-12 ecl-col-md-4">
              <h1 className="ecl-footer__section-title">{sections[0].title}</h1>
              <ul className="ecl-footer__section-list">
                {sections[0].items.map((item) => (
                  <li
                    className="ecl-footer__section-item"
                    key={item[0].link.label}
                  >
                    {item.map((content) => (
                      <span key={content.link.label}>
                        {content.before && <span>{content.before}</span>}
                        {content.link && (
                          <Link
                            {...content.link}
                            className={classnames(
                              content.link.className,
                              'ecl-footer__section-link'
                            )}
                          />
                        )}
                        {content.after && <span>{content.after}</span>}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
              <h1 className="ecl-footer__section-title">{sections[1].title}</h1>
              <ul className="ecl-footer__section-list">
                {sections[1].items.map((item) => (
                  <li
                    className="ecl-footer__section-item"
                    key={item[0].link.label}
                  >
                    {item.map((content) => (
                      <span key={content.link.label}>
                        {content.before && <span>{content.before}</span>}
                        {content.link && (
                          <Link
                            {...content.link}
                            className={classnames(
                              content.link.className,
                              'ecl-footer__section-link'
                            )}
                          />
                        )}
                        {content.after && <span>{content.after}</span>}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
            <section className="ecl-footer__section ecl-col-12 ecl-col-md-8">
              <h1 className="ecl-footer__section-title">{sections[2].title}</h1>
              <ul className="ecl-footer__section-list ecl-footer__section-list--long ecl-footer__columns">
                {sections[2].items.map((item) => (
                  <li
                    className="ecl-footer__section-item"
                    key={item[0].link.label}
                  >
                    {item.map((content) => (
                      <Link
                        {...content.link}
                        key={content.link.label}
                        className={classnames(
                          content.link.className,
                          'ecl-footer__section-link'
                        )}
                      />
                    ))}
                  </li>
                ))}
              </ul>
              <ul className="ecl-footer__section-list ecl-footer__section-list--short">
                {sections[3].items.map((item) => (
                  <li
                    className="ecl-footer__section-item"
                    key={item[0].link.label}
                  >
                    {item.map((content) => (
                      <span key={content.link.label}>
                        {content.before && <span>{content.before}</span>}
                        {content.link && (
                          <Link
                            {...content.link}
                            className={classnames(
                              content.link.className,
                              'ecl-footer__section-link'
                            )}
                          />
                        )}
                        {content.after && <span>{content.after}</span>}
                      </span>
                    ))}
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
          <span className="ecl-footer__common-label">{common.label}</span>
          {common.links.map((link) => (
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
    links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  }),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            column: PropTypes.number,
            link: PropTypes.shape({
              label: PropTypes.string,
              href: PropTypes.string,
            }),
            before: PropTypes.string,
            after: PropTypes.string,
          })
        )
      ),
    })
  ),
  common: PropTypes.shape({
    label: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  }),
  className: PropTypes.string,
};

Footer.defaultProps = {
  backToTop: {},
  identity: {},
  sections: [],
  common: {},
  className: '',
};

export default Footer;
