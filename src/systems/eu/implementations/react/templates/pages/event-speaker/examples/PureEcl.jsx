/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';

import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';
import Card from '@ecl/eu-react-component-card';
import Footer from '@ecl/eu-react-component-footer';
import LanguageListOverlay from '@ecl/eu-react-component-language-list/src/LanguageListOverlay';
import Link from '@ecl/eu-react-component-link';
import PageBanner from '@ecl/eu-react-component-page-banner';
import PageHeader from '@ecl/eu-react-component-page-header';
import SiteHeader from '@ecl/eu-react-component-site-header';

import footerContent from '@ecl/eu-specs-footer/demo/data--corporate';
import languageListContent from '@ecl/eu-specs-language-list/demo/data--overlay';
import siteHeaderContent from '@ecl/eu-specs-site-header/demo/data--en';

export default () => {
  const breadcrumb = (
    <Breadcrumb className="ecl-page-header__breadcrumb">
      <BreadcrumbItem label="Home" href="/example" />
      <BreadcrumbItem label="Events" href="/example" />
      <BreadcrumbItem
        label="Fair of European Innovators in Cultural heritage"
        href="/example"
      />
      <BreadcrumbItem label="Speakers" />
    </Breadcrumb>
  );

  return (
    <Fragment>
      <SiteHeader {...siteHeaderContent} />
      <LanguageListOverlay {...languageListContent} hidden="true" />
      <PageHeader
        breadcrumb={breadcrumb}
        meta="Conference"
        title="Fair of European Innovators in Cultural heritage"
      />

      <main className="ecl-u-pv-2xl ecl-u-pv-md-3xl">
        <div className="ecl-container">
          <h2 className="ecl-u-type-heading-2 ecl-u-mt-none ecl-u-mb-l">
            Keynote Speakers
          </h2>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-4">
              <Card
                image={{
                  alt: 'card image',
                  src:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg/1200px-Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg',
                }}
                meta="Special guest"
                title={{
                  variant: 'standalone',
                  label: 'Jean-Claude Juncker',
                  href: '/example',
                }}
                description="European Commission President"
                infos={[
                  {
                    icon: {
                      shape: 'general--language',
                      size: 'xs',
                    },
                    label: 'Opening of the conference',
                  },
                  {
                    icon: {
                      shape: 'general--calendar',
                      size: 'xs',
                    },
                    label: '15 Nov 2019 | 09:00 - 09:15',
                  },
                  {
                    icon: {
                      shape: 'general--location',
                      size: 'xs',
                    },
                    label: 'Auditorium',
                  },
                ]}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4 ecl-u-mt-l ecl-u-mt-md-none">
              <Card
                image={{
                  alt: 'card image',
                  src:
                    'https://ec.europa.eu/commission/commissioners/sites/cwt/files/commissioner_portraits/hahn.jpg',
                }}
                meta="Special guest"
                title={{
                  variant: 'standalone',
                  label: 'Johannes Hahn',
                  href: '/example',
                }}
                description="European Commissionner for European Neighbourhood Policy and Enlargment Negociation"
                infos={[
                  {
                    icon: {
                      shape: 'general--language',
                      size: 'xs',
                    },
                    label:
                      'Why are we innovating in and through cultural heritage?',
                  },
                  {
                    icon: {
                      shape: 'general--calendar',
                      size: 'xs',
                    },
                    label: '15 Nov 2019 | 09:15 - 10:00',
                  },
                  {
                    icon: {
                      shape: 'general--location',
                      size: 'xs',
                    },
                    label: 'Riverside',
                  },
                ]}
              />
            </div>

            <div className="ecl-col-12 ecl-col-md-4 ecl-u-mt-l ecl-u-mt-md-none">
              <Card
                image={{
                  alt: 'card image',
                  src:
                    'https://www.euroamerica.org/wp-content/uploads/2017/10/FerreroWaldnerCV-294x300.jpg',
                }}
                meta="Special guest"
                title={{
                  variant: 'standalone',
                  label: 'Benita Ferrero-Waldner',
                  href: '/example',
                }}
                description="European Commissionner for Trade and European Neighbourhood Policy"
                infos={[
                  {
                    icon: {
                      shape: 'general--language',
                      size: 'xs',
                    },
                    label: 'Opening of the exhibition',
                  },
                  {
                    icon: {
                      shape: 'general--calendar',
                      size: 'xs',
                    },
                    label: '15 Nov 2019 | 12:00 - 12:30',
                  },
                  {
                    icon: {
                      shape: 'general--location',
                      size: 'xs',
                    },
                    label: 'Auditorium',
                  },
                ]}
              />
            </div>
          </div>

          <h2 className="ecl-u-type-heading-2 ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
            Speakers
          </h2>

          <div className="ecl-row">
            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Alberto Anfossi"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Secretary General of San Paolo Bank Foundation
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 09:15 - 12:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Speaker
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Amalia Zepou"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Vice-Mayor for Civil Society and Innovatio, City of Athens
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 12:00 - 12:15 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Azra Becevic-Sarenkapa"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    National Museum of Bosnia and Herzegovina: &quot;Cultural
                    heritage for social consolidation and identity building. The
                    experience of Balkan Museum Network&quot;
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 10:15 - 12:00 | Riverside
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Speaker
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Claudio Cimino"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Secretary General of WATCH NGO: &quot;Mobilising civil
                    society for the protection&quot;
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 10:30 - 11:00 | Riverside
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Cristina Sabbioni"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Joint Programming Initiative in Cultural Heritage,
                    &apos;European National Research Network&apos;
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Promotion: 'Circular, sustainable and creative cities'"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 14:30 - 18:00 | Riverside
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Erminia Sciacchitano"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Chief Scientific Advisor of the European Year of Cultural
                    Heritage, Directorate General for Education and Culture
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 14:30 - 18:00 | Riverside
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Panel Discussant
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Gabriela Gandel"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Director of Impact Hub Vienna
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 09:15 - 12:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Jan De Maere"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Neuroscientist and art historian, University of Cluj-Naposca
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 09:15 - 10:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>
            </div>

            <div className="ecl-col-12 ecl-col-md-6">
              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator / Panelist
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Jean David Malo"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Director of Open Innovation and Open Science, Directorate
                    General for Research and Innovation
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk's"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 14:30 - 18:00 | Riverside
                  </div>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="When in the future? Debate on opportunities for innovation in Cutliral Heritage"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 14:30 - 15:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Speaker
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Jean-Eric Paquet"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Director General, DG RTD European Commission
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Opening of the exhibition"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 12:30 - 13:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Speaker
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="John Bell"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Director, Climate Action and Resource Efficiency,
                    Directorate General for Research and Innovatio, European
                    Commission
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Opening of the conference"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 09:00 - 09:15 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Julianne Schultz"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Media Deals
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 09:15 - 10:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Speaker
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Khalil Rouhana"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Deputy Director General for Cummunication Networks, Content
                    and Technology, European Commission
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Opening of the exhibition"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 12:30 - 13:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Moderator
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Mauro Facchini"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Head of Unit &apos;Coppernicus&apos;, Directorate General
                    for Internal Market, Industry, Entrepreneurship, and SMEs
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    15 Nov 2019 | 12:15 - 13:00 | Riverside
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>

              <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pv-m">
                <div className="ecl-u-flex-grow-1">
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75">
                    Speaker
                  </div>
                  <div className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mt-xs">
                    <Link
                      href="/example"
                      variant="standalone"
                      label="Pier Luigi Sacco"
                    />
                  </div>
                  <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs">
                    Professor of Cultural Economics, IULM, University Milan
                  </p>
                  <Link
                    className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                    href="/example"
                    variant="standalone"
                    label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
                  />
                  <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                    16 Nov 2019 | 09:15 - 10:00 | Auditorium
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-lg-none"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '5rem',
                    width: '5rem',
                  }}
                />

                <div
                  role="img"
                  aria-label="Example image"
                  className="ecl-u-ratio-3-2 ecl-u-flex-shrink-0 ecl-u-ml-xl ecl-u-d-none ecl-u-d-lg-block"
                  style={{
                    backgroundImage:
                      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                    backgroundSize: 'contain',
                    height: '8.75rem',
                    width: '8.75rem',
                  }}
                />
              </article>
            </div>
          </div>
        </div>
      </main>

      <PageBanner
        variant="default"
        isCentered
        title="Fair of European Innovators in Cultural Heritage"
        link={{
          label: 'Register',
          href: '/example',
        }}
      />
      <Footer {...footerContent} />
    </Fragment>
  );
};
