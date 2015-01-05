(function () {
    'use strict';

    angular.module('notifics')
        .directive('subscribeToNotifications', subscribeToNotifications);

    function subscribeToNotifications() {
        var directive = {
            restrict   : 'E',
            scope      : {},
            templateUrl: 'app/subscribe/subscribe.directive.html',
            link       : link

        };

        return directive;
    }

    function link(scope, element, attrs) {
        if (attrs.role && attrs.role.toLowerCase() === 'admin') {
            console.log('is ADMIN');
        } else if (attrs.role && attrs.role.toLowerCase() === 'user') {
            console.log('regular user');
        }

    }
})();
