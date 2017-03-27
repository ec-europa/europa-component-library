(function ($) {
  const searchIndexPath = JSON.parse($('#searchIndexPath').html());
  const data = $.getJSON(searchIndexPath.path);

  // pjax because mandelbrot.js uses it.
  $(document).on('ready pjax:success', () => {
    let store = '';
    let index = '';

    const $searchInput = $('#search-components');
    const $resultsArea = $('.Frame-inner');
    const initialContent = $resultsArea.html();

    // Fetch data from searchIndex.json for lunr front-end implementation.
    data.then((searchIndexJson) => {
      store = searchIndexJson.store;
      index = lunr.Index.load(searchIndexJson.index);
    });

    $searchInput.keyup(() => {
      const query = $searchInput.val();
      // Empty search box: initial and cleared states.
      if (query === '') {
        $resultsArea.html(initialContent);
      } else {
        // Perform lunr search.
        const results = index.search(query);
        // Get data.
        data.then(() => {
          // Clear area for results to prepare for results.
          $resultsArea.empty();

          let prefix = '';
          if (window.location.href.indexOf('components/detail/') <= 0) {
            prefix = 'components/detail/';
          }

          if (window.location.href.indexOf('docs/') >= 0) {
            prefix = '../components/detail/';
          }

          if (results.length) {
            let $resultsDom = '<div class="Document"><div class="Document-header"><h1 class="Document-title">Search results</h1></div><div class="Document-content"><div class="Prose"><ul>';
            const lll = results.map(result => (`
              <li><h4><a data-pjax href="${prefix + store[result.ref].handle}">${store[result.ref].title}</a></h4></li>
            `));
            $resultsDom += lll.join('');
            $resultsDom += '</ul></div></div></div>';
            $resultsArea.append($($resultsDom));
          } else {
            const resultString = $(`
                <div class="Document"><div class="Document-header"><h1 class="Document-title">Search results</h1></div><div class="Document-content"><div class="Prose">
                    <h4>No components found</h4>
                </div></div></div>
            `);
            $resultsArea.append(resultString);
          }
        });
      }
    });
  });
}(jQuery));
