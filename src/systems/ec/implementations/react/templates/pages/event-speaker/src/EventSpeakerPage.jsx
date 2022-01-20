import React from 'react';

import ContentItem from '@ecl/ec-react-composition-content-item';
import Link from '@ecl/ec-react-component-link';

function EventSpeakerPage() {
  return (
    <main className="ecl-u-pv-2xl ecl-u-pv-md-3xl">
      <div className="ecl-container ecl-u-type-m">
        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-l">
          Keynote Speakers
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-4">
            <article className="ecl-card">
              <header className="ecl-card__header">
                <div className="ecl-u-d-flex">
                  <div
                    className="ecl-card__image ecl-u-media-a-m ecl-u-mr-s ecl-u-flex-shrink-0"
                    alt="card image"
                    style={{
                      backgroundImage:
                        'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg/1200px-Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg)',
                    }}
                  />
                  <div>
                    <div className="ecl-card__meta ecl-u-type-s">
                      Special guest
                    </div>
                    <h1 className="ecl-card__title">
                      <a
                        href="/example"
                        className="ecl-link ecl-link--standalone"
                      >
                        Jean-Claude Juncker
                      </a>
                    </h1>
                    <div className="ecl-card__description ecl-u-type-s">
                      European Commission President
                    </div>
                  </div>
                </div>
              </header>
              <section className="ecl-card__body">
                <div className="ecl-card__meta ecl-u-type-s ecl-u-mt-l">
                  Session
                </div>
                <h2 className="ecl-card__title">
                  <a href="/example" className="ecl-link ecl-link--standalone">
                    Opening of the conference
                  </a>
                </h2>
                <div className="ecl-card__meta ecl-u-type-s">
                  15 Nov 2019 | 09:00 - 09:15 | Auditorium
                </div>
              </section>
            </article>
          </div>
          <div className="ecl-col-12 ecl-col-md-4 ecl-u-mt-l ecl-u-mt-md-none">
            <article className="ecl-card">
              <header className="ecl-card__header">
                <div className="ecl-u-d-flex">
                  <div
                    className="ecl-card__image ecl-u-media-a-m ecl-u-mr-s ecl-u-flex-shrink-0"
                    alt="card image"
                    style={{
                      backgroundImage:
                        'url(https://ec.europa.eu/commission/commissioners/sites/cwt/files/commissioner_portraits/hahn.jpg)',
                    }}
                  />
                  <div>
                    <div className="ecl-card__meta ecl-u-type-s">
                      Special guest
                    </div>
                    <h1 className="ecl-card__title">
                      <a
                        href="/example"
                        className="ecl-link ecl-link--standalone"
                      >
                        Johannes Hahn
                      </a>
                    </h1>
                    <div className="ecl-card__description ecl-u-type-s">
                      European Commissionner for European Neighbourhood Policy
                      and Enlargment Negociation
                    </div>
                  </div>
                </div>
              </header>
              <section className="ecl-card__body">
                <div className="ecl-card__meta ecl-u-type-s ecl-u-mt-l">
                  Session
                </div>
                <h2 className="ecl-card__title">
                  <a href="/example" className="ecl-link ecl-link--standalone">
                    Why are we innovating in and through cultural heritage?
                  </a>
                </h2>
                <div className="ecl-card__meta ecl-u-type-s">
                  15 Nov 2019 | 09:15 - 10:00 | Riverside
                </div>
              </section>
            </article>
          </div>
          <div className="ecl-col-12 ecl-col-md-4 ecl-u-mt-l ecl-u-mt-md-none">
            <article className="ecl-card">
              <header className="ecl-card__header">
                <div className="ecl-u-d-flex">
                  <div
                    className="ecl-card__image ecl-u-media-a-m ecl-u-mr-s ecl-u-flex-shrink-0"
                    alt="card image"
                    style={{
                      backgroundImage:
                        'url(https://www.euroamerica.org/wp-content/uploads/2017/10/FerreroWaldnerCV-294x300.jpg)',
                    }}
                  />
                  <div>
                    <div className="ecl-card__meta ecl-u-type-s">
                      Special guest
                    </div>
                    <h1 className="ecl-card__title">
                      <a
                        href="/example"
                        className="ecl-link ecl-link--standalone"
                      >
                        Benita Ferrero-Waldner
                      </a>
                    </h1>
                    <div className="ecl-card__description ecl-u-type-s">
                      European Commissionner for Trade and European
                      Neighbourhood Policy
                    </div>
                  </div>
                </div>
              </header>
              <section className="ecl-card__body">
                <div className="ecl-card__meta ecl-u-type-s ecl-u-mt-l">
                  Session
                </div>
                <h2 className="ecl-card__title">
                  <a href="/example" className="ecl-link ecl-link--standalone">
                    Opening of the exhibition
                  </a>
                </h2>
                <div className="ecl-card__meta ecl-u-type-s">
                  15 Nov 2019 | 12:00 - 12:30 | Auditorium
                </div>
              </section>
            </article>
          </div>
        </div>
        <Link
          variant="cta"
          label="Register"
          href="/example"
          className="ecl-u-mt-2xl"
        />
        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Speakers
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6">
            <ContentItem
              title={{
                href: '/example',
                label: 'Alberto Anfossi',
              }}
              description={{
                className: 'ecl-u-type-s',
                label: 'Secretary General of San Paolo Bank Foundation',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 09:15 - 12:00 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Amalia Zepou',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Vice-Mayor for Civil Society and Innovatio, City of Athens',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Speaker
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="How to innovate in cities through cutlural heritage. Athens, Capital of Innovation 2018"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 12:00 - 12:15 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Azra Becevic-Sarenkapa',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'National Museum of Bosnia and Herzegovina: "Cultural heritage for social consolidation and identity building. The experience of Balkan Museum Network"',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 10:15 - 12:00 | Riverside
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Claudio Cimino',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Secretary General of WATCH NGO: "Mobilising civil society for the protection"',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Speaker
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 10:30 - 11:00 | Riverside
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Cristina Sabbioni',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  "Joint Programming Initiative in Cultural Heritage, 'European National Research Network'",
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Promotion: 'Circular, sustainable and creative cities'"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 14:30 - 18:00 | Riverside
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Erminia Sciacchitano',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Chief Scientific Advisor of the European Year of Cultural Heritage, Directorate General for Education and Culture',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 14:30 - 18:00 | Riverside
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Gabriela Gandel',
              }}
              description={{
                className: 'ecl-u-type-s',
                label: 'Director of Impact Hub Vienna',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Panel Discussant
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 09:15 - 12:00 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Jan De Maere',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Neuroscientist and art historian, University of Cluj-Naposca',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 09:15 - 10:00 | Auditorium
              </div>
            </ContentItem>
          </div>

          <div className="ecl-col-12 ecl-col-md-6">
            <ContentItem
              title={{
                href: '/example',
                label: 'Jean David Malo',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Director of Open Innovation and Open Science, Directorate General for Research and Innovation',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 14:30 - 18:00 | Riverside
              </div>
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Panelist
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="When in the future? Debate on opportunities for innovation in Cutliral Heritage"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 14:30 - 15:00 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Jean-Eric Paquet',
              }}
              description={{
                className: 'ecl-u-type-s',
                label: 'Director General, DG RTD European Commission',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Speaker
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Opening of the exhibition"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 12:30 - 13:00 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'John Bell',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Director, Climate Action and Resource Efficiency, Directorate General for Research and Innovatio, European Commission',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Speaker
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Opening of the conference"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 09:00 - 09:15 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Julianne Schultz',
              }}
              description={{
                className: 'ecl-u-type-s',
                label: 'Media Deals',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 09:15 - 10:00 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Khalil Rouhana',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Deputy Director General for Cummunication Networks, Content and Technology, European Commission',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Speaker
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Opening of the exhibition"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 12:30 - 13:00 | Auditorium
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Mauro Facchini',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  "Head of Unit 'Coppernicus', Directorate General for Internal Market, Industry, Entrepreneurship, and SMEs",
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Moderator
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                15 Nov 2019 | 12:15 - 13:00 | Riverside
              </div>
            </ContentItem>

            <ContentItem
              title={{
                href: '/example',
                label: 'Pier Luigi Sacco',
              }}
              description={{
                className: 'ecl-u-type-s',
                label:
                  'Professor of Cultural Economics, IULM, University Milan',
              }}
              images={{
                position: 'left',
                desktop: {
                  alt: 'Example image',
                  src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
                },
              }}
            >
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                Speaker
              </div>
              <Link
                className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                href="/example"
                variant="standalone"
                label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
              />
              <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                16 Nov 2019 | 09:15 - 10:00 | Auditorium
              </div>
            </ContentItem>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EventSpeakerPage;
