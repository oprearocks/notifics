var notifier = require('node-notifier'),
    path = require('path');

function dssaDeploy(server, options, next) {
    server.route({
        method : 'GET',
        path : '/dssa-deploy/{deployNumber}/{status}',
        handler : function(request, reply) {
            notifier.notify({
                title: 'DSSA deploy status',
                message:    'Deploy no. ' +
                            request.params.deployNumber +
                            ' finished with status ' +
                            request.params.status,
                icon: path.join(__dirname, 'coulson.jpg'), // absolute path (not balloons)
                sound: true, // Only Notification Center or Windows Toasters
                wait: true // wait with callback until user action is taken on notification
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

dssaDeploy.attributes = {
    name: 'dssa-deploy-route', // Must be unique
    version: '1.0.0'
};

/* Public interface */
exports.register = dssaDeploy;
