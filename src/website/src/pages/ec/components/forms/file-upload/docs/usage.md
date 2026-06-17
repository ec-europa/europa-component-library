---
title: Usage
order: 1
---
The File Upload component enables users to select and attach one or more files from their device. It is part of the ECL forms suite and can be used alongside [File upload status](https://v4-dev--europa-component-library.netlify.app/playground/ec/?path=/story/compositions-file-upload-status--default) to communicate upload progress and allow file removal.

### **Do's**

- provide a clear, descriptive label that tells users exactly what file or files are required
- include helper text specifying accepted file formats file sizes, placed visibly before the input (not only in error messages after the submission takes place)
- use the [File upload status](https://v4-dev--europa-component-library.netlify.app/playground/ec/?path=/story/compositions-file-upload-status--default) composition to communicate upload progress and allow users to review or remove files before final submission
- present validation feedback, such as 'unsupported file format' or 'file size exceeded' consistent with other form error patterns in ECL

### **Don'ts**

- do not rely on placeholder text or button labels alone to communicate requirements - helper text must be explicit and persistent
- do not impose file type or size restrictions without surfacing those constraints clearly before the user attempts to upload

### **When to use**

- use when users are asked to upload one or multiple files needed to complete their current task

### **When not to use**

- when structured input would serve better i.e. required information can be exposed and captured through dedicated standard form fields (text, date, select)
