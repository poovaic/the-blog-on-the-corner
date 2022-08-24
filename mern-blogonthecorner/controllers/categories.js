const router =require("express").Router();
const Category = require("../models/Category");


//CREATE
const createCategory = async (req, res) =>{
    const newCategory = new Category(req.body);
    try{
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    
    }catch(err){
    res.status(500).json(err)
    }
    };

//GET
const getAllCategories = async (req, res) =>{
try{
    const categories = await Category.find();
    res.status(200).json(categories)
}
catch(err){
    res.status(500).json(err);
}
}

module.exports = {
   createCategory,
   getAllCategories
    
}
