const { createGoods, checkIsGroup } = require("../service/uploadService");
const { STATIC_GOODS_PATH } = require("../app/constants");

class uploadController {
  async dealPicture(ctx, next) {
    const [goods] = ctx.req.files;
    const { filename, mimetype } = goods;
    const { description, checkList, category } = ctx.req.body;
    const { id: uer_id } = ctx.userToken;
    const url = `${STATIC_GOODS_PATH}${filename}`;

    const result = await createGoods(
      uer_id,
      url,
      description,
      checkList,
      mimetype,
      category
    );

    ctx.body = "上传成功";
    return result;


  }
}

module.exports = new uploadController();
