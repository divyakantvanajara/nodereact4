var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/reactnode";
const DATABASENAME = 'reactnode'; //read only variable
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
       db.createCollection('books',function(error,result){
            if(error!=null)
            {
                console.log('error in creating collection');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('collection created successfully....');
                database.close();
            }
       });
    }
    
});