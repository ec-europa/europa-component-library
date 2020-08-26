#!/usr/bin/env node

let eclPath = '';

const eclComponents = (component, variant, system) => {
  switch (component) {
    case 'accordion':
      eclPath = 'deprecated-accordion-ecl-2-6-0';
      break;
    case 'accordion2':
      eclPath = 'components-accordion--default';
      break;
    case 'breadcrumb':
    case 'breadcrumb-core':
    case 'breadcrumb-harmonised':
    case 'breadcrumb-standardised':
      switch (variant) {
        case 'default':
          eclPath = `components-navigation-${component}--long`;
          break;
        default:
          eclPath = `components-navigation-${component}--${variant}`;
          break;
      }
      break;
    case 'button':
      switch (variant) {
        case 'call':
          eclPath = 'components-button--call-to-action';
          break;
        default:
          eclPath = `components-button--${variant}`;
      }
      break;
    case 'card':
      switch (variant) {
        case 'event':
          eclPath = false;
          break;
        default:
          eclPath = `components-${component}--${variant}`;
      }
      break;
    case 'checkbox':
      switch (variant) {
        case 'invalid':
          eclPath = false;
          break;
        default:
          eclPath = 'components-forms-checkbox--default';
      }
      break;
    case 'contextual-navigation':
      eclPath = false;
      break;
    case 'datepicker':
    case 'file-upload':
    case 'select':
      switch (variant) {
        case 'single':
          eclPath = `components-forms-${component}--default`;
          break;
        default:
          eclPath = `components-forms-${component}--${variant}`;
      }
      break;
    case 'blockquote':
    case 'date-block':
    case 'file':
    case 'gallery':
    case 'timeline':
      eclPath = `components-${component}--${variant}`;
      break;
    case 'description-list':
      switch (variant) {
        case 'horizontal':
          eclPath = 'components-list--description-horizontal';
          break;
        default:
          eclPath = 'components-list--description';
      }
      break;
    case 'dropdown-legacy':
      eclPath = 'components-dropdown-legacy--default';
      break;
    case 'expandable':
      eclPath = 'components-expandables--default';
      break;
    case 'fact-figures':
      switch (variant) {
        case '3-col':
          eclPath = 'components-fact-figures--3-columns';
          break;
        case '4-col':
          eclPath = 'components-fact-figures--4-columns';
          break;
      }
      break;
    case 'footer':
      eclPath = `deprecated-footer-ecl-2-12-0--${variant}`;
      break;
    case 'footer-core':
    case 'footer-standardised': {
      const family = component.replace('footer-', '');
      eclPath = `components-footers-${family}--${variant}`;
      break;
    }
    case 'footer-harmonised':
      variant = `${variant.slice(0, -1)}-${variant.slice(-1)}`;
      eclPath = `components-footers-harmonised--${variant}`;
      if (system === 'eu') {
        eclPath = `components-footers-harmonised--default`;
      }
      break;
    case 'hero-banner':
      eclPath = `components-banners-${component}--${variant}`;
      break;
    case 'icon':
      eclPath = `components-${component}--${variant}`;
      break;
    case 'inpage-navigation':
      eclPath = 'components-navigation-in-page-navigation';
      break;
    case 'label':
      eclPath = `components-${component}--${variant}`;
      break;
    case 'language-list':
      component = component.replace('-', '');
      eclPath = `page-structure-${component}--${variant}`;
      break;
    case 'link':
      switch (variant) {
        case 'icon':
        case 'cta-icon':
          eclPath = false;
          break;
        default:
          eclPath = `components-navigation-${component}--${variant}`;
      }
      break;
    case 'media-container':
      if (system === 'eu' && variant === 'embed-video') {
        eclPath = false;
      } else {
        eclPath = `components-mediacontainer--${variant}`;
      }
      break;
    case 'menu':
      switch (variant) {
        case 'group1':
        case 'group2':
        case 'fr':
          eclPath = false;
          break;
        case 'en':
          eclPath = 'components-navigation-menu--default';
          break;
      }
      break;
    case 'menu-legacy':
      eclPath = 'deprecated-menu-legacy--default';
      break;
    case 'message':
      eclPath = `components-messages--${variant}`;
      break;
    case 'page-banner':
      eclPath = `components-banners-page-banner--${variant}`;
      break;
    case 'page-header':
      if (system === 'eu') {
        eclPath = `page-structure-pageheader--${variant}`;
      } else {
        switch (variant) {
          case 'events':
            eclPath = 'deprecated-page-header-ecl-2-14-0--events';
            break;
          case 'events-description':
            eclPath = 'deprecated-page-header-ecl-2-14-0--events-description';
            break;
          case 'meta-title':
            eclPath = 'deprecated-page-header-ecl-2-14-0--meta-title';
            break;
          case 'meta-title-description':
            eclPath =
              'deprecated-page-header-ecl-2-14-0--meta-title-description';
            break;
          case 'title-description':
            eclPath = 'deprecated-page-header-ecl-2-14-0--title-description';
            break;
        }
      }
      break;
    case 'page-header-core':
    case 'page-header-harmonised':
    case 'page-header-standardised': {
      const pageHeaderFamily = component.replace('page-header-', '');
      eclPath = `components-page-headers-${pageHeaderFamily}--${variant}`;
      break;
    }
    case 'pagination':
      eclPath = 'components-navigation-pagination--default';
      break;
    case 'ordered-list':
      eclPath = 'components-list--ordered';
      break;
    case 'radio':
      switch (variant) {
        case 'required':
        case 'optional':
        case 'invalid':
        case 'binary-invalid':
          eclPath = false;
          break;
        default:
          eclPath = `components-forms-${component}--${variant}`;
      }
      break;
    case 'search-form':
      eclPath = 'components-forms-searchform--default';
      break;
    case 'site-header':
      if (system === 'eu') {
        switch (variant) {
          case 'en':
            eclPath = 'page-structure-siteheader--default';
            break;
          case 'fr':
            eclPath = 'page-structure-siteheader--translated';
            break;
        }
      } else {
        switch (variant) {
          case 'en':
            eclPath = 'deprecated-site-header-ecl-2-12-0--default';
            break;
          case 'fr':
            eclPath = 'deprecated-site-header-ecl-2-12-0--translated';
            break;
        }
      }
      break;
    case 'site-header-core':
      switch (variant) {
        case 'en':
          eclPath = 'components-site-headers-core--default';
          break;
        case 'fr':
          eclPath = 'components-site-headers-core--translated';
          break;
      }
      break;
    case 'site-header-standardised':
      switch (variant) {
        case 'en':
          eclPath = 'components-site-headers-standardised--default';
          break;
        case 'fr':
          eclPath = 'components-site-headers-standardised--translated';
          break;
      }
      break;
    case 'site-header-harmonised':
      switch (variant) {
        case 'group1':
          eclPath = 'components-site-headers-harmonised--group-1';
          break;
        case 'group2':
          eclPath = 'components-site-headers-harmonised--group-2';
          break;
        case 'group3':
          eclPath = 'components-site-headers-harmonised--group-3';
          break;
      }
      break;
    case 'skip-link':
      eclPath = 'components-navigation-skip-link--default';
      break;
    case 'social-media-follow':
      eclPath = 'components-socialmediafollow--horizontal';
      break;
    case 'social-media-share':
      eclPath = 'components-socialmediashare--default';
      break;
    case 'table':
      switch (variant) {
        case 'multi':
          eclPath = 'components-table--multi-header';
          break;
        default:
          eclPath = `components-table--${variant}`;
      }
      if (system === 'eu' && variant === 'sort-table') {
        eclPath = false;
      }
      break;
    case 'tag':
      switch (variant) {
        case 'link':
          eclPath = 'components-tag--as-a-link';
          break;
        case 'button':
          eclPath = 'components-tag--as-a-button';
          break;
        default:
          eclPath = `components-tag--${variant}`;
      }
      break;
    case 'text-area':
      switch (variant) {
        case 'has-error':
        case 'is-disabled':
          eclPath = false;
          break;
        default:
          eclPath = 'components-forms-textarea--default';
      }
      break;
    case 'text-input':
      switch (variant) {
        case 'with-error':
        case 'disabled':
          eclPath = false;
          break;
        default:
          eclPath = 'components-forms-text-field--default';
      }
      break;
    case 'unordered-list':
      switch (variant) {
        case 'with-divider':
        case 'without-bullet':
          eclPath = `components-list--${variant}`;
          break;
        default:
          eclPath = 'components-list--unordered';
      }
      break;
  }

  return eclPath;
};

module.exports = eclComponents;
