console.log('\'Allo \'Allo!');


  'use strict';


var app = angular.module('gityAppApp', ['ui.router']);
  app.factory('sharedata',function () {
    return {value:0};
  });



app.config(function($stateProvider) {
  var addstate = {
    name: 'adduser',
    url: '/adduser',
    templateUrl: '/views/adduser.html',
    controller:'AdduserctrCtrl'


  }

  var editState = {
    name: 'edituser',
    url: '/edituser',
    templateUrl: '/views/edituser.html',
    controller:'EditeuserctrCtrl'
  }

  var deletestate={
    name:'deleteuser',
    url:'/deleteuser',
    templateUrl:'/views/deleteuser.html',
    controller:'DeleteuserctrCtrl'
  }

var liststate={
    name:'listuser',
  url:'/listuser',
  templateUrl:'/views/listuser.html',
  controller:'ListeuserctrCtrl'
  // controllerUrl:'/controllers/listeuserctr.js'
}

  $stateProvider.state(addstate);
  $stateProvider.state(editState);
  $stateProvider.state(deletestate);
  $stateProvider.state(liststate);
});



