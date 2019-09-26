import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '@ecl/ec-react-component-link';

const FooterCore = ({
  backToTop,
  identity,
  sections,
  common,
  className,
  ...props
}) => (
  <Fragment>
    <footer {...props} className={classnames(className, 'ecl-footer-core')}>
      <div className="ecl-container">
        <div className="ecl-footer-core__parent">
          <div className="ecl-footer-core__div1">
            <strong>European Commission website</strong>
            <p>
              This site is managed by the Directorate-General for Communication
            </p>
          </div>

          <div className="ecl-footer-core__div2">
            <ul className="ecl-footer-core__list ecl-footer-core__list--2">
              <li className="ecl-footer-core__list-item">
                <Link
                  label="11"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="12"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="13"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="14"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="15"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="16"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="17"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
            </ul>
          </div>

          <div className="ecl-footer-core__div3">
            <ul className="ecl-footer-core__list">
              <li className="ecl-footer-core__list-item">
                <Link
                  label="21"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="22"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="23"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
            </ul>
          </div>

          <div className="ecl-footer-core__div4">
            <ul className="ecl-footer-core__list">
              <li className="ecl-footer-core__list-item">
                <Link
                  label="31"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="32"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
              <li className="ecl-footer-core__list-item">
                <Link
                  label="33"
                  href="/example"
                  variant="standalone"
                  className="ecl-footer-core__link"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <br />

    <footer {...props} className={classnames(className, 'ecl-footer-core')}>
      <div className="ecl-container">
        <div className="ecl-row">
          <div className="ecl-col-4">
            <strong>European Commission website</strong>
            <p>
              This site is managed by the Directorate-General for Communication
            </p>
          </div>

          <div className="ecl-col-8">
            <div className="ecl-u-pb-xl ecl-u-mb-xl ecl-u-border-bottom ecl-u-border-color-blue-50 ecl-u-border-width-2">
              <ul className="ecl-footer-core__list ecl-footer-core__list--2">
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="11"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="12"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="13"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="14"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="15"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="16"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
                <li className="ecl-footer-core__list-item">
                  <Link
                    label="17"
                    href="/example"
                    variant="standalone"
                    className="ecl-footer-core__link"
                  />
                </li>
              </ul>
            </div>

            <div className="ecl-row">
              <div className="ecl-col-6">
                <ul className="ecl-footer-core__list">
                  <li className="ecl-footer-core__list-item">
                    <Link
                      label="21"
                      href="/example"
                      variant="standalone"
                      className="ecl-footer-core__link"
                    />
                  </li>
                  <li className="ecl-footer-core__list-item">
                    <Link
                      label="22"
                      href="/example"
                      variant="standalone"
                      className="ecl-footer-core__link"
                    />
                  </li>
                  <li className="ecl-footer-core__list-item">
                    <Link
                      label="23"
                      href="/example"
                      variant="standalone"
                      className="ecl-footer-core__link"
                    />
                  </li>
                </ul>
              </div>

              <div className="ecl-col-6">
                <ul className="ecl-footer-core__list">
                  <li className="ecl-footer-core__list-item">
                    <Link
                      label="31"
                      href="/example"
                      variant="standalone"
                      className="ecl-footer-core__link"
                    />
                  </li>
                  <li className="ecl-footer-core__list-item">
                    <Link
                      label="32"
                      href="/example"
                      variant="standalone"
                      className="ecl-footer-core__link"
                    />
                  </li>
                  <li className="ecl-footer-core__list-item">
                    <Link
                      label="33"
                      href="/example"
                      variant="standalone"
                      className="ecl-footer-core__link"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

FooterCore.propTypes = {
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

FooterCore.defaultProps = {
  backToTop: {},
  identity: {},
  sections: [],
  common: [],
  className: '',
};

export default FooterCore;
