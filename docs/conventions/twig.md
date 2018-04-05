---
title: Twig coding conventions
label: Twig
---

# Twig coding conventions

## Parameters

Twig files should expose available parameters and blocks in a comment at the start of the file.
Each one should present the following information:
* parameter name
* type
* quick description
* default value

If a parameter uses a more complex structure (objects, array, ...), this structure should be visible too.

Example:
```
{#
  Parameters:
    - "menu_label" (integer): max number of items to display (0 = display all) (default: 5)
    - "menu_aria_label" (string): label displayed before the list (default: '')
    - "links" (array): [{
        "href" (string): target of the link (default: '#')
        "label" (string): label of the link (default: '')
        "is_active" (boolean): does the menu contains the current page? (default: false)
        "children_links" (array): [{
          "href" (string): target of the link (default: '#')
          "label" (string): label of the link (default: '')
          "is_active" (boolean): is it the current page? (default: false)
        }]
      }]
    - "extra_classes" (string): extra CSS classes to be added (default: '')
    - "extra_attributes" (array): extra attributes classes (optional, format: [{ 'name': 'name_of_the_attribute', 'value': 'value_of_the_attribute'}]) (default: '')
  Blocks:
    - "navigation": instead of providing an array of links, you can also embed the template and fill the "navigation" block directly
#}
```

### Mandatory parameters

Two parameters should always be available:
* **extra_classes** (allows developers to add css classes)
* **extra_attributes** (allows developers to add html attributes)

## Internal properties

Use this section to initialize variables and get parameters.

All internal properties should start with "\_"

Example:
```
{# Internal properties #}

{% set _menu_label = menu_label|default('') %}
{% set _menu_aria_label = menu_aria_label|default('') %}
{% set _css_class = 'ecl-navigation-menu' %}
{% set _extra_attributes = '' %}
```

## Internal logic

Preprocess values and other non trivial operations of properties

Example:
```
{# Internal logic - Process properties #}

{% if extra_classes is defined %}
  {% set _css_class = _css_class ~ ' ' ~ extra_classes %}
{% endif %}

{% if extra_attributes is defined %}
  {% for attr in extra_attributes %}
    {% set _extra_attributes = _extra_attributes ~ ' ' ~ attr.name ~ '="' ~ attr.value ~'"' %}
  {% endfor %}
{% endif %}
```

## Print

Html markup.
It should always start with the default class (stored in `_css_class`) and `_extra_attributes`.

Example:
```
{# Print the result  #}

<nav class="{{ _css_class }}" aria-label="{{ menu_aria_label }}"{{ _extra_attributes|raw }}>
  [...]
</nav>
```
