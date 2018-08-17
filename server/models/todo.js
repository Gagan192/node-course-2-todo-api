var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true ,// Validator i.e The value Must exist otherwise it fails
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    defaul: false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports={
  Todo
};

//Steps On how to call the model and save the data in Database
// // var newTodo = new Todo({
// //   text:"Cook dinner"
// // });
// //
// // newTodo.save().then((doc)=>{
// //   console.log('Saved todo',doc);
// // }, (e)=>{
// //   console.log('Unable to save The Todo');
// // });
//
// var otherTodo = new Todo({
//   text:'    Feed the cat_space    ',
//   completed:true,
//   completedAt:123
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// }, (e)=>{
//   console.log('Unable to save',e);
// });
