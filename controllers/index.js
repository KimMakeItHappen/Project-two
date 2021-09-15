const router = require('express').Router();
const api = require('./api');

router.get('/', async (req, res) => {

      // Pass serialized data and session flag into template
      res.render('homepage');
  });
router.use('/api', api);
module.exports = router;