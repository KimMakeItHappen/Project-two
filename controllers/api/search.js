const router = require('express').Router();
// const axios = require('axios').default;


router.get ('/', async (req, res) => {
    const adzuna = await axios.get (
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=a2be2459&app_key=52a262732067a3faffca502e7e7c105d
        `
    );
    res.json(adzuna.data)
});
module.exports = router;