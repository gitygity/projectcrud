'use strict';

/**
 * @ngdoc function
 * @name gityAppApp.controller:ListeuserctrCtrl
 * @description
 * # ListeuserctrCtrl
 * Controller of the gityAppApp
 */
angular.module('gityAppApp')
  .controller('ListeuserctrCtrl', function ($scope,$location, UserserviceCtrl,sharedata) {

    var listuser=UserserviceCtrl.getalluser();
    listuser.then(function (result) {
      $scope.users=result.data;


      $scope.deleteusers=function (id) {
        sharedata.value=id;
        $location.path('/deleteuser')
      }


      $scope.editusers=function (id) {
        sharedata.value=id;
        $location.path('/edituser')

      }

    })



  });
