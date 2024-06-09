const router = require("express").Router();
const fetchUser = require("../middlewares/fetchUser");
const {
  register,
  login,
  editProfile,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.put("/editprofile", fetchUser, editProfile);
module.exports = router;
