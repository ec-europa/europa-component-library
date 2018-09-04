module.exports = `/* ECL Variables */

{{#each props as |prop|}}
{{#if prop.comment~}}
// {{{trim prop.comment}}}
{{/if~}}
  $ecl-{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}} !default;

{{/each}}
`;
