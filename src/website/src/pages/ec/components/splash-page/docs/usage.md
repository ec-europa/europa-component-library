---
title: Usage
order: 1
---
The Splash Page acts as a language selection gateway for sites that do not implement automatic browser language detection. It presents users with a choice of available languages before they enter the main site, ensuring they can proceed in their preferred selection, regardless of the detection capabilities of the underlying platform. The component exists to preserve accessibility and usability in contexts where personalisation cannot be handled automatically.

### **Do's**

- present language options clearly and without ambiguity, using the native name of each language
- ensure the splash page is the first thing users encounter when browser language detection fails or is disabled
- keep the page focused solely on the language selection task, and avoid introducing any other navigation or content

### **Don'ts**

- do not use the Splash page on sites that implement reliable automatic language detection
- do not add promotional or editorial content to the splash page - its sole purpose is language selection
- do not use this component as a generic landing or welcome page

### **When to use**

- use when a site serves a multilingual audience and the platform is unable to detect the user's preferred language automatically from browser settings
- use to present users with a language choice before entering the site to ensure they reach content in their preferred language

### **When not to use**

- do not use when the site already automatically handles language detection and routing
- do not use as a substitute for a proper language switcher within the site - once users are inside the site, the language selector in the site header is the appropriate mechanism
