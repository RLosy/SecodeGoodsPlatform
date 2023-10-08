const connection = require("../app/database");

class uerService {
  async returnAllUsers() {
    const statement = `SELECT * from user;`;
    const results = await connection.execute(statement);

    return results[0];
  }

  async toRemoveUser(userId) {
    const statement = `DELETE FROM user WHERE id=?;`;
    const results = await connection.execute(statement, [userId]);
    return results[0];
  }

  async removeProduct(proId) {
    const statement = `DELETE FROM products WHERE id=?;`;
    const results = await connection.execute(statement, [proId]);

    return results[0];
  }

  async returnUserDatas(fieldName, fieldValue) {
    const statement = `SELECT * FROM user WHERE ${fieldName}=?;`;
    const statement1 = `SELECT * FROM products WHERE user_id=?;`;
    const results = await connection.execute(statement, [fieldValue]);
    // 加一层判断
    if (results[0].length === 0) {
      return {
        stateCode: 404,
      };
    }

    const { id } = results[0][0];

    const results1 = await connection.execute(statement1, [id]);

    return {
      stateCode: 200,
      user: results[0][0],
      products: results1[0],
    };
  }

  async returnTalks() {
    const statement = `SELECT id,content,createAt FROM message;`;
    const results = await connection.execute(statement, []);
    return results[0];
  }

  async toDelete(id) {
    const statement = `DELETE FROM message WHERE id=?;`;
    const results = await connection.execute(statement, [id]);
    return results[0];
  }

  async removeAdvert(id) {
    const statement = `DELETE FROM adverts WHERE id=?;`;
    const results = await connection.execute(statement, [id]);
    return results[0];
  }
}

module.exports = new uerService();
