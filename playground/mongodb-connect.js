//const MongoClient =require('mongodb').MongoClient;

const {MongoClient, ObjectID} =require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


var user = {name:'Gagan' , age:22};
//using Object Destructering In ES6
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
   return console.log('Unable To Connect TO MangoDB Server');
 }
  console.log("Connected To MongoDB server");

  // db.collection('Todos').insertOne({
  //   text :'Something else to do',
  //   completed:false
  // }, (err,result) =>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops , undefined ,2));
  //   });


  //Insert New doc into Users (name,age,location)
  // db.collection('Users').insertOne({
  //   name :'Gagan',
  //   age: 21,
  //   location: "Barnala"
  // }, (err,result) =>{
  //   if(err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   });


  db.close();
});
