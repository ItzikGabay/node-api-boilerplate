// Global Imports
// -----
const router = require('express').Router({ mergeParams: true });

// Utils
// ---
const apiResponder = require('../utils/apiResponder');
const verifyAuth = require("../middleware/auth/verifyToken");

// Controllers ->
// --------
const UserController = require('../controllers/users.controller');

// GET Request /index
router.get('/', verifyAuth, UserController.getUsersList);

// Auth
// ---

// POST Request /login
router.post('/login', UserController.loginUser);

// POST Request /register
router.post('/register', UserController.registerUser);

router.get('/profile', verifyAuth, UserController.userProfile);


// TODO...
/**
 * POST /index
 */
router.post('/', (req, res) => {
    apiResponder.successResponseWithData(res, '', req.body);
});

/**
 * 404 /*
 */
router.get('*', (req, res) => {
    apiResponder.errorResponseWithData(res, '404: not found');
});


module.exports = router;