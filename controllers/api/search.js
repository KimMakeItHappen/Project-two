const router = require('express').Router();
const axios = require('axios').default;
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

router.get ('/', async (req, res) => {
    try{
    const adzuna = await axios.get (
        `https://api.adzuna.com/v1/api/jobs/us/search/1?${APP_ID}&${APP_KEY}&results_per_page=10&what=web%20development&where=pittsburgh`
    );
    res.json(adzuna.data)
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }  
});
module.exports = router;