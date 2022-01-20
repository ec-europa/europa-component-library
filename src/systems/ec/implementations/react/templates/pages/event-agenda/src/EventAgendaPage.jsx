import React from 'react';

import Card from '@ecl/ec-react-component-card';
import Link from '@ecl/ec-react-component-link';
import { Timeline2, Timeline2Item } from '@ecl/ec-react-component-timeline2';

function EventAgendaPage() {
  return (
    <main className="ecl-u-pv-2xl ecl-u-pv-md-3xl" id="main">
      <div className="ecl-container ecl-u-type-m">
        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-l">
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
                level: 4,
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
                level: 4,
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
          variant="cta"
          label="Register"
          href="/example"
          className="ecl-u-mt-2xl"
        />
        <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mb-none ecl-u-mt-2xl ecl-u-mt-md-3xl">
          Full programme
        </h3>
        <div>
          <div
            className="ecl-u-d-flex ecl-u-align-items-center ecl-u-flex-wrap ecl-u-z-navigation ecl-u-bg-white ecl-u-type-m ecl-u-pv-s"
            data-ecl-template-sticky-nav
            style={{ position: 'sticky', top: '0' }}
          >
            <Link
              className="ecl-u-type-bold ecl-u-flex-basis-100 ecl-u-flex-basis-md-auto ecl-u-order-md-last ecl-u-ml-m ecl-u-ml-md-auto"
              variant="standalone"
              label="Download PDF version"
              href="/example"
              icon={{
                shape: 'ui--download',
                size: 's',
              }}
            />
            <Link
              className="ecl-u-type-bold ecl-u-mh-m ecl-u-mt-s ecl-u-mt-md-none ecl-u-type-m"
              label="Day 1"
              href="#day1"
            />
            <Link
              className="ecl-u-type-bold ecl-u-mh-m ecl-u-mt-s ecl-u-mt-md-none ecl-u-type-m"
              label="Day 2"
              href="#day2"
            />
          </div>
          <div>
            <h4
              className="ecl-u-type-heading-4 ecl-u-mb-m ecl-u-mt-none
          ecl-u-bg-grey ecl-u-pa-m ecl-u-type-color-white ecl-u-type-bold
          ecl-u-border-left ecl-u-border-width-8 ecl-u-border-color-yellow ecl-u-z-navigation"
              data-ecl-template-sticky-header
              style={{ position: 'sticky', top: '44px' }}
            >
              Day 1 - Thursday, 15 November 2019
            </h4>
            <Timeline2
              id="day1"
              data-ecl-template-timeline
              className="ecl-u-mb-l ecl-u-mb-md-3xl"
            >
              <Timeline2Item
                label="08:00 - 09:00"
                title="Registration and arrival of participants"
              >
                <div className="ecl-u-type-s">Riverside</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  Welcome coffee in the Riverside
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="09:00 - 09:15"
                title="Opening of the conference"
              >
                <div className="ecl-u-type-s">
                  Keynote speeches | Auditorium
                </div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Jean-Claude Juncker"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  European Commission President
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="09:15 - 10:00"
                title="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
              >
                <div className="ecl-u-type-s">Keynote speech | Auditorium</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  A neuroscientist, an artist and an economist meet and discuss
                  how heritage, beauty and art modify our brain, influence our
                  well-being and encourage us to take action in the society.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Johannes Hahn"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  European Commissionner for European Neighbourhood Policy and
                  Enlargment Negociation
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Jan De Maere"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Neuroscientist and art historian, University of Cluj-Naposca
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Pier Luigi Sacco"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Professor of Cultural Economics, IULM, University Milan
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Julianne Schultz"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Media Deals
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="09:15 - 12:00"
                title="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
              >
                <div className="ecl-u-type-s">Keynote speech | Riverside</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  A stimulating discussion on how to support innovation focusing
                  on three main questions: What are investors seeking? What do
                  users need? What are innovators developing? Speakers in the
                  panel representing bank foundations, incubators, cultural
                  institutions and the public sector will interract with
                  innovators from R&I projects. innovations presented range from
                  social to technological innovations, from products to models.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  09:15 - 10:30: Discussion first part
                  <br />
                  10:30 - 11:00: Coffee Break
                  <br />
                  11:00 - 12:00: Discussion second part
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Alberto Anfossi"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Secretary General of San Paolo Bank Foundation
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Gabriela Gandel"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Director of Impact Hub Vienna
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="12:00 - 12:15"
                title="How to innovate in cities through cutlural heritage. Athens, Capital of Innovation 2018"
              >
                <div className="ecl-u-type-s">Keynote speech | Auditorium</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Amalia Zepou"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Vice-Mayor for Civil Society and Innovatio, City of Athens
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="12:30 - 13:00"
                title="Opening of the exhibition"
              >
                <div className="ecl-u-type-s">Speech | Auditorium</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  Ribbon-cutting toast and launch of the vote of &apos;Best
                  innovation&apos; and &apos;Best booth&apos; exhibited in the
                  demo area
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Benita Ferrero-Waldner"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  European Commissionner for Trade and European Neighbourhood
                  Policy
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Jean-Eric Paquet"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Director General, DG RTD European Commission
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Khalil Rouhana"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Deputy Director General for Cummunication Networks, Content
                  and Technology, European Commission
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Michel Magnier"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Director for Culture & Creativity GD EAC European Commission
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="13:00 - 14:30"
                title="Walking lunch with guided visit to the exhibition"
              >
                <div className="ecl-u-type-s">Riverside</div>
              </Timeline2Item>
              <Timeline2Item
                label="14:30 - 18:00"
                title="'Working on what?' Building a Community of Innovators in Cultural Heritage. Promotion: 'Circular, sustainable and creative cities'"
              >
                <div className="ecl-u-type-s">
                  Presentation and discussion | Auditorium
                </div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  Interactive session including pitches from R&I projects and
                  presentation of recent policy reports, studies and
                  manifestoes. Includes presentations by projects on cultural
                  heritage in cities.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Cristina Sabbioni"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Joint Programming Initiative in Cultural Heritage,
                  &apos;European National Research Network&apos;
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="14:30 - 18:00"
                title="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
              >
                <div className="ecl-u-type-s">
                  Presentation and discussion | Riverside
                </div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  Multi-risk assesments for cultural heritage, including
                  adaptation to climate changes and disasters. Session will
                  discuss advanced solutions for cultural heritage and will
                  identify priorities for actions, gaps and synergies to work on
                  in the future.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Erminia Sciacchitano"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Chief Scientific Advisor of the European Year of Cultural
                  Heritage, Directorate General for Education and Culture
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Mauro Facchini"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Head of Unit &apos;Coppernicus&apos;, Directorate General for
                  Internal Market, Industry, Entrepreneurship, and SMEs
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Jean David Malo"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Director of Open Innovation and Open Science, Directorate
                  General for Research and Innovation
                </p>
              </Timeline2Item>
              <Timeline2Item
                label="18:00 - 20:00"
                title="Cocktail - Visit to the exhibition"
              >
                <div className="ecl-u-type-s">Riverside</div>
              </Timeline2Item>
            </Timeline2>
          </div>
          <div>
            <h4
              className="ecl-u-type-heading-4 ecl-u-mb-m ecl-u-mt-none
          ecl-u-bg-grey ecl-u-pa-m ecl-u-type-color-white ecl-u-type-bold
          ecl-u-border-left ecl-u-border-width-8 ecl-u-border-color-yellow ecl-u-z-navigation"
              data-ecl-template-sticky-header
              style={{ position: 'sticky', top: '44px' }}
            >
              Day 2 - Friday, 16 November 2019
            </h4>
            <Timeline2 id="day2" data-ecl-template-timeline>
              <Timeline2Item label="08:00 - 10:30" title="Innovators at work">
                <div className="ecl-u-type-s">Workshop | Breakout rooms</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  Breakfast workshop by H2020 ROCK project (seesion on
                  invitation only - organized with ICLEI and EUROCITIES)
                </p>
                <div className="ecl-u-type-color-black ecl-u-type-bold ecl-u-mt-s">
                  B2B networking
                </div>
                <div className="ecl-u-type-s ecl-u-mt-xs">Riverside</div>
              </Timeline2Item>
              <Timeline2Item
                label="08:00 - 12:30"
                title="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
              >
                <div className="ecl-u-type-s">Debate | Riverside</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  A motivating debate on how cultural heritage can substain
                  cultural diplomacy and what can be the contribution of
                  research and innovation. The session will discuss how to
                  open-up EU innovative initiatives to the world - especially
                  where heritage is at risk - and to better cooperate with UN
                  agencies, involve stakeholders and experts.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Azra Becevic-Sarenkapa"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  National Museum of Bosnia and Herzegovina: &quot;Cultural
                  heritage for social consolidation and identity building. The
                  experience of Balkan Museum Network&quot;
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Claudio Cimino"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Secretary General of WATCH NGO: &quot;Mobilising civil society
                  for the protection&quot;
                </p>
              </Timeline2Item>
              <Timeline2Item label="12:30 - 14:00" title="Networking lunch">
                <div className="ecl-u-type-s">Riverside</div>
              </Timeline2Item>
              <Timeline2Item
                label="14:00 - 15:30"
                title="When in the future? Debate on opportunities for innovation in Cutliral Heritage"
              >
                <div className="ecl-u-type-s">Debate | Auditorium</div>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  When will actions take place? Opportunities under different
                  frameworks scemes to foster innovation in cultural heritage.
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Jean David Malo"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Director of Open Innovation and Open Science, Directorate
                  General for Research and Innovation
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Erminia Sciacchitano"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Chief Scientific Advisor of the European Year of Cultural
                  Heritage, Directorate General for Education and Culture
                </p>
                <p className="ecl-u-type-paragraph ecl-u-mt-s ecl-u-mb-none">
                  <Link
                    className="ecl-u-type-bold"
                    label="Mauro Facchini"
                    href="/example"
                    variant="standalone"
                  />
                  <br />
                  Head of Unit &apos;Coppernicus&apos;, Directorate General for
                  Internal Market, Industry, Entrepreneurship, and SMEs
                </p>
              </Timeline2Item>
              <Timeline2Item label="15:30 - 17:00" title="B2B networking">
                <div className="ecl-u-type-s">Riverside</div>
              </Timeline2Item>
            </Timeline2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EventAgendaPage;
