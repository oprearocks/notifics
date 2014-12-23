var path  = require('path');

function application(server, options, next) {

    server.route({
        method : 'GET',
        path : '/client/{app*}',
        config: {
            auth: false
        },
        handler: {
            directory : {
                path : './client',
                listing : false,
                index : true
            }
        }

    });

    next();
}

application.attributes = {
    name: 'client-application-route', // Must be unique
    version: '1.0.0'
};

/* Public interface */
exports.register = application;
