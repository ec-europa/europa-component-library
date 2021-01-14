import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default () => (
  <Switch>
    {/* Components */}
    <Redirect from="/r/ec-accordion" to="/ec/components/accordion/" />
    <Redirect from="/r/ec-blockquote" to="/ec/components/blockquote/" />
    <Redirect from="/r/ec-button" to="/ec/components/button/" />
    <Redirect from="/r/ec-card" to="/ec/components/card/" />
    <Redirect from="/r/ec-date-block" to="/ec/components/date-block/" />
    <Redirect from="/r/ec-expandable" to="/ec/components/expandable/" />
    <Redirect from="/r/ec-fact-figures" to="/ec/components/fact-figures/" />
    <Redirect from="/r/ec-file" to="/ec/components/file/" />
    <Redirect from="/r/ec-icon" to="/ec/components/icon/" />
    <Redirect from="/r/ec-label" to="/ec/components/label/" />
    <Redirect from="/r/ec-language-list" to="/ec/components/language-list/" />
    <Redirect from="/r/ec-list" to="/ec/components/list/" />
    <Redirect from="/r/ec-ordered-list" to="/ec/components/list/" />
    <Redirect from="/r/ec-unordered-list" to="/ec/components/list/" />
    <Redirect from="/r/ec-description-list" to="/ec/components/list/" />
    <Redirect from="/r/ec-message" to="/ec/components/message/" />
    <Redirect
      from="/r/ec-social-media-follow"
      to="/ec/components/social-media-follow/"
    />
    <Redirect
      from="/r/ec-social-media-share"
      to="/ec/components/social-media-share/"
    />
    <Redirect from="/r/ec-table" to="/ec/components/table/" />
    <Redirect from="/r/ec-tag" to="/ec/components/tag/" />
    <Redirect from="/r/ec-timeline" to="/ec/components/timeline/" />
    <Redirect
      from="/r/ec-hero-banner"
      to="/ec/components/banners/hero-banner/"
    />
    <Redirect
      from="/r/ec-page-banner"
      to="/ec/components/banners/page-banner/"
    />
    {/* Forms */}
    <Redirect from="/r/ec-checkbox" to="/ec/components/forms/checkbox/" />
    <Redirect from="/r/ec-datepicker" to="/ec/components/forms/datepicker/" />
    <Redirect from="/r/ec-file-upload" to="/ec/components/forms/file-upload/" />
    <Redirect from="/r/ec-radio" to="/ec/components/forms/radio/" />
    <Redirect from="/r/ec-search-form" to="/ec/components/forms/search-form/" />
    <Redirect from="/r/ec-select" to="/ec/components/forms/select/" />
    <Redirect from="/r/ec-text-area" to="/ec/components/forms/text-area/" />
    <Redirect from="/r/ec-text-input" to="/ec/components/forms/text-field/" />
    {/* Media */}
    <Redirect from="/r/ec-gallery" to="/ec/components/media/gallery/" />
    <Redirect
      from="/r/ec-media-container"
      to="/ec/components/media/media-container/"
    />
    {/* Navigation */}
    <Redirect
      from="/r/ec-breadcrumb"
      to="/ec/components/navigation/breadcrumb/"
    />
    <Redirect
      from="/r/ec-breadcrumb-core"
      to="/ec/components/navigation/breadcrumb/"
    />
    <Redirect
      from="/r/ec-breadcrumb-harmonised"
      to="/ec/components/navigation/breadcrumb/"
    />
    <Redirect
      from="/r/ec-breadcrumb-standardised"
      to="/ec/components/navigation/breadcrumb/"
    />
    <Redirect
      from="/r/ec-inpage-navigation"
      to="/ec/components/navigation/inpage-navigation/"
    />
    <Redirect from="/r/ec-link" to="/ec/components/navigation/link/" />
    <Redirect from="/r/ec-menu" to="/ec/components/navigation/menu/" />
    <Redirect
      from="/r/ec-menu-harmonised"
      to="/ec/components/navigation/menu/"
    />
    <Redirect
      from="/r/ec-menu-standardised"
      to="/ec/components/navigation/menu/"
    />
    <Redirect
      from="/r/ec-pagination"
      to="/ec/components/navigation/pagination/"
    />
    {/* Utilities */}
    <Redirect from="/r/ec-background" to="/ec/utilities/background/" />
    <Redirect from="/r/ec-border" to="/ec/utilities/border/" />
    <Redirect from="/r/ec-clearfix" to="/ec/utilities/clearfix/" />
    <Redirect from="/r/ec-dimension" to="/ec/utilities/dimension/" />
    <Redirect from="/r/ec-disable-scroll" to="/ec/utilities/disable-scroll/" />
    <Redirect from="/r/ec-display" to="/ec/utilities/display/" />
    <Redirect from="/r/ec-float" to="/ec/utilities/float/" />
    <Redirect from="/r/ec-media" to="/ec/utilities/media/" />
    <Redirect from="/r/ec-print" to="/ec/utilities/print/" />
    <Redirect from="/r/ec-screen-reader" to="/ec/utilities/screen-reader/" />
    <Redirect from="/r/ec-spacing" to="/ec/utilities/spacing/" />
    <Redirect from="/r/ec-typography" to="/ec/utilities/typography/" />
    <Redirect from="/r/ec-z-index" to="/ec/utilities/z-index/" />
    {/* Layout */}
    <Redirect from="/r/ec-grid" to="/ec/utilities/layout/grid/" />
    <Redirect from="/r/ec-stacks" to="/ec/utilities/layout/stacks/" />
    {/* Core templates */}
    <Redirect from="/r/ec-site-header" to="/ec/core-template/site-header/" />
    <Redirect
      from="/r/ec-site-header-core"
      to="/ec/core-template/site-header/"
    />
    <Redirect from="/r/ec-page-header" to="/ec/core-template/page-header/" />
    <Redirect
      from="/r/ec-page-header-core"
      to="/ec/core-template/page-header/"
    />
    <Redirect from="/r/ec-footer" to="/ec/core-template/footer/" />
    <Redirect from="/r/ec-footer-core" to="/ec/core-template/footer/" />
    {/* Harmonised templates */}
    <Redirect
      from="/r/ec-site-header-harmonised"
      to="/ec/harmonised-templates/site-header/"
    />
    <Redirect
      from="/r/ec-page-header-harmonised"
      to="/ec/harmonised-templates/page-header/"
    />
    <Redirect
      from="/r/ec-footer-harmonised"
      to="/ec/harmonised-templates/footer/"
    />
    {/* Standardised templates */}
    <Redirect
      from="/r/ec-site-header-standardised"
      to="/ec/standardised-template/site-header/"
    />
    <Redirect
      from="/r/ec-page-header-standardised"
      to="/ec/standardised-template/page-header/"
    />
    <Redirect
      from="/r/ec-footer-standardised"
      to="/ec/standardised-template/footer/"
    />
    {/* Misc */}
    <Redirect from="/r/ec-content-item" to="/ec/compositions/content-item/" />
    <Redirect
      from="/r/ec-navigation-lists"
      to="/ec/compositions/navigation-lists/"
    />
    <Redirect
      from="/r/ec-skip-link"
      to="/ec/components/navigation/skip-link/"
    />
    <Redirect
      from="/r/ec-dropdown-legacy"
      to="/ec/components/dropdown-legacy/"
    />
  </Switch>
);
