(function () {
    'use strict';

    angular.module('app.core')
        .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ntf')
        }]);
})();
