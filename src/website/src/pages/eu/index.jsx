import React from 'react';

import TextContainer from '../../components/TextContainer/TextContainer';
import grid from '../../styles/grid.scss';
import utilities from '../../styles/utilities.scss';

const HomePage = () => (
  <main id="main-content" tabIndex="-1">
    <div className={`${grid.container} ${utilities['pv-xl']}`}>
      <div className={grid.row}>
        <div className={grid.col}>
          <TextContainer>
            <h1>Europa Component Library (EU)</h1>
            <p>
              The Europa Component Library (ECL) is a library of components
              applicable to all European Commission websites (hosted under
              ec.europa.eu.domain). The library contains all available
              components which you can use to build your website.
            </p>
            <p>
              The Digital Transformation team (DTT) - a cross European
              Commission team led by DGs COMM, DIGIT, and DTT - is the owner of
              this library. Please contact COMM Europa Management for support on
              using this resource for a European Commission website.
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
              Websites hosted on the corporate European Commission Next Europa
              CMS (based on Drupal) can also benefit from a Drupal theme
              implementation that is based on this same library of components.
            </p>
          </TextContainer>
        </div>
      </div>
      <div className={`${grid.row} ${utilities['mt-xl']}`}>
        <TextContainer>
          <div className={grid['col-2/4']}>
            <h2>Overview</h2>
            <p>Text</p>
          </div>
          <div className={grid['col-2/4']}>
            <h2>Components</h2>
            <p>Text</p>
          </div>
          <div className={grid['col-2/4']}>
            <h2>Icons</h2>
            <p>Text</p>
          </div>
          <div className={grid['col-2/4']}>
            <h2>Grid</h2>
            <p>Text</p>
          </div>
        </TextContainer>
      </div>
      <div className={`${grid.row} ${utilities['mt-xl']}`}>
        <TextContainer>
          <div
            className={`${grid['col-4/4']} ${grid['col-md-4/8']} ${
              grid['col-xl-4/12']
            }`}
          >
            <h2>Latest Releases</h2>
            <p>Text</p>
          </div>
          <div
            className={`${grid['col-4/4']} ${grid['col-md-4/8']} ${
              grid['col-xl-4/12']
            }`}
          >
            <h2>Upcoming Releases</h2>
            <p>Text</p>
          </div>
          <div
            className={`${grid['col-4/4']} ${grid['col-md-4/8']} ${
              grid['col-xl-4/12']
            }`}
          >
            <h2>Section title</h2>
            <p>Text</p>
          </div>
        </TextContainer>
      </div>
      <div className={`${grid.row} ${utilities['mt-xl']}`}>
        <TextContainer>
          <div className={grid.col}>
            <h2>Component statuses</h2>
            <p>
              Components and their variants have been given statuses reflecting
              their state of completion. The available statuses are listed
              below.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span
                      style={{
                        backgroundColor: '#467a39',
                        borderColor: '#467a39',
                      }}
                    >
                      Ready
                    </span>
                  </td>
                  <td>Can be used in production.</td>
                </tr>
                <tr>
                  <td>
                    <span
                      style={{
                        backgroundColor: '#f29527',
                        borderColor: '#f29527',
                      }}
                    >
                      Not ready
                    </span>
                  </td>
                  <td>Not to be used on new applications. Kept temporarily.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TextContainer>
      </div>
    </div>
  </main>
);

export default HomePage;
