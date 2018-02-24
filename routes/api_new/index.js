const router = require("express").Router();
const matchRoutes = require("./matches");
// const profileRoutes = require("./profiles");
// const logonRoutes = require("./logon");

console.log("got to routes/api/index.js")
// Book routes
router.use("/match", matchRoutes);
// router.use("/profiles", profileRoutes);
// router.use("/logon", logonRoutes);

module.exports = router;
