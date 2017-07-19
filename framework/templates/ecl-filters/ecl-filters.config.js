module.exports = {
  title: 'Filters',
  label: 'Filters',
  status: 'ready',
  tags: ['template'],
  context: {
    _demo: {
      scripts: `
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
        <script type="text/javascript">
          var pickerBefore = new Pikaday({
            field: document.getElementById('filter-before'),
            firstDay: 1,
            maxDate: new Date(2020, 12, 31),
            theme: 'ecl-pika-theme',
            yearRange: [2000, 2020],
          });
          var pickerAfter = new Pikaday({
            field: document.getElementById('filter-after'),
            firstDay: 1,
            maxDate: new Date(2020, 12, 31),
            theme: 'ecl-pika-theme',
            yearRange: [2000, 2020],
          });
        </script>
        <script>
      `,
    },
  },
};
