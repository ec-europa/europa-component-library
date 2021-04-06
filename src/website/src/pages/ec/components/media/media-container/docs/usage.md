---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  A media container is used to display media items (video, audio, image or other
  data) with a caption.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Media%20Container/Media%20container.png"
srcset="https://inno-ecl.s3.amazonaws.com/media/images/EC/Media%20Container/Media%20container%20-%20Mobile.png 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/Media%20Container/Media%20container.png 1246w"
alt="Anatomy of blockquotes"
legend={{
    items: [
      {
        color: '#404040',
        label: 'mandatory',
      },
      {
        color: '#004494',
        label: 'optional',
      },
    ],
  }}
/>

| Elements        | Mandatory desktop | Mandatory mobile | Description.                                                                                                                                    |
| --------------- | ----------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| media thumbnail | yes               | yes              | thumbnail representative of the linked media                                                                                                    |
| caption         | no                | no               | use caption representative of the media content - this allows users to form a mental model of the information available while scanning the page |

## Do's

- always include thumbnails
- be descriptive and concise in the caption to communicate the subject of the media file
- write captions that are short, distinct and indicative and communicate the subject of the media content
- include ALT tag
- select appropriate images for video thumbnails, they need to depict what is in the audio or video file

## Don'ts

- don't choose images which are too complex to be distinguished in thumbnail size
- don't automatically play audio or video files when a user arrives on a page (or scrolls to a media container)
- don't automatically play next items after an audio or video item finished

## When to use

- whenever there is a need to display a media file
- when you want to display content that's found on external sources (A-V Portal, Youtube, Vimeo, etc., done through iFrame)

## When not to use

- do not use the media container if there are above 5 consecutive items (this would make navigation more difficult) - use an <Link to="/ec/components/list/usage/">unordered list</Link> or a <Link to="/ec/components/media/gallery/usage/">media gallery</Link>

## Notes

### Accessibility

- make sure the ALT tag for each media file accurately describes the subject (such as for an image: "Undergraduate student looking into microscope to examine specimen in biology laboratory" instead of something generic like "Science image 1").
- make a text transcript available, representative of the media content
