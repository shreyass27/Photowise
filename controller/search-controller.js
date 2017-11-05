(function() {
    'use strict';
    angular.module('WizPhoto')
        .controller('searchController',searchController);
    searchController.$inject = ['$scope','$state','$stateParams','flickrApiCall','APIImgService'];

    function searchController($scope,$state,$stateParams,flickrApiCall,APIImgService) {

        var pagesShown = 1;
        var pages = 0;

        $scope.imgSrc = [];
        $scope.pageNumber = 1;
        $scope.results = [];
        $scope.title = [];

        $scope.callAPI = function() {
            $scope.loading=true;

            flickrApiCall.get({
                method:"flickr.photos.search",
                parameter:"&text=" +$stateParams.searchText +"&safe_search=3&per_page=9&page="  + $scope.pageNumber
            }, function(data){
                $scope.loading=false;             
                var results = data.photos.photo;
                pages = data.photos.pages;
                $scope.imgSrc = APIImgService.getURLAndTitle(results);
            },function(error) {
                $state.go('error');
            });
        };

        //    IIFE function to load first set of images 

        (function() {
            $scope.callAPI();
        })();

        $scope.nextItems = function() {
            if($scope.pageNumber < pages) {
                $scope.pageNumber++;
                $scope.callAPI();
            }
            else{
                $scope.checked=false;
            }
        }

        $scope.prevItems = function() {
            if($scope.pageNumber>1) {
                $scope.pageNumber--;
                $scope.checkedP = false;
                $scope.callAPI();
            }
            else{
                $scope.checkedP = true;
            }
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

            for (i = 0; i < $scope.slides.length; i++) 
                $scope.slides[i].style.display = "none";

            for (i = 0; i < $scope.dots.length; i++) 
                $scope.dots[i].className = $scope.dots[i].className.replace(" active", "");

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
