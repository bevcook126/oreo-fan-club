var express = require('express');
var router = express.Router();
const oreosCtrl = require('../controllers/oreos');


router.get('/', oreosCtrl.index);
router.get('/new', oreosCtrl.new);
router.get('/:id', oreosCtrl.show);
router.get('/:id/edit', oreosCtrl.edit);
router.put('/:id', oreosCtrl.update);




module.exports = router;
