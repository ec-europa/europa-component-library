---
title: Usage
order: 1
---
Pagination enables users to navigate through content across multiple pages, such as search results, document listings, or news archives. It gives users a sense of position within a result set and control over how they move through it - making it easier for users to deal with extensive content.

### **Do's**

- place the pagination control directly below the list of items it relates to
- ensure the current page is clearly indicated - so users always know their position
- keep the number of visible page links manageable, using ellipsis patterns to represent ranges where the total page count is high
- if dealing with very large listings, consider providing previous and next controls in addition to direct page links

### **Don'ts**

- do not replace pagination with infinite scrolling - infinite scrolling removes position awareness, makes it harder to return to specific content, and can create accessibility barriers
- do not apply pagination to content that is not a sequential list or result set; unrelated content items should not be forced into a paginated structure

### **When to use**

- use when a list's or results' length is long enough and displaying all items on a single page would require excessive scrolling, making scanning impractical
- use when visitors may need to return to a specific page within a set, such as when reviewing a list of results after opening and closing individual items

### **When not to use**

- do not use pagination to break up content that has no natural sequential or list-based relationship; each page in a paginated set should contain items of the same type and scope
- do not use when the full set of items is small enough to display comfortably on a single page
