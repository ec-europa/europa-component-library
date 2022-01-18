import React from 'react';

import Link from '@ecl/ec-react-component-link';
import InpageNavigation from '@ecl/ec-react-component-inpage-navigation';
import SocialMediaShare from '@ecl/ec-react-component-social-media-share';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/ec-react-component-unordered-list';

function ResearchAreaSpokePage() {
  return (
    <div className="ecl-u-pv-xl ecl-u-pv-lg-3xl">
      <div className="ecl-container ecl-u-type-m">
        <div className="ecl-row" data-ecl-inpage-navigation-container>
          <div className="ecl-col-12 ecl-col-lg-3">
            <aside className="ecl-u-height-100">
              <InpageNavigation
                data-ecl-auto-init="InpageNavigation"
                title="Page contents"
                links={[
                  {
                    href: '#what',
                    label: 'What the Integrated Maritime policy is',
                  },
                  {
                    href: '#blue-growth',
                    label: 'Blue growth',
                  },
                  {
                    href: '#maritime-spatial-planning',
                    label: 'Maritime spatial planning',
                  },
                  {
                    href: '#integrated-maritime-surveillance',
                    label: 'Integrated maritime surveillance',
                  },
                ]}
              />
            </aside>
          </div>

          <div className="ecl-col-12 ecl-col-lg-9">
            <main>
              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mv-none"
                id="what"
              >
                What the Integrated Maritime policy is
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-l">
                The <Link href="/example" label="Integrated Maritime Policy" />{' '}
                seeks to provide a more coherent approach to maritime issue,
                which increased coordination between different policy areas.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                There are 5 cross-cutting policies in the Integrated Maritime
                Policy where research and innovation plays a large part - blue
                growth, marine data and knowledge, maritime spatial planning,
                integrated maritime suveillance, and sea basin strategies.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="blue-growth"
              >
                Blue growth
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-l">
                The policy is the marine and maritime contribution to achieving
                the <Link href="/example" label="Europe 2020 strategy" /> for
                smart, sustainable and inclusive growth.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                Related to this is the Commission communication:{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="Innovation in the Blue Economy: realising the potential of our
                  seas and oceans for jobs and growth"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                <Link href="/example" label="Horizon 2020" /> has Blue Growth
                calls for proposal dedicated to implementing the strategy.
              </p>

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="maritime-spatial-planning"
              >
                Maritime spatial planning
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-l">
                There is an increasing demand for physical space for new
                maritime activities ranging from renewable energy to aquaculture
                installations.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                Coherent planning and scientific knowledge are needed to support
                the development of stratetic plans for regulation, zoning,
                management, protection of the marine environment.
              </p>

              <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mb-none">
                Some examples
              </h3>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  the interaction between aquaculture and the marine environment
                  and the resulting competition for space has been addressed in
                  the{' '}
                  <Link
                    href="/example"
                    variant="external"
                    label="COEXIST"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  project
                </UnorderedListItem>
                <UnorderedListItem>
                  similarly, the{' '}
                  <Link
                    href="/example"
                    variant="external"
                    label="PERSEUS"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  project helped to foster and strengthen cooperation and paved
                  the way to advance the work with international partners in the
                  Mediterranean, with the{' '}
                  <Link
                    href="/example"
                    variant="external"
                    label="BLUEMED initiative"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />
                  , and also the Black Sea.
                </UnorderedListItem>
              </UnorderedList>

              <Link
                className="ecl-u-mt-l ecl-u-mb-none ecl-u-type-bold"
                variant="standalone"
                label="Read more"
                href="/example"
                icon={{
                  shape: 'ui--external',
                  size: 'xs',
                }}
              />

              <h2
                className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none"
                id="integrated-maritime-surveillance"
              >
                Integrated maritime surveillance
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                Integrated maritime surveillance provides authorities interested
                or active in maritime surveillance with ways to exchange
                information and data. Sharing data makes surveillance cheaper
                and more effective.
              </p>

              <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
                Atlantic Ocean
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                The EU pursued the implementation of activities under the{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="All Atlantic Ocean Research Alliance"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />{' '}
                with the
              </p>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  signing of the EU-USA-Canada{' '}
                  <Link href="/example" label="Galway Statement" /> on Atlantic
                  Ocean Cooperation in 2013.
                </UnorderedListItem>
                <UnorderedListItem>
                  signing of the EU-Brazil-South Africa{' '}
                  <Link href="/example" label="Belem Statement" /> on Atlantic
                  Ocean Cooperation in 2013.
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                There are now over 500 international research teams working
                together towards a healthy, productive, secure and resilient
                Atlantic Ocean.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                There are also wide-ranging cooperation agreements with other
                countries.
              </p>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  <Link
                    variant="external"
                    href="/example"
                    label="European Commission and Argentina"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  signed administrative agreement in marine research and
                  innovation cooperation.
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    variant="external"
                    href="/example"
                    label="European Commission and Cabo Verde"
                    icon={{ shape: 'ui--external', size: 'xs' }}
                  />{' '}
                  signed administrative agreement in marine research and
                  innovation cooperation.
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                The ambition is to have more than 1,000 research teams funded by
                Horizon 2020 working in Antractica to the Arctic by 2020.
              </p>

              <UnorderedList className="ecl-u-mt-xs ecl-u-mb-none">
                <UnorderedListItem>
                  <Link
                    href="/example"
                    label="EU funded research projects with Cabo Verde partners"
                  />{' '}
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    href="/example"
                    label="EU funded research projects on Atlantic Ocean"
                  />{' '}
                </UnorderedListItem>
              </UnorderedList>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                The Galway and Belem Statements address the challenges put
                forward in the EU Atlantic Strategy and its associated action
                plan, and are recognised as a major achievements of both the
                strategy and the action plan.
              </p>

              <Link
                className="ecl-u-mt-l ecl-u-mb-none ecl-u-type-bold"
                variant="standalone"
                label="More information"
                href="/example"
                icon={{
                  shape: 'ui--external',
                  size: 'xs',
                }}
              />

              <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
                Baltic Sea
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                BONUS was the joint Baltic Sea research and development
                programme from 2010-2017.
              </p>

              <UnorderedList
                className="ecl-u-mt-xs ecl-u-mb-none"
                variant="no-bullet"
              >
                <UnorderedListItem>
                  <Link
                    className="ecl-u-mb-none"
                    variant="standalone"
                    label="BONUS website"
                    href="/example"
                    icon={{
                      shape: 'ui--external',
                      size: 'xs',
                    }}
                  />
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    className="ecl-u-mb-none"
                    variant="standalone"
                    label="BONUS strategic research agenda"
                    href="/example"
                    icon={{
                      shape: 'ui--external',
                      size: 'xs',
                    }}
                  />
                </UnorderedListItem>
              </UnorderedList>

              <Link
                className="ecl-u-mt-l ecl-u-mb-none ecl-u-type-bold"
                variant="standalone"
                label="More information"
                href="/example"
                icon={{
                  shape: 'ui--external',
                  size: 'xs',
                }}
              />

              <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
                Mediterranean Sea
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                BLUEMED is the research and innovation initiative for promoting
                the blue economy in the Mediterranean Basin.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                The{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="BLUEMED initiative"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />{' '}
                will contribute to the creation of new blue jobs, social
                wellbeing and a sustainable growth in the marine and maritime
                sectors through the implementation of its Strategic Research and
                Innovation Agenda,{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="the BLUEMED SRIA"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                The countries bordering the Mediterranean Sea have agreed to
                launch a pilot for a plastic-free, healthy Mediterranean Sea
                under the umbrella of the BLUEMED initiative, as agreed by the{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="Group of Senior Officials"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />{' '}
                (GSO) BLUEMED Working Group. This pilot initiative aims to
                mobilise key actors to tackle plastic pollution in the
                Mediterranean Sea.
              </p>

              <Link
                className="ecl-u-mt-l ecl-u-mb-none ecl-u-type-bold"
                variant="standalone"
                label="More information"
                href="/example"
                icon={{
                  shape: 'ui--external',
                  size: 'xs',
                }}
              />

              <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-xl ecl-u-mt-lg-3xl ecl-u-mb-none">
                Black Sea
              </h2>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                An initiative for research and Innovation in the Black Sea was
                launched in May 2018 with the aim to advance a shared vision for
                a productive, healthy, resilient, sustainable and better valued
                Black Sea by 2030.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                This is one of the main pillars of the Black Sea Maritime
                Strategy and was launched during the Romanian Presidency of the
                Council of the EU during a conference on 8-9 May 2019.
              </p>

              <p className="ecl-u-type-paragraph ecl-u-type-color-grey ecl-u-mt-m ecl-u-mb-none">
                This builds on the 2015 European Union External Action Service
                and the Commission staff working document on{' '}
                <Link
                  href="/example"
                  variant="external"
                  label="Black Sea synergy"
                  icon={{ shape: 'ui--external', size: 'xs' }}
                />
                .
              </p>

              <Link
                className="ecl-u-mt-l ecl-u-mb-none ecl-u-type-bold"
                variant="standalone"
                label="More information"
                href="/example"
                icon={{
                  shape: 'ui--external',
                  size: 'xs',
                }}
              />

              <h3 className="ecl-u-type-heading-3 ecl-u-mt-l ecl-u-mb-none ecl-u-type-color-black">
                Related documents
              </h3>

              <UnorderedList className="ecl-u-mt-m ecl-u-mb-none ecl-u-type-color-black">
                <UnorderedListItem>
                  <Link href="/example" label="Press release" /> announcing the
                  strategic agenda
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link
                    variant="standalone"
                    href="/example"
                    label="Fact sheet"
                  />
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="/example" label="Bucharest declaration" />{' '}
                  launching the Black Sea research and innovation agenda
                </UnorderedListItem>
              </UnorderedList>

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
    </div>
  );
}

export default ResearchAreaSpokePage;
