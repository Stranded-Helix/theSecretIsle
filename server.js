const express = require("express");
const mongoose = require("mongoose");
const { db } = require("./models/User.js");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/index.js")
const path = require('path')
const session = require('express-session');
const MongoStore = require('connect-mongo');

//Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/secretIsleGame",
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } 
);

// const store = new MongoStore({
//     MongoUrl: 'mongodb://localhost/secretIsleGame',
//     // databaseName:'secretIsleGame',
//     collection: 'mySessions'
//   });

  // store.on('error', function(error) {
  //     console.log(error);
  //   });
    

  //   app.use(session({
  //     secret: 'secret',
  //     cookie: {},
  //     store: store,
  //     resave: false,
  //     saveUninitialized: true
  //   }));

  
// const routes = require('./routes')

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
