# Forms

A document form used on a web page to, typically, submit user data to a server.

## Implementation

http://ecfpfisdev.devcloud.acquia-sites.com/sites/all/themes/europa/styleguide/assets/section-form.html

## When should this be used?

- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
- When users want to be able to paste in a response.

# Input controls

## Input fields

Allow users to enter any combination of letters, numbers, or symbols of their choosing (unless otherwise restricted). Text input boxes can span single or multiple lines.

# Dropdown lists

Allow users to select one option from a list. When to use: Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

## Radio buttons

Allow users to see all available choices at once and select exactly one option. When to use: When users need to select only one option out of a set of mutually exclusive choices. When the number of available options can fit onto a mobile screen.

## Checkboxes

Allow users to select one or more options from a visible list. When to use: When a user can select any number of choices from a set list. When a user needs to choose “yes” or “no” on only one option (use a stand-alone checkbox). For example, to toggle a setting on or off. When users need to see all the available options at a glance.

### Example

https://ec.europa.eu/info/law/better-regulation/initiatives/ares20165749866/feedback/add_en

## File upload field

Allow users to select and upload one or more files.

---

## Why and how to use this component

Users need a way to complete forms quickly and without confusion.

The typical form has following five elements:

- Structure.
It includes ordering for fields, appearance on the page and logical connections between multiple fields.

- Input fields.
They include text fields, password fields, check boxes, radio buttons, sliders and any other field designed for user input.

- Field labels.
They tell users what the corresponding input fields mean.

- Action buttons.
When user presses the button, the action is performed (such as submitting the data).

- Feedback.
User understands the result of the input by a feedback.  Messages notify the user about result, they can be positive (indicating that the form was submitted successfully) or negative (“The number you’ve provided is incorrect”).

| Form elements | Description | When to use |
|---|---|---|
| Text fields	| Allow users to enter any combination of letters, numbers, or symbols of their choosing (unless otherwise restricted). Text input boxes can span single or multiple lines. | |
| Dropdown lists | Allow users to select one option from a list. | Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.|
| Radio buttons | Allow users to see all available choices at once and select exactly one option. | When users need to select only one option out of a set of mutually exclusive choices. When the number of available options can fit onto a mobile screen. |
| Checkboxes | Allow users to select one or more options from a visible list. | When a user can select any number of choices from a set list. When a user needs to choose “yes” or “no” on only one option (use a stand-alone checkbox). For example, to toggle a setting on or off. When users need to see all the available options at a glance. |

## When to use this component

- When you need to collect data from users
- When you need to view, export, and analyze those responses

## Do not use this component

- With multiple columns it disrupt a users vertical momentum. Forms should be one column
- With left aligned labels. Top aligned labels also translate well on mobile
- Avoid all caps. All caps is more difficult to read and scan
- Avoid placeholder text as labels
- Avoid placing checkboxes side by side. Checkboxes underneath each other allows easy scanning
- Don’t hide basic helper text
- Try to avoid optional fields in forms. But if you use them, you should at least clearly distinguish which input fields cannot be left blank by the user. The convention is to use an asterisk (*) or ‘optional’ (which is a preferable for long forms with multiple required fields).
