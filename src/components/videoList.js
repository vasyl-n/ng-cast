angular.module('video-player')

.component('videoList', {

  controller: function(){
    console.log(this.click)
  },

  bindings: {
    videos: "<",
    click: "&"
  },

  templateUrl: 'src/templates/videoList.html'

});
