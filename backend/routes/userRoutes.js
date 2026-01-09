const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async(req,res)=>{
 const user = await User.create(req.body);
 res.json(user);
});

router.post('/login', async(req,res)=>{
 const user = await User.findOne({email:req.body.email});
 if(!user || !await bcrypt.compare(req.body.password,user.password))
  return res.status(401).json({});
 res.json({token:jwt.sign({id:user._id,isAdmin:user.isAdmin},'secret')});
});

module.exports = router;