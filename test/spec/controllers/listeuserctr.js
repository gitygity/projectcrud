'use strict';

describe('Controller: ListeuserctrCtrl', function () {

  // load the controller's module
  beforeEach(module('gityAppApp'));

  var ListeuserctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListeuserctrCtrl = $controller('ListeuserctrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListeuserctrCtrl.awesomeThings.length).toBe(3);
  });
});
