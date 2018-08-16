//const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db) => {
  if(err){
   return console.log('Unable To Connect TO MangoDB Server');
 }
  console.log("Connected To MongoDB server");

  //  //  _id:'5b75567b53c7f106d02c2cb3'  This will Not Work Because Id is not a string instead
  // db.collection('Todos').find({
  //     _id:new ObjectID('5b755ece7ef766319e3bb752')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined ,2));
  // },(err)=>{
  //     console.log("UnableTO Fetch To Do");
  // });

  db.collection('Users').find({name:'Gagan'}).count().then((count)=>{
    console.log(`Todos count: ${count}`);
  //  console.log(JSON.stringify(docs,undefined ,2));
  },(err)=>{
      console.log("UnableTO Fetch To Do");
  });


  //db.close();
});
