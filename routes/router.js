const express = require('express')
const imageController = require('../controller/imageController')
const multerInstance = require('../MulterConfig/multerMiddleware')

const router = new express.Router()

// to upload image
router.post('/upload-image', multerInstance.single("photo"), imageController.uploadimage)
// get image
router.get('/get-image',imageController.getImage)

module.exports = router