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

        $scope.put_number = function () {
            localStorage.error = "true"
            var numb = $scope.change
            if (numb.length == 0) {

            }
            else {
                for (var i = 0; i < numb.length - 1; i++) {
                    if (numb[numb.length - 1] == numb[i] || numb.length > 4) {
                        $scope.error = "输入错误！"
                        localStorage.error = "false"
                    }
                    else {
                        $scope.error = ""
                    }
                }
            }
        }


        $scope.go_register = function () {

            var numbers = localStorage.numbers
            if (localStorage.numbers == "") {
            }
            localStorage.input_number = $scope.change

            var input = localStorage.input_number
            var numbers = localStorage.number
            var compare = Compare_checkout(input, numbers)
            var count = localStorage.countz

            var result = count_down(input, numbers, compare, count)

            $scope.num = result
            if (result == "congratulations!" || "sorry,you lost!") {
                localStorage.action = "false"
                localStorage.countz = 0
                localStorage.input_number = ""
                localStorage.number = ""
            }

            var count_down_number = localStorage.countz
            count_down_number++
            localStorage.countz = count_down_number

            $scope.a = localStorage.input_number
            $scope.b = localStorage.results
            $scope.c = 6 - localStorage.countz

            $scope.change = ""

        }

    });
