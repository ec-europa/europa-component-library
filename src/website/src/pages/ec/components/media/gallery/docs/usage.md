---
title: Usage
order: 1
---
The Gallery component presents a curated collection of media items - images, videos, and audio files - in a scannable format that does not overwhelm the page. The Gallery gives users a lightweight overview of available media through thumbnails and exposes full content through an overlay interaction. The component supports a range of display options - different layout templates control how items are arranged and whether/which specific items receive visual prominence.

### **Do's**

- provide thumbnails for every item in the Gallery, make sure each thumbnail accurately represents the file's content
- write descriptive, concise captions that communicate the subject of the media item clearly; captions should be distinct, so users can differentiate items at a glance
- ensure all images include meaningful alternative text that describes the content of the image

### **Don'ts**

- do not use thumbnails that are visually complex or detailed - they need to be legible at small sizes
- do not auto-play audio or video when a user arrives on the page or scrolls to the gallery
- do not automatically advance to the next item after a video or audio file finishes playing; allow users to control playback
- do not omit captions - unlabeled media collections force users to open each item to understand its content, significantly increasing the effort required

### **When to use**

- use on resource pages where a range of media assets (recordings, explainer videos, image packs) are available for browsing or download
- use on pages where the gallery can be a trigger for users

### **When not to use**

- do not use for non-linear browsing where inline media placement within the page content is more suitable. Use the [Media container](https://ec.europa.eu/component-library/ec/components/media/media-container/code/)
