'use strict';

var app = angular.module('myApp', []);
app.filter("name", function () {
    return function (person) {
        var input = input || "";
        input = person.lastName +", "+  person.firstName;
        return input;
    };
});
app.directive("loginform", function () {
    return {
        template: "<input type=\"text\" name=\"username\" value=\"Username\" required=\"\" /><input type=\"text\" name=\"password\" value=\"Password\" required=\"\" /> <input type=\"submit\" value=\"login\" name=\"login\" required=\"\" />"
    };
});


app.factory('appFactory', function () {
    var titleCase = function (Name) {

        return Name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    var camelCase = function (Name) {
        Name = Name.replace(/\s/g, '');
        return Name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    var dashCase = function (Name) {
        Name = Name.replace(/\s/g, '-');
        return Name;
    };
    return {
        titleCase:titleCase,
        camelCase:camelCase,
        dashCase: dashCase
    };
});
app.controller('ExamController', ['appFactory','$scope', function (appFactory,$scope) {
        var self = this;
        $scope.titleCase = appFactory.titleCase;
        $scope.camelCase = appFactory.camelCase;
        $scope.dashCase = appFactory.dashCase;
    }]);