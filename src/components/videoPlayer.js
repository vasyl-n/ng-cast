angular.module('video-player')

.component('videoPlayer', {
  controller: function(){
    this.urlFunction = function(){
      return "https://www.youtube.com/embed/" + this.currentVideo.id.videoId;
    }
  },

  bindings: {
    currentVideo: "<"
  },

  templateUrl: 'src/templates/videoPlayer.html'

});
