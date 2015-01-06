var notifier = require('node-notifier'),
    io       = require('socket.io')(8899),

    path     = require('path');

function teamDeployRoute(server, options, next) {
    console.log(__dirname);
    server.route({
        method : 'GET',
        path   : '/team-deploy/{deployTicket}/{status}',
        handler: function (request, reply) {
            notifier.notify({
                title  : 'TEAM deploy status',
                message: 'Deploy ticket ' + request.params.deployTicket + ' was delivered with status: ' + request.params.status,
                icon   : path.join(__dirname, '/resources/logo_300_.png'), // absolute path (not balloons)
                sound  : true, // Only Notification Center or Windows Toasters
                open   : 'https://google.com/' + request.params.deployTicket,
                wait   : true // wait with callback until user action is taken on notification
            }, function (err, response) {
                // response is response from notification
            });

            notifier.on('click', function (notifierObject, options) {
                // Happens if `wait: true` and user clicks notification
            });

            notifier.on('timeout', function (notifierObject, options) {
                // Happens if `wait: true` and notification closes
            });
        }
    });

    next();
}

teamDeployRoute.attributes = {
    name   : 'team-deploy-route', // Must be unique
    version: '1.0.0'
};

/* Public interface */
exports.register = teamDeployRoute;
