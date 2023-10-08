const connection = require("../app/database");

class ManagerService {
  async loginService(account, password) {
    const statement = `SELECT * FROM manager WHERE account=? AND password=?;`;
    const results = await connection.execute(statement, [account, password]);
    return results[0];
  }
}

module.exports = new ManagerService();
