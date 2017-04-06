var keystone = require('keystone');

exports.index = function(req, res) {
    res.render('index');
}
exports.getDataById = function(req, res) {
    var modelName = req.query.modelName;
    var _id = req.query._id;
    keystone.list(modelName).model.findOne({ _id: _id }).exec(function(err, result) {
        res.json(result);
    });
};