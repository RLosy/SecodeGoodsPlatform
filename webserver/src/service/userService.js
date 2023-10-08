const connection = require("../app/database");

class userService {
  // 注册用户
  async register(user) {
    const { telNumber, account, password } = user;
    const checkStatement = `SELECT id FROM user WHERE account=? OR telNumber=?;`;
    const statement = `INSERT INTO user (telNumber, account, password) VALUES (?, ?, ?);`;

    const checkResult = await connection.execute(checkStatement, [
      account,
      telNumber,
    ]);

    if (checkResult[0].length !== 0) {
      return {
        stataCode: 409,
        data: checkResult[0],
      };
    }

    const result = await connection.execute(statement, [
      telNumber,
      account,
      password,
    ]);
    return result[0];
  }

  async login(user) {
    const { account, password } = user;
    const statement = `SELECT * FROM user WHERE account=? AND password=?;`;
    const result = await connection.execute(statement, [account, password]);
    // 如果账号密码正确,怎返回的为一个数组，数组内唯一元素为一个对象，对象为用户基本信息

    return result[0];
  }

  //用户登录状态则返回用户个人信息
  async returnuUerMsg(userId) {
    const statement = `SELECT id,account,nickName,avatar FROM user WHERE id=?;`;
    const results = await connection.execute(statement, [userId]);
    return results[0];
  }

  // 修改用户头像
  async changeUserAvatar(userId, newAvatarUrl) {
    const statement = `update user set avatar=? where id =?;`;
    const results = await connection.execute(statement, [newAvatarUrl, userId]);
    return results[0];
  }

  // 修改用户昵称
  async changeUserNickName(userId, newNickName) {
    const statement = `update user set nickName=? where id =?;`;
    const results = await connection.execute(statement, [newNickName, userId]);
    return results[0];
  }

  // 修改用户密码
  async changeUserPassword(userId, newPassword) {
    const statement = `update user set password=? where id =?;`;
    const results = await connection.execute(statement, [newPassword, userId]);
    return results[0];
  }

  // 返回用户发布的商品
  async getGoods(userId) {
    const statement = `SELECT url,description,deal_way,createAt FROM products WHERE user_id=?;`;
    const results = await connection.execute(statement, [userId]);
    return results[0];
  }

  // 检查商品是否已经存在购物车
  async checkIsInshopCar(userId, productsId) {
    const statement = `SELECT id FROM shopcar WHERE add_user_id=? AND products_id=?;`;
    const results = await connection.execute(statement, [userId, productsId]);
    return results[0];
  }

  // 添加商品进购物车
  async addToShopCar(
    addUserId,
    ownerId,
    url,
    description,
    dealWay,
    productsId
  ) {
    const statement = `INSERT INTO shopcar 
                      (add_user_id, owner_id, description,deal_way,url,products_id) VALUES
                       (?, ?, ?, ?, ?, ?);`;
    const results = await connection.execute(statement, [
      addUserId,
      ownerId,
      description,
      dealWay,
      url,
      productsId,
    ]);
    return results[0];
  }

  // 删除购物车商品
  async deleShopCarGoods(goodsId) {
    const statement = `DELETE FROM shopcar WHERE id=?;`;
    const results = await connection.execute(statement, [goodsId]);
    return results[0];
  }

  // 返回购物车商品
  async getGoodsShopCar(userId) {
    const statement = `SELECT 
    shopcar.id id, description, url, deal_way,
    JSON_OBJECT('nickName', user.nickName,'avatar_url', user.avatar)
     user FROM shopcar LEFT JOIN user ON
    owner_id=user.id WHERE add_user_id=?;`;
    const results = await connection.execute(statement, [userId]);
    return results[0];
  }

  // 保存留言到数据库
  async storeMessage(sendUserId, receiveUserId, content, goodsUrl) {
    const statement = `INSERT INTO message 
    (send_user_id, receive_user_id, content, goods_url) VALUES
     (?, ?, ?, ?);`;
    const results = await connection.execute(statement, [
      sendUserId,
      receiveUserId, 
      content,
      goodsUrl
    ]);

    return results[0];
  }

  async returnTalkMessages(sendUserId, receiveUserId) {
    const statement = `SELECT * FROM message WHERE send_user_id=? AND receive_user_id=? OR
                         send_user_id=? AND receive_user_id=? ORDER BY(createAt);`;
    const results = await connection.execute(statement, [
      sendUserId,
      receiveUserId,
      receiveUserId,
      sendUserId,
    ]);
    return results[0];
  }

  async returnTalkUsers(userId) {
    // 我发起的留言
    const statement1 = `SELECT send_user_id, receive_user_id, goods_url,
    JSON_OBJECT('nickName', user.nickName,'avatar_url', user.avatar) user FROM message
    LEFT JOIN user ON receive_user_id=user.id WHERE send_user_id=? GROUP BY receive_user_id;`;
    // 我收到的留言
    const statement2 = `SELECT send_user_id, receive_user_id, goods_url,
    JSON_OBJECT('nickName', user.nickName,'avatar_url', user.avatar) user FROM message
    LEFT JOIN user ON send_user_id=user.id WHERE receive_user_id=? GROUP BY send_user_id;`;

    const results1 = await connection.execute(statement1, [userId]);
    const results2 = await connection.execute(statement2, [userId]);

    const results = {
      send: results1[0],
      receive: results2[0],
    };
    return results;
  }
}   

module.exports = new userService();
