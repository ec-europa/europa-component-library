---
title: Usage
order: 1
---
The Range component serves scenarios where a user needs to indicate a value or position within a continuous numerical scale, and where approximate or relative input is acceptable. By presenting a visual track, it communicates the available spectrum at a glance and allows quick, gestural adjustment, reducing the cognitive load on users.

### **Do's**

- provide a short, clear label that describes the numerical dimension being adjusted (e.g. "Age", "Years", "Budget")
- indicate whether the input is optional or mandatory
- select an appropriate width (small, medium, large) to match the range and the expected precision required
- use helper text to clarify the scale or any constraints the user should be aware of
- write specific error messages when validation fails, so users understand how to correct their input
- choose increments that are meaningful in the context
- try to avoid steps so small that selecting the 'target' value becomes unnecessarily difficult

### **Don'ts**

- do not use an excessively large range (i.e. track ranging over hundreds or thousands of distinct values) as the slider becomes imprecise and frustrating
- do not define increments that skip values the user would reasonably need (e.g. steps of 10 on a scale where individual years matter)

### **When to use**

- use for approximate or relative numerical input where the exact value matters less than the relative position (e.g. filtering results by year range or adjusting a preference level)
- use when gestural, visual selection is preferred. For instance, when users benefit from seeing their selection in relation to a spectrum, a slider communicates position more intuitively than a typed number

### **When not to use**

- do not use when non-numerical input is required - instead opt for string or free-text input, such as [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) or [Text area](https://ec.europa.eu/component-library/ec/components/forms/text-area/code/)
- do not use when high precision is essential
- do not use to specify an exact value (e.g. specific date, a precise count, or a selection from a fixed list) - instead consider using a [Datepicker](https://ec.europa.eu/component-library/ec/components/forms/datepicker/code/) for dates, a [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) button group for short discrete options, or a [Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) for longer lists
