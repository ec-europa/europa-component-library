import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default () => (
  <Switch>
    <Redirect from="/r/ec-accordion" to="/ec/components/accordion/" />
    <Redirect from="/r/ec-accordion2" to="/ec/components/accordion/" />
    <Redirect from="/r/ec-blockquote" to="/ec/components/blockquote/" />
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
    <Redirect from="/r/ec-button" to="/ec/components/button/" />
    <Redirect from="/r/ec-card" to="/ec/components/card/" />
    <Redirect from="/r/ec-checkbox" to="/ec/components/forms/checkbox/" />
    <Redirect
      from="/r/ec-contextual-navigation"
      to="/ec/components/navigation/contextual-navigation/"
    />
    <Redirect from="/r/ec-date-block" to="/ec/components/date-block/" />
    <Redirect from="/r/ec-description-list" to="/ec/components/list/" />
    <Redirect
      from="/r/ec-dropdown-legacy"
      to="/ec/components/dropdown-legacy/"
    />
    <Redirect from="/r/ec-expandable" to="/ec/components/expandable/" />
    <Redirect from="/r/ec-expandable" to="/ec/components/expandable/" />
    <Redirect from="/r/ec-fact-figures" to="/ec/components/fact-figures/" />
    <Redirect from="/r/ec-file" to="/ec/components/file/" />
    <Redirect from="/r/ec-file-upload" to="/ec/components/forms/file-upload/" />
    <Redirect from="/r/ec-footer" to="/ec/core-template/footer/" />
    <Redirect from="/r/ec-footer-core" to="/ec/core-template/footer/" />
    <Redirect
      from="/r/ec-footer-harmonised"
      to="/ec/harmonised-templates/footer/"
    />
    <Redirect
      from="/r/ec-footer-standardised"
      to="/ec/standardised-template/footer/"
    />
  </Switch>
);
