---
title: Usage
order: 1
---
The Media Container provides a consistent, accessible wrapper for presenting a single media item, for example an image, video, audio, or embedded content, alongside a caption and possible copyright. It exists to ensure a media item is never displayed in isolation. Every item is contextualised, labelled, and accessible - regardless of format or source.

The component supports both self-hosted media and content embedded from external platforms - providing teams with a unified pattern for all media presentation needs.

### **Do's**

- use a thumbnail that accurately represents the content of the associated audio or video file
- always provide a caption that is concise and relevant, i.e. communicates the subject of the media clearly
- include a meaningful `alt` attribute on all images to support screen reader users and cases where a media item fails to load
- when embedding video, write a title that repeats the visible video title and explicitly identifies it as a video, for example 'SOTEU speech 2025 - Video'

### **Don'ts**

- do not select thumbnail images that are too visually complex to be distinguished at reduced sizes
- do not autoplay audio or video when a user arrives on or scrolls to the page - this is disruptive and removes user agency
- do not automatically advance to the next item once audio or video has finished playing
- do not use the caption field to repeat information already prominent in surrounding page content - captions should add context
- do not omit the caption entirely; a media item without supporting context can create an accessibility and comprehension gap

### **When to use**

- use when presenting a single media item such as an image, video, audio, or embedded content that requires a caption for context
- use when embedding media from external platforms via iframe, where a wrapper ensures structure and accessibility are the same as for self-hosted media

### **When not to use**

- do not use the Media container when displaying more than five consecutive media items

  - use the [Gallery](https://ec.europa.eu/component-library/ec/components/media/gallery/code/) component instead, designed for navigating collections of media

- do not use the Media container as a decorative element

  - if an image is purely ornamental and carries no informational value, review whether it is needed. If so, handle it at the page level rather than within a component that implies semantic and editorial purpose

- do not use the Media container directly when building a section with a headline, paragraph, and potentially a link-button. Instead, consider using the [Featured Item](https://ec.europa.eu/component-library/ec/components/media/featured-item/code/) component
