'use strict';

describe('Controller: UserserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var UserserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserserviceCtrl = $controller('UserserviceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserserviceCtrl.awesomeThings.length).toBe(3);
  });
});
