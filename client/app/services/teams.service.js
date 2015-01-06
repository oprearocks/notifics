(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('teamsservice', teamsservice);

    teamsservice.$inject = ['$http', '$log'];

    function teamsservice($http, $log) {
        return {
            getTeams : getTeams
        };

        function getTeams() {
            return $http.get('/client/app/subscribe/teams.json')
                        .then(getTeamsComplete)
                        .catch(getTeamsFailed);

            function getTeamsComplete(response) {
                return response.data.teams;
            }

            function getTeamsFailed(error) {
                $log.log('XHR failed for `getTeams()`. ' + error.data);
            }
        }
    }
})();
