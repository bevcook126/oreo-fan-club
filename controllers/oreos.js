const Oreo = require('../models/oreo');

module.exports = {
    index,
    new: newOreo,
    create
};

function index(req, res) {
    Oreo.find({}, function(err, oreos) {
        res.render('oreos/index', { title: 'All Oreos', oreos });
    })
}

function newOreo(req, res) {
    res.render('oreos/new', { title: 'Add Oreo' });
  }

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const oreo = new Oreo(req.body);
    oreo.save(function(err) {
        if (err) return res.redirect('/oreos/new');
        res.redirect('/oreos');
    });
}
  