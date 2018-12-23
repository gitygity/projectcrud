'use strict';

describe('Controller: DeleteuserctrCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var DeleteuserctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteuserctrCtrl = $controller('DeleteuserctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeleteuserctrCtrl.awesomeThings.length).toBe(3);
  });
});
