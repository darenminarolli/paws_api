const mongoose =  require('mongoose');
const { Schema } = mongoose
 
const PetSchema = new Schema({
       name: {
        type: String,
      },
      gender:{
        type: String,
      },
      age:{
        type: Number,
        default: 0,
      },
      breed:{
        type: String,
      },
      location:{
        type: String,
      },
      desc:{
        type: String,
      },
      images:[
        {
            data: Buffer,
            contentType: String,
        }
      ]
  },{
     timestamps: true,
  }
)


module.exports = { PetSchema};
