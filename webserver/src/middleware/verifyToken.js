const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../app/constants");

const verifyToken = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  
  try {
    // 用户可能不携带token
    const token = authorization.replace("Bearer ", "");
    // 验证失败抛出异常
    const result = jwt.verify(token, SECRET_KEY);
    // 验证通过在ctx上保存token信息，后面中间件上使用
    ctx.userToken = result;

    await next();
  } catch (error) {
    // console.log(error.message,'token错误');
    ctx.body = false;  // token 无效或者没有token 返回fale
  }
 
};

module.exports = {
  verifyToken,
};
