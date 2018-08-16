//const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
   return console.log('Unable To Connect TO MangoDB Server');
 }
  console.log("Connected To MongoDB server");

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b7575f27ef766319e3bc1ee')
// }, {
//   $set: {
//     completed:true
//   }
// },{
//   returnOriginal: false
// }).then((result)=>{
//   console.log(result);
// });


db.collection('Users').findOneAndUpdate({
  name: "Jen"
}, {
  $set: {
    name:"Gagan"
  },
  $inc:{
    age:1
  }
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});


  //db.close();
});
