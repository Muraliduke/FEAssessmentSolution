app.controller('HomeCtrl', function($scope) {

    /*Solution 2*/
    $scope.inputData = {
        lists: ''
    }
    $scope.totalLists = [];
    $scope.addList = function(list) {
        if (list !== '') {
            $scope.totalLists.push(list);
            $scope.inputData.lists = '';
        }

    }
    /*Solution 2*/

    /*Solution 1*/
    function initStyle() {
        $scope.myObj = {
            'top': '0',
            'left': '0'
        }
    };
    initStyle();

    function Quadrant2() {
        $scope.myObj = {};
        $scope.myObj.top = 0;
        $scope.myObj.right = 0;

    }

    function Quadrant3() {
        $scope.myObj = {};
        $scope.myObj.bottom = 0;
        $scope.myObj.right = 0;

    }

    function Quadrant4() {
        $scope.myObj = {};
        $scope.myObj.bottom = 0;
        $scope.myObj.left = 0;

    }

    function directionCalc(direction) {
        if ($scope.myObj.top == 0) {
            if ($scope.myObj.left == 0 && direction == 'fwd') {
                Quadrant2();
                return;
            } else if ($scope.myObj.left == 0 && direction == 'bwd') {
                Quadrant4();
                return;
            }

            if ($scope.myObj.right == 0 && direction == 'fwd') {
                Quadrant3();
                return;
            } else if ($scope.myObj.right == 0 && direction == 'bwd') {
                initStyle();
                return;
            }

        }

        if ($scope.myObj.bottom == 0) {
            if ($scope.myObj.left == 0 && direction == 'fwd') {
                initStyle();
                return;
            } else if ($scope.myObj.left == 0 && direction == 'bwd') {
                Quadrant3();
                return;
            }
            if ($scope.myObj.right == 0 && direction == 'fwd') {
                Quadrant4();
                return;
            } else if ($scope.myObj.right == 0 && direction == 'bwd') {
                Quadrant2();
                return;
            }
        }
    }

    $scope.fwd = function() {
        directionCalc('fwd');
    }

    $scope.bwd = function() {
        directionCalc('bwd')

    }
    /*Solution 1*/

});

/*Solution 2 directive For On key Enter*/
app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

/*Solution 2 directive For On key Enter*/