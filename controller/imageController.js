const images = require('../models/imageSchema')

// upload image
exports.uploadimage = async (req, res) => {
    const photo = req.file.filename
    console.log(photo);

    images.create({ photo }).then((data) => {
        console.log("Upload Success");
        console.log(data);
        res.send(data)
    })
        .catch((err) => {
            console.log(err);
        })
}

// get image
exports.getImage = async (req, res) => {
    const getPhotos = await images.find().sort({ createdAt: "descending" })
    res.send(getPhotos)
}

