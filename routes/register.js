const express = require('express')
const RegistrationController = require('../controller/registrationcontroller')
const Router = express.Router()
const Register = new RegistrationController();
Router.post('/', Register.insertStudent)
Router.get('/', Register.getStudent)
Router.post('/id', Register.getStudentById)

module.exports = Router