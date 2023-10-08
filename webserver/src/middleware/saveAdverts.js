const path = require("path");
const multer = require("koa-multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/adverts/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

const saveUploadAdvert = upload.single("advert");

module.exports = {
  saveUploadAdvert,
};
