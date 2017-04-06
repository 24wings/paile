var keystone = require('keystone');
var H5app = keystone.list('H5app');

exports.index = async function(req, res) {
    var apps = await H5app.model.find().exec();

    res.render('h5app', { apps });
}

exports.detail = async function(req, res) {
    var app = await H5app.model.findOne({ _id: req.params._id }).exec();
    res.render('app-detail', { app });
}