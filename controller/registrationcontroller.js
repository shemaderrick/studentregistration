const Students = require('../models/registration');
class RegistrationController {

 insertStudent = async (req, res) => {
  try {
   const result = await Students.insertStudents(req.body)
   return res.status(200).json({
    data: result
   })

  } catch (error) {
   return res.status(500).json({
    error: error
   })

  }
 }
 getStudent = async (req, res) => {
  try {
   const result = await Students.getStudents()
   return res.status(200).json({
    data: result
   })

  } catch (error) {
   return res.status(500).json({
    error: error
   })

  }
 }

 getStudentById = async (req, res) => {
  try {
   const result = await Students.getAstudent(req.body.id)
   return res.status(200).json({
    data: result
   })

  } catch (error) {
   return res.status(500).json({
    error: error
   })

  }
 }




}
module.exports = RegistrationController