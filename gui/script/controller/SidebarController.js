'use strict';

angular.module('coolest')
    .controller('SidebarController', ['SearchForms', '$scope', function(SearchForms, $scope) {
        var keys = Object.keys(SearchForms);
        $scope.sidebars = [];
        keys.forEach(function(element) {
            var sidebar = {
                name: element,
                displayName: element.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                }),
                link: '/gui/' + element.toLowerCase()
            };
            $scope.sidebars.push(sidebar);
        });
    }]);