const Oreo = require('../models/oreo');
const Country = require('../models/country');

module.exports = {
    index,
    new: newOreo,
    create,
    show,
    edit,
    update
};

function index(req, res) {
    Oreo.find({}, function (err, oreos) {
        oreos.sort((a, b) => Number(a.releaseDate) - Number(b.releaseDate));
        res.render('oreos/index', { title: 'All Oreos', oreos });
    })
}

function newOreo(req, res) {
    res.render('oreos/new', { title: 'Add Oreo' });
}

function create(req, res) {
    req.body.avail = req.body.avail.replace(/\s*,\s*/g, ',');
    if (req.body.avail) req.body.avail = req.body.avail.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const oreo = new Oreo(req.body);
    oreo.save(function (err) {
        if (err) return res.redirect('/oreos/new');
        res.redirect('/oreos');
    });
}

function show(req, res) {
    Oreo.findById(req.params.id)
        .populate('avail')
        .exec(function (err, oreo) {
            Country.find(
                { _id: { $nin: oreo.avail } },
                function (err, countries) {
                    res.render('oreos/show', {
                        title: 'Oreo Stats',
                        oreo,
                        countries
                    });

                }
            );
        });

}

function update(req, res) {
    Oreo.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      function(err, oreo) {
        if (err) return res.redirect(`/oreos/${oreo._id}/edit`);
        res.redirect(`/oreos/${oreo._id}`)
      }
    );
  }

function edit(req, res) {
    Oreo.findById(req.params.id, function(err, oreo) {
        res.render('oreos/edit', { title: 'Edit Oreo', oreo })
    });
}

