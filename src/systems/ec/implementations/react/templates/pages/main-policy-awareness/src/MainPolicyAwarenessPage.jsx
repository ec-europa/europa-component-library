import React from 'react';
import parse from 'html-react-parser';

import ContentItem from '@ecl/ec-react-composition-content-item';
import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';

const fileTranslations = {
  toggle: {
    label: 'Other languages (3)',
  },
  items: [
    {
      title: 'български',
      meta: '(392 KB - PDF - 2 pages)',
      lang: 'bg',
      download: {
        label: 'Download',
        href: '/example#bg',
      },
    },
    {
      title: 'español',
      meta: '(392 KB - PDF - 2 pages)',
      lang: 'es',
      download: {
        label: 'Download',
        href: '/example#es',
      },
    },
    {
      title: 'français',
      meta: '(392 KB - PDF - 2 pages)',
      lang: 'fr',
      download: {
        label: 'Download',
        href: '/example#fr',
      },
    },
  ],
};

function MainPolicyAwarenessPage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <div className="ecl-container ecl-u-type-m">
        <main>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mv-none">
            Public relations campaings that aim to increase public awareness
            towards the problems Europe encounters when it comes to air
            pollution. The campain offers the solution incorporated in the new
            policy package to clean up Europe&apos;s air on multiple levels.
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
            Events, communication and awareness-rising
          </h2>

          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
            Websites
          </h3>

          <ContentItem
            hasBorder="false"
            title={{
              href: '/example',
              label: "New policy package to clean up Europe's air",
            }}
            description={{
              label:
                "LIVE EC press conference on Environment. The new policy package to clean up Europe's air.",
            }}
          />

          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Events related to this action
          </h3>

          <ContentItem
            hasBorder="false"
            meta={{
              label: parse(
                "<span class='ecl-u-type-uppercase'>Online press conference</span> | <time dateTime='2019-05-26'>26 MAY</time> - <time dateTime='2019-06-20'>20 JUN</time>"
              ),
            }}
            title={{
              href: '/example',
              label: "New policy package to clean up Europe's air",
            }}
            description={{
              label: 'With: Jean-Claude Juncker',
            }}
            date={{
              dateTime: '2019-05-26',
              day: '26',
              month: 'May',
              monthFull: 'May',
              year: '2019',
            }}
          />

          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Communication material
          </h3>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-l"
            title="Air quality press release: Commission takes action to protect citizens from air pollution"
            language="English"
            meta="(392 KB - PDF - 2 pages)"
            icon={{
              shape: 'general--copy',
              size: '2xl',
            }}
            download={{
              label: 'Download',
              href: '/example',
            }}
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Environment press release: New policy package to clean up Europe's air"
            language="English"
            meta="(392 KB - PDF - 2 pages)"
            icon={{
              shape: 'general--copy',
              size: '2xl',
            }}
            download={{
              label: 'Download',
              href: '/example',
            }}
            translation={fileTranslations}
          />

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-m ecl-u-mt-lg-3xl"
            title="Questions and answers on the EU Clean Air Policy Package"
            language="English"
            meta="(392 KB - PDF - 2 pages)"
            icon={{
              shape: 'general--copy',
              size: '2xl',
            }}
            download={{
              label: 'Download',
              href: '/example',
            }}
            translation={fileTranslations}
          />

          <SocialMediaShare
            description="Share this page"
            className="ecl-u-mt-xl ecl-u-mt-lg-3xl"
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

export default MainPolicyAwarenessPage;
