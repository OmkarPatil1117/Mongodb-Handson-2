const {
  insertDb,
  findDb,
  updateDb,
  deletedb,
} = require("../database/connection");

const studenEnrollment = async (req, res) => {
  const studentData = req.body;

  try {
    const result = await insertDb(studentData);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const findStudent = async (req, res) => {
  const studentData = req.query;

  try {
    const result = await findDb(studentData);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const updateStudentData = async (req, res) => {
  const updateData = req.body;
  const filter = updateData.filter;
  const value = { $set: updateData.value };
  try {
    const result = await updateDb(filter, value);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteStudentData = async (req, res) => {
  const deleteCondition = req.query;
  try {
    const result = await deletedb(deleteCondition);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};
module.exports = {
  studenEnrollment,
  findStudent,
  updateStudentData,
  deleteStudentData,
};
