const router = require("express").Router();
const articleRoutes = require("./articles");
const profileRoutes = require("./profiles");
const logonRoutes = require("./logon");
const matchesRoutes = require("./matches");

console.log("got to routes/api/index.js")
// Book routes
router.use("/articles", articleRoutes);
router.use("/profiles", profileRoutes);
router.use("/logon", logonRoutes);
router.use("/matches", matchesRoutes);

module.exports = router;
