import mongoose, { Schema } from "mongoose";

const employementSchema=new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    companyName:{
        type:String
    },
    designation:{
        type:String
    },
    employement:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    level:{
        type:String
    }
    },
    {
    timestamps: true,
     }
    )

const EmployementModel = new mongoose.model('Employement',employementSchema);
export default EmployementModel