const router = require('express').Router();
const axios = require('axios').default;
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

router.get ('/', async (req, res) => {
    try{
    const adzuna = await axios.get (
        // `https://api.adzuna.com/v1/api/jobs/us/search/1?${APP_ID}&${APP_KEY}&results_per_page=10&what=web%20development&where=pittsburgh`
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${AP}`

    );
    console.log(adzuna.data)
    // res.json(adzuna.data)
    res.render('homepage', { jobs: adzuna.data})
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }  
});
module.exports = router;