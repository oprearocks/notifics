/* globals require */
var Hapi    = require('hapi'),
    server  = new Hapi.Server(),

    plugins = [
        {register: require('./routes/dssa-deploy.js')},
        {register: require('./routes/application.js')}
    ];

server.connection({
    host: 'localhost',
    port: 8080
});


server.register(plugins, function (err) {
    if (err) {
        console.log('Error registering plugins.');
        throw err;
    }

    server.start(function (err) {
        if (err) {
            console.log('An error has occurred!');
            throw err;
        }

        console.log('Hapi server running at %s', server.info.uri);
    });
});
