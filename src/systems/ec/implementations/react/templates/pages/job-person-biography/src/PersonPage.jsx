import React from 'react';
import parse from 'html-react-parser';

import ContentItem from '@ecl/ec-react-composition-content-item';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import FileDownload from '@ecl/ec-react-component-file';
import Gallery from '@ecl/ec-react-component-gallery';

import demoContentGallery from '@ecl/ec-specs-gallery/demo/data';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import Link from '@ecl/ec-react-component-link';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import Timeline2 from '@ecl/ec-react-component-timeline2';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

function PersonPage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <div className="ecl-container ecl-u-type-m">
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-lg-3">
            <img
              className="ecl-u-width-100 ecl-u-d-md-block ecl-u-mb-xl ecl-u-mb-lg-3xl"
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png"
            />
          </div>
          <div className="ecl-col-12 ecl-col-lg-9">
            <h2
              className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-m ecl-u-mb-lg-l"
              id="contact"
            >
              Contact information
            </h2>

            <DescriptionList variant="horizontal" className="ecl-u-mb-l">
              <DescriptionTerm>Name</DescriptionTerm>
              <DescriptionDefinition>
                Vytenis Andriukaitis
              </DescriptionDefinition>
              <DescriptionTerm>Title</DescriptionTerm>
              <DescriptionDefinition>
                Commissioner (2014 - 2019)
              </DescriptionDefinition>
              <DescriptionTerm>Organization</DescriptionTerm>
              <DescriptionDefinition>
                Health & Food Safety
              </DescriptionDefinition>
            </DescriptionList>
          </div>
        </div>

        <div className="ecl-row" data-ecl-inpage-navigation-container>
          <div className="ecl-col-12 ecl-col-lg-3">
            <aside className="ecl-u-height-100">
              <InpageNavigation
                className="ecl-u-z-navigation"
                data-ecl-auto-init="InpageNavigation"
                title="Page contents"
                links={[
                  {
                    href: '#contact',
                    label: 'Contact',
                  },
                  {
                    href: '#biography',
                    label: 'Biography',
                  },
                  {
                    href: '#responsibilities',
                    label: 'Responsibilities',
                  },
                  {
                    href: '#events',
                    label: 'Events',
                  },
                  {
                    href: '#media',
                    label: 'Media',
                  },
                  {
                    href: '#news',
                    label: 'News',
                  },
                  {
                    href: '#team',
                    label: 'Team',
                  },
                  {
                    href: '#hearings',
                    label: 'European Parliament hearings',
                  },
                  {
                    href: '#declaration',
                    label: 'Declaration of interests',
                  },
                  {
                    href: '#transparency',
                    label: 'Transparency',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-m ecl-u-mb-lg-l">
                General contact
              </h3>

              <DescriptionList variant="horizontal" className="ecl-u-mb-l">
                <DescriptionTerm>Email</DescriptionTerm>
                <DescriptionDefinition>
                  <a
                    className="ecl-link"
                    href="mailto:cab-andriukatis-webpage@ec.europa.eu"
                  >
                    cab-andriukatis-webpage@ec.europa.eu
                  </a>
                </DescriptionDefinition>
                <DescriptionTerm>Address</DescriptionTerm>
                <DescriptionDefinition>
                  European Commission
                  <br />
                  Rue de la Loi / Wetstraat 200
                  <br />
                  1049 Brussels
                  <br />
                  Belgium
                </DescriptionDefinition>
                <DescriptionTerm>Social media</DescriptionTerm>
                <DescriptionDefinition className="ecl-u-mv-none ecl-u-pv-none">
                  <SocialMediaFollow
                    className="ecl-u-mt-m ecl-u-pa-none ecl-u-bg-white"
                    links={[
                      {
                        href: '/example',
                        label: 'Twitter',
                        variant: 'standalone',
                        iconPosition: 'before',
                        icon: [
                          {
                            shape: 'twitter',
                            size: 's',
                          },
                          {
                            shape: 'twitter_hover',
                            size: 's',
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
                            size: 's',
                          },
                          {
                            shape: 'facebook_hover',
                            size: 's',
                          },
                        ],
                      },
                    ]}
                  />
                </DescriptionDefinition>
              </DescriptionList>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-m">
                Press contact
              </h3>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl">
                Media enquiries should be directed to the{' '}
                <Link
                  href="/example"
                  label="European Commission press service"
                />
                .
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-l"
                id="biography"
              >
                Biography
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none ecl-u-mb-l">
                Lithuanian nationality. Married with three children.
              </p>

              <Timeline2
                id="timeline"
                data-ecl-template-timeline
                data-ecl-auto-init="Timeline2"
                className="ecl-u-mt-none ecl-u-mb-l"
                toggleCollapsed="Show %d more items"
                toggleExpanded="Hide %d items"
                button={{
                  label: 'Show all timeline',
                  icon: {
                    shape: 'ui--corner-arrow',
                    size: 'xs',
                    transform: 'rotate-180',
                  },
                  variant: 'secondary',
                  type: 'button',
                }}
                items={[
                  {
                    id: 0,
                    label: '2014 - present',
                    title: 'Commissioner for Health and Food Safety',
                  },
                  {
                    id: 1,
                    label: '2014',
                    title: 'Vice-President of the World Health Assembly',
                  },
                  {
                    id: 2,
                    label: '2012 - 2014',
                    title: 'Minister for Health',
                  },
                  {
                    id: 3,
                    label: '2001 - 2004',
                    title: 'Deputy Speaker of the Lithuanian Parliament',
                  },
                  {
                    id: 4,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 5,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 6,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 7,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 8,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 9,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 10,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 11,
                    label: '...',
                    title: 'Milestone',
                  },
                  {
                    id: 12,
                    label: '1984',
                    title: "Master's degree in History, Vilnius University",
                  },
                  {
                    id: 13,
                    label: '1975',
                    title:
                      "Medical doctor's degree, Kaunas Institute of Medicine",
                  },
                ]}
              />

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
                title="Vytenis Andriukaitis' CV"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-lg-l"
                id="responsibilities"
              >
                Responsibilities
              </h2>

              <UnorderedList className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-l">
                <UnorderedListItem>
                  modernising and simplifying EU food safety policy while
                  keeping the current high level of safety and ensuring existing
                  policies have maximum effect.
                </UnorderedListItem>
                <UnorderedListItem>
                  ensuring the Commission is ready in supporting the EU&apos;s
                  capacity to deal with crisis situations in food safety or
                  pandemics
                </UnorderedListItem>
                <UnorderedListItem>
                  reviewing the laws that oblige the Commission to authorise
                  genetically modified organisms (GMOs), even when a majority of
                  national governments oppose them.
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none ecl-u-mb-l">
                Vytenis Andriukaitis is part of the following project teams:
              </p>

              <UnorderedList className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-l">
                <UnorderedListItem>
                  <Link
                    href="/example"
                    label="Jobs, Growth, Investment and Competitiveness"
                  />
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="/example" label="Digital Single Market" />
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="/example"
                    label="Better Regulation and Inter-Institutional Affairs"
                  />
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="/example" label="Budget and Human Resources" />
                </UnorderedListItem>
              </UnorderedList>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-lg-l">
                Mission letter
              </h3>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none ecl-u-mb-l ecl-u-mb-lg-m">
                Ursula von der Leyen&apos;s personal letter to Vytenis
                Andriukaitis, outlining his role in the Commission.
              </p>

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
                title="President Junker's Mission Letter to Vytenis Andriukaitis"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="events"
              >
                Events
              </h2>

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Meeting</span>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Meeting with Mrs Patricia Flor, EU Ambassador to Japan',
                }}
                description={{
                  className: 'ecl-u-type-s ecl-u-type-color-grey-75',
                  label: 'Vytenis Andriukaitis',
                }}
                date={{
                  dateTime: '2019-09-02',
                  day: '02',
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
                      label: 'Brussels, Belgium',
                    },
                  ],
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Meeting</span>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Meeting with Les Producteurs des Legumes de France (SOLAAL)',
                }}
                description={{
                  className: 'ecl-u-type-s ecl-u-type-color-grey-75',
                  label: 'Vytenis Andriukaitis',
                }}
                date={{
                  dateTime: '2020-02-06',
                  day: '06',
                  month: 'Feb',
                  monthFull: 'February',
                  year: '2020',
                }}
                information={{
                  items: [
                    {
                      icon: {
                        shape: 'general--location',
                        size: 'm',
                      },
                      label: 'Brussels, Belgium',
                    },
                  ],
                }}
              />

              <Link
                className="ecl-u-mt-l ecl-u-mb-xl ecl-u-mb-lg-3xl ecl-u-type-bold"
                variant="standalone"
                label="All events"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'xs',
                  transform: 'rotate-90',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="media"
              >
                Media
              </h2>

              <Gallery
                {...demoContentGallery}
                data-ecl-auto-init="Gallery"
                className="ecl-u-mt-none ecl-u-mb-l"
              />

              <Link
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl ecl-u-type-bold"
                variant="standalone"
                label="All media"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'xs',
                  transform: 'rotate-90',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="news"
              >
                News and publications
              </h2>

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Statement</span> | <time dateTime='2019-09-25'>25 September 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label:
                    'Timely testing saves lives: Statement by Commissioner Andriukaitis on the World Hepatitis Day',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Article</span> | <time dateTime='2019-09-19'>19 September 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label: "'Boris, you are wrong'",
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Speech</span> | <time dateTime='2019-09-19'>19 September 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'AgriFish Council - Animal welfare during transport',
                }}
              />

              <ContentItem
                meta={{
                  label: parse(
                    "<span class='ecl-u-type-uppercase'>Speech</span> | <time dateTime='2019-09-19'>19 September 2019</time>"
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Call to action on food fraud',
                }}
              />

              <Link
                className="ecl-u-mt-l ecl-u-mb-xl ecl-u-mb-lg-3xl ecl-u-type-bold"
                variant="standalone"
                label="See more"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'xs',
                  transform: 'rotate-90',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="team"
              >
                Team
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none ecl-u-mb-l">
                Meet Vytenis Andriukaitis &apos; team supports him in his daily
                work.
              </p>

              <Link
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl ecl-u-type-bold"
                variant="standalone"
                label="Team page"
                href="/example"
                icon={{
                  shape: 'ui--corner-arrow',
                  size: 'xs',
                  transform: 'rotate-90',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="hearings"
              >
                European Parliament hearings
              </h2>

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-none ecl-u-mb-m ecl-u-mb-lg-l"
                title="Answers to European Parliament questionnaire"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
                title="Introductory statement to the European Parliament"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="declaration"
              >
                Declaration of interests
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none ecl-u-mb-l">
                Interests that could conflict with, have the potential to
                conflict, or could be perceived to conflict with the Commission.
              </p>

              <FileDownload
                data-ecl-auto-init="FileDownload"
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
                title="Vytenis Andriukaitis' Declaration of Interests"
                language="English"
                meta="(43.8 KB - PDF)"
                icon={{
                  shape: 'general--copy',
                  size: '2xl',
                }}
                download={{
                  label: 'Download',
                  href: '/example',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l"
                id="transparency"
              >
                Transparency
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-none">
                As part of the Commission&apos;s commitment to transparency,
                Commissioners and their members of Cabinet publish informatoin
                on meetings held with organisations or self-employed
                individuals.
              </p>

              <SocialMediaShare
                className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
                description="Share this page"
                links={[
                  {
                    href: '/example',
                    label: 'Twitter',
                    className: 'ecl-social-media-share__link--twitter',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'twitter',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'twitter_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Facebook',
                    className: 'ecl-social-media-share__link--facebook',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'facebook',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'facebook_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Linkedin',
                    className: 'ecl-social-media-share__link--linkedin',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'linkedin',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'linkedin_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'E-mail',
                    className: 'ecl-social-media-share__link--email',
                    variant: 'standalone',
                    iconPosition: 'before',
                    icon: [
                      {
                        shape: 'email',
                        size: 'xl',
                        className: '',
                      },
                      {
                        shape: 'email_hover',
                        size: 'xl',
                        className: 'ecl-social-media-share__icon-hover',
                      },
                    ],
                  },
                  {
                    href: '/example',
                    label: 'Other social networks',
                    variant: 'standalone',
                  },
                ]}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonPage;
