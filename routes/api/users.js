const express = require('express');

const router = express.Router();
const users = require ('./Users')

router.get('/', (req,res) => {
    res.send(users);
});

module.exports = router ;