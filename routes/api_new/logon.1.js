const router = require("express").Router();

const userController = require("../../controller/userController.js");


console.log(" from routes/api/articles.js " );
// Matches with "/api/articles"

// router.use(session({
//   name: 'name',
//   secret: 'diveBoard catfish tango',
//   resave: false,
//   saveUninitialized: true,
//   // cookie:{
//   //   expires: 600000
//   // }
//   //  store: new MongoStore({mongooseConnection: db})
// }));// end session

router.use(function(req,res,next){

  console.log("1:" + req.method + "~" + req.url + "~ " + JSON.stringify(req.session))
  next();
})
// // checks that the sessoin and session id exist.
// function requiresLogin(req,res,next){
//   if (req.session && req.session.userId){
//     return next();
//   } else {
//     var err=new Error("You must be logged in to view this page");
//     err.status = 401;
//     return next(err)
//   }

// }// end fcn

router.route("/")
  .post(userController.validateId);
// router.route("/")
//   .post(userController.validateId,function(req,res){
//     console.log("from routers/api/logon " + req.session.name)
//     req.session.name = req.body.name;
//   });
// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
