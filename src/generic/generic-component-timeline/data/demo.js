module.exports = {
  limit: 3,
  button_label: 'Show all timeline',
  items: [
    {
      title: 'By late-2013',
      body: `
        <p class="ecl-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tellus congue, pretium nibh eu, mattis ligula. Integer tempus varius enim ut scelerisque. Curabitur rutrum vestibulum elit ac pulvinar.
        </p>
        <p class="ecl-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tellus congue, pretium nibh eu, mattis ligula. Integer tempus varius enim ut scelerisque. Curabitur rutrum vestibulum elit ac pulvinar.
        </p>
      `,
    },
    {
      title: 'By late-2014',
      body: `
        <p class="ecl-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tellus congue, pretium nibh eu, mattis ligula. Integer tempus varius enim ut scelerisque. Curabitur rutrum vestibulum elit ac pulvinar.
        </p>
      `,
    },
    {
      title: 'By late-2015',
      body: `
        <p class="ecl-paragraph">
          The Commission will convene the first energy infrastructure forum to discuss and find solutions to issues that are common to all regions across Europe.
        </p>
        <p class="ecl-paragraph">
          The Commission will convene the first energy infrastructure forum to discuss and find solutions to issues that are common to all regions across Europe.
        </p>
      `,
    },
    {
      title: 'By late-2016',
      body: `
        <p class="ecl-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tellus congue, pretium nibh eu, mattis ligula. Integer tempus varius enim ut scelerisque. Curabitur rutrum vestibulum elit ac pulvinar.
        </p>
      `,
    },
    {
      title: 'By late-2017',
      body: `
        <p class="ecl-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tellus congue, pretium nibh eu, mattis ligula. Integer tempus varius enim ut scelerisque. Curabitur rutrum vestibulum elit ac pulvinar.
        </p>
      `,
    },
    {
      title: 'By late-2018',
      body: `
        <p class="ecl-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tellus congue, pretium nibh eu, mattis ligula. Integer tempus varius enim ut scelerisque. Curabitur rutrum vestibulum elit ac pulvinar.
        </p>
      `,
    },
  ],
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () { ECL.timelines(); });
      `,
  },
};
