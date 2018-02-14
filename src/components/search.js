angular.module('video-player')

.component('search', {
  controller: function(youTube){
    console.log(this);

    this.debouncedSearch = youTube.debounce( youTube.search, 500 );

    this.searchResults = (query='something') => {
      this.debouncedSearch(query, this.result);
    };

  },

  bindings: {
    result: '<'
  },

  templateUrl: 'src/templates/search.html'

});
