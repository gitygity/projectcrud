'use strict';

describe('Controller: EditeuserctrCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var EditeuserctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditeuserctrCtrl = $controller('EditeuserctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditeuserctrCtrl.awesomeThings.length).toBe(3);
  });
});
