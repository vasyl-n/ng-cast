angular.module('video-player')

.component('search', {
  controller: function(){
    console.log(this);
  },

  bindings: {
    result: '<'
  },

  templateUrl: 'src/templates/search.html'

});
