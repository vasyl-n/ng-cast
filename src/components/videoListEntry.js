angular.module('video-player')

.component('videoListEntry', {
  controller: function(){
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
