const mongoose = require("mongoose");


const productSchema= new mongoose.Schema({
    name:{type:String,required:false},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    count:{type:String,required:true},
    user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user",
  required:true

    }
   
},{
    timestamps:true,
    versionKey:false
});

module.exports=mongoose.model("product",productSchema);