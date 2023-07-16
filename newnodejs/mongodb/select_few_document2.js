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
        var condition = query = {
            price: {
              $lt:500,
            },
          };
        var fields_to_skip = {_id:0}; 
        db.collection('books').find(condition,{projection:fields_to_skip}).toArray(function(error,result){
            if(error!=null)
                console.log(error.errmsg);
            else 
                console.log(result);
        });
    }
    
});