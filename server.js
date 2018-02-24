const express   = require("express");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const routes    = require("./routes");
const session   = require("express-session");
const MongoStore= require("connect-mongo")(session);

const app = express();



const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/why-not-me",
  {
    useMongoClient: true
  }
);
// building connectgiton for session storage...
var db = mongoose.connection;

// Add routes, both API and view
// app.set('trust proxy', 1)
// app.use(session({
//   secret: 'diveBoard catfish tango',
//   resave: false,
//   saveUninitialized: true,


//   cookie:{
//     expires: 600000,
//   },
//   store: new MongoStore({mongooseConnection: db})
// }));// end session

////////////////////////
app.set('trust proxy', 1);
app.use(session({
  resave: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 72,
  },
  proxy: true,
  saveUninitialized: true,
  secret: 'diveBoard catfish tango',
  // store: new MongoStore({
  //   url: DB_CONNECTION,
  //   autoReconnect: true,
  //   ttl: 4 * 60 * 60,
  // }),
  store: new MongoStore({mongooseConnection: db}),
}));
////////////////////////


app.get("/sessionstatus",  (req, res) =>{
    console.log(req.session)
    res.json(req.session)
})
app.use(routes);
// setting up a session

// // setting the session values
// app.use(function printSession(req,res,next){
//   req.session.userId=id,
//   req.session.save();
//   console.log('req sesssoin', req.session);
//   return next();
// })
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
