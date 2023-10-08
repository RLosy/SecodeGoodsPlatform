const Router = require("koa-router");
const { verifyToken } = require("../middleware/verifyToken");
const { saveUploadAvatar } = require("../middleware/saveUserAvatar");
const {
  updateAvatar,
  upDateNickName,
  upDatePassword,
} = require("../controller/userUpdate");

const userUpdateRouter = new Router({ prefix: "/update" });

userUpdateRouter.post("/avatar", verifyToken, saveUploadAvatar, updateAvatar);

userUpdateRouter.patch("/password", verifyToken, upDatePassword);

userUpdateRouter.patch("/nickname", verifyToken, upDateNickName);

module.exports = userUpdateRouter;
