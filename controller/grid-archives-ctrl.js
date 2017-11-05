(function() {
    'use strict';
    angular.module('WizPhoto')
        .controller('gridArchController',gridArchController);
    gridArchController.$inject = ['$scope','flickrApiCall','APIImgService'];

    function gridArchController($scope,flickrApiCall,APIImgService) {
        $scope.page_no = 1;
        $scope.arrayOfImages = [];
        $scope.classAway = "";

        $scope.gridLoadMore = function() {
            if($scope.page_no<4) {
                flickrApiCall.get( {
                    method:"flickr.photosets.getPhotos",
                    parameter: "&user_id=148467629@N04&photoset_id=72157684250854345" +
                    "&per_page=12&page=" + $scope.page_no
                }, 
                                  function(data) {
                    $scope.user = data.photoset.photo;
                    var nuArray = APIImgService.getURLAndTitle($scope.user);
                    $scope.arrayOfImages = $scope.arrayOfImages.concat(nuArray);
                },				
                                  function(error) {
                    $state.go('error');
                }); 
                $scope.page_no = $scope.page_no + 1;
            }
            else 
                $scope.classAway = "uk-animation-reverse uk-animation-slide-left ";
        }

        $scope.gridLoadMore();
        $scope.category = "all";
        $scope.showAllImages = "all";
        $scope.categories = function ( item ) {
            $scope.category = item;
        }
    }
})();