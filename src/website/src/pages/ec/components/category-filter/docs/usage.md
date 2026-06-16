---
title: Usage
order: 1
---
The Category filter component enables users to navigate and refine content through a hierarchical taxonomy of up to four levels.

Unlike flat filtering mechanisms, it preserves the structural relationships between categories and subcategories, helping users understand the scope and organisation of available content while progressively narrowing their results, often found on filtered lists and search results pages.

### **Do's**

- preserve the hierarchical relationships so users can understand parent-child connections
- when available, indicate item counts. This communicates the most important information to assess and whether drilling down a category will be productive
- maintain clear labelling, when used in conjunction with other filters - to distinguish between navigating into a category and applying it as a filter

### **Don'ts**

- do not use truncated or ambiguous category labels that require users to expand nodes in order to understand their content
- do not use multiple category filters within a single filter section as this creates competing hierarchies that confuse navigation
- do not display categories with zero items unless there's a specific reason to show unavailable options

### **When to use**

- on list, search or pool pages, content repositories where items are organised in a multi-level taxonomy and you want to expose a set of categories users can filter by
- use when users could benefit from understanding the relationships between broad categories and specific subcategories

### **When not to use**

- do no use if you have just one category, expose the child nodes instead
- do not use if you need to display categories further than 4 levels
- do not use when categories do not have any sub-items, use the [Default select list](https://ec.europa.eu/component-library/ec/components/forms/select/code/) instead
- do not use if you want users to be able to select child nodes from different categories, use [Multiple select list](https://ec.europa.eu/component-library/ec/components/forms/select/code/) instead
