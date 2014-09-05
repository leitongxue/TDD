'use strict';

/**
 * @ngdoc function
 * @name abcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abcApp
 */
angular.module('abcApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        function control() {
            if (localStorage.action = "true") {
                $scope.control = true
            }
            if (localStorage.action = "false") {
                $scope.control = false
            }
        }

        control()

        $scope.start = function () {
            localStorage.number = random_a_number()
            localStorage.countz = 1
            localStorage.action = "true"
        }


        $scope.go_register = function () {

            var numbers = localStorage.numbers
            if (localStorage.numbers == "") {
            }
            localStorage.input_number = $scope.change

//                var same = _.intersection( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],localStorage.input_number)
//            console.log(same)
//            if(same.length==6)


            $scope.num = count_down()
            var count_down_number = localStorage.countz
            count_down_number++
            localStorage.countz = count_down_number

            $scope.a = localStorage.input_number
            $scope.b = localStorage.results
            $scope.c = 6 - localStorage.countz

            $scope.change = ""

        }

    });
