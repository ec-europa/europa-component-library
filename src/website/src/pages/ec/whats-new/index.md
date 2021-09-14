---
order: 2
title: What's new
---

Detailed release information is available on [Github](https://github.com/ec-europa/europa-component-library/releases).

## 3.0.3 (2021-09-10)

#### :bug: Bug Fix

* [#2200](https://github.com/ec-europa/europa-component-library/pull/2200) fix(media-container): Fixing video flickering issue - FRONT-3081
* [#2189](https://github.com/ec-europa/europa-component-library/pull/2189) fix(datepicker): fix css conflict - FRONT-3022
* [#2193](https://github.com/ec-europa/europa-component-library/pull/2193) fix(default-styles): fix h6 and list styles - FRONT-2976
* [#2194](https://github.com/ec-europa/europa-component-library/pull/2194) fix(website): Make example link work in production - FRONT-2811

#### :nail_care: Enhancement

* [#2203](https://github.com/ec-europa/europa-component-library/pull/2203) feat(page-header): Adding spacing under the EC page header core - FRONT-3146
* [#2190](https://github.com/ec-europa/europa-component-library/pull/2190) feat(social-icons): update negative social icons - FRONT-2975
* [#2177](https://github.com/ec-europa/europa-component-library/pull/2177) feat(menu): improve menu display - FRONT-2807

#### :house: Internal

* [#2202](https://github.com/ec-europa/europa-component-library/pull/2202) fix(specs): Fix secondary variant value for hero-banner
* [#2198](https://github.com/ec-europa/europa-component-library/pull/2198) feat(storybook): Refactoring stories (select options and defaultValue) - FRONT-2722 ([@planctus](https://github.com/planctus))
* [#2201](https://github.com/ec-europa/europa-component-library/pull/2201) chore(deps):  updates 9-9-2021
* [#2191](https://github.com/ec-europa/europa-component-library/pull/2191) chore(deps): Updates

## 3.0.2 (2021-08-24)

#### :nail_care: Enhancement
* [#2187](https://github.com/ec-europa/europa-component-library/pull/2187) fix(banners): remove border radius when full width - FRONT-2966
* [#2186](https://github.com/ec-europa/europa-component-library/pull/2186) fix(typography): update headings and paragraphs - FRONT-2965
* [#2185](https://github.com/ec-europa/europa-component-library/pull/2185) fix(page-header): fix padding and optional item - FRONT-2964
* [#2184](https://github.com/ec-europa/europa-component-library/pull/2184) fix(page-header): center image - FRONT-2963

## 3.0.1 (2021-08-20)

#### :bug: Bug Fix

* [#2175](https://github.com/ec-europa/europa-component-library/pull/2175) fix(playground): Fixing optional css loading in EC and EU - FRONT-2792
* [#2176](https://github.com/ec-europa/europa-component-library/pull/2176) fix(storybook): Fixing switcher link urls to work also in production - FRONT-2791

#### :nail_care: Enhancement

* [#2180](https://github.com/ec-europa/europa-component-library/pull/2180) feat(page-header): add overlay for background image - FRONT-2886

#### :house: Internal

* [#2178](https://github.com/ec-europa/europa-component-library/pull/2178) chore(deps): Updates 17-08-21

## 3.0.0 (2021-08-12)

#### Full new branding look & feel for EU site. ECL components now have a specific EU look & feel version:

* Button
* Text field
* Search
* Text Area
* Links
* Menu
* Site Header - Core and Standardised
* Page Header - Core and Standardised
* Checkbox
* Select
* Breadcrumb
* Radio button
* Blockquotes
* Timeline
* Messages
* Accordion
* Label
* Pagination
* Expandable
* Facts and figures
* Media container
* Tags
* File download
* Cards
* Inpage navigation
* Date block
* Date picker
* Page / Hero Banners
* Tables
* Language list
* Lists
* Media Gallery
* Set of icons

#### Improvements in EC core, standardised and harmonised footers markup and controls

#### Accessibility improvements for the footer

#### Taxonomy tags for Cards and FIles components

#### Icons set update including Social Media Icons & Flags

#### Full width for media container

#### Fallback default styling for "standard" HTML containers: fonts, p ul li ...

#### Grey 3% added to the EC color palette for backgrounds in paragraphs to get zebra effect

#### eTrans composition

#### Links variant displayed like Primary and Secondary buttons

#### Fixing and small improvements:

* Color of link in EC footers
* Conflict between accordion print version and Webtools
* Border and background color changed for several components
* "non-EU languages" label in Language list replaced by "Other languages"
* Timeline - Deprecation warning in css
* Pagination in EC branding breaked with few elements

#### Improvements in the ECL v3 documentation:

* EU content iconography
* EU content colors
* EU content typography
* EU notification colours
* "Getting started" pages update
* EC/EU update of components thumbnails

#### Improvements in ECL v3 playground replacing Storybook knobs by controls

At the same time, a new release of ECL v2 is live (v2.39) including some fixes. From now on, ECL v2 will only support corrective maintenance. All new enhancements will only be applied to ECL v3:

* Conflict between search form and gallery overlay
* Gallery - Video do not stop when closing
* Dispatching change event in the select multiple not detected
