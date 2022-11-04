# ECL Select web-component

npm package: `@ecl/web-component-select`

```shell
npm install --save @ecl/web-component-select
```

## Attributes

- **"data-system"** (string) (ec or eu) default: ec
- **"data-width"** (string) (s, m, l) default: m
- **"data-helper-text"** (string) Text for the help block
- **"data-invalid-text"** (string) Error text
- **"data-options"** (array) Select options
- **"data-label"** (string) Select label
- **"data-icon-path"** (string) Path to the icon sprite
- **"data-required-text"** (string) Text for the required select
- **"data-optional-text"** (string) Text for the optional select
- **"data-disabled"** (boolean) Disable the select
- **"required"** (boolean) Makes the select required
- **"invalid"** (boolean) Select with errors
- **"multiple"** (boolean) Select multiple

### select multiple

- **"data-ecl-script"** (boolean) Load the ECL class for the component
- **"data-auto-init"** (boolean) Initialise the component

## Html source:

<!-- prettier-ignore -->
```twig
<ecl-select  
  data-system="ec"  
  data-options="[Belgium, France, Bulgary, Italy]"  
  data-label="Select a country"  
  data-helper-text="This is the input's helper text"  
  data-optional-text=" (optional)"  
  data-required-text="*"  
>  
</ecl-select>
```
