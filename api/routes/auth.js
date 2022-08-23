//creating router 

const router =require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt'); //importing hashing package

//REGISTER NEW USER
router.post("/register",async(req,res)=>{
    try{ 
        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword,
         });

         const user = await newUser.save();
         res.status(200).json(user)
    }catch(err){
        res.status(500).json(err);
    }
});


//LOGIN EXISTING USER
router.post("/login",async (req,res)=>{
    try{
        const user= await User.findOne({username:req.body.username,})
        !user && res.status(400).json("Wrong username")

        const validate = await bcrypt.compare(req.body.password,user.password)
        !validate && res.status(400).json("Wrong password")
        
        //sending others except password
        const {password, ...others} =user_doc;

        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;