// Imports
// -----
const express = require('express');
const { route } = require('express/lib/application');
const app = express();
const router = require('express').Router({ mergeParams: true });

const UserController = require('../controllers/users.controller');
const apiResponder = require('../utils/apiResponder');

/**
 * GET /index
 */
router.get('/', async (req, res) => {
    let result = await UserController.getUsersList();
    apiResponder.successResponseWithData(res, '', result);
});

/**
 * POST /index
 */
router.post('/', (req, res) => {
    apiResponder.successResponseWithData(res, '',req.body);
});

/**
 * 404 /*
 */
router.get('*', (req, res) => {
    apiResponder.errorResponseWithData(res, '404: not found');
});


module.exports = router;