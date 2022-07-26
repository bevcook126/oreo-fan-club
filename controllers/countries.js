const Country = require('../models/country');
const Oreo = require('../models/oreo');

module.exports = {
    create,
    new: newCountry,
    addToCountries
};

function addToCountries(req, res) {
    Oreo.findById(req.params.id, function(err, oreo) {
        oreo.countries.push(req.body.countryId);
        oreo.save(function(err) {
            res.redirect(`/oreos/${oreo._id}`);
        });
    });
}

function create(req, res) {
    Oreo.findById(req.params.id, function(err, oreo) {
        oreo.countries.push(req.body);
        oreo.save(function(err) {
            res.redirect(`/oreos/${oreo._id}`);
        });
    });
}

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