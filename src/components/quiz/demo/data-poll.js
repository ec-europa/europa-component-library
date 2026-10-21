module.exports = {
  id: 'quiz-poll',
  variant: 'poll',
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
          alt: 'Europe flag',
        },
      },
      image_display: 'reveal',
      correct_label: 'Correct answer',
      incorrect_label: 'Incorrect answer',
      correct_chosen_label: 'Your correct answer',
      incorrect_chosen_label: 'Your incorrect answer',
      question: 'Which institution proposes new EU laws?',
      options: [
        { name: 'European commission', correct: true },
        { name: 'European parliament' },
        { name: 'European Central Bank' },
        { name: 'Court of Justice of the European Union' },
      ],
      icon: {
        icon: {
          family: 'phosphor',
          name: 'question-mark',
          size: 'xl',
        },
      },
      back_icon: {
        success: {
          icon: {
            family: 'phosphor',
            name: 'check-circle',
            size: 'xl',
          },
        },
        error: {
          icon: {
            family: 'phosphor',
            name: 'x-circle',
            size: 'xl',
          },
        },
      },
      answer_title: 'The correct answer is A.',
      answer:
        'The European Commission has the exclusive right to propose new EU laws',
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'Europe flag',
        },
      },
      image_display: 'reveal',
      question:
        'What document allows EU citizens to travel freely between most EU countries?',
      correct_label: 'Correct answer',
      incorrect_label: 'Incorrect answer',
      correct_chosen_label: 'Your correct answer',
      incorrect_chosen_label: 'Your incorrect answer',
      options: [
        { name: 'A valid ID card.' },
        { name: 'A valid ID card or passport', correct: true },
        { name: 'A valid passport.' },
        { name: 'None of these' },
      ],
      icon: {
        icon: {
          family: 'phosphor',
          name: 'question-mark',
          size: 'xl',
        },
      },
      answer_title: 'The correct answer is B.',
      answer:
        'A valid ID card or passport is usually enough to travel freely between most EU countries.',
      back_icon: {
        success: {
          icon: {
            family: 'phosphor',
            name: 'check-circle',
            size: '2xl',
          },
        },
        error: {
          icon: {
            family: 'phosphor',
            name: 'x-circle',
            size: 'xl',
          },
        },
      },
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'Europe flag',
        },
      },
      image_display: 'reveal',
      question: 'What currency is used in many EU countries?',
      answer_title: 'The correct answer is C.',
      answer: 'The Euro is the official currency used by many EU conutries',
      correct_label: 'Correct answer',
      incorrect_label: 'Incorrect answer',
      correct_chosen_label: 'Your correct answer',
      incorrect_chosen_label: 'Your incorrect answer',
      options: [
        { name: 'The pound is the most used currency in the EU' },
        {
          name: 'The Leu is by far the most used currency in the European Union ',
        },
        {
          name: 'The euro (€) is used in many EU member states.',
          correct: true,
        },
      ],
      icon: {
        icon: {
          family: 'phosphor',
          name: 'question-mark',
          size: 'xl',
        },
      },
      back_icon: {
        success: {
          icon: {
            family: 'phosphor',
            name: 'check-circle',
            size: 'xl',
          },
        },
        error: {
          icon: {
            family: 'phosphor',
            name: 'x-circle',
            size: 'xl',
          },
        },
      },
    },
  ],
};
