const express=require("express");
const router=express.Router();
const Product=require("../models/product.model")


router.get("",async(req,res)=>{
    try{
       const products= await Product.find().lean().exec()
        return res.status(200).send(products)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        return res.status(201).send(product); 

    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const products= await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(products)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.put("/:id",async(req,res)=>{
    try{
        const products= await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send("deleted")
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }

    });

//  router.put("/:id",async(req,res)=>{
//         try{
//             const products= await Product.findByIdAndUpdate(req.params.id).lean().exec()
//             return res.status(200).send("updated")
//         }
//         catch(err){
//             return res.status(500).send({message:err.message});
//         }
    
//         });
module.exports=router;