var express = require('express')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
const  url = "mongodb://0.0.0.0:27017"; // Change this URI if your MongoDB instance is running on a different address
var ObjectID = mongodb.ObjectID; // Corrected import statement
// var url = `mongodb://0.0.0.0/{DATABASENAME}`;
const DATABASENAME = 'reactnode'; //read only variable
var db;
MongoClient.connect(url, function (error, database) {
    if (error != null) //if there is error
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else {
        //store database reference to variable
        db = database.db(DATABASENAME);
        console.log('connection established....');
    }
});

//insert book
//data=[{"name":"Book 1","author":"Author 1","price":25.99,"isbn":"978-1234567890"},{"name":"Book 2","author":"Author 2","price":19.95,"isbn":"978-0987654321"}]
app.post("/book", function (request, response) {
    let books = JSON.parse(request.body.data);
    db.collection('book').insertMany(books, function (error, result) {
        if (error)
            response.json({ 'error': error.message });
        else
            response.json({ 'error': 'no', 'message': 'books inserted' })
    });
    // response.send(books);
});

//update book
app.put("/book", function (request, response) {
    var condition = query = {
        price: {
            $lt: 15,
        },
    };
    var newvalue = { $set: { price: 99 } };
    db.collection('book').updateMany(condition, newvalue, function (error, result) {
        if (error) {
            response.json({ 'error': error.message });
        }
        else {
            response.json({ 'error': 'no', 'message': 'books updated' })
        }
    });
});

//delete book
app.delete("/book", function (request, response) {
    var isbnno = request.body.isbn;
    var condition = { isbn: isbnno };
    db.collection('book').deleteMany(condition, function (error, result) {
        if (error) {
            response.json({ 'error': error.message });
        }
        else {
            response.json({ 'error': 'no', 'message': 'books deleted' })
        }
    });
});

//fetch all books
app.get("/book", function (request, response) {
    var condition = {}; //all documents
    var projection = {}; //all fields
    db.collection('book').find(condition, projection).toArray(function (error, result) {
        if (error != null)
            response.json({ 'error': error.message });
        else
            response.send(result);
    });
});

//fetch single books
app.get("/book/:id", function (request, response) {
    var condition = {_id : new ObjectID(request.params.id)}
    var projection = {}; //all fields
    db.collection('book').find(condition, projection).toArray(function (error, result) {
        if (error != null)
            response.json({ 'error': error.message });
        else
            response.send(result);
    });
});


app.listen(5000);
console.log('ready to accept request');