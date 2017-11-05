(function () {
    'use strict';
    angular.module('WizPhoto')
        .controller('showCaseControler', showCaseControler);
    showCaseControler.$inject = ['$scope', '$interval', 'flickrApiCall',  'APIImgService', 'aboutme'];




    function showCaseControler($scope, $interval, flickrApiCall, APIImgService, aboutme) {


        $scope.intro1 = aboutme.intro1;
        $scope.intro2 = aboutme.intro2;
        $scope.landscape1 = aboutme.landscape1;
        $scope.landscape2 = aboutme.landscape2;
        $scope.portraits1 = aboutme.portraits1;
        $scope.portraits2 = aboutme.portraits2;
        $scope.commercial1 = aboutme.commercial1;
        $scope.commercial2 = aboutme.commercial2;

        $scope.happyCustomers = 0;
        $scope.followers = 0;
        $scope.awardsWinning = 0;
        $scope.photosTaken = 0;
        $scope.arrayOfImages = [];

        $interval(function () {
            $scope.happyCustomers = $scope.happyCustomers + 1;
        }, 100, 241);
        $interval(function () {
            $scope.followers = $scope.followers + 1;
        }, 200, 7946);
        $interval(function () {
            $scope.awardsWinning = $scope.awardsWinning + 1;
        }, 500, 35);
        $interval(function () {
            $scope.photosTaken = $scope.photosTaken + 1;
        }, 100, 8203);

        (function () {
            flickrApiCall.get({
                method: "flickr.photosets.getPhotos",
                parameter: "&user_id=148467629@N04&photoset_id=72157681414308753"
            },
                              function (data) {
                $scope.user = data.photoset.photo;
                $scope.showcaseImages = APIImgService.getURLAndTitle($scope.user);
            },
                              function (error) {
                $state.go('error');
            });
        }());
    }
}());