const path = require("path");
const multer = require("koa-multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/avatar/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

const saveUploadAvatar = upload.single("avatar");

module.exports = {
  saveUploadAvatar,
};
