const express = require("express");
const router = express.Router();
const {
  registerUser,
  login,
  logout,
  getUserProfile,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");


router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protect, getUserProfile);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
