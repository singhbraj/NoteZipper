const express = require('express');
const router = express.Router();
const {registerUser,authUser} = require('../controllers/useControllers')


router.route("/").post(registerUser);
router.route("/login").post(authUser);
// router.post("/login",authUser);

module.exports = router;