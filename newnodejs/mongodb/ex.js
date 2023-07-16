var mongodb =require("mongodb");
var MongoClient=mongodb.MongoClient;

var url ="mongodb://0.0.0.0:27017/";
const DATABASENAME ="reactnode"
MongoClient.connect(url,function(error,database){

    if(error !=null)
    {
        console.log("error in connection");
        console.log(error.errmsg);
    }
    else
    {
      var db =database.db(DATABASENAME);
     var query ={name:'divyakant'}
      db.collection('student').deleteMany(query,function(error,result){

        if(error != null)
        {
            console.log("error in delete  document");
            console.log(error.errmsg);
        }
        else
        {
            console.log(" 1document delete successfully");
        }
      })
    }
  
})