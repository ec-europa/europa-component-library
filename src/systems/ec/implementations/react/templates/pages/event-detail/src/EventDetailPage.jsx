import React from 'react';
import parse from 'html-react-parser';

import Card from '@ecl/ec-react-component-card';
import ContentItem from '@ecl/ec-react-composition-content-item';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import MediaContainer from '@ecl/ec-react-component-media-container';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

function EventDetailPage() {
  return (
    <main className="ecl-u-pv-2xl ecl-u-pv-md-3xl">
      <div className="ecl-container ecl-u-type-m">
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6 ecl-u-order-md-last">
            <UnorderedList variant="no-bullet">
              <UnorderedListItem className="ecl-u-d-flex ecl-u-align-items-center">
                <Icon shape="general--file" size="m" className="ecl-u-mr-s" />
                Culture | Innovation
              </UnorderedListItem>
              <UnorderedListItem className="ecl-u-mt-l ecl-u-d-flex ecl-u-align-items-center">
                <Icon
                  shape="general--calendar"
                  size="m"
                  className="ecl-u-mr-s"
                />
                15-16 November 2019, 08:00 AM
              </UnorderedListItem>
              <UnorderedListItem className="ecl-u-mt-l ecl-u-d-flex ecl-u-align-items-center">
                <Icon
                  shape="general--location"
                  size="m"
                  className="ecl-u-mr-s"
                />
                Brussels, Belgium
              </UnorderedListItem>
              <UnorderedListItem className="ecl-u-mt-l ecl-u-d-flex ecl-u-align-items-center">
                <Icon
                  shape="general--livestreaming"
                  size="m"
                  className="ecl-u-mr-s"
                />
                Live streaming available
              </UnorderedListItem>
            </UnorderedList>
          </div>
          <div className="ecl-col-12 ecl-col-md-6 ecl-u-mt-2xl ecl-u-mt-md-none">
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none">
              How is innovation in cultural heritage developped and how it the
              EU supporting it? What are the results of EU-funded projects in
              cultural heritage?
            </p>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mb-none">
              Join us for two days of meetings, learning and discoveries!
            </p>
            <Link
              className="ecl-u-mt-l"
              variant="standalone"
              label="Read more"
              href="#description"
              icon={{
                shape: 'ui--corner-arrow',
                size: 'm',
                transform: 'rotate-90',
              }}
            />
          </div>
        </div>
        <Link
          variant="cta"
          label="Register"
          href="/example"
          className="ecl-u-mt-2xl"
        />

        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Programme
        </h2>

        <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mb-s ecl-u-mb-md-xs">
          Highlights
        </h3>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6">
            <Card
              meta="Discussion | 15 november 2019 | 14:30 - 18:00 | Riverside"
              title={{
                variant: 'standalone',
                label:
                  "'Working on what?' Building a Community of Innovators in Cultural Heritage",
                href: '/example',
              }}
              description="Interactive session including pitches from R&I projects and presentations on recent policy reports, studies and manifestoes. Includes presentation of projects on cultural heritage in cities."
            />
          </div>
          <div className="ecl-col-12 ecl-col-md-6 ecl-u-mt-m ecl-u-mt-md-none">
            <Card
              meta="Debate | 16 november 2019 | 14:00 - 15:30 | Auditorium"
              title={{
                variant: 'standalone',
                label:
                  'When is the future? Opportunities for innovation in Cultural Heritage',
                href: '/example',
              }}
              description="When will actions take place? Opportunities under diverse framework schemas to foster innovation in cultural heritage."
            />
          </div>
        </div>
        <Link
          className="ecl-u-mt-l"
          variant="standalone"
          label="See the full programme"
          href="/example"
          icon={{
            shape: 'ui--corner-arrow',
            size: 'm',
            transform: 'rotate-90',
          }}
        />

        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Speakers
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
          className="ecl-u-mt-l"
          variant="standalone"
          label="See all speakers"
          href="/example"
          icon={{
            shape: 'ui--corner-arrow',
            size: 'm',
            transform: 'rotate-90',
          }}
        />

        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Practical information
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6">
            <DescriptionList variant="horizontal">
              <DescriptionTerm>When</DescriptionTerm>
              <DescriptionDefinition>
                Thursday 15 November, 08:00 AM
                <br />
                to Friday 16 November
                <br />
                <Link
                  label="Add to calendar"
                  href="/example"
                  icon={{
                    shape: 'general--calendar',
                    size: 'fluid',
                  }}
                />
              </DescriptionDefinition>
              <DescriptionTerm>Where</DescriptionTerm>
              <DescriptionDefinition>
                The EGG, Rue Barra 175, 1070 Brussels, Belgium
                <br />
                <Link
                  label="See map"
                  href="/example"
                  icon={{
                    shape: 'general--location',
                    size: 'fluid',
                  }}
                />
              </DescriptionDefinition>
              <DescriptionTerm>Live streaming</DescriptionTerm>
              <DescriptionDefinition>
                08:00 CET | 00d:23h:35m
              </DescriptionDefinition>
              <DescriptionTerm>Languages</DescriptionTerm>
              <DescriptionDefinition>
                English. Transcripts in Dutch and French
              </DescriptionDefinition>
              <DescriptionTerm>Organizer</DescriptionTerm>
              <DescriptionDefinition>
                Directorate-General Education, Youth, Sport and Culture
              </DescriptionDefinition>
              <DescriptionTerm>Event part of</DescriptionTerm>
              <DescriptionDefinition>
                European Year of Culture Heritage
              </DescriptionDefinition>
              <DescriptionTerm>Website</DescriptionTerm>
              <DescriptionDefinition>
                <Link
                  label="https://www.eac-events.eu/ehome/fairofeuropeaninnovatorsinculturalheritage/home/"
                  href="/example"
                />
              </DescriptionDefinition>
              <DescriptionTerm>Target audience</DescriptionTerm>
              <DescriptionDefinition>
                European Year of Culture Heritage
              </DescriptionDefinition>
              <DescriptionTerm>Number of seats</DescriptionTerm>
              <DescriptionDefinition>
                170 seats, 11 available
              </DescriptionDefinition>
              <DescriptionTerm>Entrance fee</DescriptionTerm>
              <DescriptionDefinition>Free</DescriptionDefinition>
            </DescriptionList>
            <SocialMediaFollow
              className="ecl-u-mt-l"
              description="Social Media"
              links={[
                {
                  href: '/example',
                  label: 'Twitter',
                  variant: 'standalone',
                  iconPosition: 'before',
                  icon: [
                    {
                      shape: 'twitter',
                      size: 'xl',
                    },
                    {
                      shape: 'twitter_hover',
                      size: 'xl',
                    },
                  ],
                },
                {
                  href: '/example',
                  label: 'Facebook',
                  variant: 'standalone',
                  iconPosition: 'before',
                  icon: [
                    {
                      shape: 'facebook',
                      size: 'xl',
                    },
                    {
                      shape: 'facebook_hover',
                      size: 'xl',
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className="ecl-col-12 ecl-col-md-6">
            <script type="application/json">
              {`
                  {
                    "service" : "map",
                    "version": "2.0",
                    "address": "The EGG, Rue Bara 175, 1070 Bruxelles, Belgique",
                    "options" : {
                        "color" : "blue",
                        "display" : "map",
                        "target" : "before"
                    }
                  }
                `}
            </script>
          </div>
        </div>
        <Link
          className="ecl-u-mt-l"
          variant="cta"
          label="Register"
          href="/example"
        />

        <h2
          className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l"
          id="description"
        >
          Description
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6 ecl-u-order-md-last ecl-u-mb-l ecl-u-mb-md-none">
            <MediaContainer
              alt="example image"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              description="Best booth: iMARECULTURE"
            />
          </div>
          <div className="ecl-col-12 ecl-col-md-6">
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nunc risus, venenatis non nibh ac, condimentum vestibulum risus.
              Ut risus elit, interdum in leo nec, pharetra scelerisque nulla.
            </p>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
              Integer bibendum nisl orci, nec sagittis nisi cursus sed. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Maecenas eget
              urna enim. Mauris vitae augue mi. Nunc elementum rhoncus
              dignissim. Aenean lectus ipsum, tincidunt non mauris eu, aliquet
              rutrum magna. Cras dignissim enim at orci laoreet, et pulvinar
              metus aliquam. Aenean eu odio non dui pharetra sagittis.
            </p>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
              Etiam dignissim odio mauris, at pellentesque justo ultrices nec.
              Ut non metus sagittis augue molestie luctus ac ac odio. Sed
              vestibulum lacus in pharetra pellentesque. Vivamus laoreet
              dignissim leo, at pellentesque enim finibus sed. Suspendisse
              tincidunt orci nec elit sagittis vestibulum. Quisque tempor et
              eros id vehicula. Sed tempus gravida justo id pharetra. In
              volutpat maximus iaculis. Etiam pretium massa eget nisl vulputate,
              id luctus erat ullamcorper.
            </p>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
              In efficitur mi id consectetur interdum. Donec eu fringilla magna,
              non sodales purus. Vivamus sit amet condimentum ipsum. Donec
              lacinia neque at viverra tempor. Praesent metus leo, malesuada sed
              placerat nec, pellentesque in erat. Nunc consectetur porttitor
              velit et blandit. Nunc scelerisque quam vitae dolor rhoncus
              tristique. Donec ultrices massa auctor velit dapibus eleifend.
              Morbi quis eros diam. Phasellus vitae pulvinar mauris, ut
              consequat nibh. Quisque nec condimentum nibh, eu pretium libero.
              Quisque interdum blandit dolor, eu imperdiet sapien. Morbi
              tristique malesuada luctus. Nulla vel eleifend libero. Quisque non
              lacinia tortor. Nunc congue nunc id purus ullamcorper vehicula.
              Vestibulum fermentum imperdiet urna, eget suscipit ipsum bibendum
              sed. Quisque in ultrices velit, ut aliquam nisl.
            </p>
            <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mb-none">
              Ut convallis est et nisi gravida, quis rhoncus mi tincidunt.
              Suspendisse maximus efficitur erat, at fermentum nibh vulputate
              non.
            </p>
          </div>
        </div>

        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Contact
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6">
            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-m ecl-u-mb-md-l">
              General contact
            </h3>
            <address>
              <DescriptionList variant="horizontal">
                <DescriptionTerm>Phone number</DescriptionTerm>
                <DescriptionDefinition>
                  (0)2 29 56186 (Commission switchboard)
                </DescriptionDefinition>
                <DescriptionTerm>Postal address</DescriptionTerm>
                <DescriptionDefinition>
                  Directorate-General for Education and Culture
                  <br />
                  European Commission B-1049 Brussels Belgium
                </DescriptionDefinition>
                <DescriptionTerm>Email address</DescriptionTerm>
                <DescriptionDefinition>
                  <Link
                    label="directorate-general@ec.europa.eu"
                    href="/example"
                  />
                </DescriptionDefinition>
              </DescriptionList>
            </address>
          </div>
          <div className="ecl-col-12 ecl-col-md-6 ecl-u-mt-l ecl-u-mt-md-none">
            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-m ecl-u-mb-md-l">
              Press contact
            </h3>
            <address>
              <DescriptionList variant="horizontal">
                <DescriptionTerm>Name</DescriptionTerm>
                <DescriptionDefinition>Sara Soumillion</DescriptionDefinition>

                <DescriptionTerm>Role</DescriptionTerm>
                <DescriptionDefinition>Press Officer</DescriptionDefinition>

                <DescriptionTerm>Phone number</DescriptionTerm>
                <DescriptionDefinition>+32 2 296 70 94</DescriptionDefinition>

                <DescriptionTerm>Email address</DescriptionTerm>
                <DescriptionDefinition>
                  <Link label="Sara.SOUMILLION@ec.europa.eu" href="/example" />
                </DescriptionDefinition>
              </DescriptionList>
              <SocialMediaFollow
                className="ecl-u-mt-l"
                description="Social media"
                links={[
                  {
                    href: '/example',
                    label: 'Twitter',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'twitter',
                        size: 'xl',
                      },
                      {
                        shape: 'twitter_hover',
                        size: 'xl',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Facebook',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'facebook',
                        size: 'xl',
                      },
                      {
                        shape: 'facebook_hover',
                        size: 'xl',
                      },
                    ],
                  },
                ]}
              />
            </address>
          </div>
        </div>

        <h2 className="ecl-u-type-heading-2 ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Related events
        </h2>

        <ContentItem
          hasBorder="false"
          meta={{
            label: parse(
              "<span class='ecl-u-type-uppercase'>Public debate</span> | <time dateTime='2019-08-26'>August 26, 2019</time>"
            ),
          }}
          title={{
            href: '/example',
            label: 'Dialog with Commissioner Georgieva',
          }}
          date={{
            dateTime: '2019-08-26',
            day: '26',
            month: 'Aug',
            monthFull: 'August',
            year: '2019',
          }}
          information={{
            items: [
              {
                icon: {
                  shape: 'general--location',
                  size: 'm',
                },
                label: 'Munich, Germany',
              },
              {
                icon: {
                  shape: 'general--livestreaming',
                  size: 'm',
                },
                label: 'Live streaming',
              },
            ],
          }}
        />

        <ContentItem
          hasBorder="false"
          meta={{
            label: parse(
              "<span class='ecl-u-type-uppercase'>Info days</span> | <time dateTime='2019-05-26'>May 26 - June 06, 2019</time>"
            ),
          }}
          title={{
            href: '/example',
            label: 'Info days on founds for cultural projects',
          }}
          date={{
            dateTime: '2019-05-26',
            day: '26',
            month: 'May',
            monthFull: 'May',
            year: '2019',
          }}
          information={{
            items: [
              {
                icon: {
                  shape: 'general--location',
                  size: 'm',
                },
                label: 'Online',
              },
            ],
          }}
        />

        <ContentItem
          hasBorder="false"
          meta={{
            label: parse(
              "<span class='ecl-u-type-uppercase'>College meeting</span> | <time dateTime='2019-09-06'>September 06, 2019</time>"
            ),
          }}
          title={{
            href: '/example',
            label: 'Meeting of the College of Commissioners',
          }}
          date={{
            dateTime: '2019-09-06',
            day: '06',
            month: 'Sep',
            monthFull: 'September',
            year: '2019',
          }}
          information={{
            items: [
              {
                icon: {
                  shape: 'general--location',
                  size: 'm',
                },
                label: 'Munich, Germany',
              },
            ],
          }}
        />
      </div>
    </main>
  );
}

export default EventDetailPage;
