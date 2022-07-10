const mongoose = require('mongoose')

const formMessage = new mongoose.Schema({
        question_1:{
            type:String,
            required:true,
        },
        question_2:{
            type:Array,
            required:true,
        },
        question_3:{
            type:String,
            required:true,
        },
        question_4:{
            type:Array,
            required:true,
        },
        question_5:{
            type:String,
            required:true,
        },
        question_6:{
            type:Array,
            required:true,
        },
        question_7:{
            type:String,
            required:true,
        },
        question_8:{
            type:String,
            required:true,
        },
        question_9:{
            type:String,
            required:true,
        },
        question_10:{
            type:String,
            required:true,
        },
       
    },
    {
        timestamps:true
    }
    )


module.exports = mongoose.model('FormMessage', formMessage)