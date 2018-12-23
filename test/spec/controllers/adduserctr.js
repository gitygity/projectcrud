'use strict';

describe('Controller: AdduserctrCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var AdduserctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdduserctrCtrl = $controller('AdduserctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdduserctrCtrl.awesomeThings.length).toBe(3);
  });
});
