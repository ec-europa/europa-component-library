import React from 'react';

import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition,
} from '@ecl/ec-react-component-description-list';
import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import Message from '@ecl/ec-react-component-message';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

function CallProposalsPage() {
  return (
    <div className="ecl-u-pv-3xl ecl-u-pv-lg-4xl">
      <div className="ecl-container ecl-u-type-m">
        <Message
          data-ecl-auto-init="Message"
          className="ecl-u-mb-3xl"
          variant="info"
          icon={{
            shape: 'notifications--information',
            size: 'l',
          }}
          title="This call is closed"
          description="This call was closed on 15 March 2016, 17.00 (CET)."
          close={{
            variant: 'ghost',
            label: 'Close',
            icon: {
              shape: 'ui--close',
              size: 's',
            },
          }}
        />

        <div className="ecl-row" data-ecl-inpage-navigation-container>
          <div className="ecl-col-12 ecl-col-lg-3">
            <aside className="ecl-u-height-100">
              <InpageNavigation
                data-ecl-auto-init="InpageNavigation"
                title="Page contents"
                links={[
                  {
                    href: '#details',
                    label: 'Details',
                  },
                  {
                    href: '#description',
                    label: 'Description',
                  },
                  {
                    href: '#documents',
                    label: 'Documents',
                  },
                  {
                    href: '#contact',
                    label: 'Contact',
                  },
                  {
                    href: '#related',
                    label: 'Related',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="details"
              >
                Details
              </h2>

              <DescriptionList variant="horizontal" className="ecl-u-mt-m">
                <DescriptionTerm>Reference</DescriptionTerm>
                <DescriptionDefinition>FISMA/2015/135/D</DescriptionDefinition>

                <DescriptionTerm>Publication date</DescriptionTerm>
                <DescriptionDefinition>7 February 2016</DescriptionDefinition>

                <DescriptionTerm>Opening date</DescriptionTerm>
                <DescriptionDefinition>7 February 2016</DescriptionDefinition>

                <DescriptionTerm>Deadline model</DescriptionTerm>
                <DescriptionDefinition>Single-stage</DescriptionDefinition>

                <DescriptionTerm>Deadline date</DescriptionTerm>
                <DescriptionDefinition>
                  15 March 2016, 17.00 (CET)
                </DescriptionDefinition>

                <DescriptionTerm>Topic</DescriptionTerm>
                <DescriptionDefinition>
                  <Link
                    variant="standalone"
                    href="/example"
                    label="Banking and financial services"
                  />
                </DescriptionDefinition>

                <DescriptionTerm>Department</DescriptionTerm>
                <DescriptionDefinition>
                  <Link
                    variant="standalone"
                    href="/example"
                    label="Financial Stability, Financial Services and Capital Markets Union"
                  />
                </DescriptionDefinition>
              </DescriptionList>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="description"
              >
                Description
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m">
                The objective of this 2016 preparatory action was to provide a
                financial contribution for the activities carried out by a
                European financial expertise centre to the direct benefit of
                European end-users and other non-industry stakeholders in the
                area of financial services.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
                The beneficiaries of this grant were selected though an open
                procedure. The call for proposals was launched on 8 February
                2016 and applications had to be submitted by 15 March 2016.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mb-none">
                The maximum EU contribution was €1,500,000, which is further
                limited to maximum 60% of the total eligible costs of the
                proposed action.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="documents"
              >
                Documents
              </h2>

              <FileDownload
                className="ecl-u-mt-m"
                title="Call for proposals - FISMA/2015/135/D"
                language="English"
                meta="(104.1 KB - PDF)"
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
                className="ecl-u-mt-m"
                title="FISMA/2015/135/D - clarification"
                language="English"
                meta="(28.9 KB - PDF)"
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
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="contact"
              >
                Contact
              </h2>

              <DescriptionList variant="horizontal" className="ecl-u-mt-m">
                <DescriptionTerm>Name</DescriptionTerm>
                <DescriptionDefinition>Christian Windand</DescriptionDefinition>

                <DescriptionTerm>Email</DescriptionTerm>
                <DescriptionDefinition>
                  ecfin-pericles@ec.europa.eu
                </DescriptionDefinition>
              </DescriptionList>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mb-none"
                id="related"
              >
                Related
              </h2>

              <UnorderedList className="ecl-u-mt-m" variant="no-bullet">
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Economy, finance and the euro"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Economy, finance and the euro"
                  />
                </UnorderedListItem>
                <UnorderedListItem className="ecl-u-pv-m ecl-u-border-bottom ecl-u-border-color-grey-15">
                  <Link
                    variant="standalone"
                    className="ecl-u-type-bold"
                    href="/example"
                    label="Economy, finance and the euro"
                  />
                </UnorderedListItem>
              </UnorderedList>

              <SocialMediaShare
                className="ecl-u-mt-xl ecl-u-mt-lg-4xl"
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

export default CallProposalsPage;
