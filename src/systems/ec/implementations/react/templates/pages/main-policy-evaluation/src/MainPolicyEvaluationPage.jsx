import React from 'react';

import Blockquote from '@ecl/ec-react-component-blockquote';
import ContentItem from '@ecl/ec-react-composition-content-item';
import FileDownload from '@ecl/ec-react-component-file';
import Link from '@ecl/ec-react-component-link';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import Timeline2 from '@ecl/ec-react-component-timeline2';

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

function MainPolicyEvaluationPage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <div className="ecl-container ecl-u-type-m">
        <main>
          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none">
            Conclusions
          </h2>

          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-l">
            Considering bellow, a comprehensive review of the EU air quality
            policies should be launched soon and completed by 2020 at the
            latest. This review willaim to produce a robust EU Clean Air
            package, updating existing policies and directives including the
            National Emission Ceilings Directive according to latest science,
            and outlining further cost-effective measures to move much closer to
            the related 6EAP&apos;objective &quot;to achieve levels of air
            quality that do not result in unacceptable impacts on, and risks to,
            human health and the environment.&quot; This review will build on
            and reinforce the objectives of the Europe 2020 strategy for smart,
            sustainable and inclusive growth and involve all relevant
            stakeholders. Meanwhile, important emission abatement measures will
            continue to be implemented so as to help Member States and the local
            authorities to address effectively and overcome current
            noncompliance situations in the short to medium term.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mb-none">
            European air pollution policy has a long history and some notable
            success stories to its name. Prior to this review, the most recent
            wave of policy was launched in 2005 with the Thematic Strategy on
            Air Pollution designed to make substantial progress towards the
            long-term EU objective:
          </p>

          <Blockquote
            className="ecl-u-mt-l ecl-u-mt-lg-m"
            author="President Juncker"
            citation="to achieve levels of air quality that do not result in unacceptable impacts on, and risks to, human health and the environment."
          />

          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-l ecl-u-mt-lg-m">
            This objective, first set in the 6th Environment Action Programme in
            2002, is confirmed in the 7th Environment Action Programme.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
            In January 2011, the College of Commissioners gave a mandate for a
            comprehensive review of EU air policy, recognising the pressing need
            for action to improv air quality, which is a shared responsibility
            requiring our joint efforts. The mandate also focused on a number of
            immediate policy measures that should be taken.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mb-none">
            As part of the review, the Commission conducted a broad consultation
            process by organising a series of Stakeholder Expert Groups in the
            period 2011 to 2013, involving a wide range of participants from
            Member States, industry, NGOs and international stakeholders.
          </p>

          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Factors taken into consideration
          </h2>

          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
            The Stakeholder Expert Group
          </h3>

          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mt-lg-xs">
            The first Stakeholder Expert Group was held on 6 and 7 June 2011,
            the second on 19 and 20 January 2012, the third on 21 June 2012, the
            fourth on 5 December 2012, and the fifth on 2 April 2013.
            Presentations and documents from all meetings are publically
            available through a{' '}
            <Link href="/example" label="dedicated CIRCA library" />
          </p>

          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-nb-none">
            Commitee of the Regions
          </h3>

          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mt-lg-xs ecl-u-mb-none">
            Commitee of the Regions{' '}
            <Link href="/example" label="Outlook Opinion" /> on the review of EU
            Air Policy
          </p>

          <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
            Public consultation
          </h3>

          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mt-lg-xs">
            A first online consultation, on the scope of the review, was
            launched on 30 June 2011. Both the main results and the detailed
            results are available <Link href="/example" label="here" />.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
            A second online consultation focused on the policy options for the
            review of the EU Thematic Strategy on Air Pollution and related
            policies. A{' '}
            <Link
              href="/example"
              label="report of the second online consultation"
            />{' '}
            summarises this.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey">
            <Link href="/example" label="Analysis of the impacts" /> of various
            options to control emissions from the cobustion of fuels in
            installations with a total rated thermal input below 50MW.
          </p>
          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mb-none">
            The <Link href="/example" label="particule matter workshop" />{' '}
            supports the review of the EU Air Quality strategy by providing
            inputs from the Member States and other stakeholders with the
            implementation of the air quality directive.
          </p>

          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-3xl ecl-u-mb-none">
            Evaluation history
          </h2>

          <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mt-lg-l ecl-u-mb-none">
            Need for action to improve air quality,which is a shared
            responsibility requiring our joint efforts.
          </p>

          <Timeline2
            id="timeline"
            data-ecl-template-timeline
            data-ecl-auto-init="Timeline2"
            className="ecl-u-mt-l"
            items={[
              {
                id: 0,
                label: '26 Jan 2011',
                title: 'Comprehensive review of the EU air policy',
                content:
                  'The College of Commissioners gave a mandate for a comprehensive review of the EU air policy, recognising the pressing need for action to improve air qualiy, which is a shared responsibility requiring our joint efforts. The mandate also focused on a number of immediate policy measures that should be taken.',
              },
              {
                id: 1,
                label: '7 May 2011',
                title: 'Commitee of the Regions',
                content:
                  'Commitee of the Regions Outlook Opinion on the review of EU Air policy.',
              },
              {
                id: 2,
                label: '30 June 2011',
                title: '1st Public consultation',
                content:
                  'A first online consultation, on the scope of the review, was launched on 30 June 2011. Both the main results and the detailed results are available here.',
              },
              {
                id: 3,
                label: '01 October 2011',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: 4,
                label: '31 December 2011',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: 5,
                label: '05 April 2012',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: 6,
                label: '17 July 2012',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: 7,
                label: '22 October 2012',
                title: 'Lorem ipsum dolor sit amet',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum velit. Mauris elementum blandit erat, et sollicitudin sapien feugiat nec. Sed nunc orci, tempus auctor fermentum feugiat, condimentum ut lorem.',
              },
              {
                id: 8,
                label: '30 Jul 2013',
                title: '2nd Public consultation',
                content:
                  'A second online consultation focused on the air policy options for the review of the EU Thematic Strategy on Air Pollution and related policies. A report of the second online consultation summarises this.',
              },
              {
                id: 9,
                label: '26 Jul - 23 Aug 2017',
                title:
                  'Fitness check of the EU Ambient Air Quality Directives (Roadmap)',
                content:
                  'This fitness check will look at the performance of the two complement8/50/EC and 2004/107/EC).',
              },
            ]}
          />

          <ContentItem
            hasBorder="false"
            title={{
              href: '/example',
              label: 'EC policy process',
            }}
            description={{
              label:
                'Get more information about how decisions are made in the policy process.',
            }}
          />

          <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
            Reports
          </h2>

          <FileDownload
            data-ecl-auto-init="FileDownload"
            className="ecl-u-mt-l"
            title="Mandate for a comprehensive review of the EU air policy"
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
            title="Assessment of the reasons for non-compliance of the emission ceilings set in the NEC Directive"
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
            title="Evaluation of progress under the EU NEC Directive, EEA report"
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
            title="Fitness check of the EU Ambient Air QUality Directives (Roadmap)"
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
            title="Commission Staff Working Paper On The Implementation Of Eu Air QUality Policy And Preparing For Its Comprehensive Review"
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

export default MainPolicyEvaluationPage;
