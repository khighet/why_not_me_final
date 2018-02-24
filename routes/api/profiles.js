const router = require("express").Router();
const userController = require("../../controller/userController.js");


console.log(" from routes/api/articles.js " );

router.use(function(req,res,next){

  console.log(req.method, req.url)
  next();
})
// Matches with "/api/profiles"
router.route("/")
  .post(userController.createProfile);
  // .post(articleController.create);

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
