const Oreo = require('../models/oreo');

module.exports = {
    create,
}

function create(req, res) {
    Oreo.findById(req.params.id, function(err, oreo) {
        oreo.countries.push(req.body);
        oreo.save(function(err) {
            res.redirect(`/oreos/${oreo._id}`);
        });
    });
}