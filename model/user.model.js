const mongoose=require('mongoose');
const bcrypt=-require('bcrypt');
const jwt=require('jsonwebtoken')



const userSchema= new mongoose.Schema({
    name: {
     Fullname:{
        type:String,
        required:true,
        minlength:[3,'First name must be atlesast 3 characters long'],
     },
     Lastname:{
        type:String,
        required:true,
        minlength:[3,'Last name must be atlesast 3 characters long'],
     },
     Email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be atlesast 5 characters long'],
     },
     password:{
        type:String,
        required:true,
        select:false,// user-> find then pass-> field nahi jayega
     },
     // TO SHARE LIVE LOCATION OF DRIVER WITH USER
     SocketId:{
        type:String,
     }
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.comparePassword=function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword=function(password){
    return bcrypt.hash(password,10);
}
const User=mongoose.model('user',userSchema);
module.exports=User;