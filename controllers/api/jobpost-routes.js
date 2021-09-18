const router = require('express').Router();
const { Jobposting, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

const axios = require('axios')
const config = require('./config')

router.get('/', async (req, res,) => {
    console.log('======================');
    try {
        const res = await axios.get('https://api.adzuna.com/v1/api/jobs');
        res.json(data);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
    }
});

module.exports = router;