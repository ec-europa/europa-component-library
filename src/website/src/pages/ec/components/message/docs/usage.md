Notifications communicate system or process states directly relevant to the user's current task or situation. They alert users to successes, warnings, errors, or important information they need to proceed.\
\
The component is action-oriented - it exists to help users understand what has happened, what might go wrong, or what they need to do next, rather than to surface general editorial content.

### **Do's**

- keep notification messages brief, clear, and directly relevant to the user's current context, including links where relevant
- consistently match the notification variant (information, success, warning, error) to the type of message
- write messages in an action-oriented and constructive tone - informing users of the action(s) required
- use notifications sparingly so that each one retains its signal value and users are less likely to ignore them

### **Don'ts**

- do not overuse notifications as frequent or unnecessary alerts reduce the likelihood users will act on them
- do not write neutral or descriptive messages - every notification needs to be framed so the user understands
- do not use notifications for non-critical or informational content that does not affect task completion

### **When to use**

- when information is essential for the user to proceed to the next step
- use **success** states for when a user-initiated action has completed successfully and confirmation helps user confidence
- use **warning** states for when a user is about to take an action with potentially significant consequences, such as overwriting or deleting data
- use **error** states for when an action has failed and the user needs to understand why and how to recover
- use **information** states for when something has changed in the system that the user needs to be aware of in order to continue effectively

### **When not to use**

- do not use to surface non-critical information that has no bearing on the user's immediate task. Instead, consider inline text or contextual help patterns instead
- do not use as a substitute for permanent page content - information that needs to be always visible should be part of the body of the page
