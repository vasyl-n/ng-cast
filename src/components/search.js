angular.module('video-player')

.component('search', {
  controller: function(){
    console.log(this)
    this.result = () => {
    }
  },

  bindings: {
    search: '<'
  },

  templateUrl: 'src/templates/search.html'

});
