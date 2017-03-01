(function ($) {
  // pjax because mandelbrot.js uses it.
  $(document).on('ready pjax:success', () => {
    let store = '';
    let index = '';
    const data = $.getJSON('/assets/searchIndex.json');
    const $searchInput = $('#search-components');
    const $resultsArea = $('#tree-components').find('.Tree-items');
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

          if (results.length) {
            const $resultsDom = $('<ul class="Tree-items"></ul>');
            results.map((result) => {
              const resultItem = $(`
                <li class="Tree-item">
                    <h4 class="Tree-collectionLabel">
                      <a class="Tree-entityLink" data-pjax href="${store[result.ref].href}">${store[result.ref].name}</a>
                    </h4>
                </li>
              `);
              return $resultsDom.append(resultItem);
            });
            $resultsArea.append($resultsDom);
          } else {
            const resultString = $(`
                <li class="Tree-item">
                    <h4 class="Tree-collectionLabel">No components found</h4>
                </li>
            `);
            $resultsArea.append(resultString);
          }
        });
      }
    });
  });
}(jQuery));
