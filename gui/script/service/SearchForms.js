'use strict';

angular.module('coolest')
	.factory('SearchForms', [function () {
		return {
			'users': {
				'pagination': true,
				'searchFileds': [
					{ 'name': 'username', 'displayName': 'User Name' },
					{ 'name': 'sex', 'displayName': 'Sex' },
					{ 'name': 'age', 'displayName': 'Age' },
					{ 'name': 'email', 'displayName': 'Email' }
				],
				'showFileds': [
					{ 'name': 'username', 'displayName': 'User Name' },
					{ 'name': 'sex', 'displayName': 'Sex' },
					{ 'name': 'age', 'displayName': 'Age' },
					{ 'name': 'email', 'displayName': 'Email' }
				]
			},
			'shops': {
				'pagination': false,
				'searchFileds': [
					{ 'name': 'shopname', 'displayName': 'Shop Name' },
					{ 'name': 'boss', 'displayName': 'Boss' }
				],
				'showFileds': [
					{ 'name': 'shopname', 'displayName': 'Shop Name' },
					{ 'name': 'boss', 'displayName': 'Boss' }
				]
			},
			'logs': {
				'pagination': true,
				'searchFileds': [
					{ 'name': 'username', 'displayName': 'User Name' },
					{ 'name': 'sex', 'displayName': 'Sex' },
					{ 'name': 'age', 'displayName': 'Age' },
					{ 'name': 'shopname', 'displayName': 'Shop Name' }
				],
				'showFileds': [
					{ 'name': 'username', 'displayName': 'User Name' },
					{ 'name': 'sex', 'displayName': 'Sex' },
					{ 'name': 'age', 'displayName': 'Age' },
					{ 'name': 'shop', 'displayName': 'Shop Name' }
				]
			}
		};
	}]);
