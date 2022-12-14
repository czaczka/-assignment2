const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;
const PORT = 3000;
const express = require('express');
const app = express();
const sockets = require('./socket.js');

const http = require('http').Server(app);
const server = require('./listen.js');
const cors = require('cors');
const bodyParser = require('body-parser');

//required for sockets and prevent cross origin error
const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    }
});




app.use(bodyParser.json());

app.use(cors());

const url = 'mongodb://localhost:27017';

//name of database
const dbName = 'mydb2';

//routes for CRUD methods
MongoClient.connect(url, {useNewUrlParser:true}, function(err,client) {
    console.log("connect to server");
    const db = client.db(dbName);
    require('./add.js')(db,app);
    require('./getList')(db,app);
    require('./delete')(db,app,ObjectID);
    require('./validid')(db,app);
    require('./validUser')(db,app);
    require('./update.js')(db,app,ObjectID);
    require('./getItem')(db,app);

    server.listen(http,PORT);
    
});
//initiates sockets connection
sockets.connect(io, PORT);