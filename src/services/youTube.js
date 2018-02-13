angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(text, callback) {
    $http({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&q=${text}`
    })
    .then( (response) => {
      console.log(response);
      callback(response.data.items);
    })
  }
});
