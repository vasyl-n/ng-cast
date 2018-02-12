angular.module('video-player')

.component('videoListEntry', {
  controller: function($scope){
    console.log(this)
    this.onClick = () => {
      $scope.$parent.$parent.$parent.$ctrl.click(this.video);
      // this.handleClick(this.video)
    };
  },

  bindings: {
    video: "<",
    handleClick: "&"
  },

  templateUrl: 'src/templates/videoListEntry.html'

});
