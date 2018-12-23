'use strict';

describe('Controller: ListuserctrCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var ListuserctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListuserctrCtrl = $controller('ListuserctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListuserctrCtrl.awesomeThings.length).toBe(3);
  });
});
