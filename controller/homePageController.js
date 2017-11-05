(function() {
    'use strict';
    angular.module('WizPhoto')
        .controller('homePageController',homePageController);
    homePageController.$inject = ['$scope','flickrApiCall','flickrApiInfoCall','aboutme','APIImgService'];

    function homePageController($scope,flickrApiCall,flickrApiInfoCall,aboutme,APIImgService) {
        $scope.aboutmeMsg = aboutme.message;
        $scope.reviewMsg1 =  aboutme.review1;  
        $scope.reviewMsg2 =  aboutme.review2; 
        $scope.selectedWork = aboutme.selectedWork;

        var Title, imgFarm, imgServer, imgId, getDate, imgSecret;
        var imgTitle = [];
        var randomPageNumber = Math.floor((Math.random() * 5) + 1);

        $scope.arrayOfImages = [];
        $scope.getDate = [];
        $scope.imgSrc = [];
        $scope.infoData;

        ( function() {		
            flickrApiCall.get( {
                method:"flickr.photosets.getPhotos",
                parameter: "&user_id=148467629@N04&photoset_id=72157681753480061" 
            }, 
                              function(data) {
                $scope.imageData = data.photoset.photo;
                $scope.arrayOfImages= APIImgService.getURLAndTitle($scope.imageData);
            },
                              function(error) {
                $state.go('error');
            }); 
        }) ();

        (function(){
            flickrApiCall.get({
                method:"flickr.photosets.getPhotos",
                parameter: "&user_id=148467629@N04&photoset_id=72157681219752414&per_page=3&page=" + String(randomPageNumber)
            }, 								
                              function(data){   
                $scope.imageData = data.photoset.photo;
                $scope.imgSrc = APIImgService.getURLAndTitle($scope.imageData);
                for (var i=0; i<$scope.imgSrc.length; i++){
                    var newvar = $scope.imgSrc[i].sourceAdd.slice(36,47);
                    getPhotoDate(newvar,i);
                }		
            },
                              function(error) {
                $state.go('error');
            });
        }) ();
        var getPhotoDate = function(photo_id,i){
            var imgDate = [];
            flickrApiInfoCall.get({ parameterPhrase : "&photo_id=" + photo_id },
                                  function(data){
                var infoData=data;
                var imgDate=new Date((infoData.photo.dates.posted)*1000).toString();
                var res=imgDate.split(" ");
                $scope.getDate[i]= res[1] + " " + res[2] + ","+ res[3];
            },								
                                  function(error) {
                $state.go('error');
            });
        }
        $scope.openmyModal = function() {
            document.getElementById('myModal').style.display = "block";
        }

        $scope.closemyModal = function() {
            document.getElementById('myModal').style.display = "none";
        }

        $scope.slideIndex = 1;

        $scope.showSlides = function(n) {
            var i;
            $scope.slides = document.getElementsByClassName("mySlides");
            $scope.dots = document.getElementsByClassName("demo");

            if (n > $scope.slides.length) {$scope.slideIndex = 1}

            if (n < 1) {$scope.slideIndex = $scope.slides.length} 

            for (i = 0; i < $scope.slides.length; i++) {
                $scope.slides[i].style.display = "none";
            }

            for (i = 0; i < $scope.dots.length; i++) {
                $scope.dots[i].className = $scope.dots[i].className.replace(" active", "");
            }

            $scope.slides[$scope.slideIndex-1].style.display = "block";
            $scope.slides[$scope.slideIndex-1].className += "active";
        }

        $scope.plusSlides = function(n) {
            $scope.showSlides($scope.slideIndex += n);
        }

        $scope.currentSlide = function(n) {
            $scope.showSlides($scope.slideIndex = n);
        } 
    }

})();