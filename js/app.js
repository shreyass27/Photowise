angular.module('WizPhoto', ['ui.router', 'ngResource'])
    .directive('footLeg', Foot)
    .directive('topHead', TopHead)
    .directive('runningNumbers', RunningNumber)
    .directive('preFooter', PreFooter);

function PreFooter() {
    'use strict';
    var controller = ['$scope', function ($scope) {
        $scope.footerImageArray = [
            {
                'url' : "https://www.instagram.com/p/BQmzXwLhvgm/",
                'src' : "https://farm5.staticflickr.com/4201/34110584343_3ab7787747.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzbdwhlZL/",
                'src' : "https://farm5.staticflickr.com/4219/34880806236_3aff3e9580.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzYwOBeS6/",
                'src' : "https://farm5.staticflickr.com/4223/34078149074_b21e72b5e0.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzUtuhwVY/",
                'src' : "https://farm5.staticflickr.com/4197/34534056360_0be48fee87.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzew9B-jA/",
                'src' : "https://farm5.staticflickr.com/4198/34078148824_63b405aeae.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzdaihApI/",
                'src' : "https://farm5.staticflickr.com/4197/34534056030_ceb3ebe28e.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzZoLBh7W/",
                'src' : "https://farm5.staticflickr.com/4272/34880805706_76901707d7.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzWwThzop/",
                'src' : "https://farm5.staticflickr.com/4245/34078147934_21b0be48fd.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzac8hJf4/",
                'src' : "https://farm5.staticflickr.com/4202/34880805596_0be290eeec.jpg"
            },
            {
                'url' : "https://www.instagram.com/p/BQmzVqrBCMe/",
                'src' : "https://farm5.staticflickr.com/4243/34078147684_84a393364f.jpg"
            }
        ];
    }];

    var ddo = {
        restrict: "AE",
        controller: controller,
        templateUrl: 'partials/pre-footer.html'
    };
    return ddo;
}

function Foot() {
    'use strict';
    var ddo = {
        restrict: "AE",
        templateUrl: 'partials/footer.html'
    };

    return ddo;
}

function TopHead() {
    'use strict';
    var ddo = {
        restrict: "AE",
        templateUrl: 'partials/header-top.html'
    };

    return ddo;
}

function RunningNumber() {
    'use strict';
    var ddo = {
        restrict: "AE",
        templateUrl: 'runningNumbers.html'
    };

    return ddo;
}
