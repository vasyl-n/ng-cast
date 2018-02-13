angular.module('video-player')

.component('videoListEntry', {
  controller: function($scope){
    console.log(this)
    this.onClick = () => {
      this.click(this.video);
    };
  },

  bindings: {
    video: "<",
    click: "<"
  },

  templateUrl: 'src/templates/videoListEntry.html'

});
