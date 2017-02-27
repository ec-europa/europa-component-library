(function ($) {
  $(document).ready(() => {
    let store = '';
    let index = '';
    const data = $.getJSON('/assets/searchIndex.json');
    const $contentBody = $('.Document');
    const initialContent = $contentBody.html();

    data.then(function(data){
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
                const el = $('<p>')
                  .append($('<a>')
                    .attr('href', result.ref)
                    .text(store[result.ref].title)
                  );
                return el;
              }) : $('<p><strong>No results found</strong></p>')
          );
        });
      }
    });
  });
}(jQuery));
