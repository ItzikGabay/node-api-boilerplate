const express = require('express');
const { route } = require('express/lib/application');
const app = express();
const router = require('express').Router({ mergeParams: true });

router.route('/').get(req, res => {
    res.send('hello!!!!')
});

module.exports  = router

module.exports = router;