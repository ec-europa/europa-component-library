import React from 'react';

const HomePage = () => (
  <main id="main-content" tabIndex="-1">
    <div className="ecl-container ecl-u-pv-xl">
      <div className="ecl-row">
        <div className="ecl-col ecl-editor">
          <h1>Europa Component Library (EU)</h1>
          <p>
            The Europa Component Library (ECL) is a library of components
            applicable to all European Commission websites (hosted under
            ec.europa.eu.domain). The library contains all available components
            which you can use to build your website.
          </p>
          <p>
            The Digital Transformation team (DTT) - a cross European Commission
            team led by DGs COMM, DIGIT, and DTT - is the owner of this library.
            Please contact COMM Europa Management for support on using this
            resource for a European Commission website.
          </p>
          <p>All library elements are accompanied with</p>
          <ul>
            <li>
              documentation: what the component is intended for and
              recommendations regarding its usage
            </li>
            <li>demo: visual representation of the component</li>
            <li>
              code: technologically agnostic HTML/CSS code for implementation
            </li>
          </ul>
          <p>
            Websites hosted on the corporate European Commission Next Europa CMS
            (based on Drupal) can also benefit from a Drupal theme
            implementation that is based on this same library of components.
          </p>
        </div>
      </div>
      <div className="ecl-row ecl-u-mt-xl ecl-editor">
        <div className="ecl-col-6">
          <h2>Overview</h2>
          <p>Text</p>
        </div>
        <div className="ecl-col-6">
          <h2>Components</h2>
          <p>Text</p>
        </div>
        <div className="ecl-col-6">
          <h2>Icons</h2>
          <p>Text</p>
        </div>
        <div className="ecl-col-6">
          <h2>Grid</h2>
          <p>Text</p>
        </div>
      </div>
      <div className="ecl-row ecl-u-mt-xl ecl-editor">
        <div className="ecl-col-4">
          <h2>Latest Releases</h2>
          <p>Text</p>
        </div>
        <div className="ecl-col-4">
          <h2>Upcoming Releases</h2>
          <p>Text</p>
        </div>
        <div className="ecl-col-4">
          <h2>Section title</h2>
          <p>Text</p>
        </div>
      </div>
      <div className="ecl-row ecl-u-mt-xl ecl-editor">
        <div className="ecl-col">
          <h2>Component statuses</h2>
          <p>
            Components and their variants have been given statuses reflecting
            their state of completion. The available statuses are listed below.
          </p>
          <table className="ecl-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="Status Status--tag">
                    <label
                      style={{
                        backgroundColor: '#467a39',
                        borderColor: '#467a39',
                      }}
                    >
                      Ready
                    </label>
                  </div>
                </td>
                <td>Can be used in production.</td>
              </tr>

              <tr>
                <td>
                  <div className="Status Status--tag">
                    <label
                      style={{
                        backgroundColor: '#006fb4',
                        borderColor: '#006fb4',
                      }}
                    >
                      Planned
                    </label>
                  </div>
                </td>
                <td>Still under discussion.</td>
              </tr>

              <tr>
                <td>
                  <div className="Status Status--tag">
                    <label
                      style={{
                        backgroundColor: '#fbc11d',
                        borderColor: '#fbc11d',
                      }}
                    >
                      WIP
                    </label>
                  </div>
                </td>
                <td>Work in progress. Implement with caution.</td>
              </tr>

              <tr>
                <td>
                  <div className="Status Status--tag">
                    <label
                      style={{
                        backgroundColor: '#f29527',
                        borderColor: '#f29527',
                      }}
                    >
                      Legacy
                    </label>
                  </div>
                </td>
                <td>Not to be used on new applications. Kept temporarily.</td>
              </tr>

              <tr>
                <td>
                  <div className="Status Status--tag">
                    <label
                      className="Status-label"
                      style={{
                        backgroundColor: '#da2130',
                        borderColor: '#da2130',
                      }}
                    >
                      Broken
                    </label>
                  </div>
                </td>
                <td>Cannot be used.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
