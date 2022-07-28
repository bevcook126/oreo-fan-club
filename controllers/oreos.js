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
        oreos.sort((a, b) => Number(a.releaseYear) - Number(b.releaseYear));
        res.render('oreos/index', { title: 'All Oreos', oreos });
    })
}

function newOreo(req, res) {
    res.render('oreos/new', { title: 'Add Oreo' });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const oreo = new Oreo(req.body);
    oreo.save(function (err) {
        if (err) return res.redirect('/oreos/new');
        res.redirect('/oreos');
        console.log("oreo")
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
    // User.findOne({'oreo.user': req.user._id});
    // if (!oreo) throw new Error('Nice Try!');
    Oreo.findOneAndUpdate(
      {_id: req.params.id, user: req.user._id},
      req.body,
      {new: true},
      function(err, oreo) {
        if (err) return res.redirect(`/oreos/${oreo._id}/edit`);
        res.redirect(`/oreos/${oreo._id}`);
      }
    );
  }

function edit(req, res) {
    Oreo.findById(req.params.id, function(err, oreo) {
        res.render('oreos/edit', { title: 'Edit Oreo', oreo })
        console.log(oreo)
    });
}

// try {
//     oreo.reviews.remove(req.params.id);
//     await oreo.save();
//     res.redirect(`/oreos/${oreo._id}`);
//   } catch (err) {
//     return next(err);
//   }
// }
