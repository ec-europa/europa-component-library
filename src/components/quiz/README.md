# ECL Quiz component

npm package: `@ecl/quiz`

```shell
npm install --save @ecl/quiz
```

## Parameters

- **"id"** (string) (default: random) Unique id for the quiz
- **"variant"** (string) (default: 'reveal') Quiz variant; can be 'reveal', 'poll'
- **"with_background"** (boolean) (default: false) Use a background color
- **"full_width"** (boolean) (default: false) Full width layout
- **"title"** (string) (default: '') Quiz title
- **"description"** (string) (default: '') Quiz description text
- **"prev_label"** (string) (default: '') Label for the previous button
- **"next_label"** (string) (default: '') Label for the next button
- **"skip_text"** (string) (default: 'Use ESC to skip the quiz') Keyboard skip hint
- **"items"** (array) (default: []) Quiz cards; format:
  - "id" (string) (default: random) Unique id for the card
  - "variant" (string) (default: 'reveal') Card variant; can be 'reveal', 'poll'
  - "category" (string) (default: '') Category label shown on front of card (poll variant)
  - "success_category" (string) (default: '') Category label shown when answer is correct
  - "error_category" (string) (default: '') Category label shown when answer is wrong
  - "question" (string) (default: '') Question text
  - "answer" (string) (default: '') Answer text shown on the back of the card
  - "answer_title" (string) (default: '') Title on the back of the card
  - "correct_label" (string) (default: '') Label for the correct answer indicator
  - "incorrect_label" (string) (default: '') Label for the incorrect answer indicator
  - "options" (array) Answer options (poll variant)
  - "icon" (object) Icon on the front of the card following ECL Icon structure
  - "flip_icon" (object) Icon on the flip button following ECL Icon structure
  - "flip_text" (string) (default: '') Flip button helper text (reveal variant)
  - "back_icon" (object) Icon on the back of the card following ECL Icon structure
  - "back_text" (string) (default: '') Text on the back of the card
  - "extra_classes" (string) (default: '') Extra classes for the card
  - "extra_attributes" (array) (default: []) Extra attributes for the card
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/quiz/quiz.html.twig' with {
    title: "Ut enim ad minim veniam ",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n    Excepteur sint occaecat cupidatat non proident, sunt.",
    next_label: "Next",
    prev_label: "Previous",
    items: [
      {
        question: "When you travel in the EU, what happens to yor roaming charges?",
        answer: "You usually pay the same at home, no extra roaming fees.",
        icon: {
          icon: {
            name: "star-outline",
            size: "xl"
          }
        },
        back_text: "Go back",
        flip_text: "Click to reveal",
        flip_icon: {
          icon: {
            name: "refresh",
            size: "m"
          }
        }
      },
      ...
    ],
    with_background: false
  },
}
 %}
```
