angular.module('seedApp').run(['$templateCache', function($templateCache) {$templateCache.put('modules/home/home.html','<div ng-controller="homeController as vm" ng-cloak>\n    <h1>Home view</h1>\n    <sample-directive></sample-directive>\n</div>');
$templateCache.put('shared/directives/sample-directive/sample-directive.html','<div>Sample directive</div>\r\n\r\n');}]);