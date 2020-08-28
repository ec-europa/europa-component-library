# ECL-Twig Page Header component

npm package: `@ecl-twig/ec-component-page-header`

```shell
npm install --save @ecl-twig/ec-component-page-header
```

### Parameters

- **"title"** (string) (default: '') Title of header
- **"description"** (string) (default: '') Description of header
- **"meta"** (string) (default: '') Meta of header
- **"composition"** (string) (default: '') Room for the language switcher
- **"slogan"** (string) (default: '') Slogan for EU homepage variants
- **"variant"** (string) (default: '') Available variants are homepage, branded-homepage
- **"title_wrapper"** (boolean) (default: false) In Eu it needs to be set to TRUE
- **"infos"** (array) (default: []) Array of infos. format:
  - "text" (string) Label of info
  - "icon" (associative array) Predefined structure compatible with EC Icon
- **"background_image"** (boolean) (default: false) With or without background image
- **"background_image_url"** (string) (default: '') Background image url
- **"breadcrumb"** (associative array) (default: '') Predefined structure compatible with EC Breadcrumb
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1',
- **"_compliance_"** (optional) (boolean) (default: false) Activates debug

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-page-header/ecl-page-header.html.twig' with {  
  title: 'Page title',  
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',  
  meta: 'News article | 17 October 2015',  
  background_image: true,  
  background_image_url: "https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg",  
  breadcrumb: {  
    links: [    
      {  
        label: 'Link 1',  
        path: '/example'  
      },  
    ],  
    icon_file_path: '/path-to-the-icons-file',  
    navigation_text: 'You are here:',
  },  
  infos: [  
    {  
      text: 'Monday 8 February',  
      icon: {  
        type: 'general',  
        name: 'calendar',  
        path: '/path-to-the-icons-file',  
      },  
    },  
  ]  
} %}  
```
