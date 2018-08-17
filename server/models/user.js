var mongoose = require('mongoose');

var Users = mongoose.model('user',{
  name:{
    type:String,
    minlength:1,
    trim:true
  },
  email:{
    type:String,
    required:true ,// Validator i.e The value Must exist otherwise it fails
    minlength:1,
    trim:true
  },
});

module.exports={
  Users
};

// Steps on How to call the model and save the data
//
// var AddUser = new Users({
//   name:"Gagandeep Goyal",
//   email:"gagangoyal192@gmail.com"
// });
//
// AddUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable to save',e);
// });
//
