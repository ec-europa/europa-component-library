import React from 'react';

import Button from '@ecl/ec-react-component-button';
import ContentItem from '@ecl/ec-react-composition-content-item';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import Select from '@ecl/ec-react-component-select';
import TextInput from '@ecl/ec-react-component-text-input';
import Link from '@ecl/ec-react-component-link';
import SocialMediaFollow from '@ecl/ec-react-component-social-media-follow';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

const PersonListPage = () => (
  <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
    <div className="ecl-container">
      <div className="ecl-row">
        <div className="ecl-col-12 ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl">
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-l">
            Contact the team
          </h2>
          <DescriptionList
            variant="horizontal"
            className="ecl-u-mt-none ecl-u-mb-l"
          >
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
          </DescriptionList>
          <Link
            className="ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-3xl"
            variant="standalone"
            label="Media enquiries"
            href="/example"
            icon={{
              shape: 'ui--corner-arrow',
              size: 'xs',
              transform: 'rotate-90',
            }}
          />
        </div>
      </div>
      <div className="ecl-row">
        <aside className="ecl-col-12 ecl-col-lg-3">
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-lg-none ecl-u-mt-none ecl-u-mt-none ecl-u-mb-xl ecl-u-mb-lg-l">
            Team members (11)
          </h2>
          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-lg-l">
            Filter by
          </h3>
          <form>
            <TextInput
              className="ecl-u-mb-m"
              id="facet-name"
              label="Name"
              width="m"
            />
            <Select
              id="facet-team"
              groupClassName="ecl-u-mb-m"
              label="Team"
              width="m"
              options={[]}
            />
            <Select
              id="facet-portfolio"
              groupClassName="ecl-u-mb-m"
              label="Portfolio"
              width="m"
              options={[]}
            />

            <Button className="ecl-u-mt-none" label="Search" variant="search" />
          </form>
        </aside>
        <main className="ecl-col-12 ecl-col-lg-9">
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-none ecl-u-d-lg-block ecl-u-mv-none">
            Team members (11)
          </h2>

          <ContentItem
            className="ecl-u-mt-xl ecl-u-mt-lg-l"
            images={{
              position: 'left',
              desktop: {
                alt: 'Example image',
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
              },
            }}
          >
            <h3 className="ecl-u-type-heading-3 ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-none ecl-u-mb-xs">
              Arūnas Vinčiūnas
            </h3>
            <p className="ecl-u-type-paragraph ecl-u-type-uppercase ecl-u-type-color-grey-75 ecl-u-mt-none ecl-u-type-s">
              Head of Cabinet
            </p>
            <DescriptionList variant="horizontal">
              <DescriptionTerm>Responsibilities</DescriptionTerm>
              <DescriptionDefinition>
                <UnorderedList className="ecl-u-pl-m">
                  <UnorderedListItem>
                    strategic co-ordination and programming
                  </UnorderedListItem>
                  <UnorderedListItem>HEBDO</UnorderedListItem>
                  <UnorderedListItem>
                    management of the Cabinet
                  </UnorderedListItem>
                  <UnorderedListItem>Senior management</UnorderedListItem>
                </UnorderedList>
              </DescriptionDefinition>
            </DescriptionList>
          </ContentItem>

          <ContentItem
            images={{
              position: 'left',
              desktop: {
                alt: 'Example image',
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
              },
            }}
          >
            <h3 className="ecl-u-type-heading-3 ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-none ecl-u-mb-xs">
              Nathalie Chaze
            </h3>
            <p className="ecl-u-type-paragraph ecl-u-type-uppercase ecl-u-type-color-grey-75 ecl-u-mt-none ecl-u-type-s">
              Deputy Head of Cabinet
            </p>
            <DescriptionList variant="horizontal">
              <DescriptionTerm>Phone number</DescriptionTerm>
              <DescriptionDefinition>+32 2 29 64816</DescriptionDefinition>
              <DescriptionTerm>Responsibilities</DescriptionTerm>
              <DescriptionDefinition>
                <UnorderedList className="ecl-u-pl-m">
                  <UnorderedListItem>
                    Food information and composition
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Food processing technologies and novel foods
                  </UnorderedListItem>
                </UnorderedList>
                <Link
                  variant="standalone"
                  label="See all responsibilities"
                  href="/example"
                  icon={{
                    shape: 'ui--corner-arrow',
                    size: 'xs',
                    transform: 'rotate-90',
                  }}
                />
              </DescriptionDefinition>
            </DescriptionList>
          </ContentItem>

          <ContentItem
            images={{
              position: 'left',
              desktop: {
                alt: 'Example image',
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
              },
            }}
          >
            <h3 className="ecl-u-type-heading-3 ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-none ecl-u-mb-xs">
              Natasha Bertaud
            </h3>
            <p className="ecl-u-type-paragraph ecl-u-type-uppercase ecl-u-type-color-grey-75 ecl-u-mt-none ecl-u-type-s">
              Deputy Chief Spokesperson
            </p>
            <DescriptionList variant="horizontal">
              <DescriptionTerm>Phone number</DescriptionTerm>
              <DescriptionDefinition>+32 2 29 64816</DescriptionDefinition>
              <DescriptionTerm>Email</DescriptionTerm>
              <DescriptionDefinition>
                <a href="mailto:natasha.bertaud@ec.europa.eu">
                  natasha.bertaud@ec.europa.eu
                </a>
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
              <DescriptionTerm>Office</DescriptionTerm>
              <DescriptionDefinition>BERL 04/353</DescriptionDefinition>
              <DescriptionTerm>Spokesperson</DescriptionTerm>
              <DescriptionDefinition>
                <UnorderedList className="ecl-u-pl-m">
                  <UnorderedListItem>
                    activities of the president
                  </UnorderedListItem>
                  <UnorderedListItem>
                    policies of the first vice-president
                  </UnorderedListItem>
                  <UnorderedListItem>
                    better regulation, interinstitutional affairs
                  </UnorderedListItem>
                  <UnorderedListItem>
                    migration, home affairs and citizenship
                  </UnorderedListItem>
                  <UnorderedListItem>security union</UnorderedListItem>
                </UnorderedList>
              </DescriptionDefinition>
            </DescriptionList>
          </ContentItem>

          <SocialMediaShare
            className="ecl-u-mt-xl ecl-u-mt-lg-3xl"
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
);

export default PersonListPage;
