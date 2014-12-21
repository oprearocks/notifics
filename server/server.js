/* globals require */
var Hapi = require('hapi'),
    path = require('path'),
    server = new Hapi.Server(),

    plugins = [];


plugins.push({register: require('./routes/dssa-deploy.js')});

server.connection({
    host : 'localhost',
    port : 8080
});



server.register(plugins, function(err) {
    if (err) {
        console.log('Error registering plugins.');
        throw err;
    }

    server.start(function(err) {
        if (err) {
            console.log('An error has occurred!');
            throw err;
        }

        console.log('Hapi server running at %s', server.info.uri);
    });
});
