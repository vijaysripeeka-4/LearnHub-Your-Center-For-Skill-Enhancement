const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllCoursesController,
  deleteCourseController,
  deleteUserController,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/getallusers", authMiddleware, getAllUsersController);

router.get("/getallcourses", authMiddleware, getAllCoursesController);

router.delete('/deletecourse/:courseid', authMiddleware, deleteCourseController);

router.delete('/deleteuser/:userid', authMiddleware, deleteUserController); // ✅ Fixed param name

module.exports = router;
