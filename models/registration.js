const pool = require('../config/dbconnection')
exports.insertStudents = async (data) => {
 try {
  const query = "INSERT INTO details (first_name,second_name,email,password) VALUES (?,?,?,?);";
  const result = await pool.query(query, [data.first_name, data.second_name, data.email, data.password])
  return result[0]
 } catch (error) {
  throw {
   message: error.message
  }
 }
}

exports.getStudents = async () => {
 try {
  const query = "SELECT * FROM details;";
  const result = await pool.query(query)
  return result[0]
 } catch (error) {
  throw {
   message: error.message
  }
 }
}

exports.getAstudent = async (id) => {
 try {
  const query = "SELECT * FROM details WHERE (?=student_id);";
  const result = await pool.query(query, [id])
  return result[0]
 } catch (error) {
  throw {
   message: error.message
  }
 }
}