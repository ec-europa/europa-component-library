---
title: Usage
order: 1
---
The banner component serves as a high-impact, visually prominent vessel for conveying key messages, announcements, and navigation pathways within the information hierarchy.\
Its primary value lies in drawing user attention to critical content by combining imagery with structured text content (heading, description, and call-to-action), that serves to guide users towards priority tasks or topics, particularly on entry/landing pages or parent-level navigation pages where establishing context and direction is essential.

### **Do's**

- Always try to maintain the corresponding aspect ratio of your media for your chosen size variant: 3:1 (large), 4:1 (medium), 5:1 (small), or 6:1 (extra small); this ensures a predictable layout behaviour and prevents distortion
- Try to use in conjunction with a focal point selection mechanism to ensure that the media is optimised for different devices
- Use and indicate appropriate file formats (.jpg, .png), if restrictions are applied
- Keep in mind the file size as it may affect page loading time, make sure to indicate file size if restrictions are applied
- In case the video banner is used, make sure to provide users with the option to pause the animation; additionally ensure the banner's content (Title, Description and CTA) remains legible throughout the animation cycle

### **Don'ts**

- Avoid forcing different aspect ratio media into constrained spaces as it might result in important information being cropped, or quality of the media distorted
- Avoid non-semantic or arbitrary HTML markup in banner implementations; this creates barriers for assistive technology users and complicates maintenance
- Do not use banners as a container for dense, multi-paragraph content; this overwhelming cognitive load defeats the component's purpose as a high-level orientation tool

### **When to use**

- Use on Homepage and Landing pages, where establishing visual hierarchy and page purpose is critical to user orientation
- Use on Parent or section-level pages within your information architecture, where banners highlight key topics and provide logical navigation to related content areas

### **When not to use**

- Do not use in dense content scenarios, where you need to present large blocks of information — use the [Featured Item](https://ec.europa.eu/component-library/eu/components/media/featured-item/code/) component instead, which provides greater content capacity with appropriate visual prominence
