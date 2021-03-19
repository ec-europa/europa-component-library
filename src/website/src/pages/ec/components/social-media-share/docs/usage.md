---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Social Media Share component allows users to add a personalised message to
  a link before sharing a specific page through their preferred social media
  network. It showcases the most popular ones, while the rest can be found in an
  overlay, by clicking the "other social networks" button.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/SocialMediaShare/Social%20media%20share.jpg"
srcset="https://inno-ecl.s3.amazonaws.com/media/images/EC/SocialMediaShare/Social%20media%20share%20-%20Mobile.jpg 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/SocialMediaShare/Social%20media%20share.jpg 734w"
alt="Anatomy of social media share"
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

| Elements             | Mandatory | Description                                                                                                        |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| heading              | yes       | short explanation of the purpose of the buttons                                                                    |
| icon                 | yes       | social media icon                                                                                                  |
| link to Social Media | yes       | name of the social media network                                                                                   |
| button               | no        | when more than 4-6 social networks are used, the button will open a pop-up where more social networks can be found |

## Do's

- **maintain the same order** for the social media buttons
- **maintain the same colours** for the social logo as the original
- **always display the icon and the name** of the social media network
- always place the component at the bottom of the page

## Don'ts

- **don't display more than 4-6 social media networks**, use the "_Other social networks_" link to add more

## When to use

- use when the content on a page may be important to users

## When not to use

- do not use on navigation pages
- do not use if your organisation does not have personalised social media accounts

## Notes

- this functionality is provided by [WebTools](https://webgate.ec.europa.eu/fpfis/wikis/pages/viewpage.action?spaceKey=webtools&title=Social+Media+Kit)

## Related components

- <Link
    to="/ec/components/social-media-follow/usage/"
    label="Social media follow"
    standalone
  />
