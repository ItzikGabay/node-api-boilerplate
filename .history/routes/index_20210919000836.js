const express = require('express');
const app = express();
const router = express.Router({ mergeParams: true });

router.route('/')
   .get(req, res => {
      res.send('hello');
   });

module.exports = router;