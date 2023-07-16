var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
const DATABASENAME = 'reactnode'; //read only variable
var url = "mongodb://0.0.0.0:27017";
// var url = `mongodb://0.0.0.0/{DATABASENAME}`;
MongoClient.connect(url,function(error,database){
    if(error!=null) //if there is error
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else 
    {
       //store database reference to variable
       var db = database.db(DATABASENAME);
       var condition = {name : 'hyperlearning'};
       var newvalue = {$set :{name : 'how to learn fast ',price:2599}};
        db.collection('books').updateMany(condition,newvalue,function(error,result){
            if(error)
            {
                console.log('document can not be updated');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('documents updated successfully');
            }
        });
    }
    
});