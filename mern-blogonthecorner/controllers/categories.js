const router =require("express").Router();
const Category = require("../models/Category");


//CREATE
const createCategory = async (req, res) =>{
    const newCategory = new Category(req.body);
    try{
        const savedCategory = await newCategory.save();
        return res.status(200).json(savedCategory);
    
    }catch(err){
    return res.status(500).send(err)
    }
    };

//GET
const getAllCategories = async (req, res) =>{
try{
    const categories = await Category.find();
    return res.status(200).json(categories)
}
catch(err){
    return res.status(500).send(err);
}
}

module.exports = {
   createCategory,
   getAllCategories
    
}
