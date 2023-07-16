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
       var document = [
        {
            movie:'som movie',
            starcast: ['abc','bcd','cde'],
            ticket: 199,
        },
        {
            place: "the easylearn academy",
            city : 'bhavnagar',
            pincode : 364001,
        }
    ];
        db.collection('books').insertMany(document,function(error,result){
            if(error)
            {
                console.log('document can not be inserted');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('documents inserted successfully');
                // db.close();
            }
        });
    }
    
});