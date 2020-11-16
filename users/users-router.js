const router = require('express').Router();
const Users = require('./users-model.js');


router.get('/volunteers', (req, res) => {
    Users.findvolunteers()
        .then(volunteers =>{
            res.json(volunteers);
        })
        .catch(err => {
            res.status(500).json('failed to fetch volunteers');
        })
})


module.exports = router;