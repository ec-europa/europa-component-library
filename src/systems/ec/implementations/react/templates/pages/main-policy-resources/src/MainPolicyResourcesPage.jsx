import React from 'react';

import ContentItem from '@ecl/ec-react-composition-content-item';
import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';

function MainPolicyResourcesPage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <div className="ecl-container ecl-u-type-m">
        <main>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mv-none">
            The European Environment Agency&apos;s &apos;European Air Quality
            Index&apos; informs citizens about air quality levels based on data
            reported by Member States, and an &apos;Urban PM2.5 Atlas&apos; from
            the Joint Research Centre of the European Commission illustrates the
            main sources of particulate matter pollution for 150 cities across
            Europe will make.
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
            Databases and other resources
          </h2>

          <ContentItem
            className="ecl-u-mt-m ecl-u-mt-lg-l"
            title={{
              href: '/example',
              label: 'European Air Quality Index',
            }}
            description={{
              label:
                'The European Environment Agency now offers an Air Quality Index that allows citizens to monitor air quality in real time.',
            }}
            images={{
              position: 'right',
              mobile: {
                alt: 'Example image',
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
              },
              desktop: {
                alt: 'Example image',
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
              },
            }}
          />

          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Report
          </h2>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-l"
            title="Services to develop an EU Air Quality Index"
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
            translation={{
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
            }}
          />

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

export default MainPolicyResourcesPage;
