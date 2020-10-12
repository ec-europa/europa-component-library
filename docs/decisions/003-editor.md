# Handle `editor` CSS rules in ECL

| Status        | accepted                     |
| ------------- | ---------------------------- |
| **Proposed**  | 21/10/2019                   |
| **Accepted**  | 11/11/2019                   |
| **Driver**    | @emeryro                     |
| **Approver**  | @yhuard                      |
| **Consulted** | @degliwe, @yhuard, @planctus |
| **Informed**  | @emdemaran                   |

## Decision

- All editor CSS rules are put in a new package `@ecl/editor`.
- CSS is duplicated from component (no SASS mixins).
- A new preset `ec-preset-editor` is created to store these rules.

## Context

- Content editor of sites using ECL may have to use basic html markup instead of custom CSS classes (example: wysiwyg editor)
- A global class `ecl-editor` was provided in ECL1, with adapted design for default html tags (`<p>`, `<ul>`, `<table>`, etc.)
- `ecl-editor` rules are only provided for a few components on ECL2 (blockquotes and links), and missing for some others

As we have to add missing editor rules, we could take some time to think about the best way to handle them.  
Currently these rules are added the same way it was done in ECL1:

- a mixin file containing the CSS rules
- a CSS file for component
- a CSS file for editor rules related to this component)
  All editor CSS rules are part of the `dev` preset, and so are integrated in all other presets

## Consequences

(Describe the pros and cons of the proposed decision. Think about the people in the **Informed** line of the DACI table above. How will this decision affect them?)

## Alternatives Considered

### Mixed CSS rules

- Add editor CSS rules to components' CSS

**Pros**

- Quick to implement
- No extra files or preset requires

**Cons**

- Will increase size of components
- Not really BEM compliant

**Example**

ec-component-table.scss:

```scss
.ecl-table,
.ecl-editor table {
  border-collapse: collapse;
  color: $ecl-color-grey;
  font: $ecl-font-m;
  margin: 0;
  width: 100%;
}

.ecl-table__head,
.ecl-editor thead {
  display: none;
}
```

### Editor preset, with duplicated rules

- CSS rules related to editors would be written in separate CSS files (not included in components' CSS)
- A new preset 'editor' would be created, containing only these rules
- Editor CSS rules may be duplicated from components' CSS

**Pros**

- Clear distinction between 'core' ECL and editors
- Keep ECL components as small as possible
- No modifications of existing components

**Cons**

- Yet another preset to handle
- It may be tricky for developpers to use this preset specifically when needed (to be analysed)

**Example**

ec-component-table.scss:

```scss
.ecl-table {
  border-collapse: collapse;
  color: $ecl-color-grey;
  font: $ecl-font-m;
  margin: 0;
  width: 100%;
}

.ecl-table__head {
  display: none;
}
...
```

ec-component-table-editor.scss:

```scss
.ecl-editor {
  table {
    border-collapse: collapse;
    color: $ecl-color-grey;
    font: $ecl-font-m;
    margin: 0;
    width: 100%;
  }

  thead {
    display: none;
  }
}
...
```

### Editor preset, with SASS mixins

Similar to previous option (Editor preset, with duplicated rules), but instead of duplicating CSS rules we would use SASS mixins

**Pros**

- Clear distinction between 'core' ECL and editors
- Keep ECL components as small as possible
- No duplication of code, so it's easier to maintain

**Cons**

- Yet another preset to handle
- It may be tricky for developpers to use this preset specifically when needed (to be analysed)
- Would require additional work to update existing component and split them into mixins

mixin.scss:

```scss
@mixin ecl-table-root() {
  border-collapse: collapse;
  color: $ecl-color-grey;
  font: $ecl-font-m;
  margin: 0;
  width: 100%;
}

@mixin ecl-table-head() {
  display: none;
}
```

ec-component-table.scss:

```scss
.ecl-table {
  @include ecl-table-root();
}

.ecl-table__head {
  @include ecl-table-head();
}
```

ec-component-table-editor.scss:

```scss
.ecl-editor {
  table {
    @include ecl-table-root();
  }

  thead {
    @include ecl-table-head();
  }
}
```

### Separated package for editors

In addition to previous options, we could also put all editor related files in a dedicated package (`ec-editor` for instance), instead of putting the files into the component's folder.
