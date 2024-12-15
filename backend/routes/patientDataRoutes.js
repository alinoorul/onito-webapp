const express = require('express')
const router = express.Router()
const { getPatientData, createPatientData, updatePatientData, deletePatientData } = require('../controllers/patientDataController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getPatientData).post(protect, createPatientData)
router.route('/:id').put(protect, updatePatientData).delete(protect, deletePatientData)

module.exports = router