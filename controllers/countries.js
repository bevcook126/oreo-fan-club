const Country = require('../models/country');
const Oreo = require('../models/oreo');

module.exports = {
    create,
    new: newCountry,
    addToAvail,
    index
};

function addToAvail(req, res) {
    Oreo.findById(req.params.id, function (err, oreo) {
        oreo.avail.push(req.body.countryId);
        oreo.save(function (err) {
            res.redirect(`/oreos/${oreo._id}`);
        });
    });
}

function create(req, res) {
    Country.create(req.body, function (err, performer) {
        res.redirect('/countries');
    });
};

function newCountry(req, res) {
    Country.find({})
        .sort('name')
        .exec(function (err, countries) {
            res.render('countries/new', {
                title: 'Add Country',
                countries
            });
        });
}

function index(req, res) {
    Country.find({}, function (err, countries) {
        res.render('countries/index', { title: 'Around the World', countries });
    })
}