'use strict';

/**
 * @ngdoc function
 * @name gityAppApp.controller:EditeuserctrCtrl
 * @description
 * # EditeuserctrCtrl
 * Controller of the gityAppApp
 */
angular.module('gityAppApp')
  .controller('EditeuserctrCtrl', function ($scope, $location, UserserviceCtrl, sharedata) {

    var user = UserserviceCtrl.getuserbyid(sharedata.value);

    user.then(function (res) {
      $scope.Id = res.data.id;
      $scope.Name = res.data.name;
      $scope.Family = res.data.family;
      $scope.Mail = res.data.mail;

    });

    $scope.edit = function () {
      var user = {
        id: $scope.Id,
        name: $scope.Name,
        family: $scope.Family,
        mail: $scope.Mail
      }


      var result = UserserviceCtrl.edituser(user);
      result.then(function () {
        sharedata.value = 0;
        $location.path('/listuser');
      });
    }
  });
