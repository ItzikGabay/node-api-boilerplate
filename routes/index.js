// Global Imports
// -----
const router = require('express').Router({ mergeParams: true });

// Utils
// ---
const apiResponder = require('../utils/apiResponder');

// Controllers
// --------
const UserController = require('../controllers/users.controller');

/**
 * GET /index
 */
router.get('/', UserController.getUsersList);


// TODO...

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