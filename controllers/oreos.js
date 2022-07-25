const Oreo = require('../models/oreo');

module.exports = {
    index,
    new: newOreo,
    create,
    show
};

function index(req, res) {
    Oreo.find({}, function(err, oreos) {
        oreos.sort((a,b) => Number(a.releaseDate) - Number(b.releaseDate));
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

function show(req, res) {
    Oreo.findById(req.params.id, function(err, oreo) {
        res.render('oreos/show', {
            title: 'Oreo Stats',
            oreo
        });

    });
}