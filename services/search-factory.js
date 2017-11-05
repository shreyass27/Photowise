angular.module('WizPhoto').factory("flickrApiCall", ['$resource','BASE_URL',function($resource,BASE_URL){
return $resource(BASE_URL().apiBaseUrl +  "&method=:method" + ":parameter"
)
}]);