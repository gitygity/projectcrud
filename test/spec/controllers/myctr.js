'use strict';

describe('Controller: MyctrCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var MyctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyctrCtrl = $controller('MyctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyctrCtrl.awesomeThings.length).toBe(3);
  });
});
