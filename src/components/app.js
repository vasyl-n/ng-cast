angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.selectVideo = () => {
    };
    this.searchResults = () => {
    };
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.click = function(arg){
      console.log("called");
      this.currentVideo = arg;
    };

    this.search = (query='pepsi') => {
      youTube.sendRequest(this.handleApiRequest, query)
    };

    this.handleApiRequest = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    };

  },



  templateUrl: 'src/templates/app.html'

});
