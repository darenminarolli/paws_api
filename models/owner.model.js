const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose
const {PetSchema} = require('../models/pets.model.js');

const OwnerSchema = new Schema({

    name:{
        type:String,
        // required:true,
    },
    surname:{
        type:String,
        // required:true,
    },
    phone:{
        type: Number,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    },
    password:{
      type:String,
      // required:true,
    },
    ig:{
      type:String,  
    },
    fcb:{
        type:String,
    },
    pets:[PetSchema]
},{
    timestamps: true,
})

OwnerSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});


const Owner = mongoose.model('Owner', OwnerSchema);
module.exports = Owner;
