angular.module('video-player')

.component('videoList', {

  controller: function(){
    console.log(this)
  },

  bindings: {
    videos: "<",
    onClick: "<"
  },

  templateUrl: 'src/templates/videoList.html'

});
