const connection = require("../app/database");

class goodsService {
  async getUrlLists(ctx, next) {
    const statement = `SELECT 
       products.id id, url, description, deal_way,
       JSON_OBJECT('id', user.id, 'account', user.account,
       'nickName', user.nickName,'avatar_url', 		user.avatar) user
       FROM products LEFT JOIN user ON products.user_id=user.id;`;

    const results = await connection.execute(statement);
    return results;
  }

  async getGoodsCategory(category) {
    const statement = `SELECT 
    products.id id, url, description, deal_way,
    JSON_OBJECT('id', user.id, 'account', user.account,
    'nickName', user.nickName,'avatar_url', 		user.avatar) user
    FROM products LEFT JOIN user ON products.user_id=user.id WHERE category=?;`;
    const results = await connection.execute(statement, [category]);
    return results[0];
  }

  async returnSearchGoods(searchValue) {
    let state = "%";
    for (const item of searchValue) {
      state += item + "%";
    }

    const statement = `SELECT 
    products.id id, url, description, deal_way,
    JSON_OBJECT('id', user.id, 'account', user.account,
    'nickName', user.nickName,'avatar_url', 		user.avatar) user
    FROM products LEFT JOIN user ON products.user_id=user.id WHERE description LIKE ?;`;
    const results = await connection.execute(statement, [state]);
    return results[0];
  }
}

module.exports = new goodsService();
