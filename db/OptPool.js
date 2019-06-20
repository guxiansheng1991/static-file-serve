/**
 * 创建连接池类
 */

let mysql = require('mysql');
let config = require('../config');

// 连接池类
function OptPool() {
  this.flag = true;
  this.pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password
  });
  this.getPool = function () {
    if (this.flag) {
      // 监听connection事件
      this.pool.on('connection', function (connection) {
        connection.query('SET SESSION auto_increment_increment=1');
        this.flag = false;
      });
    }
    return this.pool;
  }
}

module.exports = OptPool;