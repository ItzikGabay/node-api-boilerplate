// Imports
// -----
const express = require('express');
const { route } = require('express/lib/application');
const app = express();
const router = require('express').Router({ mergeParams: true });

// TODOS:
// Create API Response

/**
 * GET /index
 * Flow:
 */
router.get('/', (req, res) => {
    res.send('hello');
});

/**
 * POST /index
 * Flow:
 */
router.post('/', (req, res) => {
    res.send(req.body);
});



module.exports = router;