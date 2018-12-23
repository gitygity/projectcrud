'use strict';

/**
 * @ngdoc function
 * @name gityAppApp.controller:UserserviceCtrl
 * @description
 * # UserserviceCtrl
 * Controller of the gityAppApp
 */
angular.module('gityAppApp')
  .service('UserserviceCtrl', function ($http) {

this.getalluser=function () {
  return $http.get('http://192.168.1.2:80/index.php');
}

this.getuserbyid=function (id) {
  var result=$http({
    url:'http://192.168.1.2:80/getuserbyid.php',
    method:'POST',
    data:{id},
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
  return result;
}

this.adduser=function (user) {
  var result=$http({
    url:'http://192.168.1.2:80/adduser.php',
    method:'POST',
    data:user,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return result;
}

this.edituser=function (user) {
  var result=$http({
    url:'http://192.168.1.2:80/edituser.php',
    method:'POST',
    data:user,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return result;
}

  this.deleteuser=function (id) {
    var result=$http({

      url:'http://192.168.1.2:80/deleteuser.php',
      method:'POST',
      data:{id},
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
return result;
  }


  });


