(function ($) {
  $(document).ready(() => {
    let store = '';
    let index = '';
    const data = $.getJSON('/assets/searchIndex.json');
    const $contentBody = $('.Document');
    const initialContent = $contentBody.html();

    data.then((data) => {
      store = data.store;
      index = lunr.Index.load(data.index);
    });

    $('#search-components').keyup(function() {
      const query = $(this).val();
      if (query === ''){
        $contentBody.html(initialContent);
      }
      else {
        // perform search
        const results = index.search(query);
        data.then(function(data) {
          $contentBody.empty().append(
            results.length ?
              results.map(function(result){
                console.log(store[result.ref]);
                return `<p>
                          <h2><a href="${store[result.ref].href}">${store[result.ref].name}</a></h2>
                          <p>${store[result.ref].notes}</p>
                        </p>`;
              }) : $('<p><strong>No results found</strong></p>')
          );
        });
      }
    });
  });
}(jQuery));
