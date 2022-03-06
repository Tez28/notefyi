const router = require('express').Router();
const routeNotes = require('./routeNotes');

router.use(routeNotes);


module.exports = router;