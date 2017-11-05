(function() {
    'use strict';
    angular.module('WizPhoto')
        .controller('formController',formController);
    formController.$inject = ['$scope','$state','$stateParams'];

    function formController($scope,$state,$stateParams) {
        $scope.check=false;
        $scope.searchTerm = "";

        $scope.toggleDisplay = function() {        
            $scope.check=$scope.check?false:true; 
            if($scope.searchTerm!="") {
                $state.go('search', {searchText: $scope.searchTerm});
                $scope.searchTerm = "";
            }
        } 
    }
})();