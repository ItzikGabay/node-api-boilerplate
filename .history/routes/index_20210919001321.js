const express = require('express');
const app = express();
const router = require('express').Router({ mergeParams: true });

router.router('/') (req , res)=>{
    // router code here
   res.send('hello')
})


module.exports  = router

module.exports = router;