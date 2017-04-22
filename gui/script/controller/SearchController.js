'use strict';

angular.module('coolest')
	.controller('SearchController', ['SearchForms', 'Search', '$location', '$scope', function (SearchForms, Search, $location, $scope) {

		var path = 'users';
		var nextPageUrl;
		populatePath();

		$scope.$on('$locationChangeSuccess', function () {
			populatePath();
		});

		$scope.search = function () {
			Search.get('/api/' + path, '', $scope.formValue).then(function (data) {
				$scope.fetchedData = data._embedded[path];
				nextPageUrl = data._links.Next.href;
			});
		};
		$scope.clear = function () {
			$scope.formValue = {};
		};

		// trigger a event when the scroll bar scroll to the bottom
		$(document).scroll(function () {
			if ($(document).scrollTop() / $(document).height() >= 0.8) {
				fetchNextPage();
			}
		});

		function fetchNextPage() {
			Search.get(nextPageUrl, '', $scope.formValue).then(function (data) {
				$scope.fetchedData = $scope.fetchedData.concat(data._embedded[path]);
				nextPageUrl = data._links.Next.href;
			});
		}

		function populatePath() {
			var url = $location.url();
			var urlArray = url.split('/');
			path = urlArray[2];
			$scope.searchFields = SearchForms[path].searchFileds;
			$scope.showFileds = SearchForms[path].showFileds;
			$scope.fetchedData = {};
		}
	}]);
