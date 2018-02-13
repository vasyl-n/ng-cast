angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.selectVideo = (selectedVideo) => {
      this.currentVideo = selectedVideo;
    };

    this.result = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    }

    this.searchResults = (query='something') => {
      youTube.search(query, this.result);
    };

    this.$onInit = function() {
      this.searchResults();
    };

  },

  templateUrl: 'src/templates/app.html'

});
