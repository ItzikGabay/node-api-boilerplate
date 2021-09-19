const express = require('express');
const app = express();
// const router = express.Router({ mergeParams: true });

const router = require('express').Router()

router.get('/' , (req , res)=>{
    // router code here
   res.send('hello')
})


router.get('/another-route' , (req , res)=>{
    // router code here
})

module.exports  = router

module.exports = router;