---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The file component <strong>delivers downloadable content</strong> to users in
  an easy to use container. When the file is available in more than one language
  the file component makes these files accessible in an expandable sub
  container.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/File/Download-Expanded.png"
srcSet="https://inno-ecl.s3.amazonaws.com/media/images/EC/File/Download-Mobile-Expanded.png 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/File/Download-Mobile-Expanded.png 734w"
alt="Anatomy of file download"
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

### Default

| Elements     | Mandatory | Description                                                          |
| ------------ | --------- | -------------------------------------------------------------------- |
| heading      | yes       | the Heading must describe the downloadable file accurately           |
| file Details | yes       | file Details displays the **file language, file type and file size** |
| link         | yes       | the Link downloads the file when selected                            |

### Conditional (translated/multiple languages)

| Elements    | Mandatory | Description                                                                                                     |
| ----------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| button      | yes       | the Button, when selected, displays the file in different languages available, **below the download container** |
| language    | yes       | the Language of the downloaded content **acting as a heading**                                                  |
| helper Text | no        | helper Text assists the user in selecting the appropriate file and language                                     |

## Do's

- **the heading of each item should be** short, distinct and indicative
- always include the **file language, file type and file size**

## Don'ts

- **don't use without additional relevant content** on the same page
- **don't use the same heading as the file name**

## When to use

- when you want to include additional relevant or supporting documents for download

## When not to use

- Do not use to include **important information** that should be present at all time

# File download with thumbnail

<Paragraph size="lead">
  The File download with thumbnail component is a variation of the File download
  component, and{' '}
  <strong>
    delivers downloadable content accompanied by a thumbnail image
  </strong>{' '}
  in an easy to use container. When the file is available in more than one
  language, the file component makes these files accessible in an expandable sub
  container.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/File/file-download-thumb-desktop.png"
srcSet="https://inno-ecl.s3.amazonaws.com/media/images/EC/File/file-download-thumb-mobile.png 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/File/file-download-thumb-mobile.png 734w"
alt="Anatomy of file download"
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

### Default

| Elements        | Mandatory desktop | Mandatory mobile | Description                                                                                                                                                                                                                |
| --------------- | ----------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| metadata        | no                | no               | **metadata** related to the subject within the container<br/>**Note**: the first item is emphasised and it will be capitalised; items following that will have normal (sentence) capitalisation and separated by a divider |
| heading         | yes               | yes              | the Heading must describe the downloadable file accurately                                                                                                                                                                 |
| description     | no                | no               | a **summary** of the content that the component links to                                                                                                                                                                   |
| Thumbnail image | no                | no               | **image thumbnail** representative of the linked media                                                                                                                                                                     |
| file details    | yes               | yes              | file Details displays the **file language, file type and file size**                                                                                                                                                       |
| link            | yes               | yes              | the Link downloads the file when selected                                                                                                                                                                                  |

### Conditional (translated/multiple languages)

| Elements           | Mandatory desktop | Mandatory mobile | Description                                                                                                     |
| ------------------ | ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| button             | yes               | yes              | The Button, when selected, displays the file in different languages available, **below the download container** |
| translated version | yes               | yes              | the Heading must describe the downloadable file accurately                                                      |
| helper text        | no                | no               | a **summary** of the content that the component links to                                                        |

## Do's

- **the heading of each item should be** short, distinct and indicative
- always include the **file language, file type and file size**
- **select appropriate images for thumbnails**, they need to be representative of file that is linked

## Don'ts

- **don't use without additional relevant content** on the same page
- **don't use the same heading as the file name**
- **don't choose images that are too complex to be distinguished in thumbnail size**

## When to use

- when you want to include additional relevant or supporting documents for download

## When not to use

- Do not use to include **important information** that should be present at all time
