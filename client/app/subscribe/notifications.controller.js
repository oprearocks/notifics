(function () {
    'use strict';

    angular.module('notifics')
        .controller('Notifications', Notifications);

    Notifications.$inject = ['$http', 'localStorageService'];

    function Notifications($http, localStorageService) {
        var vm = this;

        vm.subscribe = subscribe;

        function subscribe() {
            if (localStorageService.isSupported) {
                localStorageService.set('config', {
                    "team"          : vm.team,
                    "endpoint"      : vm.endpoint,
                    "notifications" : vm.notifications.split(', ') || ['merge', 'deploy']
                });
            }
        }
    }
})();
