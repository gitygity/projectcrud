'use strict';

/**
 * @ngdoc function
 * @name gityAppApp.controller:DeleteuserctrCtrl
 * @description
 * # DeleteuserctrCtrl
 * Controller of the gityAppApp
 */
angular.module('gityAppApp')
  .controller('DeleteuserctrCtrl', function ($scope,$location,UserserviceCtrl,sharedata) {

    $scope.delete=function () {
      var result=UserserviceCtrl.deleteuser(sharedata.value);
      result.then(function () {

        sharedata.value=0;
        $location.path('/listuser')
      })
    }





  });
