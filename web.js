var keystone = require('keystone');
var swig = require('swig');
// keystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );
swig.setDefaults({ cache: false });

keystone.set('view engine', 'html');
keystone.set('custom engine', swig.renderFile);

// init app  ,such as static_file,view_engine,mongo
keystone.init({
    'name': '万维小程序平台',
    'brand': '万维小程序平台',
    // 'favicon':'public/favicon.ico',
    'less': 'public',
    'static': ['public', 'node_modules'],
    'views': 'templates/views',

    'auto update': true,
    'mongo': 'mongodb://120.77.169.182/platform',
    'cloudinary config': 'cloudinary://688229757297621:D-7VrFqtn6ayg6ItFNXSm52jcS0@dnf1ydl7w',
    'embedly api key': 'adb1c865a9bc489dad997a5f5bddcd6a',
    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': 'my secret'
});



// load model
require('./models');
// load routes
keystone.set('routes', require('./routes'));

keystone.start();