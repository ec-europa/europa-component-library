import React from 'react';
import parse from 'html-react-parser';

import ContentItem from '@ecl/ec-react-composition-content-item';
import Link from '@ecl/ec-react-component-link';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';

function MainPolicyLegislationPage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <div className="ecl-container ecl-u-type-m">
        <main>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mv-none">
            In 2018 the Commission adopted a Communication &quot;A Europe that
            protects: Clean air fo all&quot; that provides national, regional
            and local actors practical help to improve quality of air in Europe.
          </p>
          <Link
            className="ecl-u-mt-l"
            href="/example"
            label="Connected results"
            variant="standalone"
            icon={{
              shape: 'ui--corner-arrow',
              transform: 'rotate-90',
              size: 'fluid',
            }}
          />
          <br />
          <Link
            className="ecl-u-mt-l"
            href="/example"
            label="Connected objectives"
            variant="standalone"
            icon={{
              shape: 'ui--corner-arrow',
              transform: 'rotate-90',
              size: 'fluid',
            }}
          />

          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Legislative actions
          </h2>

          <div className="ecl-row ecl-u-mt-m ecl-u-mt-lg-l">
            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Communication document</span> | 52018DC0330'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Clean air for all',
                }}
                description={{
                  label:
                    'Provides national, regional and local actors practical help to improve air quality in Europe.',
                }}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Communication document</span> | 52013DC0918'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'A Clean Air Programme for Europe',
                }}
                description={{
                  label:
                    'Communication from the Commission to the Coucil, the European Parliement, the European Economic and Social Committee and the Committee of the Regions.',
                }}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Proposal</span> | 52013PC0920'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Proposal for a Directive',
                }}
                description={{
                  label:
                    'Reduction of national emissions of certain atmospheric polluants and amending Directive 2003/35/EC',
                }}
              />
            </div>
          </div>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Proposal</span> | 52013PC0917'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Proposal for a Directive',
                }}
                description={{
                  label:
                    'Proposal for a Council Decision on the acceptance of the Amendement to the 1999 Protocol to the 1979 Convention on Long-Range Transboundary Air Pollution to Abate Acidification, Eutrophication and Ground-level Ozone.',
                }}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Staff working document</span> | 5201SC0531'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Impact assessment',
                }}
                description={{
                  label:
                    'Impact assessment accompanying the Proposal for a Council Decision on the acceptance of the Amendment to the 1999 Protocol to the 1979 Convention on Long-Range Transboundary Air Pollution to Abate Acidification, Eutrophication and Ground-level Ozone.',
                }}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Staff working document</span> | 52013SC0532'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Proposal for a Directive',
                }}
                description={{
                  label:
                    'Impact assessment executive summary accompanying the Proposal for a Council Decision on the acceptance of the Amendment to the 1999 Protocol to the 1979 Convention on Long-Range Transboundary Air Pollution to Abate Acidification, Eutrophication and Ground-level Ozone.',
                }}
              />
            </div>
          </div>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Interinstitutional file</span> | 2013/044'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Proposal for a Directive',
                }}
                description={{
                  label:
                    'The objective of the methane NERC is to provide a first step towards international work on methane emission reductions.',
                }}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4">
              <ContentItem
                className="ecl-u-height-100 ecl-u-box-sizing-border"
                meta={{
                  label: parse(
                    '<span class="ecl-u-type-uppercase">Directive</span> | 32008L0050'
                  ),
                }}
                title={{
                  href: '/example',
                  label: 'Ambient Air Quality Directive',
                }}
                description={{
                  label:
                    'Directive 2008/50/EC of the European Parliament and of the Council of 21 May 2008 on ambient air quality and cleaner air for Europe.',
                }}
              />
            </div>
          </div>

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
  );
}

export default MainPolicyLegislationPage;
