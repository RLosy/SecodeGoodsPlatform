const connection = require("../app/database");

class uploadService {
  async checkIsGroup(group_tag) {
    const statement = `SELECT group_tag FROM products WHERE group_tag=?;`;
    const result = await connection.execute(statement, [group_tag]);
    return result[0];
  }

  async createGoods(uer_id, url, description, deal_way, mimetype, category) {
    const statement = `INSERT INTO products (user_id, url, description, deal_way,
                       mimetype, category)
                       VALUES (?, ?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [
      uer_id,
      url,
      description,
      deal_way, 
      mimetype,
      category,
    ]);

    return result[0];
  }
}

module.exports = new uploadService();
