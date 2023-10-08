const path = require("path");
const multer = require("koa-multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/goods/"); //存储路径
  },
  filename: (req, file, cb) => { //文件重命名
    cb(null, Date.now() + path.extname(file.originalname));
  },
}); 

const upload = multer({
  storage,
});

const uploadGoods = upload.array("file");

module.exports = {
  uploadGoods,
};
