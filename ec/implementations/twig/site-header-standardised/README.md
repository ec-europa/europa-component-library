# ECL-Twig Site Header Standardised component

npm package: `@ecl-twig/ec-component-site-header-standardised`

```shell
npm install --save @ecl-twig/ec-component-site-header-standardised
```

### Parameters

- **"logged"** (boolean) (default: false): Whether the user is logged in or not
- **"menu"** (boolean) (default: false): Whether the component includes a menu or not
- **"menu_label"** (string): Menu toggler label
- **"banner_top"** (string) OR (object with Link component in property): Class name
- **"icon_file_path"** (string) (default: ''): file containing the svg icons
- **"site_name"** (string) (default: '') Site name
- **"logo"** (associative array) (default: predefined structure): Logo image settings. format:
  - "title" (string) (default: ''): Logo title attribute.
  - "alt" (string) (default: ''): Logo alt attribute.
  - "href" (string) (default: ''): Logo URL.
  - "src_desktop" (string) (default: ''): Desktop logo image file path
  - "src_mobile" (string) (default: ''): Mobile logo image file path for EU only
- **"login_box"** (associative array) format:
  - "id": (string) Id of the box
  - "description" (string) Label for the logged in users
  - "label" (string) Log out label
  - "href" (string) Url of the link
- **"login_toggle"** (associative array) format:
  - "label_not_logged" (string) Label for the anonymous users
  - "href_not_logged" (string) Link to the login form
  - "label_logged" (string) Label for the logged in users
  - "href_logged" (string) Link to the logout form
- **"language_selector"** (associative array) (default: predefined structure): Language switcher settings. format:
  - "href" (string) (default: ''): URL for switcher
  - "name" (string) (default: ''): Switcher language label, eg. 'English', 'Français', etc.
  - "code" (string) (default: ''): Switcher language code, eg. 'en', 'fr', etc.
  - "overlay" (associative array) (default: predefined structure): Overlay language switcher settings. format:
    - "close_label" (string) (default: ''): Close button label eg. 'Close'.
    - "title" (string) (default: ''): Overlay title, eg. 'Select your language'.
    - "items" (array) (default: []): (array) (default: []): format:
      - "lang" (string) (default: '') Item language code, eg. 'en', 'fr', etc.
      - "label" (string) (default: '') Item language label, eg. 'English', 'Français', etc.
      - "path" (string) (default: '') Item language URL eg. '/example#language_en'.
      - "active" (boolean) (default: false) define if item is the active language.
- **"search_toggle"** (associative array) format:
  - "label" (string) Label of the element
  - "href" (string) Link of the element
- **"search_form"** (associative array) (default: predefined structure): EC Search Form component structure
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug.

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-site-header-standardised/ecl-site-header-standardised.html.twig' with { 
  banner_top: 'Class name', 
  banner: 'Class name', 
  menu: true, 
  site_name: 'This site name'
  icon_file_path: '/path-to-the-icons-file', 
  logo: { 
    title: 'European Commission', 
    alt: 'European Commission logo', 
    href: '/example', 
    src: 'dist/images/logo--en.svg', 
  }, 
  language_selector: { 
    href: '/example', 
    name: 'English', 
    code: 'en', 
    overlay: { 
      close_label: 'Close', 
      title: 'Select your language', 
      items: [ 
        { lang: 'bg', label: 'български', path: '/example#language_bg' }, 
        { lang: 'es', label: 'español', path: '/example#language_es', active: true }, 
        ... 
      ], 
    }, 
  }, 
  login_toggle: { 
    label_not_logged: 'Log in', 
    href_not_logged: '/example', 
    label_logged: 'Logged in', 
    href_logged: '/example', 
  }, 
  login_box: { 
    id: 'login-box-id', 
    description: 'Logged in as <last name>, <first name>', 
    label: 'Log out', 
    href: '/example', 
  }, 
  search_toggle: { 
    label: 'Search', 
    href: '#', 
  }, 
  search_form: { 
    text_input: { 
      id: 'input-search', 
      name: 'search', 
    }, 
    button: { 
      label: 'Search', 
    }, 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    ... 
  ], 
} %} 
```
