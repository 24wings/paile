var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname); //generate 

// common  middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);


// 404 Error Handle
keystone.set('404', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});


// load routes 
var routes = {
    views: importRoutes('./views')
};

exports = module.exports = function(app) {

    app.get('/', routes.views.index.index);
    // app.get('/h5app', routes.views.h5app.index);
    // app.get('/h5app/:_id', routes.views.h5app.detail);
    // app.post('/signup', routes.views.signup.post);
    // app.get('/words', routes.views.words.get);
};