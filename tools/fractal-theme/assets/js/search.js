/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import lunr from 'lunr';

export default () => {
  if (!document.getElementById('searchIndexPath')) {
    return;
  }

  const searchIndexPath = JSON.parse($('#searchIndexPath').html());

  $.getJSON(searchIndexPath.path, searchIndexJson => {
    const $searchInput = $('#search-components');
    const $navigationMenu = $('.ecl-navigation-menu');
    const $resultsArea = $('.page-content');

    const initialContent = $resultsArea.html();

    const { store } = searchIndexJson;
    const index = lunr.Index.load(searchIndexJson.index);

    $searchInput.keyup(() => {
      const query = $searchInput.val();
      $navigationMenu.find('[aria-expanded]').attr('aria-expanded', false);
      // Empty search box: initial and cleared states.
      if (query === '') {
        $resultsArea.html(initialContent);
        return;
      }

      // Perform lunr search.
      const results = index.search(query);

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
        $resultsArea.append(
          $(`
              <div class="Document">
                <div class="Document-header">
                  <h1 class="Document-title">Search results</h1>
                </div>
                <div class="Document-content">
                  <div class="Prose">
                    <ul class="ecl-list">
                      ${results
                        .map(
                          result => `
                          <li>
                            <h4 class="ecl-heading ecl-heading--h4 ecl-u-mb-none">
                              <a class="ecl-link" href="${prefix +
                                store[result.ref].handle}">${
                            store[result.ref].title
                          }
                              </a>
                            </h4>
                          </li>
                          `
                        )
                        .join('')}
                    </ul>
                  </div>
                </div>
              </div>
            `)
        );
      } else {
        $resultsArea.append(
          $(`
            <div class="Document">
              <div class="Document-header">
                <h1 class="Document-title">Search results</h1>
              </div>
              <div class="Document-content">
                <div class="Prose">
                  <h4>No components found</h4>
                </div>
              </div>
            </div>
          `)
        );
      }
    });
  });
};
