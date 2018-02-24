const router = require("express").Router();

const userController = require("../../controller/userController.js");


console.log(" from routes/api/articles.js " );
// Matches with "/api/matches"
// router.use(function(req,res,next){
//   console.log(" from api/matches - 1:" + req.method + "~" + req.url + "~ " + JSON.stringify(req.session))
//   next();
// })

router.route("/")
  .get(userController.getMatches);
router.route("/")
  .post(userController.createOverture);

module.exports = router;
