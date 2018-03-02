# File uploads

Combination of fields and buttons to add documents or media to a form.

## When to use

When there is a need to allow users to attach anything to a form (documents,
pictures, videos, etc).

## Implementation

In order to automatically attach event listeners on your file upload forms, add the following script to your page:

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.fileUploads();
});
```
