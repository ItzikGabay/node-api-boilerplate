// Imports
// -----
const express = require('express');
const { route } = require('express/lib/application');
const app = express();
const router = require('express').Router({ mergeParams: true });


/**
 * GET request - /
 */
router.get('/', (req, res) => {
    res.send('hello');
});


// GET - :/
// ------


module.exports = router;