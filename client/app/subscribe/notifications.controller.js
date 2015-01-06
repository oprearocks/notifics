(function () {
    'use strict';

    angular.module('notifics')
        .controller('Notifications', Notifications);

    Notifications.$inject = ['$http', 'teamsservice', 'localStorageService', '$log'];

    function Notifications($http, teamsservice, localStorageService, $log) {
        var vm = this;

        vm.subscribe = subscribe;

        activate();

        function activate() {
            return getTeams().then(function() {
                $log.log('Teams fetched successfully!');
            });
        }

        function getTeams() {
            return teamsservice.getTeams()
                .then(function(data) {
                    vm.teams = data;
                    return vm.teams;
                });
        }

        function subscribe() {
            if (localStorageService.isSupported) {
                localStorageService.set('config', {
                    'team'          : vm.selectedTeam,
                    'endpoint'      : vm.endpoint,
                    'notifications' : vm.notifications.split(', ') || ['merge', 'deploy']
                });

                $http.get('http://localhost:8080' + vm.endpoint + '/778899/SUCCESS');
            }
        }
    }
})();
