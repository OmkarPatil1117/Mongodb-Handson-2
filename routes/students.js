const express = require("express");
const router = express.Router();
const {
  studenEnrollment,
  findStudent,
  updateStudentData,
  deleteStudentData,
} = require("../controllers/students");

router.post("/student", studenEnrollment);
router.get("/getstudentData", findStudent);
router.put("/updateStudentData", updateStudentData);
router.delete("/deleteStudentData", deleteStudentData);

module.exports = router;
