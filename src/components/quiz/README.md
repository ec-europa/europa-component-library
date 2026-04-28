# ECL Quiz component

npm package: `@ecl/quiz`

```shell
npm install --save @ecl/quiz
```

## Parameters

- **"id"** (string) (default: random): Unique id for the quiz; randomized if empty
- **"variant"** (string) (default: 'reveal')
- **"with_background"** (boolean) (default: false)
- **"title"** (string) (default: '')
- **"description"** (string) (default: '')
- **"items"** (array) array of quiz cards
  - "id" (string) (default: random): Unique id for the quiz item; generated from quiz id or randomized
  - "category" (string) (default: '') (poll variant)
  - "success_category" (string) (default: '')
  - "error_category" (string) (default: '')
  - "question" (string) (default: '')
  - "answer" (string) (default: '')
  - "answer_title" (string) (default: '')
  - "options" (array) Array of options (poll variant)
  - "icon" (object) Object of type icon
  - "back_icon" (object) Object of type icon
  - "flip_text" (string) Helper text (reveal variant)
  - "flip_icon" (object) Object of type icon
  - "back_text" (string) Text on the back of the card
  - "variant" (string) (default: 'reveal'): Variant of the quiz card ('reveal' or 'poll')
  - "extra_classes" (string) (default: ''): Extra css classes for the card
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
