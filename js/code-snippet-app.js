var app = angular.module( 'BowerBadges', [] );

app.controller( 'CodeSnippetController', ['$scope', function ( $scope ) {
  $scope.activeSnippet = 'embed';
}]);
