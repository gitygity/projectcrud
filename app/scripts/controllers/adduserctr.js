'use strict';

/**
 * @ngdoc function
 * @name gityAppApp.controller:AdduserctrCtrl
 * @description
 * # AdduserctrCtrl
 * Controller of the gityAppApp
 */
angular.module('gityAppApp')
  .controller('AdduserctrCtrl', function ($scope,$location,UserserviceCtrl) {

    $scope.id= 0;

    $scope.save=function (){
      var user={

        name:$scope.name,
        family:$scope.family,
        mail:$scope.mail
      };
      var result=UserserviceCtrl.adduser(user);

      result.then(function () {
        $location.path('/listuser')})

    }

  });








