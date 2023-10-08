const {
  getGoods,
  addToShopCar,
  checkIsInshopCar,
  getGoodsShopCar,
  deleShopCarGoods,
  storeMessage,
  returnTalkMessages,
  returnTalkUsers,
} = require("../service/userService");

class userController {
  // 获取用户发布过的商品
  async getPublishGoods(ctx, next) {
    const { id } = ctx.request.params;
    const results = await getGoods(id);

    ctx.body = results;
  }

  // 要加入购物车的商品是否存在
  async productIsExist(ctx, next) {
    const { userid, productsid } = ctx.request.params;
    const result = await checkIsInshopCar(userid, productsid);
    if (result.length) {
      ctx.body = true;
    } else {
      ctx.body = false;
    }
  }

  // 添加购物车
  async addShopCar(ctx, next) {
    const { currentUserId, ownerId, description, url, dealWay, productsId } =
      ctx.request.body;

    const results = await addToShopCar(
      currentUserId,
      ownerId,
      url,
      description,
      dealWay,
      productsId
    );
    ctx.body = results;
  }

  // 删除购物车商品
  async deleteShopCar(ctx, next) {
    const { goodsid } = ctx.request.params;
    const result = await deleShopCarGoods(goodsid);
    ctx.body = result;
  }

  // 返回购物车商品
  async getShopCarGoods(ctx, next) {
    const { userid } = ctx.request.params;
    const results = await getGoodsShopCar(userid);
    ctx.body = results;
  }

  async storeUserMessage(ctx, next) {
    const { sendUserId, receiveUserId, content, goodsUrl } = ctx.request.body;
    const result = await storeMessage(
      sendUserId,
      receiveUserId,
      content,
      goodsUrl
    );
    ctx.body = {
      result,
      stateCode: 200,
    };
  }

  async getTalkMessages(ctx, next) {
    const { sendUserId, receiveUserId } = ctx.request.params;
    const result = await returnTalkMessages(sendUserId, receiveUserId);
    ctx.body = {
      stateCode: 200,
      data: result,
    };
  }

  async getTalkUsers(ctx, next) {
    const { userId } = ctx.request.params;
    const result = await returnTalkUsers(userId);

    ctx.body = {
      stateCode: 200,
      ...result,
    };
  }
}

module.exports = new userController();
