var express = require('express');
var router = express.Router();
const oreosCtrl = require('../controllers/oreos');


router.get('/', oreosCtrl.index);
router.get('/new', oreosCtrl.new);
router.post('/', oreosCtrl.create);
router.get('/:id', oreosCtrl.show);




module.exports = router;
