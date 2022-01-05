/* eslint-disable func-names */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default function () {
  return (
    <Switch>
      {/* EC Components */}
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
      {/* EC Forms */}
      <Redirect from="/r/ec-checkbox" to="/ec/components/forms/checkbox/" />
      <Redirect from="/r/ec-datepicker" to="/ec/components/forms/datepicker/" />
      <Redirect
        from="/r/ec-file-upload"
        to="/ec/components/forms/file-upload/"
      />
      <Redirect from="/r/ec-radio" to="/ec/components/forms/radio/" />
      <Redirect
        from="/r/ec-search-form"
        to="/ec/components/forms/search-form/"
      />
      <Redirect from="/r/ec-select" to="/ec/components/forms/select/" />
      <Redirect from="/r/ec-text-area" to="/ec/components/forms/text-area/" />
      <Redirect from="/r/ec-text-input" to="/ec/components/forms/text-field/" />
      {/* Media */}
      <Redirect from="/r/ec-gallery" to="/ec/components/media/gallery/" />
      <Redirect
        from="/r/ec-media-container"
        to="/ec/components/media/media-container/"
      />
      {/* EC Navigation */}
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
      {/* EC Utilities */}
      <Redirect from="/r/ec-background" to="/ec/utilities/background/" />
      <Redirect from="/r/ec-border" to="/ec/utilities/border/" />
      <Redirect from="/r/ec-clearfix" to="/ec/utilities/clearfix/" />
      <Redirect from="/r/ec-dimension" to="/ec/utilities/dimension/" />
      <Redirect
        from="/r/ec-disable-scroll"
        to="/ec/utilities/disable-scroll/"
      />
      <Redirect from="/r/ec-display" to="/ec/utilities/display/" />
      <Redirect from="/r/ec-float" to="/ec/utilities/float/" />
      <Redirect from="/r/ec-media" to="/ec/utilities/media/" />
      <Redirect from="/r/ec-print" to="/ec/utilities/print/" />
      <Redirect from="/r/ec-screen-reader" to="/ec/utilities/screen-reader/" />
      <Redirect from="/r/ec-spacing" to="/ec/utilities/spacing/" />
      <Redirect from="/r/ec-typography" to="/ec/utilities/typography/" />
      <Redirect from="/r/ec-z-index" to="/ec/utilities/z-index/" />
      {/* EC Layout */}
      <Redirect from="/r/ec-grid" to="/ec/utilities/layout/grid/" />
      <Redirect from="/r/ec-stacks" to="/ec/utilities/layout/stacks/" />
      {/* EC Core templates */}
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
      {/* EC Harmonised templates */}
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
      {/* EC Standardised templates */}
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
      {/* EC Misc */}
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
      {/* EU Components */}
      <Redirect from="/r/eu-accordion" to="/eu/components/accordion/" />
      <Redirect from="/r/eu-blockquote" to="/eu/components/blockquote/" />
      <Redirect from="/r/eu-button" to="/eu/components/button/" />
      <Redirect from="/r/eu-card" to="/eu/components/card/" />
      <Redirect from="/r/eu-date-block" to="/eu/components/date-block/" />
      <Redirect from="/r/eu-expandable" to="/eu/components/expandable/" />
      <Redirect from="/r/eu-fact-figures" to="/eu/components/fact-figures/" />
      <Redirect from="/r/eu-file" to="/eu/components/file/" />
      <Redirect from="/r/eu-icon" to="/eu/components/icon/" />
      <Redirect from="/r/eu-label" to="/eu/components/label/" />
      <Redirect from="/r/eu-language-list" to="/eu/components/language-list/" />
      <Redirect from="/r/eu-list" to="/eu/components/list/" />
      <Redirect from="/r/eu-ordered-list" to="/eu/components/list/" />
      <Redirect from="/r/eu-unordered-list" to="/eu/components/list/" />
      <Redirect from="/r/eu-description-list" to="/eu/components/list/" />
      <Redirect from="/r/eu-message" to="/eu/components/message/" />
      <Redirect
        from="/r/eu-social-media-follow"
        to="/eu/components/social-media-follow/"
      />
      <Redirect
        from="/r/eu-social-media-share"
        to="/eu/components/social-media-share/"
      />
      <Redirect from="/r/eu-table" to="/eu/components/table/" />
      <Redirect from="/r/eu-tag" to="/eu/components/tag/" />
      <Redirect from="/r/eu-timeline" to="/eu/components/timeline/" />
      <Redirect
        from="/r/eu-hero-banner"
        to="/eu/components/banners/hero-banner/"
      />
      <Redirect
        from="/r/eu-page-banner"
        to="/eu/components/banners/page-banner/"
      />
      {/* EU Forms */}
      <Redirect from="/r/eu-checkbox" to="/eu/components/forms/checkbox/" />
      <Redirect from="/r/eu-datepicker" to="/eu/components/forms/datepicker/" />
      <Redirect
        from="/r/eu-file-upload"
        to="/eu/components/forms/file-upload/"
      />
      <Redirect from="/r/eu-radio" to="/eu/components/forms/radio/" />
      <Redirect
        from="/r/eu-search-form"
        to="/eu/components/forms/search-form/"
      />
      <Redirect from="/r/eu-select" to="/eu/components/forms/select/" />
      <Redirect from="/r/eu-text-area" to="/eu/components/forms/text-area/" />
      <Redirect from="/r/eu-text-input" to="/eu/components/forms/text-field/" />
      {/* Media */}
      <Redirect from="/r/eu-gallery" to="/eu/components/media/gallery/" />
      <Redirect
        from="/r/eu-media-container"
        to="/eu/components/media/media-container/"
      />
      {/* EU Navigation */}
      <Redirect
        from="/r/eu-breadcrumb"
        to="/eu/components/navigation/breadcrumb/"
      />
      <Redirect
        from="/r/eu-breadcrumb-core"
        to="/eu/components/navigation/breadcrumb/"
      />
      <Redirect
        from="/r/eu-breadcrumb-harmonised"
        to="/eu/components/navigation/breadcrumb/"
      />
      <Redirect
        from="/r/eu-breadcrumb-standardised"
        to="/eu/components/navigation/breadcrumb/"
      />
      <Redirect
        from="/r/eu-inpage-navigation"
        to="/eu/components/navigation/inpage-navigation/"
      />
      <Redirect from="/r/eu-link" to="/eu/components/navigation/link/" />
      <Redirect from="/r/eu-menu" to="/eu/components/navigation/menu/" />
      <Redirect
        from="/r/eu-menu-harmonised"
        to="/eu/components/navigation/menu/"
      />
      <Redirect
        from="/r/eu-menu-standardised"
        to="/eu/components/navigation/menu/"
      />
      <Redirect
        from="/r/eu-pagination"
        to="/eu/components/navigation/pagination/"
      />
      {/* EU Utilities */}
      <Redirect from="/r/eu-background" to="/eu/utilities/background/" />
      <Redirect from="/r/eu-border" to="/eu/utilities/border/" />
      <Redirect from="/r/eu-clearfix" to="/eu/utilities/clearfix/" />
      <Redirect from="/r/eu-dimension" to="/eu/utilities/dimension/" />
      <Redirect
        from="/r/eu-disable-scroll"
        to="/eu/utilities/disable-scroll/"
      />
      <Redirect from="/r/eu-display" to="/eu/utilities/display/" />
      <Redirect from="/r/eu-float" to="/eu/utilities/float/" />
      <Redirect from="/r/eu-media" to="/eu/utilities/media/" />
      <Redirect from="/r/eu-print" to="/eu/utilities/print/" />
      <Redirect from="/r/eu-screen-reader" to="/eu/utilities/screen-reader/" />
      <Redirect from="/r/eu-spacing" to="/eu/utilities/spacing/" />
      <Redirect from="/r/eu-typography" to="/eu/utilities/typography/" />
      <Redirect from="/r/eu-z-index" to="/eu/utilities/z-index/" />
      {/* EU Layout */}
      <Redirect from="/r/eu-grid" to="/eu/utilities/layout/grid/" />
      <Redirect from="/r/eu-stacks" to="/eu/utilities/layout/stacks/" />
      {/* EU Core templates */}
      <Redirect from="/r/eu-site-header" to="/eu/core-template/site-header/" />
      <Redirect
        from="/r/eu-site-header-core"
        to="/eu/core-template/site-header/"
      />
      <Redirect from="/r/eu-page-header" to="/eu/core-template/page-header/" />
      <Redirect
        from="/r/eu-page-header-core"
        to="/eu/core-template/page-header/"
      />
      <Redirect from="/r/eu-footer" to="/eu/core-template/footer/" />
      <Redirect from="/r/eu-footer-core" to="/eu/core-template/footer/" />
      {/* EU Harmonised templates */}
      <Redirect
        from="/r/eu-site-header-harmonised"
        to="/eu/harmonised-templates/site-header/"
      />
      <Redirect
        from="/r/eu-page-header-harmonised"
        to="/eu/harmonised-templates/page-header/"
      />
      <Redirect
        from="/r/eu-footer-harmonised"
        to="/eu/harmonised-templates/footer/"
      />
      {/* EU Standardised templates */}
      <Redirect
        from="/r/eu-site-header-standardised"
        to="/eu/standardised-template/site-header/"
      />
      <Redirect
        from="/r/eu-page-header-standardised"
        to="/eu/standardised-template/page-header/"
      />
      <Redirect
        from="/r/eu-footer-standardised"
        to="/eu/standardised-template/footer/"
      />
      {/* EU Misc */}
      <Redirect from="/r/eu-content-item" to="/eu/compositions/content-item/" />
      <Redirect
        from="/r/eu-navigation-lists"
        to="/eu/compositions/navigation-lists/"
      />
      <Redirect
        from="/r/eu-skip-link"
        to="/eu/components/navigation/skip-link/"
      />
      <Redirect
        from="/r/eu-dropdown-legacy"
        to="/eu/components/dropdown-legacy/"
      />
    </Switch>
  );
}
