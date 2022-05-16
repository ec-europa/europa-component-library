---
title: Usage
order: 1
---
The Site header offers easily recognisable elements (such as the logo) and the most essential functionality of every site (such as Language switcher or [Search form](https://ecl-preview-2241--europa-component-library.netlify.app/ec/components/forms/search-form/code/)). Additionally it can host the name of the site, the class name to which it belongs and the main navigation. The header is always placed at the top of the page.

The elements required in the site header are different depending wether it is the corporate, standardised or an harmonised website.

# Core config.

## Anatomy image

![](/cms-images/ec-site-header-core.png)

## Anatomy table

| No. | Element/component  | Usage     | Description                                                                                                                                                                |
| --- | ------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | EC Identity (logo) | mandatory | Logo of the European Commission                                                                                                                                            |
| 2.  | Language switcher  | mandatory | Language select component through which users can select their desired language, on the left of the search form (\*only use if your website supports multilingual content) |
| 3.  | Search form        | mandatory | Enables the user to search and retrieve related information from using keywords                                                                                            |

# Standardised & harmonised config.

## Anatomy image

**Standardised**

![](/cms-images/ec-site-header-standardised.png)

**Harmonised**

![](/cms-images/ec-site-header-harmonised.png)

## Anatomy table

| No. | Element/component  | Standardised | Harmonised | Description                                                                                                                                                                                              |
| --- | ------------------ | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | EC Identity (logo) | mandatory    | mandatory  | Logo of the European Commission                                                                                                                                                                          |
| 2.  | Login              | optional     | optional   | Login component (\*use the Login component only if your website allows visitors to login)                                                                                                                |
| 3.  | Language switcher  | mandatory    | optional   | Language select component through which users can select their desired language, on the left of the search form (\*use a Language select component if your website supports multilingual content)        |
| 4.  | Search form        | mandatory    | optional   | Enables the user to search and retrieve related information from using keywords                                                                                                                          |
| 5.  | Class name         | mandatory    | optional   | Banner indicating the parent class under which the site falls (\*use a Class name component if the website you are creating or updating falls under one of the classes on the Commission Corporate site) |
| 6.  | Site name          | mandatory    | mandatory  | Name of the website                                                                                                                                                                                      |
| 7.  | Menu               | optional     | optional   | Main navigation of the website                                                                                                                                                                           |
