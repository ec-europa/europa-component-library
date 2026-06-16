The loading indicator component communicates to users that a process is underway, and - for example - the interface will become available or updated shortly. The indicator exists to manage uncertainty. When content, data, or a response cannot be delivered immediately, the component preserves trust by confirming that the system is active and the user's action has been registered.

### **Do's**

- always accompany the indicator with a short, descriptive label such as 'Loading' or 'Submitting your request'.

  - This also acts as a system status visibility to screen reader users and those with cognitive disabilities.
  - That way, they receive a meaningful status update alongside the visual animation

- position the indicator in or near the area of the page that is loading, so users can associate the feedback with the content they are waiting for.
- choose the size variant that matches the scope of the loading context. Use

  - the large variant for full-page or large section loads
  - the medium variant for forms and panels
  - the small variant when a single inline component is updating.

- trigger the indicator immediately on user action, before any perceptible delay, to confirm the interaction has been received.
- ensure the indicator is removed and replaced by the actual content or result as soon as the process completes.

### **Don'ts**

- do not display the loading indicator for operations that complete in under one second. The flash of the indicator is more disorienting for a user than waiting briefly for content to appear.
- do not state a specific processing time unless the system can reliably predict and honour that estimate - unreliable time cues can erode trust.
- do not use more than one loading indicator simultaneously on a page, except where each instance is embedded within its own self-contained component using the small variant.
- do not use the loading indicator as a substitute for poor performance. It signals a necessary wait, not a permission to ignore optimisation.
- do not leave the indicator running indefinitely. If a process fails or times out, replace the loading state with a clear error message or notification so users can take corrective action.

### **When to use**

- use on page or route transitions where content must be fetched before it can be rendered, such as search results pages, data dashboards, or filtered listing views
- use in 'form submission' where the system processes input and the user must wait for a confirmation or outcome, such as sending a contact form or submitting an application
- use in dynamic content updates where a section of the page refreshes in response to a filter, sort, or pagination action and updated results are not instant
- use in file processing instances where an uploaded file is being validated, converted, or scanned before the user can proceed
- use for data retrieval within components where a widget, chart, or embedded tool must fetch its data independently of the surrounding page

### **When not to use**

- do not use when progress is measurable and significant (i.e. long-running operation can report meaningful progress)

  - a progress bar or stepped feedback mechanism communicates more clearly than a spinner

- do not use when the page has already loaded and content is available - the loading indicator would be there to decorate transitions between already-rendered states and might imply a system delay that does not exist, potentially misleading users
- do not use when an error or empty state should be shown (i.e. if a request has completed but returned no results or has failed)

  - display an appropriate error message or [Notifications](https://ec.europa.eu/component-library/ec/components/notification/code/) rather than leaving the indicator in place

- do not use when the context requires a blocking, decision-oriented pause (i.e. a process requires the user to wait and then actively confirm an outcome)

  - a [Modal](https://ec.europa.eu/component-library/ec/components/modal/code/) with appropriate messaging is more appropriate than a loading indicator.
