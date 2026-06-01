# ECL Quiz component

npm package: `@ecl/quiz`

```shell
npm install --save @ecl/quiz
```

## Parameters

- **"id"** (string) (default: random): Unique id for the quiz; randomized if empty
- **"variant"** (string) (default: 'reveal')
- **"with_background"** (boolean) (default: false)
- **"full_width"** (boolean) (default: false)
- **"title"** (string) (default: '')
- **"description"** (string) (default: '')
- **"skip_text"** (string) (default: 'Use ESC to skip the quiz')
- **"items"** (array) array of quiz cards
  - "category" (string) (default: '') (poll variant)
  - "success_category" (string) (default: '')
  - "error_category" (string) (default: '')
  - "question" (string) (default: '')
  - "answer" (string) (default: '')
  - "answer_title" (string) (default: '')
  - "options" (associative array)
  - "name" (string) (default: '')
  - "correct" (boolean)
  - "icon" (object) Object of type ECL icon
  - "flip_icon" (object) Object of type ECL icon
  - "flip_text" (string) (default: '')
  - "back_text" (string) (default: '')
  - "prev_label" (string) (default: '')
  - "next_label" (string) (default: '')
  - "esc_box" (string) (default: '')
  - "category" (string) (default: '')
  - "success_category" (string) (default: '')
  - "error_category" (string) (default: '')
  - "extra_classes" (optional) (string) (default: ''): Extra css classes for the card
  - "extra_attributes" (optional) (array) (default: []): Extra attributes for the card
- **"extra_classes"** (optional) (string) (default: ''): Extra css classes
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

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
