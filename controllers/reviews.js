const Oreo = require('../models/oreo');

module.exports = {
  create,
  delete: deleteReview,
};


function create(req, res) {
  Oreo.findById(req.params.id, function(err, oreo) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    oreo.reviews.push(req.body);
    oreo.save(function(err) {
      res.redirect(`/oreos/${oreo._id}`);
    });
  });
}

async function deleteReview(req, res, next) {
    try {
      const oreo = await Oreo.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
      if (!oreo) throw new Error('Nice Try!');
      oreo.reviews.remove(req.params.id);
      await oreo.save();
      res.redirect(`/oreos/${oreo._id}`);
    } catch (err) {
      return next(err);
    }
  }

