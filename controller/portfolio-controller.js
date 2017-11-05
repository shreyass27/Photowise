angular.module('WizPhoto').controller('portfolioController',['$scope','flickrApiCall','APIImgService',function($scope,flickrApiCall,APIImgService){



    $scope.page_no =1;
    var j=0;  

    $scope.fashionArray=[];
    $scope.landscapeArray=[];
    $scope.natureArray=[];
    $scope.allArray=[]; 
    $scope.imgArray=[];  

    $scope.classAway = "";
    var fashion = 0;
    var landscape = 0;
    var nature = 0;
    var j=0;


    $scope.LoadMore=function(){  
        if($scope.page_no<4){  
            flickrApiCall.get({
                method:"flickr.photosets.getPhotos",
                parameter: "&user_id=148467629@N04&photoset_id=72157681219752414&per_page=6&page=" + $scope.page_no
            }, 
                              function(data){
                $scope.imageData = data.photoset.photo;

                var nuImage = APIImgService.getURLAndTitle( $scope.imageData);
                $scope.allArray = $scope.allArray.concat(nuImage);

                for(var i = j; i<$scope.allArray.length; i++){

                    if($scope.allArray[j].imgCategory=="Fashion") {
                        $scope.fashionArray[fashion]=$scope.allArray[j]; 
                        fashion++;
                    }

                    else if($scope.allArray[j].imgCategory== "Landscape") {
                        $scope.landscapeArray[landscape]=$scope.allArray[j]; 
                        landscape++;
                    }

                    else if($scope.allArray[j].imgCategory == "Nature") {
                        $scope.natureArray[nature]=$scope.allArray[j]; 
                        nature++;
                    }

                    j=j+1;
                    $scope.imgArray = $scope.allArray;
                }
            },									
                              function(error) {
                $state.go('error');
            });

            $scope.page_no=$scope.page_no+1;
        }
        else{
            $scope.classAway = "uk-animation-reverse uk-animation-slide-left";
        }
    };
    $scope.LoadMore();
    $scope.categories = function ( item ) {
        if(item=="Fashion"){
            $scope.imgArray = $scope.fashionArray;
        }
        else if(item=="Landscape") {
            $scope.imgArray = $scope.landscapeArray;
        }
        else if(item=="Nature") {
            $scope.imgArray = $scope.natureArray;
        }
        else {
            $scope.imgArray = $scope.allArray;
        }
    }
}]);