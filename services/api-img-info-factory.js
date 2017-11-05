angular.module('WizPhoto').factory('APIImgService', function () {
    var factoryObject = {};
    factoryObject.getURLAndTitle = function(dataFromAPI){
          var imgSrc = [];
          for(var i=0; i<dataFromAPI.length; i++){
          imgFarm = dataFromAPI[i].farm;
          imgServer = dataFromAPI[i].server;
          imgId	= dataFromAPI[i].id;
          imgSecret = dataFromAPI[i].secret;
          imgTitle =dataFromAPI[i].title.split("_");
          var imageObject = {
            sourceAdd:"https://farm" + String(imgFarm) + ".staticflickr.com/" + String(imgServer) +
					"/" +  String(imgId) + "_" + String(imgSecret) + ".jpg",
            imgTitle: imgTitle[0],
            imgCategory: imgTitle[1]
        };
        imgSrc[i] = imageObject;
        }
        return imgSrc
    }
    return factoryObject;
});

angular.module('WizPhoto').factory("flickrApiInfoCall", function($resource,BASE_URL){
    return $resource(BASE_URL().apiBaseUrl + "&method=flickr.photos.getInfo" + ":parameterPhrase")
});