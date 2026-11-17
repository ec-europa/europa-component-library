export default {
  id: 'quiz-reveal',
  title: 'Ut enim ad minim veniam ',
  description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt.`,
  next_label: 'Next',
  prev_label: 'Previous',
  items: [
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Alternative text for the image',
        },
      },
      image_display: 'always',
      micro_title_question: 'Question',
      question:
        'When you travel in the EU, what happens to your roaming charges?',
      micro_title_answer: 'Answer',
      answer: 'You usually pay the same at home, no extra roaming fees.',
      icon: {
        icon: {
          name: 'sparkle',
          family: 'phosphor',
          size: 'l',
        },
      },
      back_text: 'Flip back',
      flip_text: 'Reveal answer',
      flip_icon: {
        icon: {
          family: 'phosphor',
          name: 'arrow-clockwise',
          size: 'm',
        },
      },
    },
    {
      icon: {
        icon: {
          name: 'sparkle',
          family: 'phosphor',
          size: 'l',
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'Image alt',
        },
      },
      image_display: 'reveal',
      micro_title_question: 'Question',
      question:
        'What document allows EU citizens to travel freely between most EU countries?',
      micro_title_answer: 'Answer',
      answer: 'A valid ID card or passport is usually enough.',
      back_text: 'Flip back',
      flip_text: 'Reveal answer',
      flip_icon: {
        icon: {
          family: 'phosphor',
          name: 'arrow-clockwise',
          size: 'm',
        },
      },
    },
    {
      micro_title_question: 'Question',
      question: 'What currency is used in many EU countries?',
      micro_title_answer: 'Answer',
      answer: 'The euro (€) is used in many EU member states.',
      icon: {
        icon: {
          name: 'sparkle',
          family: 'phosphor',
          size: 'l',
        },
      },
      back_text: 'Flip back',
      flip_text: 'Reveal answer',
      flip_icon: {
        icon: {
          family: 'phosphor',
          name: 'arrow-clockwise',
          size: 'm',
        },
      },
    },
    {
      micro_title_question: 'Question',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      micro_title_answer: 'Answer',
      answer:
        'Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum',
      icon: {
        icon: {
          name: 'sparkle',
          family: 'phosphor',
          size: 'l',
        },
      },
      back_text: 'Flip back',
      flip_text: 'Reveal answer',
      flip_icon: {
        icon: {
          name: 'arrow-clockwise',
          family: 'phosphor',
          size: 'm',
        },
      },
    },
    {
      micro_title_question: 'Question',
      question:
        'Nam lorem eros, auctor at feugiat id, efficitur non velit. Nam ac arcu vitae eros dapibus cursus vel eget lectus.',
      micro_title_answer: 'Answer',
      answer:
        'Aenean est metus, malesuada sed suscipit id, tempor non sapien. Donec viverra, odio id venenatis sollicitudin',
      icon: {
        icon: {
          family: 'phosphor',
          name: 'sparkle',
          size: 'l',
        },
      },
      back_text: 'Flip back',
      flip_text: 'Reveal answer',
      flip_icon: {
        icon: {
          name: 'arrow-clockwise',
          family: 'phosphor',
          size: 'm',
        },
      },
    },
  ],
};
