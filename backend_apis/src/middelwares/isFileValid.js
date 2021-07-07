const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const isFileValid = async (req, res, next) => {
  try {
    if (req.files) {
      let isFile = req.files.photo;
      let fileMimeType = isFile.mimetype.split("/")[1];
      if (fileMimeType == "jpg" || fileMimeType == "png") {
        await cloudinary.uploader.upload(isFile.tempFilePath, (err, res) => {
          req.photoUrl = res;
        });
        next();
      }
    } else {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        errors: [
          {
            value: "photo",
            msg: "File extension must be PNG or JPG",
            param: "file",
            location: "file",
          },
        ],
        message: "Not a valid file extension",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default isFileValid;
