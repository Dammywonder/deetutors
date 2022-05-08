import mongoose from 'mongoose'
import { boolean } from 'webidl-conversions'

const gigSchema=mongoose.Schema({
     user:{
        type:mongoose.Schema.Types.ObjectID,
        required:true,
        ref:'User',
    },
    title:{
        type:String,
            required:true,
    },
    categoryone:{
        type:String,
        required:true,
    },
    categorytwo:{
        type:String,
        required:true,
    },
    servicetype:{
        type:String,
        required:true,

    },
    matadata:{
        type:String,
        required:true,
    },
    searchtag:[{
        type:String,
        required:true,
    }],
    pkgname:[{
        name:{type:String,
        required:true},
    }],
    pkgdescription:[{
        name:{type:String,
        required:true},
    }],
    deliverytime:[{
        days:{type:string,
        required:true},
    }],
    numofpages:[{
        pagesnum:{type:String,
        required:true},
    }],
    numofproducts:[{
        productsnum:{type:String,
        required:true},
    }],
    customization:[{
        name:{type:Boolean,
        required:true},
    }],
    responsivedesign:[{
        name:{type:Boolean,
        required:true},
    }],
    numofproducts:[{
        productsnum:{type:String,
        required:true},
    }],
    contentupload:[{
        name:{type:Boolean,required:true},
    }],
    revisioms:[{
        name:{type:string,
        required:true},
    }],
    price:[{
        name:{type:Number,
        required:true},
    }],
    image:{
        type:String,
        required:true
    }


    }) 
const Gig=mongoose.model('Gig',gigSchema)
export default Gig