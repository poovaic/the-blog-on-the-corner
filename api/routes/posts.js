
const router =require("express").Router();

const { MulterError } = require("multer");
const Post = require("../models/post");

 //CREATE POST
    router.post("/",async(req,res)=>{
        const newPost = new Post(req.body);
        try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        }catch(err){
            res.status(500).json(err);

        }
    });


//UPDATE POST
router.put("/:id",async(req,res)=>{
    try{
        const post = Post.findById(req.params.id);
        if(post.username===req.body.username){
        try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id )
        }catch(err){

        }
    }else{
        res.status(401).json("You can update only your post!")
    }
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router;